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
exports.Product202309CreateGlobalProductResponse = void 0;
var Product202309CreateGlobalProductResponse = /** @class */ (function () {
    function Product202309CreateGlobalProductResponse() {
    }
    Product202309CreateGlobalProductResponse.getAttributeTypeMap = function () {
        return Product202309CreateGlobalProductResponse.attributeTypeMap;
    };
    Product202309CreateGlobalProductResponse.discriminator = undefined;
    Product202309CreateGlobalProductResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Product202309CreateGlobalProductResponseData"
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
    return Product202309CreateGlobalProductResponse;
}());
exports.Product202309CreateGlobalProductResponse = Product202309CreateGlobalProductResponse;
