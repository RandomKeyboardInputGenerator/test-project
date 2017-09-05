import { LimitQuestionsByAuthorPipe } from '../../../pipes/limit-questions-by-author.pipe';

describe('LimitQuestionsByAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitQuestionsByAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
