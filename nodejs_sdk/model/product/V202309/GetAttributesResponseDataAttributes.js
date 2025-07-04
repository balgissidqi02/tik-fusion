"use strict";
/**
 * tiktok shop openapi
 * sdk for apis
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
exports.__esModule = true;
exports.Product202309GetAttributesResponseDataAttributes = void 0;
var Product202309GetAttributesResponseDataAttributes = /** @class */ (function () {
    function Product202309GetAttributesResponseDataAttributes() {
    }
    Product202309GetAttributesResponseDataAttributes.getAttributeTypeMap = function () {
        return Product202309GetAttributesResponseDataAttributes.attributeTypeMap;
    };
    Product202309GetAttributesResponseDataAttributes.discriminator = undefined;
    Product202309GetAttributesResponseDataAttributes.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isCustomizable",
            "baseName": "is_customizable",
            "type": "boolean"
        },
        {
            "name": "isMultipleSelection",
            "baseName": "is_multiple_selection",
            "type": "boolean"
        },
        {
            "name": "isRequried",
            "baseName": "is_requried",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "requirementConditions",
            "baseName": "requirement_conditions",
            "type": "Array<Product202309GetAttributesResponseDataAttributesRequirementConditions>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "valueDataFormat",
            "baseName": "value_data_format",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Product202309GetAttributesResponseDataAttributesValues>"
        }
    ];
    return Product202309GetAttributesResponseDataAttributes;
}());
exports.Product202309GetAttributesResponseDataAttributes = Product202309GetAttributesResponseDataAttributes;
