import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController,NavController,AlertController} from '@ionic/angular';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
cash:string="true";
userid:string;
  constructor(private toastCtrl:ToastController ,private navCtrl:NavController ,private alertCtrl:AlertController) {
   this.userid=firebase.auth().currentUser.uid;
  }
 
  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateForward(['/home'])
  }
  
  
  
  credit(){
this.alertCtrl.create({
message:"Please enter your information",
inputs:[{
  name:"cardName",
  type:"text",
  placeholder:"Cardholder name ..."
},{
  name:"cardNum",
  type:"number",
  placeholder:"Enter Your Credit card number *"
},{
  name:"cardDate",
  type:"date",
  placeholder:"MMM YYYY H:mm"

}],
buttons:[{
text:"ADD PAYMENT"
,handler:(data)=>{
  firebase.firestore.FieldValue.serverTimestamp();
  firebase.firestore().collection('Myapp').add({
  cardname:data.cardName,
  cardnum:data.cardNum,
  carddate:data.cardDate,
  owner:this.userid

  }).then((toast)=>{
this.toastCtrl.create({
  message:"The request was successful",
  position:"middle",
  duration:5000,
  color:"success"  
}).then((t)=>{
  t.present();
})
  })
  
  
}
},{text:"Cansel"}


]



}).then((alert)=>{
  alert.present();
})
 




.catch((error)=>{
this.toastCtrl.create({
  message:error.message,
  position:"middle",
  duration:5000,
  color:"danger"
})
  })

   
}


cash1(){
  firebase.firestore().collection("Myapp").add({
    cash:this.cash,
    owner:this.userid
  }).then((toast)=>{
    this.toastCtrl.create({
      message:"The request was successful",
      position:"middle",
      duration:5000,
      color:"success"  
      }).then((t)=>{
        t.present();
      })

  })
}
}
