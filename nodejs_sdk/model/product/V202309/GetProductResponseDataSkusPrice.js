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
exports.Product202309GetProductResponseDataSkusPrice = void 0;
var Product202309GetProductResponseDataSkusPrice = /** @class */ (function () {
    function Product202309GetProductResponseDataSkusPrice() {
    }
    Product202309GetProductResponseDataSkusPrice.getAttributeTypeMap = function () {
        return Product202309GetProductResponseDataSkusPrice.attributeTypeMap;
    };
    Product202309GetProductResponseDataSkusPrice.discriminator = undefined;
    Product202309GetProductResponseDataSkusPrice.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "salePrice",
            "baseName": "sale_price",
            "type": "string"
        },
        {
            "name": "taxExclusivePrice",
            "baseName": "tax_exclusive_price",
            "type": "string"
        },
        {
            "name": "unitPrice",
            "baseName": "unit_price",
            "type": "string"
        }
    ];
    return Product202309GetProductResponseDataSkusPrice;
}());
exports.Product202309GetProductResponseDataSkusPrice = Product202309GetProductResponseDataSkusPrice;
