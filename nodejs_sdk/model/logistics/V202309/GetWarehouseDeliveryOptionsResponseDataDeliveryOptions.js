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
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions = void 0;
var Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions = /** @class */ (function () {
    function Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions() {
    }
    Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.getAttributeTypeMap = function () {
        return Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.attributeTypeMap;
    };
    Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.discriminator = undefined;
    Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dimensionLimit",
            "baseName": "dimension_limit",
            "type": "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "weightLimit",
            "baseName": "weight_limit",
            "type": "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit"
        }
    ];
    return Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions;
}());
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions = Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions;
