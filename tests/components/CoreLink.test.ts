import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import CoreLink from '@/components/CoreLink.vue';
import { config, mount } from '@vue/test-utils';

describe('CoreLink ->', () => {
  const router = createRouterMock();
  router.addRoute({ path: '/page1', component: { template: 'Page One' } });
  router.addRoute({ path: '/page2', component: { template: 'Page Two' } });

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Renders and routes properly', async () => {
    const wrapper = mount(CoreLink, {
      props: {
        href: '/page2',
      },
      slots: {
        default: 'Link to Page 2',
      },
    });

    expect(wrapper.router).toBe(router);

    await wrapper.trigger('click');

    expect(wrapper.router.push).toHaveBeenCalledTimes(1);
    expect(wrapper.router.push).toHaveBeenCalledWith({ path: '/page2' });
  });

  it('Only routes if the path exists within the routes object', async () => {
    const wrapper = mount(CoreLink, {
      props: {
        href: '/page3',
      },
      slots: {
        default: 'Link to Page 3',
      },
    });
    expect(wrapper.router).toBe(router);

    await wrapper.trigger('click');

    expect(wrapper.router.push).toHaveBeenCalledTimes(0);
  });

  it('Does not route if target is equal to "_blank".', async () => {
    const wrapper = mount(CoreLink, {
      props: {
        href: '/page2',
        target: '_blank',
      },
      slots: {
        default: 'Link to Page 2',
      },
    });
    expect(wrapper.router).toBe(router);

    await wrapper.trigger('click');

    expect(wrapper.router.push).toHaveBeenCalledTimes(0);
  });

  it('Renders a valid hyperlink', () => {
    const wrapper = mount(CoreLink, {
      props: {
        href: '/page2',
      },
      slots: {
        default: 'Link to Page 2',
      },
    });

    expect(wrapper.html()).toEqual(
      '<a class="cmp-link" href="/page2" target="_self">Link to Page 2</a>',
    );
  });
});
