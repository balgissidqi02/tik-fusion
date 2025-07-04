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
exports.Product202309InventorySearchResponse = void 0;
var Product202309InventorySearchResponse = /** @class */ (function () {
    function Product202309InventorySearchResponse() {
    }
    Product202309InventorySearchResponse.getAttributeTypeMap = function () {
        return Product202309InventorySearchResponse.attributeTypeMap;
    };
    Product202309InventorySearchResponse.discriminator = undefined;
    Product202309InventorySearchResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Product202309InventorySearchResponseData"
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
    return Product202309InventorySearchResponse;
}());
exports.Product202309InventorySearchResponse = Product202309InventorySearchResponse;
