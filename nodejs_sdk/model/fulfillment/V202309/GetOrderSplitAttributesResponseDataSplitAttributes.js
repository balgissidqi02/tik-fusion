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
exports.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes = void 0;
var Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes = /** @class */ (function () {
    function Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes() {
    }
    Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.getAttributeTypeMap = function () {
        return Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.attributeTypeMap;
    };
    Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.discriminator = undefined;
    Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.attributeTypeMap = [
        {
            "name": "canSplit",
            "baseName": "can_split",
            "type": "boolean"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }
    ];
    return Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes;
}());
exports.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes = Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes;
