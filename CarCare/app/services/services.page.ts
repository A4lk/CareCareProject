import { Component, OnInit } from '@angular/core';
import {NavController,ToastController,AlertController} from '@ionic/angular';
import * as firebase from 'firebase';
import { Service1Service } from '../services1/service1.service';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
counter:string;
  time:any;
  userid:string;
  //repair
  BreakReaper:string;
  EngineReaper:string;
  CarInspection:string;
  WheelAlignment:string;
  AutoDiagnosticsAndCheckEngineLight:string;
  AutoReaper:string;
  userId:string;

  //Clean
  BasicExterior:string;
  ExecutiveExterior:string;
  ExpressFullService:string;
  ExecutiveFullServes:string; 
  ExecutiveSuperService:string;

  //design
  RepaintTheCarWithSameColor:string;
  PaintTheCarWithANewColor:string;

//decoration
  Reupholstery:string;
  Upholstery:string;
  Redecoration:string;
  DecorationChange:string;

  //What is car
  cars:any[]=[];
  car:string;
  model:string;

  constructor(private Model1:ModalController,private navCtrl:NavController,private toastCtrl:ToastController,private alertCtrl:AlertController) 
  {
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.navCtrl.navigateForward(['/services']);

      } else
      this.navCtrl.navigateForward(['/signin']);
    })

    this.userid=firebase.auth().currentUser.uid;
 
  }


  ngOnInit() {
  }

  
moveToHome(){
  this.navCtrl.navigateForward(["/home"]);
}

moveToSchedule(){
  this.navCtrl.navigateForward(["/schedule"]);
}

moveToProfile(){
  this.navCtrl.navigateForward(["/profile"]);
}



  


  repairAlert(){
    this.alertCtrl.create({

header:"Chose Option",
inputs:[
  {
    name:"check1",
    type:"checkbox",
    label:"Break Reaper            50SR",
    value:"BreakReaper",
    
  },
  {
    name:"check2",
    type:"checkbox",
    label:"Engine Reaper",
    value:"EngineReaper"
  },
  {
    name:"check3",
    type:"checkbox",
    label:"Car Inspection ",
    value:"CarInspection "
  },
  {
    name:"check4",
    type:"checkbox",
   label:"Wheel Alignment",
    value:"WheelAlignment"
  },
  {
    name:"check5",
    type:"checkbox",
    label:"Auto Diagnostics And Check Engine Light",
    value:"AutoDiagnosticsAndCheckEngineLight"
  },
  {
    name:"check6",
    type:"checkbox",
    label:"Auto Reaper",
    value:"AutoReaper"
  },

],
buttons:[{
text:"OK",handler:(data)=>{
   
this.BreakReaper=data;
console.log(this.BreakReaper)





  this.alertCtrl.create({
    header:"Choose the arrival date",
    inputs:[{
    
    name:"time",
    type:"date"
    
    }],
    buttons:[{
      text:"SAVE",handler:(data)=>{
       
        firebase.firestore().collection('Myapp').add({
          ArrivalDate:data.time,
         repair:this.BreakReaper,
         owner2:this.userid,
         
        }).then((toast)=>{
          this.toastCtrl.create({
            message:"Thasnk you servies has been added",
            position:"middle",
            duration:6000,
            color:"success"
          }).then((t)=>{
            t.present();
          }).then((nav)=>{
            this.navCtrl.navigateForward(["/payment"]);
          })
        })
      }
    },{
      text:"Cansel"
    }]
  }).then((alert)=>{
    alert.present();
  })





.catch((error)=>{
  this.toastCtrl.create({
message:error.message,
duration:6000,
position:"middle",
color:"danger"
  
  }).then((erro)=>{
    erro.present();
  })
})

}
},{text:"Cansel"}]
    }).then((Repair)=>{

      Repair.present();
    
    })
    
    
    
    
  }
 
  

