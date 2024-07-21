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




/*export class MycalcComponent {
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;
  

  public getNumber(v: string) {
    console.log(v);
    if(this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
  }

  getDecimal() {
    if(!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string , secondOp: number): number {
    switch (op) {
      case '+':
        return this.firstOperand! + secondOp;
      case '-':
        return this.firstOperand! - secondOp;
      case '*':
        return this.firstOperand! * secondOp;
      case '/':
        return this.firstOperand! / secondOp;
      case '=':
        return secondOp;
        default:
        throw new Error('Unsupported operation');
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if(this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if(this.operator) {
      const result = this.doCalculation(this.operator , Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }

    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}

*/