import { SearchPipe } from '../../../pipes/search.pipe';
import * as _ from "lodash";

describe('SearchPipe', () => {
    let pipe: SearchPipe;
    let questions = [
        {
            'id': 0,
            'author': 'Eva',
            'title': 'Will insulin make my patient gain weight?',
        },
        {
            'id': 1,
            'author': 'Andrew',
            'title': 'Vegan diet in diabetes treatment?',
        },
        {
            'id': 2,
            'author': 'Joseph',
            'title': 'Vegan diet to stop diabetes progress',
        },
        {
            'id': 3,
            'author': 'Eva',
            'title': 'How do you do?',
        },
        {
            'id': 4,
            'author': 'Tom',
            'title': 'Do you like eat pizza?',
        },
        {
            'id': 5,
            'author': 'Anna',
            'title': 'What’s the funniest joke you know?',
        },
    ];

    beforeEach(() => {
        pipe = new SearchPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('typing "Andrew" should return one record', () => {
        let pipeExpectation = [
            {
                'id': 1,
                'author': 'Andrew',
                'title': 'Vegan diet in diabetes treatment?',
            }
        ];

        let pipeReality = pipe.transform(questions, 'Andrew');

        expect(_.isEqual(pipeExpectation, pipeReality)).toBe(true);
    });

    it('typing "vegan" should return two records', () => {
        let pipeExpectation = [
            {
                'id': 1,
                'author': 'Andrew',
                'title': 'Vegan diet in diabetes treatment?',
            },
            {
                'id': 2,
                'author': 'Joseph',
                'title': 'Vegan diet to stop diabetes progress',
            }
        ];

        let pipeReality = pipe.transform(questions, 'vegan');

        expect(_.isEqual(pipeExpectation, pipeReality)).toBe(true);
    });
});
