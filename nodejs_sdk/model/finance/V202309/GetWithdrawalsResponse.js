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
exports.Finance202309GetWithdrawalsResponse = void 0;
var Finance202309GetWithdrawalsResponse = /** @class */ (function () {
    function Finance202309GetWithdrawalsResponse() {
    }
    Finance202309GetWithdrawalsResponse.getAttributeTypeMap = function () {
        return Finance202309GetWithdrawalsResponse.attributeTypeMap;
    };
    Finance202309GetWithdrawalsResponse.discriminator = undefined;
    Finance202309GetWithdrawalsResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Finance202309GetWithdrawalsResponseData"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }
    ];
    return Finance202309GetWithdrawalsResponse;
}());
exports.Finance202309GetWithdrawalsResponse = Finance202309GetWithdrawalsResponse;
