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
exports.Product202309GetProductResponse = void 0;
var Product202309GetProductResponse = /** @class */ (function () {
    function Product202309GetProductResponse() {
    }
    Product202309GetProductResponse.getAttributeTypeMap = function () {
        return Product202309GetProductResponse.attributeTypeMap;
    };
    Product202309GetProductResponse.discriminator = undefined;
    Product202309GetProductResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Product202309GetProductResponseData"
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
    return Product202309GetProductResponse;
}());
exports.Product202309GetProductResponse = Product202309GetProductResponse;
