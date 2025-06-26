"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AccessToken = exports.AccessTokenTool = exports.AccessTokenBuilder = exports.UserType = void 0;
var config_1 = require("./config");
var request_1 = __importDefault(require("request"));
var auth_host = "https://auth.tiktok-shops.com";
var refresh_token_path = "/api/v2/token/refresh";
var get_access_token_path = "/api/v2/token/get";
var grant_type = "authorized_code";
var UserType;
(function (UserType) {
    UserType[UserType["Seller"] = 0] = "Seller";
    UserType[UserType["Creator"] = 1] = "Creator";
})(UserType = exports.UserType || (exports.UserType = {}));
var AccessToken = /** @class */ (function () {
    function AccessToken(_a) {
        var access_token = _a.access_token, refresh_token = _a.refresh_token, config = _a.config;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.config = config;
    }
    AccessToken.prototype.refreshToken = function (props) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _refresh_token, _c, auto_filled, path, app_key, app_secret, refresh_token, qs, options;
            var _this = this;
            return __generator(this, function (_d) {
                _refresh_token = props.refresh_token, _c = props.auto_filled, auto_filled = _c === void 0 ? false : _c;
                path = auth_host + refresh_token_path;
                app_key = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.app_key) || config_1.ClientConfiguration.globalConfig.app_key;
                app_secret = ((_b = this.config) === null || _b === void 0 ? void 0 : _b.app_secret) || config_1.ClientConfiguration.globalConfig.app_secret;
                refresh_token = _refresh_token || this.refresh_token;
                if (!app_key) {
                    throw new Error("app_key is required");
                }
                if (!app_secret) {
                    throw new Error("app_secret is required");
                }
                if (!refresh_token) {
                    throw new Error("refresh_token is required");
                }
                qs = {
                    grant_type: grant_type,
                    refresh_token: refresh_token,
                    app_key: app_key,
                    app_secret: app_secret
                };
                options = {
                    method: "GET",
                    url: path,
                    qs: qs,
                    useQuerystring: true
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        (0, request_1["default"])(options, function (error, response, body) {
                            var _a, _b, _c, _d;
                            if (error) {
                                reject(error);
                            }
                            if (auto_filled) {
                                if ((_a = body.data) === null || _a === void 0 ? void 0 : _a.access_token)
                                    _this.access_token = (_b = body.data) === null || _b === void 0 ? void 0 : _b.access_token;
                                if ((_c = body.data) === null || _c === void 0 ? void 0 : _c.refresh_token)
                                    _this.refresh_token = (_d = body.data) === null || _d === void 0 ? void 0 : _d.refresh_token;
                            }
                            resolve({
                                response: response,
                                body: body
                            });
                        });
                    })];
            });
        });
    };
    AccessToken.prototype.getAccessToken = function (props) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var auth_code, _c, auto_filled, path, app_key, app_secret, qs, options;
            var _this = this;
            return __generator(this, function (_d) {
                auth_code = props.auth_code, _c = props.auto_filled, auto_filled = _c === void 0 ? false : _c;
                path = auth_host + get_access_token_path;
                app_key = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.app_key) || config_1.ClientConfiguration.globalConfig.app_key;
                app_secret = ((_b = this.config) === null || _b === void 0 ? void 0 : _b.app_secret) || config_1.ClientConfiguration.globalConfig.app_secret;
                if (!app_key) {
                    throw new Error("app_key is required");
                }
                if (!app_secret) {
                    throw new Error("app_secret is required");
                }
                if (!auth_code) {
                    throw new Error("auth_code is required");
                }
                qs = {
                    grant_type: grant_type,
                    auth_code: auth_code,
                    app_key: app_key,
                    app_secret: app_secret
                };
                options = {
                    method: "GET",
                    url: path,
                    qs: qs,
                    useQuerystring: true
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        (0, request_1["default"])(options, function (error, response, body) {
                            var _a, _b, _c, _d;
                            if (error) {
                                reject(error);
                            }
                            if (auto_filled) {
                                if ((_a = body.data) === null || _a === void 0 ? void 0 : _a.access_token)
                                    _this.access_token = (_b = body.data) === null || _b === void 0 ? void 0 : _b.access_token;
                                if ((_c = body.data) === null || _c === void 0 ? void 0 : _c.refresh_token)
                                    _this.refresh_token = (_d = body.data) === null || _d === void 0 ? void 0 : _d.refresh_token;
                            }
                            resolve({
                                response: response,
                                body: body
                            });
                        });
                    })];
            });
        });
    };
    return AccessToken;
}());
exports.AccessToken = AccessToken;
var AccessTokenBuilder = /** @class */ (function () {
    function AccessTokenBuilder() {
    }
    AccessTokenBuilder.build = function (access_token, refresh_token, config) {
        return new AccessToken({
            access_token: access_token,
            refresh_token: refresh_token,
            config: config
        });
    };
    return AccessTokenBuilder;
}());
exports.AccessTokenBuilder = AccessTokenBuilder;
var AccessTokenTool = /** @class */ (function () {
    function AccessTokenTool() {
    }
    AccessTokenTool.refreshToken = function (refresh_token, app_key, app_secret) {
        return __awaiter(this, void 0, void 0, function () {
            var _app_key, _app_secret, path, qs, options;
            return __generator(this, function (_a) {
                _app_key = app_key || config_1.ClientConfiguration.globalConfig.app_key;
                _app_secret = app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
                if (!_app_key) {
                    throw new Error("app_key is required");
                }
                if (!_app_secret) {
                    throw new Error("app_secret is required");
                }
                if (!refresh_token) {
                    throw new Error("refresh_token is required");
                }
                path = auth_host + refresh_token_path;
                qs = {
                    grant_type: grant_type,
                    refresh_token: refresh_token,
                    app_key: _app_key,
                    app_secret: _app_secret
                };
                options = {
                    method: "GET",
                    url: path,
                    qs: qs,
                    useQuerystring: true
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        (0, request_1["default"])(options, function (error, response, body) {
                            if (error) {
                                reject(error);
                            }
                            resolve({
                                response: response,
                                body: body
                            });
                        });
                    })];
            });
        });
    };
    AccessTokenTool.getAccessToken = function (auth_code, app_key, app_secret) {
        return __awaiter(this, void 0, void 0, function () {
            var _app_key, _app_secret, path, qs, options;
            return __generator(this, function (_a) {
                _app_key = app_key || config_1.ClientConfiguration.globalConfig.app_key;
                _app_secret = app_secret || config_1.ClientConfiguration.globalConfig.app_secret;
                if (!_app_key) {
                    throw new Error("app_key is required");
                }
                if (!_app_secret) {
                    throw new Error("app_secret is required");
                }
                if (!auth_code) {
                    throw new Error("auth_code is required");
                }
                path = auth_host + get_access_token_path;
                qs = {
                    grant_type: grant_type,
                    auth_code: auth_code,
                    app_key: _app_key,
                    app_secret: _app_secret
                };
                options = {
                    method: "GET",
                    url: path,
                    qs: qs,
                    useQuerystring: true
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        (0, request_1["default"])(options, function (error, response, body) {
                            if (error) {
                                reject(error);
                            }
                            resolve({
                                response: response,
                                body: body
                            });
                        });
                    })];
            });
        });
    };
    return AccessTokenTool;
}());
exports.AccessTokenTool = AccessTokenTool;
