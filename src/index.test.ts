import { sum } from './index';

describe('test', () => {
  it('sum', () => {
    expect(sum(1, 2)).toStrictEqual(3);
  });
});
