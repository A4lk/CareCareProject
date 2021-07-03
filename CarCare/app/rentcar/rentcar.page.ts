import { Component, OnInit } from '@angular/core';
import {NavController,AlertController,ToastController} from "@ionic/angular";
import * as firebase from 'firebase';
@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.page.html',
  styleUrls: ['./rentcar.page.scss'],
})
export class RentcarPage implements OnInit {
  Hilux:any;
  constructor(private navCtrl:NavController) {
   }

  ngOnInit() {
  }
backtohome(){
this,this.navCtrl.navigateForward(['/home'])
}
add(){
  console.log(this.Hilux)
firebase.firestore().collection('Myapp').add({
  Hilux:this.Hilux
})
}
Change(){
  console.log(this.Hilux)
}
}
