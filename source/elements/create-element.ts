import constants from '../constants';

/**
 * Creates an instance of the element for the specified tag.
 *
 * @param tagName The name of an element.
 */
export function createElement<TTagName extends keyof HTMLElementTagNameMap>(
    tagName: TTagName,
    options?: ElementCreationOptions
): HTMLElementTagNameMap[TTagName];
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
