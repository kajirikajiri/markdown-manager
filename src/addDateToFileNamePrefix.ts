import {validFileNameList} from './validFileNameList'
import {genObject} from './genObject'
import {addDate} from './addDate'
import {changeFileName} from './changeFileName'

export const addDateToFileNamePrefix = (dir: string,markdowns:string[])=>{
  const validatedFileNameList:string[] = validFileNameList(markdowns)

  const objFileNameList:{before:string}[] = genObject(validatedFileNameList)

  const filePathList:{before:string, after:string}[] = addDate(objFileNameList, dir)

  changeFileName(filePathList)
}

// wipが書いてあったファイルは最後に出力する
// headerの下にtocをつける
  // <!-- toc space start, end -->
// 一番下に変更履歴をつける
  // <!-- commit log start, end -->