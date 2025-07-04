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
exports.Product202309CreateProductResponseData = void 0;
var Product202309CreateProductResponseData = /** @class */ (function () {
    function Product202309CreateProductResponseData() {
    }
    Product202309CreateProductResponseData.getAttributeTypeMap = function () {
        return Product202309CreateProductResponseData.attributeTypeMap;
    };
    Product202309CreateProductResponseData.discriminator = undefined;
    Product202309CreateProductResponseData.attributeTypeMap = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string"
        },
        {
            "name": "skus",
            "baseName": "skus",
            "type": "Array<Product202309CreateProductResponseDataSkus>"
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<Product202309CreateProductResponseDataWarnings>"
        }
    ];
    return Product202309CreateProductResponseData;
}());
exports.Product202309CreateProductResponseData = Product202309CreateProductResponseData;
