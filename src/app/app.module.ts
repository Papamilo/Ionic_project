import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { MyApp } from './app.component';
import { NewPlacePage } from '../pages/new-place/new-place';
import { HomePage } from '../pages/home/home';
import { PlacesService } from '../services/places.service';
import { PlacePage } from '../pages/place/place';
import { AgmCoreModule } from 'angular2-google-maps/core';


declare var window;

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    window.Ionic.handleNewError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYbPuH6EX_o1GG6BcMrkBq_cUC5SpcFV0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
     [{ provide: ErrorHandler, useClass: IonicErrorHandler }, PlacesService, Storage] // Error Monitoring
    ]
})
export class AppModule {}
