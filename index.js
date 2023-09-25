const yargs = require('yargs')
const pkg = require('./package.json')
const { addNote, printNotes, removeNotes } = require('./notes.controller')
// require('./module')

// const person = {
//   name: 'Egor',
//   age: 15,
// }

// function getname(obj) {
//   return obj.name
// }

// console.log(getname(person))

// console.log(__filename)
// console.log(__dirname)
// console.log(process.argv)
// console.log(process.argv[2])

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title)
  },
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes()
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove note by id',
  builder: {
    id: {
      type: 'string', 
      describe: 'Note to be deleted',
      demandOption: true,
    },
  },
  async handler({ id }) {
    removeNotes(id)
  },
})

yargs.parse()
