"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Scopeitem_1 = require("./Scopeitem");
let Solutionpackage = class Solutionpackage {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Solutionpackage.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Solutionpackage.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => Scopeitem_1.Scopeitem, scopeitem => scopeitem.solutionPackage),
    __metadata("design:type", Array)
], Solutionpackage.prototype, "sis", void 0);
Solutionpackage = __decorate([
    typeorm_1.Entity()
], Solutionpackage);
exports.Solutionpackage = Solutionpackage;
//# sourceMappingURL=Solutionpackage.js.map