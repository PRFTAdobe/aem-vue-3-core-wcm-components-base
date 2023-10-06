import { PropType } from 'vue';
interface LinkInterface {
    valid: boolean;
    url: string;
}
interface CoreLanguageNavigationItemInterface {
    level: number;
    active: boolean;
    title: string;
    link: LinkInterface;
    lastModified: number;
    path: string;
    locale: string;
    country: string;
    language: string;
    children?: CoreLanguageNavigationItemInterface[];
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
    items: {
        type: PropType<CoreLanguageNavigationItemInterface[]>;
        default: () => never[];
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
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
    items: {
        type: PropType<CoreLanguageNavigationItemInterface[]>;
        default: () => never[];
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    baseCssClass: string;
    items: CoreLanguageNavigationItemInterface[];
    containerProps: {
        [key: string]: string;
    };
    accessibilityLabel: string;
}, {}>;
export default _default;
