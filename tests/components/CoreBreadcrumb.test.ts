import { config, mount } from '@vue/test-utils';
import CoreBreadcrumb from '@/components/CoreBreadcrumb.vue';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';

describe('CoreBreadcrumb ->', () => {
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

  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Renders without crashing', () => {
    const items: BreadcrumbItem[] = [];

    const wrapper = mount(CoreBreadcrumb, {
      propsData: {
        ariaLabel: 'Label',
        items,
      },
    });

    const breadCrumbList = wrapper.find('.cmp-breadcrumb__list');

    expect(breadCrumbList.exists()).toBeTruthy();

    if (breadCrumbList.element.textContent !== null) {
      expect(breadCrumbList.element.textContent.trim()).toEqual('');
    }
  });

  it('Renders breadcrumb items if provided', () => {
    const items = [
      {
        active: false,
        link: { url: '/content/some/url.html' },
        title: 'Item1',
      },
      {
        active: false,
        link: { url: '/content/some/url.html' },
        title: 'Item2',
      },
      {
        active: true,
        link: { url: '/content/some/url.html' },
        title: 'Item3',
      },
    ];

    const wrapper = mount(CoreBreadcrumb, {
      propsData: {
        ariaLabel: 'Label',
        items,
      },
    });

    expect(wrapper.element.querySelectorAll('li')).toHaveLength(3);

    expect(wrapper.find('.cmp-breadcrumb__item--active').text()).toEqual(
      'Item3',
    );
  });
});
