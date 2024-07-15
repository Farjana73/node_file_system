const fs = require('fs');


// file read

async function readFile(filename) {
   try{
       const data = await fs.readFileSync('todo.text', 'utf-8')

       console.log(data);
   }catch(err){
       console.log(err);
   }
}

// file create

async function createNewFile(filename) {
    try{
        const data = await fs.writeFileSync('todo2.text', 'hello world!');
        console.log('successfully created new file');


    }catch(err){
        console.log(err);
    }
}

// Append file

async function appendNewFileContent(filename) {
    try{
        const data = await fs.appendFileSync('todo2.text', '\nhello world!');
        console.log('successfully created new file');


    }catch(err){
        console.log(err);
    }
}

// file delete

async function deleteFile(filename) {
    try{
        await fs.unlinkSync('todo3.text');
        console.log('successfully deleted file');


    }catch(err){
        console.log(err);
    }
}

// Rename file
async function renameFile(filename) {
   try{
       let result = await fs.renameSync('old_file.text', 'hello world!');

       console.log('successfully renamed file');
   }catch(err){
       console.log(err);
   }
}

(async ()=>{
    // await readFile()
    // await createNewFile()
   // await appendNewFileContent()
   //  await deleteFile()
    await renameFile()

})()

