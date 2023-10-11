import { PropType } from 'vue';
interface BreadcrumbLink {
    valid: boolean;
    url: string;
    attributes?: object;
}
interface BreadcrumbItem {
    active: boolean;
    link: BreadcrumbLink;
    navigable: boolean;
    title: string;
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
    id: {
        type: StringConstructor;
    };
    ariaLabel: {
        type: StringConstructor;
    };
    items: {
        type: PropType<BreadcrumbItem[]>;
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
    id: {
        type: StringConstructor;
    };
    ariaLabel: {
        type: StringConstructor;
    };
    items: {
        type: PropType<BreadcrumbItem[]>;
    };
}>>, {
    baseCssClass: string;
    aemNoDecoration: boolean;
    containerProps: {
        [key: string]: string;
    };
}, {}>;
export default _default;
