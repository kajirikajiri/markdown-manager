export const getIsToc = (line:string,lineCounter:number):boolean =>{
  switch (true) {
    case lineCounter >= 5:
      return line === '<!-- START doctoc -->' || line === '<!-- END doctoc -->' || line === '<!-- START doctoc generated TOC please keep comment here to allow auto update -->' || line === '<!-- END doctoc generated TOC please keep comment here to allow auto update -->'
    default:
      return false
  }
}