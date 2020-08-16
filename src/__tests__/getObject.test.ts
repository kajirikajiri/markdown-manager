import {getObject} from '../getObject'

test('return {name}', () => {
  const fileNameList = ['a.md', 'b.md']
  expect(getObject(fileNameList)).toStrictEqual([{before: 'a.md'}, {before: 'b.md'}]);
});