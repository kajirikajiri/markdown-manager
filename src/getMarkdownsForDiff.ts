import {execSync} from 'child_process'

export const getMarkdownsForDiff =():string[]=>{
  const getDateCmd = "git diff --staged --name-only ./markdown/ | head -c -1"
  const result = execSync(getDateCmd).toString().split('\n')
  return result
}
