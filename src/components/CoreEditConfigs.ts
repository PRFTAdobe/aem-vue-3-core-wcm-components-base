import {
  EditConfig,
  MappedComponentProperties,
} from 'aem-vue-3-editable-components';

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

interface BreadcrumbComponentProperties extends MappedComponentProperties {
  items: string | string[] | null;
}

interface ListItem {
  index?: number;
  url?: string;
  lastModified?: number;
  lastModifiedFormatted?: string;
  description?: string;
  path: string;
  title: string;
  showModificationDate?: boolean;
}

export const BreadcrumbEditConfig: EditConfig<BreadcrumbComponentProperties> = {
  emptyLabel: 'Breadcrumb',
  isEmpty(props: { items: string | string[] | null }) {
    return props.items == null || props.items.length === 0;
  },
};

interface ButtonComponentProperties extends MappedComponentProperties {
  text: string | null;
}

export const ButtonEditConfig: EditConfig<ButtonComponentProperties> = {
  emptyLabel: 'Button',
  isEmpty(props: { text: string | null }) {
    return props.text == null || props.text.length === 0;
  },
};

interface DownloadComponentProperties extends MappedComponentProperties {
  url: string | undefined | null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleOnClick: Function | undefined | null;
}

export const DownloadEditConfig: EditConfig<DownloadComponentProperties> = {
  emptyLabel: 'Download',
  isEmpty(props: {
    url: string | undefined | null;
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleOnClick: Function | undefined | null;
  }) {
    return (
      (typeof props.url === 'undefined' ||
        props.url === null ||
        props.url.length === 0) &&
      (typeof props.handleOnClick === 'undefined' ||
        props.handleOnClick === null)
    );
  },
};

interface EmbedComponentProperties extends MappedComponentProperties {
  result?: OEmbedResponse;
  html?: string;
  youTubeProps?: YouTubeProps;
  type: string;
  url?: string;
}

export const EmbedEditConfig: EditConfig<EmbedComponentProperties> = {
  emptyLabel: 'Embed',
  isEmpty(props: {
    result?: OEmbedResponse;
    html?: string;
    youTubeProps?: YouTubeProps;
    type: string;
    url?: string;
  }) {
    let isPropDefined = false;
    if (props.type === 'URL') {
      isPropDefined =
        typeof props.url !== 'undefined' &&
        typeof props.result !== 'undefined' &&
        typeof props.result?.processor !== 'undefined';
    } else if (props.type === 'EMBEDDABLE') {
      isPropDefined =
        typeof props.youTubeProps !== 'undefined' &&
        typeof props.youTubeProps?.youtubeVideoId !== 'undefined';
    } else if (props.type === 'HTML') {
      isPropDefined = Boolean(props.html);
    }
    return !props || !isPropDefined;
  },
};

interface ImageComponentProperties extends MappedComponentProperties {
  alt?: string;
  src: string;
}

export const ImageEditConfig: EditConfig<ImageComponentProperties> = {
  emptyLabel: 'Image',
  isEmpty(props: { src: string }) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

interface LanguageNavigationComponentProperties
  extends MappedComponentProperties {
  items: string[] | null;
}

export const LanguageNavigationEditConfig: EditConfig<LanguageNavigationComponentProperties> =
  {
    emptyLabel: 'Language Navigation',

    isEmpty(props: { items: string[] | null }) {
      return props.items == null || props.items.length === 0;
    },
  };

interface ListComponentProperties extends MappedComponentProperties {
  items: ListItem[] | null;
}

export const ListEditConfig: EditConfig<ListComponentProperties> = {
  emptyLabel: 'List',

  isEmpty(props: { items: ListItem[] | null }) {
    return props.items === null || props.items.length === 0;
  },
};

interface NavigationComponentProperties extends MappedComponentProperties {
  items: string[] | null;
}

export const NavigationEditConfig: EditConfig<NavigationComponentProperties> = {
  emptyLabel: 'Navigation',
  isEmpty(props: { items: string[] | null }) {
    return props.items == null || props.items.length === 0;
  },
};

interface TeaserComponentProperties extends MappedComponentProperties {
  imagePath?: string;
  description?: string;
  pretitle?: string;
  title?: string;
  actions?: [];
}

export const TeaserEditConfig: EditConfig<TeaserComponentProperties> = {
  emptyLabel: 'Teaser',
  isEmpty(props: {
    imagePath?: string;
    description?: string;
    pretitle?: string;
    title?: string;
    actions?: [];
  }) {
    const isPropEmpty = (propVal: [] | string) => {
      const length = Array.isArray(propVal)
        ? propVal.length
        : propVal.trim().length;
      return length === 0;
    };
    return (
      (!props.imagePath || isPropEmpty(props.imagePath)) &&
      (!props.pretitle || isPropEmpty(props.pretitle)) &&
      (!props.title || isPropEmpty(props.title)) &&
      (!props.description || isPropEmpty(props.description)) &&
      (!props.actions || isPropEmpty(props.actions))
    );
  },
};

interface TitleComponentProperties extends MappedComponentProperties {
  text: string;
}

export const TitleEditConfig: EditConfig<TitleComponentProperties> = {
  emptyLabel: 'Title',
  isEmpty(props: { text: string }) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

interface TextComponentProperties extends MappedComponentProperties {
  text: string;
}

export const TextEditConfig: EditConfig<TextComponentProperties> = {
  emptyLabel: 'Text',
  isEmpty(props: { text: string }) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};
