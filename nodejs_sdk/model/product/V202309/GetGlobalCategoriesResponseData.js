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
exports.Product202309GetGlobalCategoriesResponseData = void 0;
var Product202309GetGlobalCategoriesResponseData = /** @class */ (function () {
    function Product202309GetGlobalCategoriesResponseData() {
    }
    Product202309GetGlobalCategoriesResponseData.getAttributeTypeMap = function () {
        return Product202309GetGlobalCategoriesResponseData.attributeTypeMap;
    };
    Product202309GetGlobalCategoriesResponseData.discriminator = undefined;
    Product202309GetGlobalCategoriesResponseData.attributeTypeMap = [
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<Product202309GetGlobalCategoriesResponseDataCategories>"
        }
    ];
    return Product202309GetGlobalCategoriesResponseData;
}());
exports.Product202309GetGlobalCategoriesResponseData = Product202309GetGlobalCategoriesResponseData;
