import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController,NavController}from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
name:string;
number:number;
email:string;
password:string;
  constructor(private toastCtrl:ToastController,private navCtrl:NavController) {}


  
  ngOnInit() {
  }


    
  signup(){
    firebase.auth()
    .createUserWithEmailAndPassword(this.email,
      this.password).then((data)=>{
        console.log(data);
        this.navCtrl.navigateForward(['/signin']);
      }).catch((error)=>{
        this.toastCtrl.create({
     message:error.message,
     duration:5000,
     position:"top",
     color:"danger"
        }).then((toast)=>{
          toast.present();
        })
    console.log(error);
      })
    
      }
    
    }
    
