import { PropType } from 'vue';
declare global {
    interface Window {
        doBuild?: Function;
    }
}
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
declare const _default: import("vue").DefineComponent<{
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    result: {
        type: PropType<OEmbedResponse>;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    html: {
        type: StringConstructor;
    };
    youTubeProps: {
        type: PropType<YouTubeProps>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    result: {
        type: PropType<OEmbedResponse>;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    html: {
        type: StringConstructor;
    };
    youTubeProps: {
        type: PropType<YouTubeProps>;
        default: () => {};
    };
}>>, {
    baseCssClass: string;
    type: string;
    containerProps: {
        [key: string]: string;
    };
    url: string;
    youTubeProps: YouTubeProps;
}, {}>;
export default _default;
