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
exports.Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots = void 0;
var Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots = /** @class */ (function () {
    function Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots() {
    }
    Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots.getAttributeTypeMap = function () {
        return Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots.attributeTypeMap;
    };
    Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots.discriminator = undefined;
    Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots.attributeTypeMap = [
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
    return Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots;
}());
exports.Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots = Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots;
