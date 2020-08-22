import fs from 'fs'
import {getFileContents} from './getFileContents'

export const addHeaderToMarkdown = async(dir:string,markdowns:string[])=>{
  try {
    await Promise.all(markdowns.map(async(fileName:string)=>{
      const string = await getFileContents(fileName)
      fs.writeFileSync(`${dir}/${fileName}`, string)
    }))
  }catch(e){
    console.log('catch-------')
    console.log(e)
  }
}
// addHeaderToMarkdown('./markdown', ['test.md', 'atest.md', 'testcopy.md'])