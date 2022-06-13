import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

export class CalculatorComponent{
  input:string = '';
  result:string = '';
   
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
    if(event.key=='Enter'){
      this.Calculate();
    }
    else{
      this.input=this.input+event.key;
    }
  }
 
  pressNum(num: string) {
  
    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
    this.input = this.input + num;
    this.calcAnswer();
  }

  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
    return;
    }
    this.input = this.input + op;
    this.calcAnswer();
  }
 
 
  clear() {
    this.result = '';
    this.input = '';
  }
 
 calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log(formula,this.result);
    this.result = eval(formula);
 }
 
  Calculate() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
 
}


