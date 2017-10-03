import { LimitCommentsByAnswerPipe } from '../../../pipes/limit-comments-by-answer.pipe';
import * as _ from "lodash";

describe('LimitCommentsByAnswerPipe', () => {
    let pipe: LimitCommentsByAnswerPipe;
    let comments = [
        {
            'id': 0, 'qId': 0, 'authorId': 6, 'type': 'ANSWERED', 'relatedDiscussion': true,
        },
        {
            'id': 1, 'qId': 0, 'authorId': 7, 'type': 'COMMENTED', 'answerId': 0,
        },
        {
            'id': 2, 'qId': 0, 'authorId': 8, 'type': 'COMMENTED', 'answerId': 0,
        },
        {
            'id': 3, 'qId': 0, 'authorId': 9, 'type': 'ANSWERED', 'relatedDiscussion': false,
        },
        {
            'id': 4, 'qId': 0, 'authorId': 10, 'type': 'ANSWERED', 'relatedDiscussion': true,
        },
        {
            'id': 5, 'qId': 0, 'authorId': 11, 'type': 'COMMENTED', 'answerId': 4,
        },
        {
            'id': 6, 'qId': 0, 'authorId': 12, 'type': 'COMMENTED', 'answerId': 4,
        }
    ];

    beforeEach(() => {
        pipe = new LimitCommentsByAnswerPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('answer with id 4 should return two records', () => {
        let pipeExpectation = [
            {
                'id': 5, 'qId': 0, 'authorId': 11, 'type': 'COMMENTED', 'answerId': 4,
            },
            {
                'id': 6, 'qId': 0, 'authorId': 12, 'type': 'COMMENTED', 'answerId': 4,
            }
        ];

        let pipeReality = pipe.transform(comments, 4);

        expect(_.isEqual(pipeExpectation, pipeReality)).toBe(true);
    });
});
