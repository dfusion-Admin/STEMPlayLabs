import React, { useEffect } from "react";

interface CountUpNumberProps {
    value: number;
    unit?: string;
    onEndCount?: () => void;
}

export const CountUpNumber = ({ value, unit, onEndCount }: CountUpNumberProps) => {
    const [displayValue, setDisplayValue] = React.useState(0);

    useEffect(() => {
        setDisplayValue(0);
        if (value <= 0) {
            if (onEndCount) onEndCount();
            return;
        }

        let start = 0;
        const timer = setInterval(() => {
            start += 1;
            setDisplayValue(start);
            if (start >= value) {
                clearInterval(timer);
                if (onEndCount) onEndCount();
            }
        }, 50);

        return () => clearInterval(timer);
    }, [onEndCount, value]);

    return (
        <h3 className="text-3xl sm:text-4xl font-bold text-white font-kallisto-heavy">
            {displayValue}{unit}
        </h3>
    );
}