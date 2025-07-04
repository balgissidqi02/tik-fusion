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
exports.Product202309CreateProductRequestBody = void 0;
var Product202309CreateProductRequestBody = /** @class */ (function () {
    function Product202309CreateProductRequestBody() {
    }
    Product202309CreateProductRequestBody.getAttributeTypeMap = function () {
        return Product202309CreateProductRequestBody.attributeTypeMap;
    };
    Product202309CreateProductRequestBody.discriminator = undefined;
    Product202309CreateProductRequestBody.attributeTypeMap = [
        {
            "name": "brandId",
            "baseName": "brand_id",
            "type": "string"
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string"
        },
        {
            "name": "categoryVersion",
            "baseName": "category_version",
            "type": "string"
        },
        {
            "name": "certifications",
            "baseName": "certifications",
            "type": "Array<Product202309CreateProductRequestBodyCertifications>"
        },
        {
            "name": "deliveryOptionIds",
            "baseName": "delivery_option_ids",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "externalProductId",
            "baseName": "external_product_id",
            "type": "string"
        },
        {
            "name": "idempotencyKey",
            "baseName": "idempotency_key",
            "type": "string"
        },
        {
            "name": "isCodAllowed",
            "baseName": "is_cod_allowed",
            "type": "boolean"
        },
        {
            "name": "isNotForSale",
            "baseName": "is_not_for_sale",
            "type": "boolean"
        },
        {
            "name": "isPreOwned",
            "baseName": "is_pre_owned",
            "type": "boolean"
        },
        {
            "name": "listingPlatforms",
            "baseName": "listing_platforms",
            "type": "Array<string>"
        },
        {
            "name": "mainImages",
            "baseName": "main_images",
            "type": "Array<Product202309CreateProductRequestBodyMainImages>"
        },
        {
            "name": "manufacturerIds",
            "baseName": "manufacturer_ids",
            "type": "Array<string>"
        },
        {
            "name": "minimumOrderQuantity",
            "baseName": "minimum_order_quantity",
            "type": "number"
        },
        {
            "name": "packageDimensions",
            "baseName": "package_dimensions",
            "type": "Product202309CreateProductRequestBodyPackageDimensions"
        },
        {
            "name": "packageWeight",
            "baseName": "package_weight",
            "type": "Product202309CreateProductRequestBodyPackageWeight"
        },
        {
            "name": "primaryCombinedProductId",
            "baseName": "primary_combined_product_id",
            "type": "string"
        },
        {
            "name": "productAttributes",
            "baseName": "product_attributes",
            "type": "Array<Product202309CreateProductRequestBodyProductAttributes>"
        },
        {
            "name": "responsiblePersonIds",
            "baseName": "responsible_person_ids",
            "type": "Array<string>"
        },
        {
            "name": "saveMode",
            "baseName": "save_mode",
            "type": "string"
        },
        {
            "name": "shippingInsuranceRequirement",
            "baseName": "shipping_insurance_requirement",
            "type": "string"
        },
        {
            "name": "sizeChart",
            "baseName": "size_chart",
            "type": "Product202309CreateProductRequestBodySizeChart"
        },
        {
            "name": "skus",
            "baseName": "skus",
            "type": "Array<Product202309CreateProductRequestBodySkus>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "video",
            "baseName": "video",
            "type": "Product202309CreateProductRequestBodyVideo"
        }
    ];
    return Product202309CreateProductRequestBody;
}());
exports.Product202309CreateProductRequestBody = Product202309CreateProductRequestBody;
