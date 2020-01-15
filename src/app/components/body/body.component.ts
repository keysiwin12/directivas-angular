import {Component} from '@angular/core'

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})

export class BodyComponent {
    public show: boolean = true;

    aparecer() {
      this.show = !this.show;
    }
    autor : object =  {
        nombre :'stephen Kaggwa',
        frase : "Intentalo y fracasa pero no fracases en intentarlo"
    }

    lista : Array<string> = ['uno','dos']

    productos : Array<object> = [
        {
          id: '1',
          image: 'assets/img/borrador.jpg',
          title: 'borrador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '2',
          image: 'assets/img/lapicero.jpg',
          title: 'lapicero',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '3',
          image: 'assets/img/cuaderno.jpg',
          title: 'cuaderno',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '4',
          image: 'assets/img/lustre.jpeg',
          title: 'lustre',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '5',
          image: 'assets/img/resaltador.jpg',
          title: 'resaltador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '6',
          image: 'assets/img/tajador.jpg',
          title: 'tajador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
      ];

      pokemon : Array<object> = [ 

       {
          name : "charizard",
          img : 'assets/img/charizard.jpg'
      },
      {
        name : "squitle",
        img : 'assets/img/squirtle.jpg'
    }

    ]
}