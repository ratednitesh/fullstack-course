import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeformat',
  pure: false
})
export class CodeFormat implements PipeTransform {

  codeArray:Array<String>;  

  transform(code: string): any {
    this.codeArray=[];
    let codetray=code.split("--");
    for(let temp in codetray){
      
      this.codeArray.push(codetray[temp]);

    }
    return this.codeArray;
  }
}
