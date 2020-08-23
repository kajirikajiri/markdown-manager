import {addDateToFileNamePrefix} from './addDateToFileNamePrefix'
import {addHeaderToMarkdown} from './addHeaderToMarkdown'
(async()=>{

  await addHeaderToMarkdown()

  addDateToFileNamePrefix()
})()