import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
ss:any[];
  userid:string;
  c:number=0;
  constructor(private navCtrl:NavController) 
  {
    
   firebase.auth().onAuthStateChanged((user)=>{
     if(user) {
        this.navCtrl.navigateForward(['/schedule']);

      } else
      this.navCtrl.navigateForward(['/signin']);
    })
    
   this.userid=firebase.auth().currentUser.uid;
  
  this.getData();

  }

  ngOnInit() {

  }
getData(){
  
 firebase.firestore().collection("Myapp")
 .where("owner2","==",this.userid).onSnapshot((q)=>{

  this.ss=q.docs;
 })
 
}
  
moveToHome(){
  this.navCtrl.navigateForward(["/home"]);
}

moveToAddRequset(){
  this.navCtrl.navigateForward(["/services"]);
}

moveToProfile(){
  this.navCtrl.navigateForward(["/profile"]);
}


  }
