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
exports.ReturnRefund202309CalculateRefundRequestBodySkus = void 0;
var ReturnRefund202309CalculateRefundRequestBodySkus = /** @class */ (function () {
    function ReturnRefund202309CalculateRefundRequestBodySkus() {
    }
    ReturnRefund202309CalculateRefundRequestBodySkus.getAttributeTypeMap = function () {
        return ReturnRefund202309CalculateRefundRequestBodySkus.attributeTypeMap;
    };
    ReturnRefund202309CalculateRefundRequestBodySkus.discriminator = undefined;
    ReturnRefund202309CalculateRefundRequestBodySkus.attributeTypeMap = [
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "skuId",
            "baseName": "sku_id",
            "type": "string"
        }
    ];
    return ReturnRefund202309CalculateRefundRequestBodySkus;
}());
exports.ReturnRefund202309CalculateRefundRequestBodySkus = ReturnRefund202309CalculateRefundRequestBodySkus;
