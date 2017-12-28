import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CameraPreview } from "@ionic-native/camera-preview";
import { IonicStorageModule } from "@ionic/storage";

import { ChatpopPage } from "../pages/chatpop/chatpop";
import { CallspopPage } from "../pages/callspop/callspop";
import { HomepopPage } from "../pages/homepop/homepop";
import { ProfilepopPage } from "../pages/profilepop/profilepop";
import { StatuspopPage } from "../pages/statuspop/statuspop";


import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    ChatpopPage,
    CallspopPage,
    HomepopPage,
    ProfilepopPage,
    StatuspopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatpopPage,
    CallspopPage,
    HomepopPage,
    ProfilepopPage,
    StatuspopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
