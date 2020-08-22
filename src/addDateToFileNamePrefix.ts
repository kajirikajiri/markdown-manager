import fs from 'fs'
import {getMdList} from './getMdList'
import {validFileNameList} from './validFileNameList'
import {genObject} from './genObject'
import {addDate} from './addDate'
import {changeFileName} from './changeFileName'

export const addDateToFileNamePrefix = ()=>{
  const dir:string = './markdown'

  const fileNameList:string[] = fs.readdirSync(dir);

  const markdowns:string[] = getMdList(fileNameList)

  const validatedFileNameList:string[] = validFileNameList(markdowns)

  const objFileNameList:{before:string}[] = genObject(validatedFileNameList)

  const filePathList:{before:string, after:string}[] = addDate(objFileNameList, dir)

  changeFileName(filePathList)
}



// fileのcommit logから最初にコミットした時間を割り出す
// ファイル名の先頭が数値１４桁で有ることを確認する
// ファイル名の先頭に時間を付ける。ファイルを上書き
// ファイルをコピーする
// コピーしたファイルの先頭にwipとあれば処理しない
// wipが書いてあったファイルは最後に出力する
// コピーしたファイルの先頭にheaderをつける
  // <!-- header space start, end -->
// headerの下にtocをつける
  // <!-- toc space start, end -->
// 一番下に変更履歴をつける
  // <!-- commit log start, end -->