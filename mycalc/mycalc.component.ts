import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-mycalc',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mycalc.component.html',
  styleUrl: './mycalc.component.css'
})
export class MycalcComponent {
   stringToEvaluate:string=""

  takeInput(num:string){
    this.stringToEvaluate = this.stringToEvaluate + num;
    console.log(this.stringToEvaluate);
  }
  evaluateResult(){
    if(this.stringToEvaluate != ''){
      this.stringToEvaluate = eval(this.stringToEvaluate)
    }
  }
  resetInput(){
    this.stringToEvaluate = "";
  }
}
