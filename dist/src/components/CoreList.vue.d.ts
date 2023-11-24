import { PropType } from 'vue';
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
        type: PropType<ListItem[]>;
    };
    dateFormatString: {
        type: StringConstructor;
    };
    showDescription: {
        type: BooleanConstructor;
    };
    showModificationDate: {
        type: BooleanConstructor;
    };
    linkItems: {
        type: BooleanConstructor;
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
        type: PropType<ListItem[]>;
    };
    dateFormatString: {
        type: StringConstructor;
    };
    showDescription: {
        type: BooleanConstructor;
    };
    showModificationDate: {
        type: BooleanConstructor;
    };
    linkItems: {
        type: BooleanConstructor;
    };
}>>, {
    baseCssClass: string;
    aemNoDecoration: boolean;
    containerProps: {
        [key: string]: string;
    };
    showDescription: boolean;
    showModificationDate: boolean;
    linkItems: boolean;
}, {}>;
export default _default;
