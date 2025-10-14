type MediaDetails = {
    width: number;
    height: number;
    file: string;
    sizes?: {
        medium_large?: {
            source_url: string;
            width: number;
            height: number;
        };
        large?: {
            source_url: string;
            width: number;
            height: number;
        };
        medium?: {
            source_url: string;
            width: number;
            height: number;
        };
        full?: {
            source_url: string;
            width: number;
            height: number;
        };
    }
}

export type PostImage = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    media_details?: MediaDetails;
    source_url?: string; // Optional, original source URL
    title?: { rendered: string }; // Optional, title object
    alt_text?: string; // Optional, alt text  
};

export type Post = {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
    image?: PostImage;
    categories: number[];
    _embedded?: {
        "wp:featuredmedia"?: PostImage[];
    };
    tags?: string[]; // Uncomment if you use tags
};