"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.AccessTokenTool = exports.TikTokShopNodeApiClient = exports.ClientConfiguration = void 0;
var config_1 = require("./config");
__createBinding(exports, config_1, "ClientConfiguration");
var client_1 = require("./client");
__createBinding(exports, client_1, "TikTokShopNodeApiClient");
var token_1 = require("./token");
__createBinding(exports, token_1, "AccessTokenTool");
