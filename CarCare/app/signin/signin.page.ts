import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController,NavController} from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
email:string;
password:string;
  constructor(private toastCtrl:ToastController,private NavCtrl:NavController) {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.NavCtrl.navigateForward(['/home'])
      }else
      this.NavCtrl.navigateForward(['/signin']);
    })
    
  }

  ngOnInit() {
  }
  signUp(){
    this.NavCtrl.navigateForward(['/signup']);
  }
  signin(){

    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((data)=>{
      console.log(data)
      this.NavCtrl.navigateForward(['/home']);

    }).catch((error)=>{
      this.toastCtrl.create({
   message:error.message,
   duration:5000,
   position:"middle",
   color:"danger"
  
}).then((toast)=>{
  toast.present();
})
    })
  }

}
