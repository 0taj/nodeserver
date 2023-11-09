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
const index_js_1 = require("../index.js");
const writer_1 = require("../utils/writer"); // Import the response function
const path = __importStar(require("path"));
// const queryAsync = util.promisify(pool.query);
/**
 * Create an access token.
 *
 * @param body AuthenticationRequest
 * @returns AuthenticationToken
 **/
function CreateAuthToken(body) {
    return __awaiter(this, void 0, void 0, function* () {
        return ''; // You can return the actual value here
    });
}
exports.CreateAuthToken = CreateAuthToken;
/**
 * Delete all versions of this package.
 *
 * @param xAuthorization AuthenticationToken
 * @param name PackageName
 * @returns void
 **/
function PackageByNameDelete(name, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        // Your code here
    });
}
exports.PackageByNameDelete = PackageByNameDelete;
/**
 * Return the history of this package (all versions).
 *
 * @param name PackageName
 * @param xAuthorization AuthenticationToken
 * @returns List
 **/
function PackageByNameGet(name, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const examples = {};
        examples['application/json'] = [
            {
                "Action": "CREATE",
                "User": {
                    "name": "Alfalfa",
                    "isAdmin": true
                },
                "PackageMetadata": {
                    "Version": "1.2.3",
                    "ID": "ID",
                    "Name": "Name"
                },
                "Date": "2023-03-23T23:11:15Z"
            },
            {
                "Action": "CREATE",
                "User": {
                    "name": "Alfalfa",
                    "isAdmin": true
                },
                "PackageMetadata": {
                    "Version": "1.2.3",
                    "ID": "ID",
                    "Name": "Name"
                },
                "Date": "2023-03-23T23:11:15Z"
            },
        ];
        return examples['application/json'];
    });
}
exports.PackageByNameGet = PackageByNameGet;
/**
 * Get any packages fitting the regular expression.
 * Search for a package using a regular expression over package names and READMEs. This is similar to search by name.
 *
 * @param body PackageRegEx
 * @param xAuthorization AuthenticationToken
 * @returns List
 **/
function PackageByRegExGet(body, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const examples = {};
        examples['application/json'] = [
            {
                "Version": "1.2.3",
                "ID": "ID",
                "Name": "Name"
            },
            {
                "Version": "1.2.3",
                "ID": "ID",
                "Name": "Name"
            },
        ];
        return examples['application/json'];
    });
}
exports.PackageByRegExGet = PackageByRegExGet;
/**
 *
 * @param body PackageData
 * @param xAuthorization AuthenticationToken
 * @returns Package
 **/
function PackageCreate(body, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Name = "Package_Name11";
            const Version = "1.0.0.8.2";
            const Content = 'LONG_TEXT10';
            const URL = 'LONG_TEXT1234';
            const JSProgram = 'JSPROGRAM325';
            const DataDescription = 'DATA226';
            // const result = await connection.execute('CALL InsertPackage(?, ?, ?, ?, ?)', [
            const [result, fields] = yield index_js_1.promisePool.execute('CALL InsertPackage(?, ?, ?, ?, ?, ?)', [
                Name,
                Version,
                Content,
                URL,
                JSProgram,
            ]);
            //connection.release();
            console.log(result);
            console.log(typeof (result));
            console.log('Stored procedure executed successfully.');
            return (0, writer_1.respondWithCode)(201, "testing");
        }
        catch (error) {
            console.error('Error calling the stored procedure:', error);
            throw error; // Re-throw the error for the caller to handle
        }
    });
}
exports.PackageCreate = PackageCreate;
/**
 * Delete this version of the package.
 *
 * @param xAuthorization AuthenticationToken
 * @param id PackageID Package ID
 * @returns void
 **/
function PackageDelete(id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        // Your code here
    });
}
exports.PackageDelete = PackageDelete;
/**
 *
 * @param id PackageID
 * @param xAuthorization AuthenticationToken
 * @returns PackageRating
 **/
