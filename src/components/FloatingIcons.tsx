import React, { useEffect, useRef, useState } from "react";

const ICONS = [
    "/images/Icons/Engineering.png",
    "/images/Icons/Math.png",
    "/images/Icons/Play.png",
    "/images/Icons/Science.png",
    "/images/Icons/Smile.png",
    "/images/Icons/Tech.png",
];

const ICON_COUNT = 12;
const FADE_IN_DURATION = 1200;
const FADE_OUT_DURATION = 1200;
const FLOAT_DURATION = 5000;
const ICON_MIN_SIZE = 40;
const ICON_MAX_SIZE = 80;

type FloatingIcon = {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    image: HTMLImageElement;
    rotation: number;
    rotationSpeed: number;
    appearTime: number;
    floatOffset: number;
};

function getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function preloadImages(srcs: string[]): Promise<HTMLImageElement[]> {
    return Promise.all(
        srcs.map(
            (src) =>
                new Promise<HTMLImageElement>((resolve) => {
                    const img = new window.Image();
                    img.src = src;
                    img.onload = () => resolve(img);
                })
        )
    );
}

const FloatingIcons: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ready, setReady] = useState(false);
    const iconsRef = useRef<FloatingIcon[]>([]);
    const animationRef = useRef<number | null>(null);

    // Use parent element's size instead of window size
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        dpr: 1,
    });

    // Observe parent size
    useEffect(() => {
        const update = () => {
            const parent = canvasRef.current?.parentElement;
            if (parent) {
                const rect = parent.getBoundingClientRect();
                setDimensions({
                    width: rect.width,
                    height: rect.height,
                    dpr: window.devicePixelRatio || 1,
                });
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Preload images and initialize icons
    useEffect(() => {
        let running = true;
        preloadImages(ICONS).then((images) => {
            if (!running) return;
            iconsRef.current = Array.from({ length: ICON_COUNT }).map(() => {
                const img = images[Math.floor(Math.random() * images.length)];
                const size = getRandom(ICON_MIN_SIZE, ICON_MAX_SIZE);
                const x = getRandom(size, dimensions.width - size);
                const y = getRandom(size, dimensions.height - size);
                return {
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size,
                    image: img,
                    rotation: getRandom(0, 360),
                    rotationSpeed: getRandom(0.08, 0.25) * (Math.random() > 0.5 ? 1 : -1),
                    appearTime: performance.now() + getRandom(0, FLOAT_DURATION / 2),
                    floatOffset: getRandom(0, 10000),
                };
            });
            setReady(true);
        });
        return () => {
            running = false;
        };
    }, [dimensions.width, dimensions.height]);

    // Animation loop
    useEffect(() => {
        if (!ready) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size for high-DPI screens
        const { width, height, dpr } = dimensions;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        ctx.scale(dpr, dpr);

        const preloadedImages = iconsRef.current.map(i => i.image);

        function animate(now: number) {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            iconsRef.current.forEach((icon) => {
                const elapsed = now - icon.appearTime;
                let opacity = 1;
                let scale = 1;

                // Fade in
                if (elapsed < FADE_IN_DURATION) {
                    opacity = Math.max(0, elapsed / FADE_IN_DURATION);
                    scale = 0.7 + 0.3 * opacity;
                }
                // Fade out
                else if (elapsed > FLOAT_DURATION - FADE_OUT_DURATION) {
                    const fade = 1 - (elapsed - (FLOAT_DURATION - FADE_OUT_DURATION)) / FADE_OUT_DURATION;
                    opacity = Math.max(0, fade);
                    scale = 1 + 0.2 * (1 - fade);
                }

                // Floating movement
                const floatX =
                    icon.baseX +
                    Math.sin((now + icon.floatOffset) / 1200 + icon.baseX) * 18 +
                    Math.cos((now + icon.floatOffset) / 1700 + icon.baseY) * 10;
                const floatY =
                    icon.baseY +
                    Math.cos((now + icon.floatOffset) / 1400 + icon.baseY) * 18 +
                    Math.sin((now + icon.floatOffset) / 2100 + icon.baseX) * 10;

                // Spin
                icon.rotation += icon.rotationSpeed;

                // Draw as perfect circle using clipping path
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.translate(floatX, floatY);
                ctx.rotate((icon.rotation * Math.PI) / 180);

                const drawSize = icon.size * scale;
                ctx.beginPath();
                ctx.arc(0, 0, drawSize / 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();

                // Always draw as a perfect circle, even if the parent is not square
                ctx.drawImage(
                    icon.image,
                    0, 0, icon.image.width, icon.image.height,
                    -drawSize / 2, -drawSize / 2, drawSize, drawSize
                );
                ctx.restore();

                // Reset icon if finished
                if (elapsed > FLOAT_DURATION) {
                    const size = getRandom(ICON_MIN_SIZE, ICON_MAX_SIZE);
                    icon.size = size;
                    icon.baseX = getRandom(size, width - size);
                    icon.baseY = getRandom(size, height - size);
                    icon.x = icon.baseX;
                    icon.y = icon.baseY;
                    icon.rotation = getRandom(0, 360);
                    icon.rotationSpeed = getRandom(0.08, 0.25) * (Math.random() > 0.5 ? 1 : -1);

                    if (preloadedImages.length > 0) {
                        let newImage: HTMLImageElement;
                        do {
                            newImage = preloadedImages[Math.floor(Math.random() * preloadedImages.length)];
                        } while (newImage === icon.image && preloadedImages.length > 1);
                        icon.image = newImage;
                    }

                    icon.appearTime = now;
                    icon.floatOffset = getRandom(0, 10000);
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [ready, dimensions.width, dimensions.height, dimensions.dpr]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                background: "transparent",
                opacity: 0.3,
                display: "block"
            }}
        />
    );
};

export default FloatingIcons;