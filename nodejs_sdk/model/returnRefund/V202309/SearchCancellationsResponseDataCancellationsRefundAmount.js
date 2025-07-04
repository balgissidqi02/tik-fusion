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
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount = void 0;
var ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount = /** @class */ (function () {
    function ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount() {
    }
    ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.getAttributeTypeMap = function () {
        return ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.attributeTypeMap;
    };
    ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.discriminator = undefined;
    ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount.attributeTypeMap = [
        {
            "name": "buyerServiceFee",
            "baseName": "buyer_service_fee",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "refundShippingFee",
            "baseName": "refund_shipping_fee",
            "type": "string"
        },
        {
            "name": "refundSubtotal",
            "baseName": "refund_subtotal",
            "type": "string"
        },
        {
            "name": "refundTax",
            "baseName": "refund_tax",
            "type": "string"
        },
        {
            "name": "refundTotal",
            "baseName": "refund_total",
            "type": "string"
        },
        {
            "name": "retailDeliveryFee",
            "baseName": "retail_delivery_fee",
            "type": "string"
        }
    ];
    return ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount;
}());
exports.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount = ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount;
