import { config, mount } from '@vue/test-utils';
import CoreText from '@/components/CoreText.vue';
import { TextEditConfig } from '@/components/CoreEditConfigs';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';

describe('CoreText ->', () => {
  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Has a proper isEmpty function', () => {
    const props = {
      text: 'test',
      richText: true,
    };

    expect(TextEditConfig?.isEmpty(props)).toBe(false);

    const propsEmpty = {
      richText: true,
      text: '',
      routed: false,
    };

    expect(TextEditConfig?.isEmpty(propsEmpty)).toBe(true);
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreText, {
      propsData: {
        text: 'someText',
      },
    });

    expect(wrapper.find('.cmp-text__paragraph').exists()).toBeTruthy();
  });

  it('Renders plain text', () => {
    const wrapper = mount(CoreText, {
      propsData: {
        text: 'plain text',
      },
    });

    const p = wrapper.find('.cmp-text__paragraph');
    expect(p.text()).toEqual('plain text');
  });

  it('Renders rich text', () => {
    const richText = '<div class="myclass">rich text</div>';
    const expectedHtml =
      '<div id="testId" class="cmp-text" data-rte-editelement=""><div class="myclass">rich text</div></div>';
    const wrapper = mount(CoreText, {
      propsData: {
        id: 'testId',
        richText: true,
        text: richText,
      },
    });

    const actualHtml = wrapper.element.outerHTML;
    expect(actualHtml).toEqual(expectedHtml);
  });
});
