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
exports.Product202312SearchProductsResponseDataProductsSkusPrice = void 0;
var Product202312SearchProductsResponseDataProductsSkusPrice = /** @class */ (function () {
    function Product202312SearchProductsResponseDataProductsSkusPrice() {
    }
    Product202312SearchProductsResponseDataProductsSkusPrice.getAttributeTypeMap = function () {
        return Product202312SearchProductsResponseDataProductsSkusPrice.attributeTypeMap;
    };
    Product202312SearchProductsResponseDataProductsSkusPrice.discriminator = undefined;
    Product202312SearchProductsResponseDataProductsSkusPrice.attributeTypeMap = [
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
        }
    ];
    return Product202312SearchProductsResponseDataProductsSkusPrice;
}());
exports.Product202312SearchProductsResponseDataProductsSkusPrice = Product202312SearchProductsResponseDataProductsSkusPrice;
