const fs= require('fs');

//let data=fs.readFileSync('./text.txt','utf-8'); --> read the file 

//fs.writeFileSync('./text.txt',"This is fs module practice",'utf-8') --> A) this write the given content in file by erasing the old content if it is thre.
//fs.writeFileSync('./my.txt',"MY FILE ",'utf8'); B) it also create new file by name & given content if file doesnot exist

//fs.appendFileSync('./text.txt','\n This is fs module practice','utf8') --> A) this append the new content to alrady writen content in the file
//fs.appendFileSync('./book.txt','\n This is fs module practice','utf8') -->  B) it also create new file by name & given content if file doesnot exist

// fs.copyFileSync('./sourcefile.txt','./newcopy.txt'); // A) copy content of the file to new file
//B) if new file alredy exist then overwrite the new file with source file content

// fs.unlinkSync('./abc.txt')--> delete the file
//fs.linkSync('./abc.txt','./my.txt');

//fs.mkdirSync('./newfolder'); //make new folder
//fs.mkdirSync('../newfolder/one');
// fs.rmdirSync('./newfolder') --> delete the folder
console.log(fs)