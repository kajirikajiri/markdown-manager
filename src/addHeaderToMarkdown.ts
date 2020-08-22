import fs from 'fs'
import {getFileContents} from './getFileContents'

export const addHeaderToMarkdown = (dir:string,markdowns:string[])=>{
  (async(markdowns:string[])=>{
    try {
      markdowns.forEach(async(fileName:string)=>{
        const string = await getFileContents(fileName)
        fs.writeFileSync(`${dir}/${fileName}`, string)
      })
    }catch(e){
      console.log('catch-------')
      console.log(e)
    }
  })(markdowns)
}
addHeaderToMarkdown('./markdown', ['test.md', 'atest.md', 'testcopy.md'])