import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['angela', 'piru', 'celia', "roca", "lola"];
  heroeBorrado: string = "";

  borrarHeroe() {

    this.heroeBorrado = this.heroes.shift() || '';



  }

}
