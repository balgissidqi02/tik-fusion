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
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots = void 0;
var Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots = /** @class */ (function () {
    function Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots() {
    }
    Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots.getAttributeTypeMap = function () {
        return Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots.attributeTypeMap;
    };
    Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots.discriminator = undefined;
    Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots.attributeTypeMap = [
        {
            "name": "avaliable",
            "baseName": "avaliable",
            "type": "boolean"
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "number"
        }
    ];
    return Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots;
}());
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots = Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots;
