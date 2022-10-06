import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your perfect banking partner'
  acc="Account Number"
  acno=''
  psw=''

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  
login(){
 var acnum=this.acno
 var psw=this.psw
 
 const result=this.ds.login(acnum,psw)
 if(result){
  alert("Login Success")
  this.router.navigateByUrl('dashboard')
  }
 }
}

// login(a:any,p:any){
//   // console.log(a.value);
//   // console.log(p.value);
//   var acnum=a.value
//   var psw=p.value
//   let userDetails=this.userDetails
//   if(acnum in userDetails){
//    if(psw==userDetails[acnum]['password']){
//  alert('login success')
//    }
//    else{
//      alert('Incorrect password')
//    }
//   }
//   else{
//    alert(' user not exists or incorrect password')
//   }
//  }


