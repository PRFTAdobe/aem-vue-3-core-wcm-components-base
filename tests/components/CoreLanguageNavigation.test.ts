import { config, mount } from '@vue/test-utils';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import CoreLanguageNavigation from '@/components/CoreLanguageNavigation.vue';
import items from './CoreLanguageNavigation.json';

describe('CoreLanguageNavigation ->', () => {
  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);
  it('Renders without crashing', () => {
    const wrapper = mount(CoreLanguageNavigation, {
      propsData: {
        items,
      },
    });
    expect(
      wrapper.findAll('.cmp-languagenavigation__item--level-0').length,
    ).toEqual(3);
  });

  it('Renders a basic navigation properly', () => {
    const wrapper = mount(CoreLanguageNavigation, {
      propsData: {
        items,
      },
    });
    expect(wrapper.findAll('nav').length).toEqual(1);
  });

  it('Renders all children', () => {
    const wrapper = mount(CoreLanguageNavigation, {
      propsData: {
        items,
      },
    });
    expect(
      wrapper.findAll('.cmp-languagenavigation__item--level-1').length,
    ).toEqual(4);
  });
});
