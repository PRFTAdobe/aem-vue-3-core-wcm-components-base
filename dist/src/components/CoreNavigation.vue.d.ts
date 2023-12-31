import { PropType } from 'vue';
interface LinkInterface {
    valid: boolean;
    url: string;
}
interface CoreNavigationItemInterface {
    level: number;
    active: boolean;
    title: string;
    link: LinkInterface;
    lastModified: number;
    navigable?: boolean;
    path: string;
    children?: CoreNavigationItemInterface[];
}
declare const _default: import("vue").DefineComponent<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    cssClassNames: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    items: {
        type: PropType<CoreNavigationItemInterface[]>;
        default: () => never[];
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    cssClassNames: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    items: {
        type: PropType<CoreNavigationItemInterface[]>;
        default: () => never[];
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    baseCssClass: string;
    items: CoreNavigationItemInterface[];
    aemNoDecoration: boolean;
    containerProps: {
        [key: string]: string;
    };
    accessibilityLabel: string;
}, {}>;
export default _default;
