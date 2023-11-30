import { mount } from '@vue/test-utils';
import CoreEmbed from '@/components/CoreEmbed.vue';
import { EmbedEditConfig } from '@/components/CoreEditConfigs';
import { MappedComponentProperties } from 'aem-vue-3-editable-components';

describe('CoreEmbed ->', () => {
  interface OEmbedResponse {
    processor?: string;
    options?: {
      provider?: string;
      response?: {
        height?: string;
        html?: string;
        title?: string;
        type?: string;
        url?: string;
        width?: string;
      };
    };
  }

  interface YouTubeProps {
    layout: string;
    youtubeAspectRatio: string;
    youtubeAutoPlay: boolean;
    youtubeHeight: string;
    youtubeLoop: boolean;
    youtubeMute: boolean;
    youtubePlaysInline: boolean;
    youtubeRel: boolean;
    youtubeVideoId: string;
    youtubeWidth: string;
  }

  interface EmbedComponentProperties extends MappedComponentProperties {
    result?: OEmbedResponse;
    html?: string;
    youTubeProps?: YouTubeProps;
    type: string;
    url?: string;
  }

  it('Has a proper isEmpty function', () => {
    const propsOne: EmbedComponentProperties = {
      cqPath: '',
      type: 'URL',
    };
    expect(EmbedEditConfig.isEmpty(propsOne)).toEqual(true);

    const propsTwo: EmbedComponentProperties = {
      cqPath: '',
      type: 'HTML',
    };
    expect(EmbedEditConfig.isEmpty(propsTwo)).toEqual(true);

    const propsThree: EmbedComponentProperties = {
      cqPath: '',
      type: 'EMBEDDABLE',
    };

    expect(EmbedEditConfig.isEmpty(propsThree)).toEqual(true);

    const propsFour: EmbedComponentProperties = {
      cqPath: '',
      type: 'URL',
      url: 'https://youtu.be/f7hbWvHKns0',
      result: {
        processor: 'oembed',
      },
    };

    expect(EmbedEditConfig.isEmpty(propsFour)).toEqual(false);

    const propsFive: EmbedComponentProperties = {
      cqPath: '',
      type: 'HTML',
      html: '<p>Sample HTML</p>',
    };

    expect(EmbedEditConfig.isEmpty(propsFive)).toEqual(false);

    const propsSix: EmbedComponentProperties = {
      cqPath: '',
      type: 'EMBEDDABLE',
      youTubeProps: {
        youtubeAspectRatio: '56',
        youtubeLoop: true,
        layout: 'fixed',
        youtubeHeight: '500',
        youtubeVideoId: 'f7hbWvHKns0',
        youtubeWidth: '500',
        youtubePlaysInline: false,
        youtubeAutoPlay: true,
        youtubeMute: true,
        youtubeRel: false,
      },
    };

    expect(EmbedEditConfig.isEmpty(propsSix)).toEqual(false);
  });

  it('Renders HTML Embed without crashing', () => {
    const wrapper = mount(CoreEmbed, {
      propsData: {
        type: 'HTML',
        html: '<p class="cmp-embed__testing-html">Sample HTML</p>',
      },
    });
    expect(wrapper.find('.cmp-embed__testing-html').exists()).toBeTruthy();
  });

  it('Renders Fixed Embeddable Embed without crashing', () => {
    const wrapper = mount(CoreEmbed, {
      propsData: {
        type: 'EMBEDDABLE',
        youTubeProps: {
          youtubeAspectRatio: '56',
          youtubeLoop: true,
          layout: 'fixed',
          youtubeHeight: '500',
          youtubeVideoId: 'f7hbWvHKns0',
          youtubeWidth: '500',
          youtubePlaysInline: false,
          youtubeAutoPlay: true,
          youtubeMute: false,
          youtubeRel: false,
        },
      },
    });
    expect(wrapper.find('.cmp-embed__embeddable-wrapper').exists()).toBeFalsy();

    const iFrameElement = wrapper.find('iFrame');
    expect(iFrameElement.attributes('src')).toEqual(
      'https://www.youtube.com/embed/f7hbWvHKns0?mute=0&autoplay=1&loop=1&playlist=f7hbWvHKns0&rel=0&playsinline=0',
    );
    expect(iFrameElement.attributes('width')).toEqual('500');
  });

  it('Renders Responsive Embeddable Embed without crashing', () => {
    const wrapper = mount(CoreEmbed, {
      propsData: {
        type: 'EMBEDDABLE',
        youTubeProps: {
          youtubeAspectRatio: '56',
          youtubeLoop: true,
          layout: 'responsive',
          youtubeVideoId: 'f7hbWvHKns0',
          youtubePlaysInline: false,
          youtubeAutoPlay: true,
          youtubeMute: true,
          youtubeRel: false,
        },
      },
    });
    expect(
      wrapper.find('.cmp-embed__embeddable-wrapper').exists(),
    ).toBeTruthy();

    const iFrameElement = wrapper.find('iFrame');
    expect(iFrameElement.attributes('src')).toEqual(
      'https://www.youtube.com/embed/f7hbWvHKns0?mute=1&autoplay=1&loop=1&playlist=f7hbWvHKns0&rel=0&playsinline=0',
    );
    expect(iFrameElement.attributes('width')).toEqual('100%');
  });

  it('Renders oEmbed Youtube URL Embed without crashing', () => {
    const wrapper = mount(CoreEmbed, {
      propsData: {
        type: 'URL',
        url: 'https://youtu.be/f7hbWvHKns0',
        result: {
          processor: 'oembed',
          options: {
            provider: 'YouTube',
            response: {
              type: 'video',
              title: 'GREENLAND - LAND OF ICE 4K',
              providerName: 'YouTube',
              providerUrl: 'https://www.youtube.com/',
              width: '200',
              height: '113',
              html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/f7hbWvHKns0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="GREENLAND - LAND OF ICE 4K"></iframe>',
            },
          },
        },
      },
    });

    const iFrameElement = wrapper.find('iFrame');
    expect(iFrameElement.exists()).toBeTruthy();
  });

  it('Renders Pinterest URL Embed without crashing', () => {
    const wrapper = mount(CoreEmbed, {
      propsData: {
        type: 'URL',
        url: 'https://www.pinterest.com/pin/146859637829777606/',
        routed: false,
        result: {
          processor: 'pinterest',
          options: { pinId: '146859637829777606' },
        },
      },
    });

    const anchorTag = wrapper.find('a');
    expect(anchorTag.exists()).toBeTruthy();
  });
});
