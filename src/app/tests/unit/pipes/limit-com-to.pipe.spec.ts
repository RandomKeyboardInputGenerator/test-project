import { LimitCommentsByAnswerPipe } from '../../../pipes/limit-comments-by-answer.pipe';

describe('LimitCommentsByAnswerPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitCommentsByAnswerPipe();
    expect(pipe).toBeTruthy();
  });
});
