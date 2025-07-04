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

import { RequestFile } from '../../models';
import { Product202505CreateImageTranslationTasksRequestBodyImages } from './CreateImageTranslationTasksRequestBodyImages';

export class Product202505CreateImageTranslationTasksRequestBody {
    /**
    * The list of images to translate. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the images first and obtain the corresponding image URIs.  **Note**: The total number of image and target language combinations must not exceed 20. For example, you can submit 10 images with 2 target languages each, but you can\'t submit 10 images with 5 target languages each.
    */
    'images'?: Array<Product202505CreateImageTranslationTasksRequestBodyImages>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<Product202505CreateImageTranslationTasksRequestBodyImages>"
        }    ];

    static getAttributeTypeMap() {
        return Product202505CreateImageTranslationTasksRequestBody.attributeTypeMap;
    }
}

