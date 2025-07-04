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
exports.Product202309GetCategoryRulesResponseDataProductCertifications = void 0;
var Product202309GetCategoryRulesResponseDataProductCertifications = /** @class */ (function () {
    function Product202309GetCategoryRulesResponseDataProductCertifications() {
    }
    Product202309GetCategoryRulesResponseDataProductCertifications.getAttributeTypeMap = function () {
        return Product202309GetCategoryRulesResponseDataProductCertifications.attributeTypeMap;
    };
    Product202309GetCategoryRulesResponseDataProductCertifications.discriminator = undefined;
    Product202309GetCategoryRulesResponseDataProductCertifications.attributeTypeMap = [
        {
            "name": "documentDetails",
            "baseName": "document_details",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isRequired",
            "baseName": "is_required",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "requirementConditions",
            "baseName": "requirement_conditions",
            "type": "Array<Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions>"
        },
        {
            "name": "sampleImageUrl",
            "baseName": "sample_image_url",
            "type": "string"
        }
    ];
    return Product202309GetCategoryRulesResponseDataProductCertifications;
}());
exports.Product202309GetCategoryRulesResponseDataProductCertifications = Product202309GetCategoryRulesResponseDataProductCertifications;
