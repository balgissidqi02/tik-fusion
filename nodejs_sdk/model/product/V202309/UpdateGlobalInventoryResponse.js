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
exports.Product202309UpdateGlobalInventoryResponse = void 0;
var Product202309UpdateGlobalInventoryResponse = /** @class */ (function () {
    function Product202309UpdateGlobalInventoryResponse() {
    }
    Product202309UpdateGlobalInventoryResponse.getAttributeTypeMap = function () {
        return Product202309UpdateGlobalInventoryResponse.attributeTypeMap;
    };
    Product202309UpdateGlobalInventoryResponse.discriminator = undefined;
    Product202309UpdateGlobalInventoryResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
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
    return Product202309UpdateGlobalInventoryResponse;
}());
exports.Product202309UpdateGlobalInventoryResponse = Product202309UpdateGlobalInventoryResponse;
