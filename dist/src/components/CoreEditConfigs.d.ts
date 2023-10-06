interface OEmbedResponse {
    processor?: string;
    options?: {
        provider?: string;
        response?: {
            height?: string;
            html?: string;
            title?: string;
            type?: string;
            url?: string;
            width?: string;
        };
    };
}
interface YouTubeProps {
    layout: string;
    youtubeAspectRatio: string;
    youtubeAutoPlay: boolean;
    youtubeHeight: string;
    youtubeLoop: boolean;
    youtubeMute: boolean;
    youtubePlaysInline: boolean;
    youtubeRel: boolean;
    youtubeVideoId: string;
    youtubeWidth: string;
}
export declare const BreadcrumbEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        items: string | string[] | null;
    }): boolean;
};
export declare const EmbedEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        result?: OEmbedResponse;
        html?: string;
        youTubeProps?: YouTubeProps;
        type: string;
        url?: string;
    }): boolean;
};
export declare const ImageEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        src: string;
    }): boolean;
};
export declare const LanguageNavigationEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        items: string[] | null;
    }): boolean;
};
export declare const NavigationEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        items: string[] | null;
    }): boolean;
};
export declare const TeaserEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        imagePath?: string;
        description?: string;
        pretitle?: string;
        title?: string;
        actions?: [
        ];
    }): boolean;
};
export declare const TitleEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        text: string;
    }): boolean;
};
export declare const TextEditConfig: {
    emptyLabel: string;
    isEmpty(props: {
        text: string;
    }): boolean;
};
export {};
