import path from 'path'
import { fileURLToPath } from 'url'
// import { Playground } from './playground.js'

// console.log(path)
// console.log(Playground.NUM)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)
console.log(__filename)
