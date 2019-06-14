import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
var HomePage = /** @class */ (function () {
    function HomePage(modalController) {
        this.modalController = modalController;
        this.perfis = [];
        this.perfis = [
            // Criação dos perfis de modo estático !      
            {
                'avatar': 'https://images.all-free-download.com/images/graphicthumb/andrew_101750.jpg',
                'nome': 'João de Paulistana',
                'idade': 20,
                'likes': 0
            },
            {
                'avatar': 'https://badhan.org/img/avatars/defaultFemalePP.png',
                'nome': 'Julia de Jacobina',
                'idade': 18,
                'likes': 0
            }
        ];
    }
    HomePage.prototype.likes = function (perfil) {
        perfil.likes = perfil.likes + 1;
    };
    // Criação do Modal, onde ele irá abrir o modal
    HomePage.prototype.abrir_modal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: PerfilModalPage
                        })];
                    case 1:
                        modal = _a.sent();
                        //preparação para quando fechar o modal, ele executa esse código ! (quando clica no OKAY)
                        modal.onDidDismiss().then(function (retorno) {
                            //Será executado somente após o Modal ter sído fechado
                            _this.perfis.push(retorno);
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map