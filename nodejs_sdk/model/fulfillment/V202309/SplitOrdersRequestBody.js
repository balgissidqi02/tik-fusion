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
exports.Fulfillment202309SplitOrdersRequestBody = void 0;
var Fulfillment202309SplitOrdersRequestBody = /** @class */ (function () {
    function Fulfillment202309SplitOrdersRequestBody() {
    }
    Fulfillment202309SplitOrdersRequestBody.getAttributeTypeMap = function () {
        return Fulfillment202309SplitOrdersRequestBody.attributeTypeMap;
    };
    Fulfillment202309SplitOrdersRequestBody.discriminator = undefined;
    Fulfillment202309SplitOrdersRequestBody.attributeTypeMap = [
        {
            "name": "splittableGroups",
            "baseName": "splittable_groups",
            "type": "Array<Fulfillment202309SplitOrdersRequestBodySplittableGroups>"
        }
    ];
    return Fulfillment202309SplitOrdersRequestBody;
}());
exports.Fulfillment202309SplitOrdersRequestBody = Fulfillment202309SplitOrdersRequestBody;
