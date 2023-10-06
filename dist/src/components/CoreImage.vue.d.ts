import { PropType } from 'vue';
interface ImageLink {
    valid: boolean;
    url: string;
    attributes?: object;
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
    alt: {
        type: StringConstructor;
        required: true;
    };
    displayPopupTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageLink: {
        type: PropType<ImageLink>;
        default: () => {
            valid: boolean;
            attributes: {};
        };
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    smartCropRendition: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    width: {
        type: StringConstructor;
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
    alt: {
        type: StringConstructor;
        required: true;
    };
    displayPopupTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageLink: {
        type: PropType<ImageLink>;
        default: () => {
            valid: boolean;
            attributes: {};
        };
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    smartCropRendition: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    width: {
        type: StringConstructor;
    };
}>>, {
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    displayPopupTitle: boolean;
    imageLink: ImageLink;
}, {}>;
export default _default;
