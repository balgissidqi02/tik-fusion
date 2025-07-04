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
exports.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles = void 0;
var Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles = /** @class */ (function () {
    function Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles() {
    }
    Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles.getAttributeTypeMap = function () {
        return Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles.attributeTypeMap;
    };
    Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles.discriminator = undefined;
    Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber"
        }
    ];
    return Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles;
}());
exports.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles = Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles;
