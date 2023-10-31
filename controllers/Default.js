'use strict';
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPage = exports.RegistryReset = exports.PackagesList = exports.PackageUpdate = exports.PackageRetrieve = exports.PackageRate = exports.PackageDelete = exports.PackageCreate = exports.PackageByRegExGet = exports.PackageByNameGet = exports.PackageByNameDelete = exports.CreateAuthToken = void 0;
const Default = __importStar(require("../service/DefaultService"));
const writer_1 = require("../utils/writer");
function handleRequestAsync(fn, req, res, next, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fn(...args);
            (0, writer_1.writeJson)(res, response);
        }
        catch (error) {
            (0, writer_1.writeJson)(res, error);
        }
    });
}
function CreateAuthToken(req, res, next, body) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.CreateAuthToken, req, res, next, body);
    });
}
exports.CreateAuthToken = CreateAuthToken;
function PackageByNameDelete(req, res, next, name, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageByNameDelete, req, res, next, name, xAuthorization);
    });
}
exports.PackageByNameDelete = PackageByNameDelete;
function PackageByNameGet(req, res, next, name, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageByNameGet, req, res, next, name, xAuthorization);
    });
}
exports.PackageByNameGet = PackageByNameGet;
function PackageByRegExGet(req, res, next, body, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageByRegExGet, req, res, next, body, xAuthorization);
    });
}
exports.PackageByRegExGet = PackageByRegExGet;
function PackageCreate(req, res, next, body, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageCreate, req, res, next, body, xAuthorization);
    });
}
exports.PackageCreate = PackageCreate;
function PackageDelete(req, res, next, id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageDelete, req, res, next, id, xAuthorization);
    });
}
exports.PackageDelete = PackageDelete;
function PackageRate(req, res, next, id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageRate, req, res, next, id, xAuthorization);
    });
}
exports.PackageRate = PackageRate;
function PackageRetrieve(req, res, next, id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageRetrieve, req, res, next, id, xAuthorization);
    });
}
exports.PackageRetrieve = PackageRetrieve;
function PackageUpdate(req, res, next, body, id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackageUpdate, req, res, next, body, id, xAuthorization);
    });
}
exports.PackageUpdate = PackageUpdate;
function PackagesList(req, res, next, body, offset, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        yield handleRequestAsync(Default.PackagesList, req, res, next, body, offset, xAuthorization);
    });
}
exports.PackagesList = PackagesList;
function RegistryReset(req, res, next, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        // const xAuthorization = req.headers['x-authorization'];
        console.log(req);
        yield handleRequestAsync(Default.RegistryReset, req, res, next, xAuthorization);
    });
}
exports.RegistryReset = RegistryReset;
function MyPage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filePath = yield Default.MyPage();
            res.sendFile(filePath, (err) => {
                if (err) {
                    console.error('Error sending the HTML file:', err);
                    res.status(500).send('Internal Server Error');
                }
            });
        }
        catch (error) {
            // Handle any errors
            next(error);
        }
    });
}
exports.MyPage = MyPage;
