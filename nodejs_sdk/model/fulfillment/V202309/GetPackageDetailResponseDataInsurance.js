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
exports.Fulfillment202309GetPackageDetailResponseDataInsurance = void 0;
var Fulfillment202309GetPackageDetailResponseDataInsurance = /** @class */ (function () {
    function Fulfillment202309GetPackageDetailResponseDataInsurance() {
    }
    Fulfillment202309GetPackageDetailResponseDataInsurance.getAttributeTypeMap = function () {
        return Fulfillment202309GetPackageDetailResponseDataInsurance.attributeTypeMap;
    };
    Fulfillment202309GetPackageDetailResponseDataInsurance.discriminator = undefined;
    Fulfillment202309GetPackageDetailResponseDataInsurance.attributeTypeMap = [
        {
            "name": "claimStatus",
            "baseName": "claim_status",
            "type": "string"
        },
        {
            "name": "coverageAmount",
            "baseName": "coverage_amount",
            "type": "string"
        },
        {
            "name": "isClaimEligible",
            "baseName": "is_claim_eligible",
            "type": "boolean"
        },
        {
            "name": "isPurchased",
            "baseName": "is_purchased",
            "type": "boolean"
        }
    ];
    return Fulfillment202309GetPackageDetailResponseDataInsurance;
}());
exports.Fulfillment202309GetPackageDetailResponseDataInsurance = Fulfillment202309GetPackageDetailResponseDataInsurance;
