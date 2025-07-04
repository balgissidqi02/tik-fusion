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
exports.Product202407SearchSizeChartsResponseData = void 0;
var Product202407SearchSizeChartsResponseData = /** @class */ (function () {
    function Product202407SearchSizeChartsResponseData() {
    }
    Product202407SearchSizeChartsResponseData.getAttributeTypeMap = function () {
        return Product202407SearchSizeChartsResponseData.attributeTypeMap;
    };
    Product202407SearchSizeChartsResponseData.discriminator = undefined;
    Product202407SearchSizeChartsResponseData.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string"
        },
        {
            "name": "sizeChart",
            "baseName": "size_chart",
            "type": "Array<Product202407SearchSizeChartsResponseDataSizeChart>"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        }
    ];
    return Product202407SearchSizeChartsResponseData;
}());
exports.Product202407SearchSizeChartsResponseData = Product202407SearchSizeChartsResponseData;
