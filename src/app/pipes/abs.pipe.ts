import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abs'
})
export class AbsPipe implements PipeTransform {

    transform(value: number): number {
        if (value == null) {
            return value;
        }
        
        return Math.abs(value);
    }

}
