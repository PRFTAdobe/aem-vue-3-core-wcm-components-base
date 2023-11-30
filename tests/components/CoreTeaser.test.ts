import { config, mount } from '@vue/test-utils';
import { TeaserEditConfig } from '@/components/CoreEditConfigs';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import {
  ComponentMapping,
  MappedComponentProperties,
} from 'aem-vue-3-editable-components';
import CoreTeaser from '@/components/CoreTeaser.vue';
import CoreButton from '@/components/CoreButton.vue';

describe('CoreTeaser ->', () => {
  interface TeaserComponentProperties extends MappedComponentProperties {
    imagePath?: string;
    description?: string;
    pretitle?: string;
    title?: string;
    actions?: [];
  }

  let ComponentMappingSpy: jest.SpyInstance;

  const defaultProps = {
    cqType: 'stanley/components/teaser',
    imageAlt: 'snowy mountains',
    imagePath: '/some/image.png',
    description: '<p>Paragraph</p>',
    actions: [
      {
        title: 'Link1',
        link: {
          url: '/content/link1',
          attributes: {
            target: '_blank',
          },
          valid: true,
        },
      },
      {
        title: 'Link2',
        link: {
          url: '/content/link2',
          attributes: {
            target: '_self',
          },
          valid: true,
        },
      },
    ],
    actionsEnabled: true,
    link: {
      attributes: {
        target: '_blank',
      },
      url: '/some/url.html',
      valid: true,
    },
    title: 'Some title',
    pretitle: 'Custom pretitle',
    titleType: 'h2',
  };

  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    ComponentMappingSpy.mockReturnValue(CoreButton);
  });

  afterEach(() => {
    ComponentMappingSpy.mockRestore();
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  it('Has a proper isEmpty function', () => {
    const propsOne: TeaserComponentProperties = {
      cqPath: '',
      imagePath: '/content/dam/image.jpg',
    };

    expect(TeaserEditConfig.isEmpty(propsOne)).toEqual(false);

    const propsTwo: TeaserComponentProperties = {
      cqPath: '',
      imagePath: ' ',
      title: ' ',
    };

    expect(TeaserEditConfig.isEmpty(propsTwo)).toEqual(true);

    const propsThree: TeaserComponentProperties = {
      cqPath: '',
      pretitle: 'preTitle',
      title: 'teaser',
    };

    expect(TeaserEditConfig.isEmpty(propsThree)).toEqual(false);
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreTeaser, {
      propsData: defaultProps,
    });
    expect(wrapper.find('.cmp-teaser__content').exists()).toBeTruthy();
    expect(wrapper.find('.cmp-teaser__action-container').exists()).toBeTruthy();
    expect(wrapper.find('.cmp-teaser__image').exists()).toBeTruthy();
  });

  it('Renders as expected', () => {
    const element = mount(CoreTeaser, {
      propsData: defaultProps,
    });

    // clickable wrapper for teaser
    const clickableTeaser = element.find('.cmp-teaser > a.cmp-teaser__link');
    expect(clickableTeaser.exists()).toBeTruthy();
    expect(clickableTeaser.attributes('href')).toEqual(defaultProps.link.url);

    // content
    const content = element.find('.cmp-teaser__content');
    expect(content.exists()).toBeTruthy();

    // description
    const description = content.find('.cmp-teaser__description');
    expect(description.exists()).toBeTruthy();
    expect(description.element.outerHTML.replace(/"/g, "'")).toEqual(
      `<div class='cmp-teaser__description'>${defaultProps.description}</div>`,
    );

    // pretitle
    const pretitle = content.find('.cmp-teaser__pretitle');
    expect(pretitle.exists()).toBeTruthy();
    expect(pretitle.element.outerHTML.replace(/"/g, "'")).toEqual(
      `<p class='cmp-teaser__pretitle'>${defaultProps.pretitle}</p>`,
    );

    // title
    const title = content.find('.cmp-teaser__title');
    expect(title.exists()).toBeTruthy();
    const expectedHtml = `<div class='cmp-teaser__title'><${defaultProps.titleType} class='cmp-teaser__title-text'><a class='cmp-teaser__title-link cmp-link' href='${defaultProps.link.url}' target='_blank'>${defaultProps.title}</a></${defaultProps.titleType}></div>`;
    expect(title.element.outerHTML.replace(/"/g, "'")).toEqual(expectedHtml);

    // image
    const image = element.find('.cmp-teaser__image');
    expect(image.exists()).toBeTruthy();

    const img = image.find('img');
    expect(img.attributes('src')).toEqual(defaultProps.imagePath);
    expect(img.attributes('alt')).toEqual(defaultProps.imageAlt);

    // actions
    const actionContainer = element.find('.cmp-teaser__action-container');
    expect(actionContainer.exists()).toBeTruthy();

    const actions = actionContainer.element.querySelectorAll(
      'a.cmp-teaser__action-link',
    );
    expect(actions).toHaveLength(2);
  });
});
