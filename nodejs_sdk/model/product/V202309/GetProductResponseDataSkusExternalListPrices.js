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
exports.Product202309GetProductResponseDataSkusExternalListPrices = void 0;
var Product202309GetProductResponseDataSkusExternalListPrices = /** @class */ (function () {
    function Product202309GetProductResponseDataSkusExternalListPrices() {
    }
    Product202309GetProductResponseDataSkusExternalListPrices.getAttributeTypeMap = function () {
        return Product202309GetProductResponseDataSkusExternalListPrices.attributeTypeMap;
    };
    Product202309GetProductResponseDataSkusExternalListPrices.discriminator = undefined;
    Product202309GetProductResponseDataSkusExternalListPrices.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }
    ];
    return Product202309GetProductResponseDataSkusExternalListPrices;
}());
exports.Product202309GetProductResponseDataSkusExternalListPrices = Product202309GetProductResponseDataSkusExternalListPrices;
