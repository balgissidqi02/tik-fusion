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
exports.Product202309GetGlobalProductResponseDataSizeChart = void 0;
var Product202309GetGlobalProductResponseDataSizeChart = /** @class */ (function () {
    function Product202309GetGlobalProductResponseDataSizeChart() {
    }
    Product202309GetGlobalProductResponseDataSizeChart.getAttributeTypeMap = function () {
        return Product202309GetGlobalProductResponseDataSizeChart.attributeTypeMap;
    };
    Product202309GetGlobalProductResponseDataSizeChart.discriminator = undefined;
    Product202309GetGlobalProductResponseDataSizeChart.attributeTypeMap = [
        {
            "name": "image",
            "baseName": "image",
            "type": "Product202309GetGlobalProductResponseDataSizeChartImage"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "Product202309GetGlobalProductResponseDataSizeChartTemplate"
        }
    ];
    return Product202309GetGlobalProductResponseDataSizeChart;
}());
exports.Product202309GetGlobalProductResponseDataSizeChart = Product202309GetGlobalProductResponseDataSizeChart;
