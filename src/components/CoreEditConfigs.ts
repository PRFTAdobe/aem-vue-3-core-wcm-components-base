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

export const BreadcrumbEditConfig = {
  emptyLabel: 'Breadcrumb',
  isEmpty(props: { items: string | string[] | null }) {
    return props.items == null || props.items.length === 0;
  },
};

export const EmbedEditConfig = {
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

export const ImageEditConfig = {
  emptyLabel: 'Image',
  isEmpty(props: { src: string }) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

export const LanguageNavigationEditConfig = {
  emptyLabel: 'Language Navigation',

  isEmpty(props: { items: string[] | null }) {
    return props.items == null || props.items.length === 0;
  },
};

export const NavigationEditConfig = {
  emptyLabel: 'Navigation',
  isEmpty(props: { items: string[] | null }) {
    return props.items == null || props.items.length === 0;
  },
};

export const TeaserEditConfig = {
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

export const TitleEditConfig = {
  emptyLabel: 'Title',
  isEmpty(props: { text: string }) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

export const TextEditConfig = {
  emptyLabel: 'Text',
  isEmpty(props: { text: string }) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};
