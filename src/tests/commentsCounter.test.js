import commentsCounter from '../modules/commentsCounter.js';

describe('Test for calculate the number of comments', () => {
  test('Count zero elements', () => {
    const comments = [

    ];

    expect(commentsCounter(comments)).toBe(0);
  });
  test('Count five elements', () => {
    const comments = [
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I like this!',
      },
      {
        username: 'Dino',
        creation_date: '2022-06-23',
        comment: 'I love this',
      },
      {
        username: 'John',
        creation_date: '2022-06-23',
        comment: 'The best!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I likes this!',
      },
    ];

    expect(commentsCounter(comments)).toBe(5);
  });
  test('Count fifteen elements', () => {
    const comments = [
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I like this!',
      },
      {
        username: 'Dino',
        creation_date: '2022-06-23',
        comment: 'I love this',
      },
      {
        username: 'John',
        creation_date: '2022-06-23',
        comment: 'The best!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I likes this!',
      },
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I like this!',
      },
      {
        username: 'Dino',
        creation_date: '2022-06-23',
        comment: 'I love this',
      },
      {
        username: 'John',
        creation_date: '2022-06-23',
        comment: 'The best!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Nduati',
        creation_date: '2022-06-23',
        comment: 'Amazing!',
      },
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I likes this!',
      },
      {
        username: 'Ronald',
        creation_date: '2022-06-23',
        comment: 'I likes this!',
      },
    ];

    expect(commentsCounter(comments)).toBe(15);
  });
});