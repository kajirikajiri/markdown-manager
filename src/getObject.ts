export const getObject = (list:string[])=> {
  return list.map((name:string)=>{
    return {before: name}
  })
}