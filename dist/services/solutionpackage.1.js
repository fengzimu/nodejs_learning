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
const Solutionpackage_1 = require("../models/Solutionpackage");
const getPackages = () => __awaiter(this, void 0, void 0, function* () {
    const packageRepo = typeorm_1.getManager().getRepository(Solutionpackage_1.Solutionpackage);
    return packageRepo.find();
});
const getPackage = (id) => __awaiter(this, void 0, void 0, function* () {
    const packageRepo = typeorm_1.getManager().getRepository(Solutionpackage_1.Solutionpackage);
    return packageRepo.findOne(id);
});
const addPackage = (name) => __awaiter(this, void 0, void 0, function* () {
    const packageRepo = typeorm_1.getManager().getRepository(Solutionpackage_1.Solutionpackage);
    const sPackage = new Solutionpackage_1.Solutionpackage();
    sPackage.name = name;
    return packageRepo.save(sPackage);
});
const removePackage = (id) => __awaiter(this, void 0, void 0, function* () {
    const packageRepo = typeorm_1.getManager().getRepository(Solutionpackage_1.Solutionpackage);
    const sPackage = yield packageRepo.findOne(id);
    return packageRepo.remove(sPackage);
});
const updatePackage = (id) => __awaiter(this, void 0, void 0, function* () {
    const packageRepo = typeorm_1.getManager().getRepository(Solutionpackage_1.Solutionpackage);
    const sPackage = yield packageRepo.findOne(id);
    return packageRepo.update(sPackage, { name: '' });
});
exports.default = {
    getPackages,
    getPackage,
    addPackage,
    removePackage,
    updatePackage
};
//# sourceMappingURL=solutionpackage.1.js.map