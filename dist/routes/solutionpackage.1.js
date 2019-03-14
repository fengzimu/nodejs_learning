"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SolutionPackageController = __importStar(require("../controllers/solutionpackage"));
const ApiRouter = express_1.Router();
exports.default = (app) => {
    ApiRouter.get('/:id', SolutionPackageController.getPackage);
    ApiRouter.get('/', SolutionPackageController.getPackages);
    ApiRouter.post('/', SolutionPackageController.addPackage);
    ApiRouter.put('/:id', SolutionPackageController.updatePackage);
    ApiRouter.delete('/:id', SolutionPackageController.removePackage);
    app.use('/api/packages', ApiRouter);
};
//# sourceMappingURL=solutionpackage.1.js.map