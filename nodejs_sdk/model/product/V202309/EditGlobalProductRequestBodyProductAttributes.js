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
exports.Product202309EditGlobalProductRequestBodyProductAttributes = void 0;
var Product202309EditGlobalProductRequestBodyProductAttributes = /** @class */ (function () {
    function Product202309EditGlobalProductRequestBodyProductAttributes() {
    }
    Product202309EditGlobalProductRequestBodyProductAttributes.getAttributeTypeMap = function () {
        return Product202309EditGlobalProductRequestBodyProductAttributes.attributeTypeMap;
    };
    Product202309EditGlobalProductRequestBodyProductAttributes.discriminator = undefined;
    Product202309EditGlobalProductRequestBodyProductAttributes.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Product202309EditGlobalProductRequestBodyProductAttributesValues>"
        }
    ];
    return Product202309EditGlobalProductRequestBodyProductAttributes;
}());
exports.Product202309EditGlobalProductRequestBodyProductAttributes = Product202309EditGlobalProductRequestBodyProductAttributes;
