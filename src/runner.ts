import fs from 'fs'
import {getMdList} from './getMdList'
import {addDateToFileNamePrefix} from './addDateToFileNamePrefix'
import {addHeaderToMarkdown} from './addHeaderToMarkdown'
(async()=>{
  const dir:string = './markdown'

  const fileNameList:string[] = fs.readdirSync(dir);

  const markdowns:string[] = getMdList(fileNameList)

  await addHeaderToMarkdown(dir, markdowns)

  addDateToFileNamePrefix(dir, markdowns)
})()