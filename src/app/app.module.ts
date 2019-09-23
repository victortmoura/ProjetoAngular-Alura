//Imports do Angular vem primeiro
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Imports dos componentes criados pelo Dev, vem a seguir
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent     
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule, 
    ErrorsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
