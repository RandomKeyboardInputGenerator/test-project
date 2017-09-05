import { Pipe, PipeTransform } from '@angular/core';

import _ from 'lodash'

@Pipe({
    name: 'limitCommentsByAnswer'
})
export class LimitCommentsByAnswerPipe implements PipeTransform {

    transform(comments: any, answerId: number): any {
        if (comments == null) return comments;
        
        return _.filter(comments, comment => comment.answerId === answerId);
    }

}
