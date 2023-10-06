import { config, mount } from '@vue/test-utils';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import CoreTitle from '@/components/CoreTitle.vue';
import { TitleEditConfig } from '@/components/CoreEditConfigs';

describe('CoreTitle ->', () => {
  const router = createRouterMock();
  router.addRoute({ path: '/page1', component: { template: 'Page One' } });

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Has a proper isEmpty function', () => {
    const propsOne = {
      text: 'some title',
      linkDisabled: false,
    };

    expect(TitleEditConfig.isEmpty(propsOne)).toEqual(false);

    const propsTwo = {
      text: '',
      linkDisabled: false,
    };

    expect(TitleEditConfig.isEmpty(propsTwo)).toEqual(true);
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        linkDisabled: false,
      },
    });
    expect(wrapper.find('.cmp-title__text').exists()).toBeTruthy();
  });

  it('Renders without link', () => {
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        linkDisabled: true,
      },
    });

    const anchor = wrapper.find('a');
    expect(anchor.exists()).toBeFalsy();

    const heading = wrapper.find('h3');
    expect(heading.exists()).toBeTruthy();
  });

  it('Renders a custom type without link', () => {
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        linkDisabled: true,
        link: {
          valid: true,
          attributes: {
            target: '_blank',
          },
          url: 'https://adobe.com',
        },
        type: 'h2',
      },
    });

    const anchor = wrapper.find('a');
    expect(anchor.exists()).toBeFalsy();

    const heading = wrapper.find('h2');
    expect(heading.exists()).toBeTruthy();
  });

  it('Renders with a link', () => {
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        linkDisabled: false,
        link: {
          valid: true,
          attributes: {
            target: '_blank',
          },
          url: 'https://adobe.com',
        },
      },
    });

    const anchor = wrapper.find('a');

    expect(anchor.exists()).toBeTruthy();

    const anchorElement = wrapper.find('a').element;

    expect(anchorElement.getAttribute('href')).toEqual('https://adobe.com');
  });

  it('Renders a custom type with a link', () => {
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        type: 'H4',
        linkDisabled: false,
        link: {
          valid: true,
          attributes: {
            target: '_blank',
          },
          url: 'https://adobe.com',
        },
      },
    });

    const heading = wrapper.find('h4');
    expect(heading.exists()).toBeTruthy();

    const anchor = wrapper.find('a');
    expect(anchor.exists()).toBeTruthy();

    const anchorElement = wrapper.find('a').element;
    expect(anchorElement.getAttribute('href')).toEqual('https://adobe.com');
  });

  it('Renders with a link pointing to the current page', async () => {
    await router.push('/page1');
    const wrapper = mount(CoreTitle, {
      propsData: {
        text: 'some title',
        linkDisabled: false,
      },
    });

    const anchor = wrapper.find('a');

    expect(anchor.exists()).toBeTruthy();

    const anchorElement = wrapper.find('a').element;

    expect(anchorElement.getAttribute('href')).toEqual('/page1');
  });
});
