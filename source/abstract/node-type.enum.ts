
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
 */
export enum NodeType {
    ELEMENT_NODE = 1,
    /**
     * @deprecated
     */
    ATTRIBUTE_NODE = 2,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    /**
     * @deprecated
     */
    ENTITY_REFERENCE_NODE = 5,
    /**
     * @deprecated
     */
    ENTITY_NODE = 6,
    PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE = 8,
    DOCUMENT_NODE = 9,
    DOCUMENT_TYPE_NODE = 10,
    DOCUMENT_FRAGMENT_NODE = 11,
    /**
     * @deprecated
     */
    NOTATION_NODE = 12
}
