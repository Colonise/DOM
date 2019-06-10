import constants from '../constants';
import { FindHTMLElement } from './find-html-element';
import { HTMLElementTagNames } from './html-element-tag-names';

/**
 * Creates an instance of the element for the specified tag.
 *
 * @param tagName The name of an element.
 */
export function createElement<TTagName extends HTMLElementTagNames>(
    tagName: TTagName,
    options?: ElementCreationOptions
): FindHTMLElement<TTagName>;
/**
 * Creates an instance of the element for the specified tag.
 *
 * @param tagName The name of an element.
 */
export function createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
export function createElement(tagName: string, options?: ElementCreationOptions): HTMLElement {
    const element = constants.document.createElement(tagName, options);

    return element;
}