function PackageRate(id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const examples = {};
        examples['application/json'] = {
            "GoodPinningPractice": 2.3021358869347655,
            "NetScore": 9.301444243932576,
            "PullRequest": 7.061401241503109,
            "ResponsiveMaintainer": 5.962133916683182,
            "LicenseScore": 5.637376656633329,
            "RampUp": 1.4658129805029452,
            "BusFactor": 0.8008281904610115,
            "Correctness": 6.027456183070403,
        };
        return examples['application/json'];
    });
}
exports.PackageRate = PackageRate;
/**
 * Interact with the package with this ID
 * Return this package.
 *
 * @param xAuthorization AuthenticationToken
 * @param id PackageID ID of package to fetch
 * @returns Package
 **/
function PackageRetrieve(id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const examples = {};
        examples['application/json'] = {
            "metadata": {
                "Version": "1.2.3",
                "ID": "ID",
                "Name": "Name",
            },
            "data": {
                "Content": "Content",
                "JSProgram": "JSProgram",
                "URL": "URL",
            },
        };
        try {
            let connection;
            // const [results, fields] = await promisePool.execute<ProcedureCallPacket<test[]>>(
            //   'SELECT PM.*, PD.* FROM Package AS P JOIN PackageMetadata AS PM ON P.MetadataID = PM.ID JOIN PackageData AS PD ON P.DataID = PD.ID WHERE P.PackageID = ?',
            //   [id]
            // );
            const [results] = yield index_js_1.promisePool.execute('CALL GetPackage(?)', [
                id,
            ]);
            const isResultSetHeader = (data) => {
                if (!data || typeof data !== 'object')
                    return false;
                const keys = [
                    'fieldCount',
                    'affectedRows',
                    'insertId',
                    'info',
                    'serverStatus',
                    'warningStatus',
                    'changedRows',
                ];
                return keys.every((key) => key in data);
            };
            results.forEach((users) => {
                if (isResultSetHeader(users)) {
                    console.log('----------------');
                    console.log('Affected Rows:', users.affectedRows);
                }
                else {
                    users.forEach((user) => {
                        console.log('----------------');
                        console.log('id:  ', user.ID);
                        console.log('name:', user.Name);
                        console.log('URL: ', user.URL);
                    });
                }
            });
            // const [results, fields] = await promisePool.execute<test[]>('SELECT * FROM Package', []);
            // const response = (results[0][0] as { response: YourResponseType }).response;
            // console.log(typeof(results));
            // console.log(results[0][0].v_JSON);
            // const selectResult: RowDataPacket[] = results[0] as RowDataPacket[];
            console.log(results);
            // console.log(fields);
            return (0, writer_1.respondWithCode)(200, results[0][0]);
        }
        catch (error) {
            console.error('Error calling the stored procedure:', error);
            throw error; // Re-throw the error for the caller to handle
        }
        // return examples['application/json'];
    });
}
exports.PackageRetrieve = PackageRetrieve;
/**
 * Update this content of the package.
 * The name, version, and ID must match.  The package contents (from PackageData) will replace the previous contents.
 *
 * @param body Package
 * @param id PackageID
 * @param xAuthorization AuthenticationToken
 * @returns void
 **/
function PackageUpdate(body, id, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        // Your code here
    });
}
exports.PackageUpdate = PackageUpdate;
/**
 * Get the packages from the registry.
 * Get any packages fitting the query. Search for packages satisfying the indicated query.  If you want to enumerate all packages, provide an array with a single PackageQuery whose name is "*".  The response is paginated; the response header includes the offset to use in the next query.
 *
 * @param body List
 * @param offset string Provide this for pagination. If not provided, returns the first page of results. (optional)
 * @param xAuthorization AuthenticationToken
 * @returns List
 **/
function PackagesList(body, offset, xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const examples = {};
        examples['application/json'] = [
            {
                "Version": "1.2.3",
                "ID": "ID",
                "Name": "Name",
            },
            {
                "Version": "1.2.3",
                "ID": "ID",
                "Name": "Name",
            },
        ];
        return examples['application/json'];
    });
}
exports.PackagesList = PackagesList;
/**
 * Reset the registry
 * Reset the registry to a system default state.
 *
 * @param xAuthorization AuthenticationToken
 * @returns void
 **/
function RegistryReset(xAuthorization) {
    return __awaiter(this, void 0, void 0, function* () {
        // Your code here
    });
}
exports.RegistryReset = RegistryReset;
function MyPage() {
    return __awaiter(this, void 0, void 0, function* () {
        return path.join(__dirname, '..', 'html', 'index.html');
    });
}
exports.MyPage = MyPage;
