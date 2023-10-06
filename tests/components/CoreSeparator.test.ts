import { mount } from '@vue/test-utils';
import CoreSeparator from '@/components/CoreSeparator.vue';

describe('CoreSeparator ->', () => {
  it('Renders without crashing', () => {
    const wrapper = mount(CoreSeparator);
    expect(
      wrapper.find('.cmp-separator__horizontal-rule').exists(),
    ).toBeTruthy();
  });

  it('Renders as expected', () => {
    const wrapper = mount(CoreSeparator);

    const html =
      '<div class="cmp-separator"><hr class="cmp-separator__horizontal-rule"></div>';
    expect(wrapper.element.outerHTML).toEqual(html);
  });
});
