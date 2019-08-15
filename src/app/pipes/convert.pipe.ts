import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  if (arg !== '' ) { return value; }
  // tslint:disable-next-line:prefer-const
  let convert: any;
  for (const post of value) {
      if (convert.duration_ms.convert()) {
        convert.push(post);
      }
    }
  return convert;
  }
}
