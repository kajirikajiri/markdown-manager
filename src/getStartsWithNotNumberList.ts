import path from 'path'

export const getStartsWithNotNumberList = (list:string[]):string[] => {
  return list.filter(file=>{
    return !(/^\d{14}/.test(path.basename(file)))
  })
}