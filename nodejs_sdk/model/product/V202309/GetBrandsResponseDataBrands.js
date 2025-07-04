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
exports.Product202309GetBrandsResponseDataBrands = void 0;
var Product202309GetBrandsResponseDataBrands = /** @class */ (function () {
    function Product202309GetBrandsResponseDataBrands() {
    }
    Product202309GetBrandsResponseDataBrands.getAttributeTypeMap = function () {
        return Product202309GetBrandsResponseDataBrands.attributeTypeMap;
    };
    Product202309GetBrandsResponseDataBrands.discriminator = undefined;
    Product202309GetBrandsResponseDataBrands.attributeTypeMap = [
        {
            "name": "authorizedStatus",
            "baseName": "authorized_status",
            "type": "string"
        },
        {
            "name": "brandStatus",
            "baseName": "brand_status",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isT1Brand",
            "baseName": "is_t1_brand",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return Product202309GetBrandsResponseDataBrands;
}());
exports.Product202309GetBrandsResponseDataBrands = Product202309GetBrandsResponseDataBrands;
