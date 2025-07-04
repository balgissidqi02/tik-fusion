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
exports.Fulfillment202309GetEligibleShippingServiceRequestBody = void 0;
var Fulfillment202309GetEligibleShippingServiceRequestBody = /** @class */ (function () {
    function Fulfillment202309GetEligibleShippingServiceRequestBody() {
    }
    Fulfillment202309GetEligibleShippingServiceRequestBody.getAttributeTypeMap = function () {
        return Fulfillment202309GetEligibleShippingServiceRequestBody.attributeTypeMap;
    };
    Fulfillment202309GetEligibleShippingServiceRequestBody.discriminator = undefined;
    Fulfillment202309GetEligibleShippingServiceRequestBody.attributeTypeMap = [
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "Fulfillment202309GetEligibleShippingServiceRequestBodyDimension"
        },
        {
            "name": "orderLineItemIds",
            "baseName": "order_line_item_ids",
            "type": "Array<string>"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "Fulfillment202309GetEligibleShippingServiceRequestBodyWeight"
        }
    ];
    return Fulfillment202309GetEligibleShippingServiceRequestBody;
}());
exports.Fulfillment202309GetEligibleShippingServiceRequestBody = Fulfillment202309GetEligibleShippingServiceRequestBody;
