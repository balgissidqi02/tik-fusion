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
exports.Product202309PartialEditProductRequestBodySkusPreSale = void 0;
var Product202309PartialEditProductRequestBodySkusPreSale = /** @class */ (function () {
    function Product202309PartialEditProductRequestBodySkusPreSale() {
    }
    Product202309PartialEditProductRequestBodySkusPreSale.getAttributeTypeMap = function () {
        return Product202309PartialEditProductRequestBodySkusPreSale.attributeTypeMap;
    };
    Product202309PartialEditProductRequestBodySkusPreSale.discriminator = undefined;
    Product202309PartialEditProductRequestBodySkusPreSale.attributeTypeMap = [
        {
            "name": "fulfillmentType",
            "baseName": "fulfillment_type",
            "type": "Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return Product202309PartialEditProductRequestBodySkusPreSale;
}());
exports.Product202309PartialEditProductRequestBodySkusPreSale = Product202309PartialEditProductRequestBodySkusPreSale;
