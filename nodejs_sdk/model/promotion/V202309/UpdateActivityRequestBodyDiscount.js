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
exports.Promotion202309UpdateActivityRequestBodyDiscount = void 0;
var Promotion202309UpdateActivityRequestBodyDiscount = /** @class */ (function () {
    function Promotion202309UpdateActivityRequestBodyDiscount() {
    }
    Promotion202309UpdateActivityRequestBodyDiscount.getAttributeTypeMap = function () {
        return Promotion202309UpdateActivityRequestBodyDiscount.attributeTypeMap;
    };
    Promotion202309UpdateActivityRequestBodyDiscount.discriminator = undefined;
    Promotion202309UpdateActivityRequestBodyDiscount.attributeTypeMap = [
        {
            "name": "bmsmDiscount",
            "baseName": "bmsm_discount",
            "type": "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount"
        },
        {
            "name": "shippingDiscount",
            "baseName": "shipping_discount",
            "type": "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount"
        }
    ];
    return Promotion202309UpdateActivityRequestBodyDiscount;
}());
exports.Promotion202309UpdateActivityRequestBodyDiscount = Promotion202309UpdateActivityRequestBodyDiscount;
