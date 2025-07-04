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
exports.Product202505CreateImageTranslationTasksRequestBodyImages = void 0;
var Product202505CreateImageTranslationTasksRequestBodyImages = /** @class */ (function () {
    function Product202505CreateImageTranslationTasksRequestBodyImages() {
    }
    Product202505CreateImageTranslationTasksRequestBodyImages.getAttributeTypeMap = function () {
        return Product202505CreateImageTranslationTasksRequestBodyImages.attributeTypeMap;
    };
    Product202505CreateImageTranslationTasksRequestBodyImages.discriminator = undefined;
    Product202505CreateImageTranslationTasksRequestBodyImages.attributeTypeMap = [
        {
            "name": "imageUri",
            "baseName": "image_uri",
            "type": "string"
        },
        {
            "name": "targetLanguages",
            "baseName": "target_languages",
            "type": "Array<string>"
        }
    ];
    return Product202505CreateImageTranslationTasksRequestBodyImages;
}());
exports.Product202505CreateImageTranslationTasksRequestBodyImages = Product202505CreateImageTranslationTasksRequestBodyImages;
