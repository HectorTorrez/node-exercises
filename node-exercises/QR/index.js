import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'node:fs'

const PARAMETER = [
    {
        name: 'url',
        message: 'Enter an url',
        waitUserInput: true,
    }
    
]
inquirer
.prompt(PARAMETER).then((answers)=>{
    const text = JSON.stringify(answers)
    const qr_svg = qr.image(text);
    qr_svg.pipe(fs.createWriteStream('QR.png'));
    fs.appendFile('url.txt', text, err=>{
        console.log(err)
        console.log('Succesfully')
    })
})
.catch((error)=> {
    console.log(error)
})


