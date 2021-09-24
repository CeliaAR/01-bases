import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

import { HeroesModule } from './heroes/heroes.module';
import { CarpetaQueQuieroCrearComponent } from './heroe/carpeta-que-quiero-crear/carpeta-que-quiero-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    CarpetaQueQuieroCrearComponent




  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
