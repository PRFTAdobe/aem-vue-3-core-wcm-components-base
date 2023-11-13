import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import { config, mount } from '@vue/test-utils';
import CoreDownload from '@/components/CoreDownload.vue';
import { ComponentMapping } from 'aem-vue-3-editable-components';
import { userEvent } from '@testing-library/user-event';
import CoreButton from '@/components/CoreButton.vue';

describe('CoreDownload ->', () => {
  const router = createRouterMock();
  let ComponentMappingSpy: jest.SpyInstance;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  let captured = false;
  const PROPS_DATA = {
    actionText: 'Download now!!!',
    description:
      '<p>Asset uploaded directly from a local file system</p>\\r\\n',
    extension: 'jpg',
    filename: 'lava-into-ocean.jpg',
    format: 'image/jpeg',
    size: '81 KB',
    title: 'Uploaded Asset',
    titleType: 'h2',
    handleOnClick: (event: Event) => {
      event.preventDefault();
      captured = true;
    },
    url: '/content/core-components-examples/library/page-authoring/download/jcr:content/root/responsivegrid/demo_68071479/component/download/file.coredownload.jpeg/lava-into-ocean.jpg',
  };

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

  it('Renders without crashing', () => {
    const wrapper = mount(CoreDownload, {
      propsData: PROPS_DATA,
      global: {
        provide: {
          componentMapping: new ComponentMapping(),
          isInEditor: false,
        },
      },
    });

    expect(wrapper.element.classList.contains('cmp-download')).toBeTruthy();
  });

  it('Renders out properly', async () => {
    const wrapper = mount(CoreDownload, {
      propsData: PROPS_DATA,
      global: {
        provide: {
          componentMapping: new ComponentMapping(),
          isInEditor: false,
        },
      },
    });

    const properties = wrapper.element.querySelectorAll(
      '.cmp-download__property',
    );
    expect(properties).toHaveLength(3);

    const button = wrapper.element.querySelector('.cmp-button');
    expect(button).toBeDefined();

    await userEvent.click(button as HTMLButtonElement);
    expect(captured).toEqual(true);
  });
});
