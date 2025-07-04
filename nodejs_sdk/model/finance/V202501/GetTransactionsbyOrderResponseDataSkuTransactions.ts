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
import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown';
import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown';
import { Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown } from './GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown';

export class Finance202501GetTransactionsbyOrderResponseDataSkuTransactions {
    /**
    * The total fees and taxes charged by TikTok Shop at the time of order settlement. Shipping-related costs are excluded. This is equivalent to the sum of all contributory amounts in `fee_tax_breakdown`. 
    */
    'feeTaxAmount'?: string;
    'feeTaxBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown;
    /**
    * The product title.
    */
    'productName'?: string;
    /**
    * The SKU quantity included in the order settlement.
    */
    'quantity'?: string;
    /**
    * The revenue amount at the time of order settlement. This is equivalent to the sum of all amounts in `revenue_breakdown`.
    */
    'revenueAmount'?: string;
    'revenueBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown;
    /**
    * The settlement amount for the SKU.
    */
    'settlementAmount'?: string;
    /**
    * The shipping costs at the time of order settlement. This is equivalent to the sum of all contributory amounts in `shipping_cost_breakdown`.
    */
    'shippingCostAmount'?: string;
    'shippingCostBreakdown'?: Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown;
    /**
    * The SKU ID in TikTok Shop.
    */
    'skuId'?: string;
    /**
    * The SKU name.
    */
    'skuName'?: string;
    /**
    * The statement ID.
    */
    'statementId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feeTaxAmount",
            "baseName": "fee_tax_amount",
            "type": "string"
        },
        {
            "name": "feeTaxBreakdown",
            "baseName": "fee_tax_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown"
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "string"
        },
        {
            "name": "revenueAmount",
            "baseName": "revenue_amount",
            "type": "string"
        },
        {
            "name": "revenueBreakdown",
            "baseName": "revenue_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown"
        },
        {
            "name": "settlementAmount",
            "baseName": "settlement_amount",
            "type": "string"
        },
        {
            "name": "shippingCostAmount",
            "baseName": "shipping_cost_amount",
            "type": "string"
        },
        {
            "name": "shippingCostBreakdown",
            "baseName": "shipping_cost_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown"
        },
        {
            "name": "skuId",
            "baseName": "sku_id",
            "type": "string"
        },
        {
            "name": "skuName",
            "baseName": "sku_name",
            "type": "string"
        },
        {
            "name": "statementId",
            "baseName": "statement_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.attributeTypeMap;
    }
}

