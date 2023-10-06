import { PropType } from 'vue';
interface TitleLink {
    attributes?: {
        [key: string]: string;
    };
    url?: string;
    valid: boolean;
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
    isNested: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {
        type: PropType<TitleLink>;
        default: () => {
            valid: boolean;
            attributes: {};
        };
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
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
    isNested: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {
        type: PropType<TitleLink>;
        default: () => {
            valid: boolean;
            attributes: {};
        };
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    baseCssClass: string;
    type: string;
    link: TitleLink;
    text: string;
    containerProps: {
        [key: string]: string;
    };
    isNested: boolean;
}, {}>;
export default _default;
