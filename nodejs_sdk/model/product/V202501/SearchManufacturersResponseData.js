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
exports.Product202501SearchManufacturersResponseData = void 0;
var Product202501SearchManufacturersResponseData = /** @class */ (function () {
    function Product202501SearchManufacturersResponseData() {
    }
    Product202501SearchManufacturersResponseData.getAttributeTypeMap = function () {
        return Product202501SearchManufacturersResponseData.attributeTypeMap;
    };
    Product202501SearchManufacturersResponseData.discriminator = undefined;
    Product202501SearchManufacturersResponseData.attributeTypeMap = [
        {
            "name": "manufacturers",
            "baseName": "manufacturers",
            "type": "Array<Product202501SearchManufacturersResponseDataManufacturers>"
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        }
    ];
    return Product202501SearchManufacturersResponseData;
}());
exports.Product202501SearchManufacturersResponseData = Product202501SearchManufacturersResponseData;
