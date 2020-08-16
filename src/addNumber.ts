import {getLatestCommitDate} from './getFromGithub'

export const addNumber =(fileNameList:{before:string}[], dirName:string):{before:string,after:string}[]=> {
  return fileNameList.map(({before})=>{
    const filePath:string = `${dirName}/${before}`
    const date:string = getLatestCommitDate(filePath)
    const after:string = `${dirName}/${date}${before}`
    const result:{before:string, after:string} =  {before: filePath, after}
    return result
  })
}
