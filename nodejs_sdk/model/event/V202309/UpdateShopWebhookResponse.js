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
exports.Event202309UpdateShopWebhookResponse = void 0;
var Event202309UpdateShopWebhookResponse = /** @class */ (function () {
    function Event202309UpdateShopWebhookResponse() {
    }
    Event202309UpdateShopWebhookResponse.getAttributeTypeMap = function () {
        return Event202309UpdateShopWebhookResponse.attributeTypeMap;
    };
    Event202309UpdateShopWebhookResponse.discriminator = undefined;
    Event202309UpdateShopWebhookResponse.attributeTypeMap = [
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
    return Event202309UpdateShopWebhookResponse;
}());
exports.Event202309UpdateShopWebhookResponse = Event202309UpdateShopWebhookResponse;
