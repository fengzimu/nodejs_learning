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
const ScopeitemController = __importStar(require("../controllers/scopeitem"));
const ApiRouter = express_1.Router();
exports.default = (app) => {
    ApiRouter.get('/:id', ScopeitemController.getSiv);
    ApiRouter.get('/', ScopeitemController.getSivs);
    ApiRouter.post('/', ScopeitemController.addSiv);
    ApiRouter.put('/:id', ScopeitemController.updateSiv);
    ApiRouter.delete('/:id', ScopeitemController.removeSiv);
    app.use('/api/scopeitems', ApiRouter);
};
//# sourceMappingURL=scopeitem.js.map