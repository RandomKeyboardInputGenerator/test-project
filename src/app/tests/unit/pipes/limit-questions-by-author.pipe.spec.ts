import { LimitQuestionsByAuthorPipe } from '../../../pipes/limit-questions-by-author.pipe';
import * as _ from "lodash";

describe('LimitQuestionsByAuthorPipe', () => {
    let pipe: LimitQuestionsByAuthorPipe;
    let questions = [
        {
            'id': 0,
            'authorId': 1,
            'title': 'Will insulin make my patient gain weight?',
        },
        {
            'id': 1,
            'authorId': 2,
            'title': 'Vegan diet in diabetes treatment?',
        },
        {
            'id': 2,
            'authorId': 3,
            'title': 'Vegan diet to stop diabetes progress',
        },
        {
            'id': 3,
            'authorId': 1,
            'title': 'How do you do?',
        },
        {
            'id': 4,
            'authorId': 4,
            'title': 'Do you like eat pizza?',
        },
        {
            'id': 5,
            'authorId': 5,
            'title': 'What’s the funniest joke you know?',
        }
    ];

    beforeEach(() => {
        pipe = new LimitQuestionsByAuthorPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('mode "all" should return all records', () => {
        let pipeExpectation = questions;
        let pipeReality = pipe.transform(questions, 'all', 1);

        expect(_.isEqual(pipeExpectation, pipeReality)).toBe(true);
    });

    it('mode "me" should return two records', () => {
        let pipeExpectation = [
            {
                'id': 0,
                'authorId': 1,
                'title': 'Will insulin make my patient gain weight?',
            },
            {
                'id': 3,
                'authorId': 1,
                'title': 'How do you do?',
            }
        ];

        let pipeReality = pipe.transform(questions, 'me', 1);

        expect(_.isEqual(pipeExpectation, pipeReality)).toBe(true);
    });
});
