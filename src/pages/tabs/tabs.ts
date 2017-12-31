import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string = "CameraPage";
  tab2Root: string = "ChatsPage";
  tab3Root: string = "StatusPage";
  tab4Root: string = "CallsPage";

  //private db: SQLiteObject;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public toastCtrl: ToastController) {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
   // this.storage = new SQLite();
    this.sqlite.create({
      name: 'whatsup.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table if not exists tblusers(uid VARCHAR(100)), displayName VARCHAR(100), photoURL VARCHAR(100), userStatus VARCHAR(300)', {}).then(() => {
        toaster.setMessage('Table created successfully');
        toaster.present();
        console.log('Table created successfully')
      }).catch(e => {
        toaster.setMessage('There was an error creating table: ' + e);
        toaster.present();
        console.error('There was an error creating table: ' + e);
      });
    }).catch(e => {
      toaster.setMessage('There was an error creating database: ' + e);
      toaster.present();
      console.error('There was an error creating database: ' + e);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
