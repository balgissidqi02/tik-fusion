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
exports.Product202309GetGlobalCategoryRulesResponseDataProductCertifications = void 0;
var Product202309GetGlobalCategoryRulesResponseDataProductCertifications = /** @class */ (function () {
    function Product202309GetGlobalCategoryRulesResponseDataProductCertifications() {
    }
    Product202309GetGlobalCategoryRulesResponseDataProductCertifications.getAttributeTypeMap = function () {
        return Product202309GetGlobalCategoryRulesResponseDataProductCertifications.attributeTypeMap;
    };
    Product202309GetGlobalCategoryRulesResponseDataProductCertifications.discriminator = undefined;
    Product202309GetGlobalCategoryRulesResponseDataProductCertifications.attributeTypeMap = [
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
            "name": "optionalRegions",
            "baseName": "optional_regions",
            "type": "Array<string>"
        },
        {
            "name": "requiredRegions",
            "baseName": "required_regions",
            "type": "Array<string>"
        },
        {
            "name": "requirementConditions",
            "baseName": "requirement_conditions",
            "type": "Array<Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions>"
        },
        {
            "name": "sampleImageUrl",
            "baseName": "sample_image_url",
            "type": "string"
        }
    ];
    return Product202309GetGlobalCategoryRulesResponseDataProductCertifications;
}());
exports.Product202309GetGlobalCategoryRulesResponseDataProductCertifications = Product202309GetGlobalCategoryRulesResponseDataProductCertifications;
