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
exports.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber = void 0;
var Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber = /** @class */ (function () {
    function Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber() {
    }
    Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber.getAttributeTypeMap = function () {
        return Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber.attributeTypeMap;
    };
    Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber.discriminator = undefined;
    Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber.attributeTypeMap = [
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string"
        },
        {
            "name": "localNumber",
            "baseName": "local_number",
            "type": "string"
        }
    ];
    return Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber;
}());
exports.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber = Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber;
