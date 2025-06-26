"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.generateSign = void 0;
var crypto_1 = __importDefault(require("crypto"));
var excludeKeys = ["access_token", "sign"];
var generateSign = function (requestOption, app_secret) {
    var _a;
    var signString = "";
    // step1: Extract all query parameters excluding sign and access_token. Reorder the parameter keys in alphabetical order:
    var params = requestOption.qs || {};
    var sortedParams = Object.keys(params)
        .filter(function (key) { return !excludeKeys.includes(key); })
        .sort()
        .map(function (key) { return ({ key: key, value: params[key] }); });
    //step2: Concatenate all the parameters in the format {key}{value}:
    var paramString = sortedParams
        .map(function (_a) {
        var key = _a.key, value = _a.value;
        return "".concat(key).concat(value);
    })
        .join("");
    signString += paramString;
    //step3: Append the string from Step 2 to the API request path:
    // @ts-ignore
    var pathname = new URL(requestOption.uri || '').pathname;
    signString = "".concat(pathname).concat(paramString);
    //step4: If the request header content_type is not multipart/form-data, append the API request body to the string from Step 3:
    if (((_a = requestOption.headers) === null || _a === void 0 ? void 0 : _a["content_type"]) !== "multipart/form-data" &&
        requestOption.body &&
        Object.keys(requestOption.body).length) {
        var body = JSON.stringify(requestOption.body);
        signString += body;
    }
    //step5: Wrap the string generated in Step 4 with the app_secret:
    signString = "".concat(app_secret).concat(signString).concat(app_secret);
    //step6: Encode your wrapped string using HMAC-SHA256:
    var hmac = crypto_1["default"].createHmac("sha256", app_secret);
    hmac.update(signString);
    var sign = hmac.digest("hex");
    return sign;
};
exports.generateSign = generateSign;
