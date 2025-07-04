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
exports.Fulfillment202309MarkPackageAsShippedRequestBody = void 0;
var Fulfillment202309MarkPackageAsShippedRequestBody = /** @class */ (function () {
    function Fulfillment202309MarkPackageAsShippedRequestBody() {
    }
    Fulfillment202309MarkPackageAsShippedRequestBody.getAttributeTypeMap = function () {
        return Fulfillment202309MarkPackageAsShippedRequestBody.attributeTypeMap;
    };
    Fulfillment202309MarkPackageAsShippedRequestBody.discriminator = undefined;
    Fulfillment202309MarkPackageAsShippedRequestBody.attributeTypeMap = [
        {
            "name": "orderLineItemIds",
            "baseName": "order_line_item_ids",
            "type": "Array<string>"
        },
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
    return Fulfillment202309MarkPackageAsShippedRequestBody;
}());
exports.Fulfillment202309MarkPackageAsShippedRequestBody = Fulfillment202309MarkPackageAsShippedRequestBody;
