let fs = require('fs')
let file = './Eminem - Guts Over Fear ft. Sia (Official Video).m4a'

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('copy.m4a')
    read.on('data', (chunk) =>{
        progress += chunk.length
        console.log("J'ai lu " + 100 * progress / total + "%")
    })
    read.pipe(write)
    write.on('finish', () => {
        console.log('le fichier à été bien copié')
    })
})
