import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
var PerfilModalPage = /** @class */ (function () {
    function PerfilModalPage(modalController, camera) {
        this.modalController = modalController;
        this.camera = camera;
        this.perfil = {
            'avatar': '',
            'nome': '',
            'idade': '',
            'likes': 0
        };
    }
    PerfilModalPage.prototype.ngOnInit = function () {
    };
    PerfilModalPage.prototype.add = function () {
        this.modalController.dismiss(this.perfil);
    };
    //Onde vai ser criado a parte da camera
    PerfilModalPage.prototype.take_picture = function () {
        var _this = this;
        var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.perfil.avatar = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    PerfilModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-perfil-modal',
            templateUrl: './perfil-modal.page.html',
            styleUrls: ['./perfil-modal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, Camera])
    ], PerfilModalPage);
    return PerfilModalPage;
}());
export { PerfilModalPage };
//# sourceMappingURL=perfil-modal.page.js.map