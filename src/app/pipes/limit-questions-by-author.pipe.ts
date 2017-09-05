import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
    name: 'limitQuestionsByAuthor'
})
export class LimitQuestionsByAuthorPipe implements PipeTransform {

    transform(questions: any, mode: string, id: number): any {
        if (questions == null) return questions;
        
        if (mode === 'all') return questions;
        
        return _.filter(questions, question => question.authorId === id);
    }

}
