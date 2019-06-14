import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var PerfilModalPage = /** @class */ (function () {
    function PerfilModalPage(modalController) {
        this.modalController = modalController;
    }
    PerfilModalPage.prototype.ngOnInit = function () {
    };
    PerfilModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-modal',
            templateUrl: './perfil-modal.page.html',
            styleUrls: ['./perfil-modal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PerfilModalPage);
    return PerfilModalPage;
}());
export { PerfilModalPage };
//# sourceMappingURL=perfil-modal.page.js.map