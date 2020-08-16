import { getStartsWithNotNumberList } from '../getStartsWithNotNumberList'

test('return \d{14}.md', () => {
  const fileNameList = ['a.md', '20200816150335hoge.md', '20200816150335.md']
  expect(getStartsWithNotNumberList(fileNameList)).toStrictEqual(['a.md']);
});