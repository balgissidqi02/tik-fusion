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
exports.Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope = void 0;
var Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope = /** @class */ (function () {
    function Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope() {
    }
    Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope.getAttributeTypeMap = function () {
        return Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope.attributeTypeMap;
    };
    Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope.discriminator = undefined;
    Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope.attributeTypeMap = [
        {
            "name": "specificAreas",
            "baseName": "specific_areas",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope;
}());
exports.Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope = Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope;
