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
exports.Product202312SearchProductsResponse = void 0;
var Product202312SearchProductsResponse = /** @class */ (function () {
    function Product202312SearchProductsResponse() {
    }
    Product202312SearchProductsResponse.getAttributeTypeMap = function () {
        return Product202312SearchProductsResponse.attributeTypeMap;
    };
    Product202312SearchProductsResponse.discriminator = undefined;
    Product202312SearchProductsResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Product202312SearchProductsResponseData"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }
    ];
    return Product202312SearchProductsResponse;
}());
exports.Product202312SearchProductsResponse = Product202312SearchProductsResponse;
