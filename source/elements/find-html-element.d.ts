export type FindHTMLElement<TTagName extends HTMLElementTagNameMap | string>
    = TTagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TTagName] : HTMLElement;
