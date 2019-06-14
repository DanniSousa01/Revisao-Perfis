import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilModalPage } from './perfil-modal.page';
var routes = [
    {
        path: '',
        component: PerfilModalPage
    }
];
var PerfilModalPageModule = /** @class */ (function () {
    function PerfilModalPageModule() {
    }
    PerfilModalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerfilModalPage]
        })
    ], PerfilModalPageModule);
    return PerfilModalPageModule;
}());
export { PerfilModalPageModule };
//# sourceMappingURL=perfil-modal.module.js.map