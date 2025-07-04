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
exports.Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles = void 0;
var Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles = /** @class */ (function () {
    function Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles() {
    }
    Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles.getAttributeTypeMap = function () {
        return Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles.attributeTypeMap;
    };
    Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles.discriminator = undefined;
    Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
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
            "type": "Product202501SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber"
        },
        {
            "name": "registeredTradeName",
            "baseName": "registered_trade_name",
            "type": "string"
        }
    ];
    return Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles;
}());
exports.Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles = Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles;
