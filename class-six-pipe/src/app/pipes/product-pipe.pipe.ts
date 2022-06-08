import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gstPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [price] = args; 
    console.log("value is " + value);
    console.log("price is " + price);
    return price * (9/100);
  }

}
