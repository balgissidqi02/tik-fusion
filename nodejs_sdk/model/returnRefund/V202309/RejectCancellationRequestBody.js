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
exports.ReturnRefund202309RejectCancellationRequestBody = void 0;
var ReturnRefund202309RejectCancellationRequestBody = /** @class */ (function () {
    function ReturnRefund202309RejectCancellationRequestBody() {
    }
    ReturnRefund202309RejectCancellationRequestBody.getAttributeTypeMap = function () {
        return ReturnRefund202309RejectCancellationRequestBody.attributeTypeMap;
    };
    ReturnRefund202309RejectCancellationRequestBody.discriminator = undefined;
    ReturnRefund202309RejectCancellationRequestBody.attributeTypeMap = [
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<ReturnRefund202309RejectCancellationRequestBodyImages>"
        },
        {
            "name": "rejectReason",
            "baseName": "reject_reason",
            "type": "string"
        }
    ];
    return ReturnRefund202309RejectCancellationRequestBody;
}());
exports.ReturnRefund202309RejectCancellationRequestBody = ReturnRefund202309RejectCancellationRequestBody;
