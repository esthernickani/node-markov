/** Command-line tool to generate Markov text. */
const fs = require('fs')
const process = require('process')
const  axios = require('axios')

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
    
        console.log(`... generated text from file ${path} ...`)
    })
}

async function webCat(url) { 
    try {
        const { data } = await axios.get(url)
        console.log(`... generated text from URL ${url} ...`)
    } catch(err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }

}

if (process.argv[2] === 'file') {
    cat(process.argv[3])
} else if (process.argv[2] === 'url') {
    webCat(process.argv[3])
}
