import * as getFromGithub from '../getFromGithub'
import {addNumber} from '../addNumber'

jest.spyOn(getFromGithub, 'getLatestCommitDate').mockReturnValueOnce('dummy-date')

test('return .md', () => {
  const fileNameList = [{before:'s.md'}]
  const dir = './markdown'
  expect(addNumber(fileNameList, dir)).toStrictEqual([{before: './markdown/s.md',after:'./markdown/dummy-dates.md'}]);
});