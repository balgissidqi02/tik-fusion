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
exports.Fulfillment202309FulfillmentUploadDeliveryImageResponse = void 0;
var Fulfillment202309FulfillmentUploadDeliveryImageResponse = /** @class */ (function () {
    function Fulfillment202309FulfillmentUploadDeliveryImageResponse() {
    }
    Fulfillment202309FulfillmentUploadDeliveryImageResponse.getAttributeTypeMap = function () {
        return Fulfillment202309FulfillmentUploadDeliveryImageResponse.attributeTypeMap;
    };
    Fulfillment202309FulfillmentUploadDeliveryImageResponse.discriminator = undefined;
    Fulfillment202309FulfillmentUploadDeliveryImageResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Fulfillment202309FulfillmentUploadDeliveryImageResponseData"
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
    return Fulfillment202309FulfillmentUploadDeliveryImageResponse;
}());
exports.Fulfillment202309FulfillmentUploadDeliveryImageResponse = Fulfillment202309FulfillmentUploadDeliveryImageResponse;
