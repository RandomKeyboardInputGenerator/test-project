import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(value: any, term: string, args?: any): any {
        if (value == null) return value;
        
        if (term === '') {
            return value;
        }
        else {
            // To improve efficiency remove capitalization
            let _term = term.toLowerCase();
            return _.filter(value, function(o) { 
                // Search by title and author name
                return ( _.includes(o.author.toLowerCase(), _term) || _.includes(o.title.toLowerCase(), _term) ); 
            });
        }
    }

}
