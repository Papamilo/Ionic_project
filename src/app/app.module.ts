import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NewPlacePage } from '../pages/new-place/new-place';
import { HomePage } from '../pages/home/home';
import { PlacesService } from '../services/places.service';
import { IonicStorageModule } from '@ionic/storage';

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
    NewPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     PlacesService,
     [{ provide: ErrorHandler, useClass: MyErrorHandler }] // Error Monitoring
    ]
})
export class AppModule {}
