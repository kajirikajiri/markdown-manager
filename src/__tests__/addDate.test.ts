import * as getFromGithub from '../getLatestCommitDate'
import {addDate} from '../addDate'

jest.spyOn(getFromGithub, 'getLatestCommitDate').mockReturnValueOnce('dummy-date')

test('return .md', () => {
  const fileNameList = [{before:'s.md'}]
  const dir = './markdown'
  expect(addDate(fileNameList, dir)).toStrictEqual([{before: './markdown/s.md',after:'./markdown/dummy-dates.md'}]);
});