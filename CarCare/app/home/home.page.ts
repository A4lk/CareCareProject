import { Component } from '@angular/core';
import {AlertController,NavController,ToastController} from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars:any[]=[];
  car:string;
  model:string;
  userid:string;
  constructor(private alertCtrl:AlertController,private navCtrl:NavController,private toastCtrl:ToastController) 
  {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user) {
        this.navCtrl.navigateForward(['/home']);

      } else
      this.navCtrl.navigateForward(['/home'])
      
    })
    
    this.userid=firebase.auth().currentUser.uid;


  }
  gotosignin(){
    this.navCtrl.navigateForward(["/signin"])
  }
  cont(){
    this.alertCtrl.create({
header:"Hi Dear How can I help you ?"
,subHeader:"Type your problem here and you will be answered",
inputs:[{
  name:"email",
  type:"email",
  placeholder:"Enter Your E-mail"
},{
  name:"problem",
  type:"textarea",
  placeholder:"Write your problem..."
}],
buttons:[{
  text:"SEND",
  handler:(data)=>{
    firebase.firestore().collection('Myapp').add({
email:data.email,
probelem:data.problem,
owner:this.userid
    }).then((t)=>{
      this.toastCtrl.create({
        message:"Thanks Dear We will respond to you soon",
        duration:2500,
        position:"middle",
        color:"success"

      }).then((toast)=>{
        toast.present();
      })
    })
  }
},
  
  {text:"Cansel"}]

    }).then((problem)=>{
      problem.present();
    })
  }
RentCars(){

  this.navCtrl.navigateForward(['/rentcar']);
}


  moveToProfile(){
    this.navCtrl.navigateForward(["/profile"]);
  }
  
  moveToAddRequset(){
    this.navCtrl.navigateForward(["/services"]).then((alert)=>{

      this.alertCtrl.create({
        header:"Hello",
        message:"Please Enter Your Car And Model",
        inputs:[{
          name:"car",
          type:"text",
          placeholder:"Your car name"
        },{
          name:"model",
          type:"text",
          placeholder:"Your car model"
        }],
        buttons:[{
          text:"save",handler:(data)=>{
            this.cars=data;
            console.log(this.cars);
            firebase.firestore().collection('myapp').add({
              CarModel:this.cars
             
            })
          }
        }]
      }).then((car)=>{
        car.present();
      })
    })
  }
  
  moveToSchedule(){
    this.navCtrl.navigateForward(["/schedule"]);
  }






signout(){
  firebase.auth().signOut().then(()=>{
  this.navCtrl.navigateForward(['/signin']);
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
