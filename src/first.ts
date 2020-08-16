import fs from 'fs'
import {getMdList} from './getMdList'
import {getStartsWithNotNumberList} from './getStartsWithNotNumberList'
import {getObject} from './getObject'
import {addNumber} from './addNumber'
import {changeFileName} from './changeFileName'

const dir:string = './markdown'

const fileNameList = fs.readdirSync(dir);

const markdowns:string[] = getMdList(fileNameList)

const startsWithNotNumberMarkdowns = getStartsWithNotNumberList(markdowns)

const objStartsWithNotNumberMarkdowns = getObject(startsWithNotNumberMarkdowns)

const filePathList:{before:string, after:string}[] = addNumber(objStartsWithNotNumberMarkdowns, dir)

changeFileName(filePathList)



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