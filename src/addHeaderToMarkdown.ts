import fs from 'fs'
import {getFileContents} from './getFileContents'
import {getMarkdownsForDiff} from './getMarkdownsForDiff'

export const addHeaderToMarkdown = async()=>{
  const markdowns:string[] = getMarkdownsForDiff()
  try {
    await Promise.all(markdowns.map(async(fileName:string)=>{
      const string = await getFileContents(fileName)
      fs.writeFileSync(`${fileName}`, string)
    }))
  }catch(e){
    console.log('catch-------')
    console.log(e)
  }
}
