import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {OpengateProvider} from '../providers/opengate/opengate';
import {Hotspot} from '@ionic-native/hotspot';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    HttpClient,
    Hotspot,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpengateProvider
  ]
})
export class AppModule {
}
