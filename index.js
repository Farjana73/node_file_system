const fs = require('fs');
const path = require('path');


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

// create folder


async function createDirectory(){
    try{
        let result = await fs.mkdirSync("new_folder")

        console.log('successfully created');
    }catch{
        console.log(err);
    }
}

// Rename folder

async function renameFolderDirectory(){
    try{
        let result = await fs.renameSync("new_folder", "new_folder25")

        console.log('successfully renamed');
    }catch{
        console.log(err);
    }
}

// IIF (Immediately invoked function)
(async ()=>{
    // await readFile()
    // await createNewFile()
   // await appendNewFileContent()
   //  await deleteFile()
    // await renameFile()
    // await createDirectory()

    await renameFolderDirectory()

})()

