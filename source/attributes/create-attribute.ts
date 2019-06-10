import constants from '../constants';

/**
 * Creates an attribute object with a specified name.
 *
 * @param localName String that sets the attribute object's name.
 */
export function createAttribute(localName: string): Attr {
    const attribute = constants.document.createAttribute(localName);

    return attribute;
}
