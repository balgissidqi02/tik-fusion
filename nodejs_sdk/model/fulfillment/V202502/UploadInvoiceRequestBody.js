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
exports.Fulfillment202502UploadInvoiceRequestBody = void 0;
var Fulfillment202502UploadInvoiceRequestBody = /** @class */ (function () {
    function Fulfillment202502UploadInvoiceRequestBody() {
    }
    Fulfillment202502UploadInvoiceRequestBody.getAttributeTypeMap = function () {
        return Fulfillment202502UploadInvoiceRequestBody.attributeTypeMap;
    };
    Fulfillment202502UploadInvoiceRequestBody.discriminator = undefined;
    Fulfillment202502UploadInvoiceRequestBody.attributeTypeMap = [
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<Fulfillment202502UploadInvoiceRequestBodyInvoices>"
        }
    ];
    return Fulfillment202502UploadInvoiceRequestBody;
}());
exports.Fulfillment202502UploadInvoiceRequestBody = Fulfillment202502UploadInvoiceRequestBody;
