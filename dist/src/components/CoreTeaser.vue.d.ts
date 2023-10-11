import { PropType } from 'vue';
interface TeaserLink {
    attributes: {
        [key: string]: string;
    };
    url: string;
    valid: boolean;
}
interface TeaserAction {
    title: string;
    link: TeaserLink;
    id: unknown;
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
    actions: {
        type: PropType<TeaserAction[]>;
    };
    description: {
        type: StringConstructor;
    };
    imageAlt: {
        type: StringConstructor;
        default: string;
    };
    imagePath: {
        type: StringConstructor;
    };
    link: {
        type: PropType<TeaserLink>;
    };
    pretitle: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    titleType: {
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
    id: {
        type: StringConstructor;
    };
    actions: {
        type: PropType<TeaserAction[]>;
    };
    description: {
        type: StringConstructor;
    };
    imageAlt: {
        type: StringConstructor;
        default: string;
    };
    imagePath: {
        type: StringConstructor;
    };
    link: {
        type: PropType<TeaserLink>;
    };
    pretitle: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    titleType: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    baseCssClass: string;
    aemNoDecoration: boolean;
    containerProps: {
        [key: string]: string;
    };
    imageAlt: string;
    titleType: string;
}, {}>;
export default _default;
