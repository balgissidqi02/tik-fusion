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
exports.ReturnRefund202309ApproveReturnRequestBody = void 0;
var ReturnRefund202309ApproveReturnRequestBody = /** @class */ (function () {
    function ReturnRefund202309ApproveReturnRequestBody() {
    }
    ReturnRefund202309ApproveReturnRequestBody.getAttributeTypeMap = function () {
        return ReturnRefund202309ApproveReturnRequestBody.attributeTypeMap;
    };
    ReturnRefund202309ApproveReturnRequestBody.discriminator = undefined;
    ReturnRefund202309ApproveReturnRequestBody.attributeTypeMap = [
        {
            "name": "buyerKeepItem",
            "baseName": "buyer_keep_item",
            "type": "boolean"
        },
        {
            "name": "decision",
            "baseName": "decision",
            "type": "string"
        },
        {
            "name": "partialRefund",
            "baseName": "partial_refund",
            "type": "ReturnRefund202309ApproveReturnRequestBodyPartialRefund"
        }
    ];
    return ReturnRefund202309ApproveReturnRequestBody;
}());
exports.ReturnRefund202309ApproveReturnRequestBody = ReturnRefund202309ApproveReturnRequestBody;
