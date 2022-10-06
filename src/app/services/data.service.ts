import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000,transaction:[]},
    1001:{acno:1001,username:"anu",password:123,balance:100000,transaction:[]},
    1002:{acno:1002,username:"joyal",password:123,balance:100000,transaction:[]},
    1003:{acno:1003,username:"anaga",password:123,balance:100000,transaction:[]}
  }
  

  constructor() { }
  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);
      
      return true    
    }
  }

  login(acnum:any,psw:any){
    let userDetails=this.userDetails
    if(acnum in userDetails){
     if(psw==userDetails[acnum]['password']){
      this.currentUser=userDetails[acnum]['username']
      this.currentAcno=acnum
      return true;
     }
     else{
      alert("Incorrect password")
    return false
     }
    }
    else{
     alert(' user not exists or incorrect password')
     return false
    }
   }

   deposit(acnum:any,pswrd:any,amnt:any){
    let userDetails= this.userDetails
    var amount=parseInt(amnt) //convert string amnt to string
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        userDetails[acnum]['balance']+=amount
        userDetails[acnum]['transaction'].push({type:'Cridit',amount})
        return userDetails[acnum]['balance'];

       }
       else{
        alert('Incorrect password')
       }
    }else{
      alert('user not exist')
      return false
    }
   }

   withdraw(acnum1:any,pswrd1:any,amnt1:any){
    let userDetails= this.userDetails
    var amount=parseInt(amnt1)
    if(acnum1 in userDetails){
      if(pswrd1==userDetails[acnum1]['password']){
        if(userDetails[acnum1]['balance']>=amnt1){
          userDetails[acnum1]['balance']-=amount
          userDetails[acnum1]['transaction'].push({type:'Debit',amount})
          return userDetails[acnum1]['balance'];

        }
        else{
          alert('Insufficient balance')
          return false
        }
       
      }else{
        alert('Incorrect password')
      }
   }else{
    alert('user not exist')
    return false
  }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}