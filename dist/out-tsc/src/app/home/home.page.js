import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage() {
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
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map