import { config, mount } from '@vue/test-utils';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import CoreNavigation from '@/components/CoreNavigation.vue';
import items from './CoreNavigation.json';

describe('CoreNavigation ->', () => {
  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);
  it('Renders without crashing', () => {
    const wrapper = mount(CoreNavigation, {
      propsData: {
        items,
      },
    });
    expect(wrapper.findAll('.cmp-navigation__item--level-0').length).toEqual(1);
  });

  it('Renders a basic navigation properly', () => {
    const wrapper = mount(CoreNavigation, {
      propsData: {
        items,
      },
    });
    expect(wrapper.findAll('nav').length).toEqual(1);
  });

  it('Renders all grandchildren', () => {
    const wrapper = mount(CoreNavigation, {
      propsData: {
        items,
      },
    });
    expect(wrapper.findAll('.cmp-navigation__item--level-2').length).toEqual(
      25,
    );
  });
});
