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
const scopeitem_1 = __importDefault(require("../services/scopeitem"));
/* API Controllers */
exports.getSivs = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const sivs = yield scopeitem_1.default.getSivs();
        res.json(sivs);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.getSiv = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const siv = yield scopeitem_1.default.getSiv(id);
        res.json(siv);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.addSiv = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const text = req.body.text;
        const siv = yield scopeitem_1.default.addSiv(text);
        res.json(siv);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.updateSiv = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const text = req.body.text;
        const siv = yield scopeitem_1.default.updateSiv(text);
        res.json(siv);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
exports.removeSiv = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield scopeitem_1.default.removeSiv(id);
        res.send('ok');
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
//# sourceMappingURL=scopeitem.js.map