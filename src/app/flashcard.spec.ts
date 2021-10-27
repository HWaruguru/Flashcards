import { Flashcard } from './flashcard';

describe('Flashcard', () => {
  it('should create an instance', () => {
    expect(new Flashcard(1, 'Pipes', 'We have then returned the days left if the goal date has not been passed', 'Computer Science', 'new Date(2021,10, 27)', 'new Date(2021,10, 27)'));
  });
});
