"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Scopeitem_1 = require("../models/Scopeitem");
const getSivs = () => __awaiter(this, void 0, void 0, function* () {
    const sivRepo = typeorm_1.getManager().getRepository(Scopeitem_1.Scopeitem);
    return sivRepo.find();
});
const getSiv = (id) => __awaiter(this, void 0, void 0, function* () {
    const sivRepo = typeorm_1.getManager().getRepository(Scopeitem_1.Scopeitem);
    return sivRepo.findOne(id);
});
const addSiv = (name) => __awaiter(this, void 0, void 0, function* () {
    const sivRepo = typeorm_1.getManager().getRepository(Scopeitem_1.Scopeitem);
    const siv = new Scopeitem_1.Scopeitem();
    siv.name = name;
    return sivRepo.save(siv);
});
const removeSiv = (id) => __awaiter(this, void 0, void 0, function* () {
    const sivRepo = typeorm_1.getManager().getRepository(Scopeitem_1.Scopeitem);
    const siv = yield sivRepo.findOne(id);
    return sivRepo.remove(siv);
});
const updateSiv = (id) => __awaiter(this, void 0, void 0, function* () {
    const sivRepo = typeorm_1.getManager().getRepository(Scopeitem_1.Scopeitem);
    const siv = yield sivRepo.findOne(id);
    return sivRepo.update(siv, { name: '' });
});
exports.default = {
    getSivs,
    getSiv,
    addSiv,
    removeSiv,
    updateSiv
};
//# sourceMappingURL=scopeitem.js.map