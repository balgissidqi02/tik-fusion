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
exports.Fulfillment202309UpdatePackageDeliveryStatusResponse = void 0;
var Fulfillment202309UpdatePackageDeliveryStatusResponse = /** @class */ (function () {
    function Fulfillment202309UpdatePackageDeliveryStatusResponse() {
    }
    Fulfillment202309UpdatePackageDeliveryStatusResponse.getAttributeTypeMap = function () {
        return Fulfillment202309UpdatePackageDeliveryStatusResponse.attributeTypeMap;
    };
    Fulfillment202309UpdatePackageDeliveryStatusResponse.discriminator = undefined;
    Fulfillment202309UpdatePackageDeliveryStatusResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Fulfillment202309UpdatePackageDeliveryStatusResponseData"
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
    return Fulfillment202309UpdatePackageDeliveryStatusResponse;
}());
exports.Fulfillment202309UpdatePackageDeliveryStatusResponse = Fulfillment202309UpdatePackageDeliveryStatusResponse;
