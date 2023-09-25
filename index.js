const yargs = require('yargs')
const pkg = require('./package.json')
const { addNote, printNotes, removeNotes } = require('./notes.controller')
/* 
! Команда для вывода заметок с id:
node index list
! Консоль:
    Here is the list of notes:
    1695635575911 Hello

! Команда для добавления заметки которую в последствии удалим:
node index add --title=noteToDelete
! Консоль:
    Note with title: noteToDelete was added!

! Команда для удаления заметки по id=1695651264461:
node index remove --id=1695651264461
! Консоль:
    Note with id: 1695651264461 has been removed!
*/

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
