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
exports.Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages = void 0;
var Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages = /** @class */ (function () {
    function Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages() {
    }
    Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages.getAttributeTypeMap = function () {
        return Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages.attributeTypeMap;
    };
    Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages.discriminator = undefined;
    Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages.attributeTypeMap = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "thumbUrls",
            "baseName": "thumb_urls",
            "type": "Array<string>"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<string>"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }
    ];
    return Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages;
}());
exports.Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages = Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages;
