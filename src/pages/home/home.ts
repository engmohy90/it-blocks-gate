import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
// import {HttpClient} from '@angular/common/http';
import {OpengateProvider} from "../../providers/opengate/opengate";
import {Hotspot} from '@ionic-native/hotspot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  counter = 5;
  sendAgain = false;

  constructor(public navCtrl: NavController,
              private hotspot: Hotspot,
              public _open: OpengateProvider,
              public toastCtrl: ToastController) {
    this.hotspot.connectToWifi('itblocks-Gate', '0123456789').then(() => {
      //connection to the WiFi network was successfull

    }).catch(() => {
      //connection to the WiFi network failed
      let toast = this.toastCtrl.create({
        message: 'please make sure you are connected to itbolck-gate wifi',
        duration: 3000
      });
      toast.present();
    });

  }

  sendSMSAgain() {
    debugger;
    this.hotspot.pingHost('192.168.4.1')
      .then(() => {

        this._open.open().subscribe((data) => {

        });
        this.sendAgain = true;
        let timer = setInterval(() => {
          this.counter -= 1
        }, 1000);

        setTimeout(() => {
          clearInterval(timer);
          this.counter = 5;
          this.sendAgain = false;
          this._open.close().subscribe((data) => {
            this.sendAgain = false;
          }, (err) => {
            this.sendAgain = false;
          })

        }, 5000);
      })
      .catch(() => {
        let toast = this.toastCtrl.create({
          message: 'please make sure you are connected to itbolck-gate wifi',
          duration: 3000
        });
        toast.present();
      })


  }


}
