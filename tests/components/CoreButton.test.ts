import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from 'vue-router-mock';
import { config, mount } from '@vue/test-utils';
import CoreButton from '@/components/CoreButton.vue';
import { userEvent } from '@testing-library/user-event';

describe('CoreButton ->', () => {
  const router = createRouterMock();

  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });

  config.plugins.VueWrapper.install(VueRouterMock);
  it('Renders without crashing', () => {
    const wrapper = mount(CoreButton);

    expect(wrapper.element.classList.contains('cmp-button')).toBeTruthy();
  });

  it('Renders a proper button with link', async () => {
    let captured = false;

    const propsData = {
      ariaLabel: 'This is a button',
      icon: 'icon-modifier',
      link: '/content/some/link.html',
      text: 'Some text',
      handleOnClick(event: Event): void {
        event.preventDefault();
        captured = true;
      },
    };

    const wrapper = mount(CoreButton, {
      propsData,
    });

    const button = wrapper.element as HTMLLinkElement;

    expect(button.classList.contains('cmp-button')).toBeTruthy();
    expect(button.tagName).toEqual('A');

    expect(captured).toBeFalsy();
    await userEvent.click(button as HTMLElement);
    expect(captured).toBeTruthy();

    expect(button.getAttribute('aria-label')).toEqual('This is a button');
    expect(button.getAttribute('href')).toEqual('/content/some/link.html');

    const iconSpans = button.querySelectorAll(
      'span.cmp-button__icon.cmp-button__icon--icon-modifier',
    );

    expect(iconSpans.length).toEqual(1);

    const textSpan = button.querySelector('span.cmp-button__text');
    expect(textSpan!.textContent).toEqual('Some text');
  });

  it('Renders a proper button without a link', async () => {
    let captured = false;

    const propsData = {
      ariaLabel: 'This is a button',
      icon: 'icon-modifier',
      text: 'Some text',
      handleOnClick(): void {
        captured = true;
      },
    };

    const wrapper = mount(CoreButton, {
      propsData,
    });

    const button = wrapper.element as HTMLLinkElement;

    expect(button.classList.contains('cmp-button')).toBeTruthy();
    expect(button.tagName).toEqual('BUTTON');

    expect(captured).toBeFalsy();
    await userEvent.click(button as HTMLElement);
    expect(captured).toBeTruthy();

    const iconSpans = button.querySelectorAll(
      'span.cmp-button__icon.cmp-button__icon--icon-modifier',
    );

    expect(iconSpans.length).toEqual(1);

    const textSpan = button.querySelector('span.cmp-button__text');
    expect(textSpan!.textContent).toEqual('Some text');
  });
});
