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
exports.Fulfillment202502UploadInvoiceResponseDataErrors = void 0;
var Fulfillment202502UploadInvoiceResponseDataErrors = /** @class */ (function () {
    function Fulfillment202502UploadInvoiceResponseDataErrors() {
    }
    Fulfillment202502UploadInvoiceResponseDataErrors.getAttributeTypeMap = function () {
        return Fulfillment202502UploadInvoiceResponseDataErrors.attributeTypeMap;
    };
    Fulfillment202502UploadInvoiceResponseDataErrors.discriminator = undefined;
    Fulfillment202502UploadInvoiceResponseDataErrors.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "Fulfillment202502UploadInvoiceResponseDataErrorsDetail"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return Fulfillment202502UploadInvoiceResponseDataErrors;
}());
exports.Fulfillment202502UploadInvoiceResponseDataErrors = Fulfillment202502UploadInvoiceResponseDataErrors;
