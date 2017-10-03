import { AbsPipe } from '../../../pipes/abs.pipe';

describe('AbsPipe', () => {
    let pipe: AbsPipe;

    beforeEach(() => {
        pipe = new AbsPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('providing negative value returns positive value', () => {
        expect(pipe.transform(-10)).toBe(10);
    });
    
    it('providing positive value returns positive value', () => {
        expect(pipe.transform(5)).toBe(5);
    });
});
