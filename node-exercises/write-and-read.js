const {writeFile, readFile} = require('node:fs/promises');


(async () => {
   const write = await writeFile('message.txt', 'Hello, Node.')

    console.log(write)

    const read = await readFile('./message.txt','utf-8')

    console.log(read)

})()