cleanAlert(){
this.alertCtrl.create({



  header:"Chose Option",
  inputs:[
    {
      name:"clean",
      type:"checkbox",
      label:"Basic Exterior",
      value:"BasicExterior"
    },
    {
      name:"clean",
      type:"checkbox",
      label:"Executive Exterior",
      value:"ExecutiveExterior"
    },
    {
      name:"clean",
      type:"checkbox",
      label:"Express Full Service",
      value:"ExpressFullService "
    },
    {
      name:"clean",
      type:"checkbox",
     label:"Executive Full Serves",
      value:"ExecutiveFullServes"
    },
    {
      name:"clean",
      type:"radio",
      label:"Executive Super Service",
      value:"ExecutiveSuperService"
    },
  ],
  buttons:[{
  text:"OK",handler:(data)=>{
  
  this.BasicExterior=data;
  console.log(this.BasicExterior);
  this.alertCtrl.create({
    header:"Choose the arrival date",
    inputs:[{
    
    name:"time",
    type:"date"
    
    }],
    buttons:[{
      text:"SAVE",handler:(data)=>{
    
       
        firebase.firestore().collection('Myapp').add({
          ArrivalDate:data.time,
          clean:this.BasicExterior,
         owner2:this.userid
        }).then((toast)=>{
          this.toastCtrl.create({
            message:"Thasnk you servies has been added",
            position:"middle",
            duration:2500,
            color:"success"
          }).then((t)=>{
            t.present();
          }).then((nav)=>{
            this.navCtrl.navigateForward(["/payment"]);
          })
        })
      }
    },{
      text:"Cansel"
    }]
  }).then((alert)=>{
    alert.present();
  })

  .catch((error)=>{
    this.toastCtrl.create({
 message:error.message,
 duration:6000,
 position:"middle",
 color:"danger"
    
    }).then((err)=>
  {
    err.present();
  })
  })
  
  }
  
  }]
}).then((aler)=>{
  aler.present();
})

}



designAlert(){
  this.alertCtrl.create({

    header:"Chose Option",
    inputs:[
      {
        name:"design:",
        type:"checkbox",
        label:"Repaint The Car With Same Color",
        value:"RepaintTheCarWithSameColor"
      },
      {
        name:"design",
        type:"checkbox",
        label:"Paint The Car With A New Color",
        value:"PaintTheCarWithANewColor"
      },
      
    ],
    buttons:[{
    text:"OK",handler:(data)=>{
    
     this.RepaintTheCarWithSameColor=data;
     console.log(this.RepaintTheCarWithSameColor);
     this.alertCtrl.create({
      header:"Choose the arrival date",
      inputs:[{
      
      name:"time",
      type:"date"
      
      }],
      buttons:[{
        text:"SAVE",handler:(data)=>{
      
         
          firebase.firestore().collection('Myapp').add({
            ArrivalDate:data.time,
            design:this.RepaintTheCarWithSameColor,
           owner2:this.userid
          }).then((toast)=>{
            this.toastCtrl.create({
              message:"Thasnk you servies has been added",
              position:"middle",
              duration:6000,
              color:"success"
            }).then((t)=>{
              t.present();
            }).then((nav)=>{
              this.navCtrl.navigateForward(["/payment"]);
            })
          })
        }
      },{
        text:"Cansel"
      }]
    }).then((alert)=>{
      alert.present();
    })
    .catch((error)=>{
      this.toastCtrl.create({
   message:error.message,
   duration:6000,
   position:"middle",
   color:"danger"
      
      }).then((err)=>
    {
      err.present();
    })
    })
    
    
    
    }
    }],
        }).then((design)=>{
    
          design.present();
        })


}


   decorationAlert(){
    this.alertCtrl.create({

      header:"Chose Option",
     
      buttons:[{
      text:"OK",handler:(data)=>{
      this.Reupholstery=data;
      console.log(this.Reupholstery);
      this.alertCtrl.create({
        header:"Choose the arrival date",
        inputs:[{
        
        name:"time",
        type:"date"
        
        }],
        buttons:[{
          text:"SAVE",handler:(data)=>{
        
           
            firebase.firestore().collection('Myapp').add({
              ArrivalDate:data.time,
              decoration:this.Reupholstery,
              owner2:this.userid
            }).then((toast)=>{
              this.toastCtrl.create({
                message:"Thasnk you servies has been added",
                position:"middle",
                duration:6000,
                color:"success"
              }).then((t)=>{
                t.present();
              }).then((nav)=>{
                this.navCtrl.navigateForward(["/payment"]);
              })
            })
          }
        },{
          text:"Cansel"
        }]
      }).then((alert)=>{
        alert.present();
      })
     .catch((error)=>{
        this.toastCtrl.create({
     message:error.message,
     duration:6000,
     position:"middle",
     color:"danger"
        
        }).then((err)=>
      {
        err.present();
      })
      })
        
      
      }
      },],
      inputs:[
        {
          name:"decoration1",
          type:"checkbox",
          label:"Reupholstery",
          value:"Reupholstery",
        
        },
        {
          name:"decoration2",
          type:"checkbox",
          label:"Upholstery",
          value:"Upholstery"
        },
        {
          name:"decoration3",
          type:"checkbox",
          label:"Redecoration",
          value:"Redecoration"
        },
        {
          name:"decoration4",
          type:"checkbox",
          label:"Decoration Change",
          value:"DecorationChange"
        },
        
      ],
          }).then((decoration)=>{
      
            decoration.present();
          })
  }







}
