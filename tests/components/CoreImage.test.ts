/* eslint-disable class-methods-use-this */
import { config, mount } from '@vue/test-utils';
import { ImageEditConfig } from '@/components/CoreEditConfigs';
import CoreImage from '@/components/CoreImage.vue';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import { MappedComponentProperties } from 'aem-vue-3-editable-components';

// @ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('CoreImage ->', () => {
  interface ImageComponentProperties extends MappedComponentProperties {
    alt?: string;
    src: string;
  }

  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Has a proper isEmpty function', () => {
    const propsOne: ImageComponentProperties = {
      cqPath: '',
      src: '/content/dam/image.jpg',
      alt: 'Some Image',
    };

    expect(ImageEditConfig.isEmpty(propsOne)).toEqual(false);

    const propsTwo: ImageComponentProperties = {
      cqPath: '',
      src: ' ',
      alt: 'Some Image',
    };

    expect(ImageEditConfig.isEmpty(propsTwo)).toEqual(true);
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreImage, {
      propsData: {
        src: '/content/dam/image.jpg',
        alt: 'Some Image',
      },
    });
    expect(wrapper.find('[alt="Some Image"]').exists()).toBeTruthy();
  });

  it('Renders with a cq-dd-image in edit mode', () => {
    const wrapper = mount(CoreImage, {
      propsData: {
        src: '/content/dam/image.jpg',
        alt: 'Some Image',
      },
      global: {
        provide: {
          isInEditor: true,
        },
      },
    });

    expect(wrapper.find('.cq-dd-image').exists()).toBeTruthy();
  });

  it('Renders without link', () => {
    const wrapper = mount(CoreImage, {
      propsData: {
        src: '/content/dam/image.jpg',
        alt: 'Some Image',
      },
    });

    const anchor = wrapper.find('a');

    expect(anchor.exists()).toBeFalsy();

    const title = wrapper.find('.cmp-image__title');

    expect(title.exists()).toBeFalsy();

    const image = wrapper.find('img').element;

    expect(image.getAttribute('alt')).toEqual('Some Image');
    expect(image.getAttribute('src')).toEqual('/content/dam/image.jpg');
  });

  it('Renders with a link', () => {
    const wrapper = mount(CoreImage, {
      propsData: {
        src: '/content/dam/image.jpg',
        alt: 'Some Image',
        imageLink: {
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

  it('Renders with title', () => {
    const wrapper = mount(CoreImage, {
      propsData: {
        src: '/content/dam/image.jpg',
        alt: 'Some Image',
        title: 'Awesome Title!',
      },
    });

    const title = wrapper.find('.cmp-image__title');

    expect(title.exists()).toBeTruthy();
    expect(title.text()).toEqual('Awesome Title!');
  });
});
