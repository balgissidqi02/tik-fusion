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
exports.Promotion202406GetCouponResponseDataCouponClaimDuration = void 0;
var Promotion202406GetCouponResponseDataCouponClaimDuration = /** @class */ (function () {
    function Promotion202406GetCouponResponseDataCouponClaimDuration() {
    }
    Promotion202406GetCouponResponseDataCouponClaimDuration.getAttributeTypeMap = function () {
        return Promotion202406GetCouponResponseDataCouponClaimDuration.attributeTypeMap;
    };
    Promotion202406GetCouponResponseDataCouponClaimDuration.discriminator = undefined;
    Promotion202406GetCouponResponseDataCouponClaimDuration.attributeTypeMap = [
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "number"
        }
    ];
    return Promotion202406GetCouponResponseDataCouponClaimDuration;
}());
exports.Promotion202406GetCouponResponseDataCouponClaimDuration = Promotion202406GetCouponResponseDataCouponClaimDuration;
