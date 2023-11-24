import { config, mount } from '@vue/test-utils';
import CoreList from '@/components/CoreList.vue';
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HTMLToJSON } from 'html-to-json-parser';
import listAsJson from './list-as-json.json';

describe('CoreList ->', () => {
  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);

  const mockItems = [
    {
      url: '/content/core-components-examples/library/page-authoring/title.html',
      lastModified: 1547642198741,
      description: 'Display a page heading',
      title: 'Title',
      path: '/content/core-components-examples/library/page-authoring/title',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/text.html',
      lastModified: 1548159422163,
      description: 'Display a rich text paragraph',
      title: 'Text',
      path: '/content/core-components-examples/library/page-authoring/text',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/image.html',
      lastModified: 1550255022224,
      description: 'Display an image asset',
      title: 'Image',
      path: '/content/core-components-examples/library/page-authoring/image',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/button.html',
      lastModified: 1547062227177,
      description: 'Display a button or anchor button',
      title: 'Button',
      path: '/content/core-components-examples/library/page-authoring/button',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/teaser.html',
      lastModified: 1575799718587,
      description: 'Link an image and text',
      title: 'Teaser',
      path: '/content/core-components-examples/library/page-authoring/teaser',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/download.html',
      lastModified: 1558992253683,
      description: 'Display an asset for download',
      title: 'Download',
      path: '/content/core-components-examples/library/page-authoring/download',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/list.html',
      lastModified: 1547642282466,
      description: 'Display a list of pages',
      title: 'List',
      path: '/content/core-components-examples/library/page-authoring/list',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/experience-fragment.html',
      lastModified: 1566294323252,
      description: 'Display an experience fragment',
      title: 'Experience Fragment',
      path: '/content/core-components-examples/library/page-authoring/experience-fragment',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/content-fragment.html',
      lastModified: 1547644839952,
      description: 'Display a content fragment asset',
      title: 'Content Fragment',
      path: '/content/core-components-examples/library/page-authoring/content-fragment',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/content-fragment-list.html',
      lastModified: 1554130037469,
      description: 'Display a list of content fragments',
      title: 'Content Fragment List',
      path: '/content/core-components-examples/library/page-authoring/content-fragment-list',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/embed.html',
      lastModified: 1567092519658,
      description: 'Embed a third-party widget',
      title: 'Embed',
      path: '/content/core-components-examples/library/page-authoring/embed',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/social-sharing.html',
      lastModified: 1547062206375,
      description: 'Add social sharing links',
      title: 'Social Sharing',
      path: '/content/core-components-examples/library/page-authoring/social-sharing',
    },
    {
      url: '/content/core-components-examples/library/page-authoring/separator.html',
      lastModified: 1547062195738,
      description: 'Display a section divider',
      title: 'Separator',
      path: '/content/core-components-examples/library/page-authoring/separator',
    },
  ];

  const propsData = {
    hidePlaceHolder: false,
    isInEditor: false,
    dateFormatString: 'YYYY-MM-DD',
    showDescription: true,
    showModificationDate: true,
    linkItems: true,
    routed: false,
    items: mockItems,
  };

  it('Renders without crashing', () => {
    const wrapper = mount(CoreList, {
      propsData,
    });
    expect(wrapper.element.classList.contains('cmp-list')).toBeTruthy();
  });

  it('Renders a basic list properly', async () => {
    const wrapper = mount(CoreList, {
      propsData,
    });

    const results = wrapper
      .html()
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();

    const resultsAsObject = await HTMLToJSON(results, false);
    expect(JSON.stringify(resultsAsObject)).toEqual(JSON.stringify(listAsJson));
  });
});
