import { Component, OnInit } from '@angular/core';
import {NavController,AlertController,ToastController} from "@ionic/angular";
import * as firebase from 'firebase';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

view1:any[];


userid:string;

  constructor(private navCtrl:NavController,private alertCtrl:AlertController,
    private toastCtrl:ToastController) 
  {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user) {
        this.navCtrl.navigateForward(['/sigin']);

      } else
      this.navCtrl.navigateForward(['/profile'])
      
    })
    
    this.userid=firebase.auth().currentUser.uid;
    this.Stack();
  }
  ngOnInit() {
  }



moveToHome(){
  this.navCtrl.navigateForward(["/home"]);
}

moveToAddRequset(){
  this.navCtrl.navigateForward(["/services"]);
}

moveToSchedule(){
  this.navCtrl.navigateForward(["/schedule"]);
}

Stack(){
  firebase.firestore().collection("Myapp")
  .where("owner1","==",this.userid)
  .onSnapshot((qa)=>{
this.view1=qa.docs;

  })
  
}
updateprofilelname(doucment:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
  
  header:"Are you shour to edit profile ?"
  ,
  inputs:[{
    name:'Lname',
    type:'textarea',
    placeholder:'Enter new Last name'
  
  }],
  
  buttons:[{
    text:'Save',handler:(data)=>{
      firebase.firestore().collection("Myapp").doc
      (doucment.id).update({"Lname":data.Lname,
    });
    }
  },{
    text:"Cansel"
  }]
  
  }).then((Son)=>{
    Son.present();
  })
  }
updateprofilefname(doucment:firebase.firestore.QueryDocumentSnapshot){
this.alertCtrl.create({

header:"Are you shour to edit profile ?"
,
inputs:[{
  name:'Fname',
  type:'textarea',
  placeholder:'Enter new Fisrt name'

}],


buttons:[{
  text:'Save',handler:(data)=>{
    firebase.firestore().collection("Myapp").doc
    (doucment.id).update({"Fname":data.Fname,
  });
  }
},{
  text:"Cansel"
}]

}).then((Son)=>{
  Son.present();
})
}
updateprofilephone(doucment:firebase.firestore.QueryDocumentSnapshot){
  this.alertCtrl.create({
  
  header:"Are you shour to edit profile ?"
  ,
  inputs:[
   
  { name:'phoneNumber',
  type:'number',
  placeholder:'Enter new Phone number'}],
  
  
  
  buttons:[{
    text:'Save',handler:(data)=>{
      firebase.firestore().collection("Myapp").doc
      (doucment.id).update({"phoneNumber":data.phoneNumber});
    }
  },{
    text:"Cansel"
  }]
  
  }).then((Son)=>{
    Son.present();
  })
  }


Create(){
  
this.alertCtrl.create({
header:"Welcome Dear :",

inputs:[{
  name:"Fname",
  type:"text",
  placeholder:"Enter Your First name"
},{ 
  name:"Lname",
  type:"text",
  placeholder:"Enter Your Last name"
},{
  name:"phoneNumber",
  type:"number",
  placeholder:"Enter Your PhoneNumber"
}],

buttons:[{
text:"SAVA",
handler:(data)=>{
 
  
  
firebase.firestore().collection("Myapp").add({
owner1:this.userid,
Fname:data.Fname,
Lname:data.Lname,
phoneNumber:data.phoneNumber
  
})


}


},{
  text:"Cansel"
}],

}).then((alert)=>{
  alert.present();
})

}
}
