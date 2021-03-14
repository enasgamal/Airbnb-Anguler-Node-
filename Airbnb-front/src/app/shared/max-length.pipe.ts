import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, length:number): string {
    
    //alert(length);
    if(value.length>length)
      return value.substr(0,length)+"...";

    return value;
  }

}
