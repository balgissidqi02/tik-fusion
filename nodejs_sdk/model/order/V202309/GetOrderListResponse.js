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
exports.Order202309GetOrderListResponse = void 0;
var Order202309GetOrderListResponse = /** @class */ (function () {
    function Order202309GetOrderListResponse() {
    }
    Order202309GetOrderListResponse.getAttributeTypeMap = function () {
        return Order202309GetOrderListResponse.attributeTypeMap;
    };
    Order202309GetOrderListResponse.discriminator = undefined;
    Order202309GetOrderListResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Order202309GetOrderListResponseData"
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
    return Order202309GetOrderListResponse;
}());
exports.Order202309GetOrderListResponse = Order202309GetOrderListResponse;
