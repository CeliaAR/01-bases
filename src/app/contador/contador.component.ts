import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3><strong>la base es {{base}}</strong></h3>
        <button (click)=acumular(base)>{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)=acumular(-base)>{{base}}</button>

`

})
export class ContadorComponent {
    titulo: string = 'ContadorApp';
    numero: number = 10;

    /* sumar() {
      this.numero += 1;
  
    } */
    base: number = 5;
    acumular(valor: number) {
        this.numero += valor;

    }

}