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
exports.Fulfillment202309SplitOrdersRequestBodySplittableGroups = void 0;
var Fulfillment202309SplitOrdersRequestBodySplittableGroups = /** @class */ (function () {
    function Fulfillment202309SplitOrdersRequestBodySplittableGroups() {
    }
    Fulfillment202309SplitOrdersRequestBodySplittableGroups.getAttributeTypeMap = function () {
        return Fulfillment202309SplitOrdersRequestBodySplittableGroups.attributeTypeMap;
    };
    Fulfillment202309SplitOrdersRequestBodySplittableGroups.discriminator = undefined;
    Fulfillment202309SplitOrdersRequestBodySplittableGroups.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "orderLineItemIds",
            "baseName": "order_line_item_ids",
            "type": "Array<string>"
        }
    ];
    return Fulfillment202309SplitOrdersRequestBodySplittableGroups;
}());
exports.Fulfillment202309SplitOrdersRequestBodySplittableGroups = Fulfillment202309SplitOrdersRequestBodySplittableGroups;
