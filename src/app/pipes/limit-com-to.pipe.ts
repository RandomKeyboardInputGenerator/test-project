import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
    name: 'limitComTo'
})
export class LimitComToPipe implements PipeTransform {

    transform(value: any, type: string, answerId?: number): any {
        if (value == null) return value;
        
        let comments = []; 
        if (_.isUndefined(answerId)) {
            comments = _.filter(value, function(o) { return o.type == type; });
        }
        else {
            comments = _.filter(value, function(o) { return o.answerId == answerId; });
        }
        return comments;
    }

}
