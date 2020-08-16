import {execSync} from 'child_process'
const getLatestCommitHash = (filePath:string):string =>{
  const getCommitHashCmd = `git rev-list --max-parents=0 HEAD ${filePath}`
  const commitHash = execSync(getCommitHashCmd).toString()
  return commitHash.replace(/\r?\n/g, '')
}

const getDate = (commitHash:string):string =>{
  if (!commitHash) return ''
  const getDateCmd = `git log --pretty=format:"%cd" --date=format:'%Y%m%d%H%M%S' ${commitHash}`
  const date = execSync(getDateCmd).toString()
  return date
}

export const getLatestCommitDate =(filePath:string):string=>{
  const commitHash = getLatestCommitHash(filePath)
  const result = getDate(commitHash)
  return result
}