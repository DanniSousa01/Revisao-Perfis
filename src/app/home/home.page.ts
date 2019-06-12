import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];
  constructor() {
    this.perfis = [
      // Criação dos perfis de modo estático !      
      {
        'avatar': 'https://images.all-free-download.com/images/graphicthumb/andrew_101750.jpg',
        'nome': 'João de Paulistana',
        'idade':20,
        'likes':0
      },
      {
        'avatar':'https://badhan.org/img/avatars/defaultFemalePP.png',
        'nome': 'Julia de Jacobina',
        'idade':18,
        'likes':0
      }
    ]
  }

}
