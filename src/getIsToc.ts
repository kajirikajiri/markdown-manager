export const getIsToc = (line:string,lineCounter:number):boolean =>{
  switch (true) {
    case lineCounter >= 5:
      return line === '<!-- START doctoc -->' || line === '<!-- END doctoc -->'
    default:
      return false
  }
}