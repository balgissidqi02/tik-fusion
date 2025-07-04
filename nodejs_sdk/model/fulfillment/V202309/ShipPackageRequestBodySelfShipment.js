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
exports.Fulfillment202309ShipPackageRequestBodySelfShipment = void 0;
var Fulfillment202309ShipPackageRequestBodySelfShipment = /** @class */ (function () {
    function Fulfillment202309ShipPackageRequestBodySelfShipment() {
    }
    Fulfillment202309ShipPackageRequestBodySelfShipment.getAttributeTypeMap = function () {
        return Fulfillment202309ShipPackageRequestBodySelfShipment.attributeTypeMap;
    };
    Fulfillment202309ShipPackageRequestBodySelfShipment.discriminator = undefined;
    Fulfillment202309ShipPackageRequestBodySelfShipment.attributeTypeMap = [
        {
            "name": "shippingProviderId",
            "baseName": "shipping_provider_id",
            "type": "string"
        },
        {
            "name": "trackingNumber",
            "baseName": "tracking_number",
            "type": "string"
        }
    ];
    return Fulfillment202309ShipPackageRequestBodySelfShipment;
}());
exports.Fulfillment202309ShipPackageRequestBodySelfShipment = Fulfillment202309ShipPackageRequestBodySelfShipment;
