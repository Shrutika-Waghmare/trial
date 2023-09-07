import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{
  @ViewChild('myForm') myFormObj : any;

  constructor(){}
  ngOnInit(): void {
    
  }
  // onclick(param : any){
  //   console.log(param)
  // }

  onSubmit(){
    console.log(this.myFormObj);
  }
}
