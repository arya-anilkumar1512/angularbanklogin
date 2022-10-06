import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent implements OnInit {
  acno:any
  transaction:any

  constructor(private ds:DataService) { 
    this.acno=this.ds.currentAcno
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction)
  }

  ngOnInit(): void {
  }

}
