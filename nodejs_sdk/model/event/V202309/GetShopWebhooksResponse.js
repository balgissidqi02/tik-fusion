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
exports.Event202309GetShopWebhooksResponse = void 0;
var Event202309GetShopWebhooksResponse = /** @class */ (function () {
    function Event202309GetShopWebhooksResponse() {
    }
    Event202309GetShopWebhooksResponse.getAttributeTypeMap = function () {
        return Event202309GetShopWebhooksResponse.attributeTypeMap;
    };
    Event202309GetShopWebhooksResponse.discriminator = undefined;
    Event202309GetShopWebhooksResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Event202309GetShopWebhooksResponseData"
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
    return Event202309GetShopWebhooksResponse;
}());
exports.Event202309GetShopWebhooksResponse = Event202309GetShopWebhooksResponse;
