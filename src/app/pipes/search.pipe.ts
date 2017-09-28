import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(questions: any, term: string): any {
        if (questions == null) {
            return questions;
        }
        
        if (term === '') {
            return questions;
        }
        
        // To improve efficiency remove capitalization
        const _term = term.toLowerCase();
        return _.filter(questions, question => { 
            // Search by title and author name
            return _.includes(question.author.toLowerCase(), _term) || _.includes(question.title.toLowerCase(), _term); 
        });
    }

}
