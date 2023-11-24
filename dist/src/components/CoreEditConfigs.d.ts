import { EditConfig, MappedComponentProperties } from 'aem-vue-3-editable-components';
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
interface BreadcrumbComponentProperties extends MappedComponentProperties {
    items: string | string[] | null;
}
interface ListItem {
    index?: number;
    url?: string;
    lastModified?: number;
    lastModifiedFormatted?: string;
    description?: string;
    path: string;
    title: string;
    showModificationDate?: boolean;
}
export declare const BreadcrumbEditConfig: EditConfig<BreadcrumbComponentProperties>;
interface ButtonComponentProperties extends MappedComponentProperties {
    text: string | null;
}
export declare const ButtonEditConfig: EditConfig<ButtonComponentProperties>;
interface DownloadComponentProperties extends MappedComponentProperties {
    url: string | undefined | null;
    handleOnClick: Function | undefined | null;
}
export declare const DownloadEditConfig: EditConfig<DownloadComponentProperties>;
interface EmbedComponentProperties extends MappedComponentProperties {
    result?: OEmbedResponse;
    html?: string;
    youTubeProps?: YouTubeProps;
    type: string;
    url?: string;
}
export declare const EmbedEditConfig: EditConfig<EmbedComponentProperties>;
interface ImageComponentProperties extends MappedComponentProperties {
    src: string;
}
export declare const ImageEditConfig: EditConfig<ImageComponentProperties>;
interface LanguageNavigationComponentProperties extends MappedComponentProperties {
    items: string[] | null;
}
export declare const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties>;
interface ListComponentProperties extends MappedComponentProperties {
    items: ListItem[] | null;
}
export declare const ListEditConfig: EditConfig<ListComponentProperties>;
interface NavigationComponentProperties extends MappedComponentProperties {
    items: string[] | null;
}
export declare const NavigationEditConfig: EditConfig<NavigationComponentProperties>;
interface TeaserComponentProperties extends MappedComponentProperties {
    imagePath?: string;
    description?: string;
    pretitle?: string;
    title?: string;
    actions?: [];
}
export declare const TeaserEditConfig: EditConfig<TeaserComponentProperties>;
interface TitleComponentProperties extends MappedComponentProperties {
    text: string;
}
export declare const TitleEditConfig: EditConfig<TitleComponentProperties>;
interface TextComponentProperties extends MappedComponentProperties {
    text: string;
}
export declare const TextEditConfig: EditConfig<TextComponentProperties>;
export {};
