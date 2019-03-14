"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const solutionpackage_1 = __importDefault(require("../services/solutionpackage"));
/* API Controllers */
exports.getPackages = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const packages = yield solutionpackage_1.default.getPackages();
        res.json(packages);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.getPackage = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sPackage = yield solutionpackage_1.default.getPackage(id);
        res.json(sPackage);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.addPackage = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const text = req.body.text;
        const sPackage = yield solutionpackage_1.default.addPackage(text);
        res.json(sPackage);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.updatePackage = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const text = req.body.text;
        const sPackage = yield solutionpackage_1.default.updatePackage(text);
        res.json(sPackage);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.removePackage = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield solutionpackage_1.default.removePackage(id);
        res.send('ok');
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
//# sourceMappingURL=solutionpackage.1.js.map