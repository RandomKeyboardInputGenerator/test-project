import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
    name: 'limitQTo'
})
export class LimitQToPipe implements PipeTransform {

    transform(value: any, mode: string, id: number, args?: any): any {
        if (value == null) return value;
        
        if (mode === 'all') {
            return value;
        }
        else {
            return _.filter(value, function(o) { return o.authorId == id; });
        }
    }

}
