import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
view2:any[];
userid:string;
Fname:string;
Lname:string;
BreakReaper:string;
time:string;
phoneNumber:string;

  constructor() {
    this.userid=firebase.auth().currentUser.uid;

   }
  
AddToF(){
   firebase.firestore().collection("Myapp").add({
    owner1:this.userid,
    Fname:this.Fname,
    Lname:this.Lname,
    phoneNumber:this.phoneNumber,
    ArrivalDate:this.time,
    repair:this.BreakReaper,
      
    })
  }
}
