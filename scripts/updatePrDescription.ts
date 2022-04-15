import * as fs from 'fs'
import * as path from 'path'

let prDescriptionArg = process.argv.find(arg => arg.split('=')[0] === '--prDescription')
if (prDescriptionArg === undefined) throw new Error('--prDescription key is not provided')
let prDescription = fs.readFileSync(path.join(process.cwd(), prDescriptionArg.split('=')[1]), {encoding: 'utf8'})
let searchRegexKey = process.argv.find(arg => arg.split('=')[0] === '--searchRegex')
if (searchRegexKey === undefined) throw new Error('--searchRegex is not provided')
let searchRegex = searchRegexKey.split('=')[1]
searchRegex = searchRegex.replace('[', '\\[')
searchRegex = searchRegex.replace(']', '\\]')
let regex = new RegExp(searchRegex)
let replaceWithKey = process.argv.find(arg => arg.split('=')[0] === '--replaceWith')
if (replaceWithKey === undefined) throw new Error('--replaceWith is not provided')
let replaceWith = replaceWithKey.split('=')[1]
console.log(prDescription.replace(regex, replaceWith))