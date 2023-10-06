declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
        required: true;
    };
    navigable: {
        type: BooleanConstructor;
        default: boolean;
    };
    target: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
        required: true;
    };
    navigable: {
        type: BooleanConstructor;
        default: boolean;
    };
    target: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
}>>, {
    baseCssClass: string;
    navigable: boolean;
    target: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
