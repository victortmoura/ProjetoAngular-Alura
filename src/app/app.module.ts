//Imports do Angular vem primeiro
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Imports dos componentes criados pelo Dev, vem a seguir
import { PhotosModule } from './photos/photos.module';


@NgModule({
  declarations: [
    AppComponent     
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
