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
exports.Product202309CreateProductRequestBodyPackageDimensions = void 0;
var Product202309CreateProductRequestBodyPackageDimensions = /** @class */ (function () {
    function Product202309CreateProductRequestBodyPackageDimensions() {
    }
    Product202309CreateProductRequestBodyPackageDimensions.getAttributeTypeMap = function () {
        return Product202309CreateProductRequestBodyPackageDimensions.attributeTypeMap;
    };
    Product202309CreateProductRequestBodyPackageDimensions.discriminator = undefined;
    Product202309CreateProductRequestBodyPackageDimensions.attributeTypeMap = [
        {
            "name": "height",
            "baseName": "height",
            "type": "string"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "string"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "string"
        }
    ];
    return Product202309CreateProductRequestBodyPackageDimensions;
}());
exports.Product202309CreateProductRequestBodyPackageDimensions = Product202309CreateProductRequestBodyPackageDimensions;
