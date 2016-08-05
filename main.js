
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

// Get command line args
const source_file = argv['_'][0]
const dest_dir = argv['_'][1]

// Get array of filenames in dest_dir
const dest_dir_files = fs.readdirSync(dest_dir)

// line begins with "R.<name>("
const beginsWithR = new RegExp(/^R\.(.+?)\(/, '')

// Split source_file string by newlines and returns array
let source_symbols = fs.readFileSync(source_file, 'utf8').split('\n')

// Some symbols span multiple newlines (ex. mapAccum)
// This adds the extra lines back to the first array index where the symbol beginsWithR
let lastR = null
source_symbols.forEach((v, i, a) => {
  if (beginsWithR.test(v)) {
    lastR = i
  } else if (v !== '') {
    a[lastR] += '\n * ' + v
  }
})

// Now I go back through and remove all those extra lines that don't beginWithR
source_symbols = source_symbols.filter(v => beginsWithR.test(v))

// matches "/**<anything up to  " */">"
const matchComment = new RegExp(/\/\*\*[^]+?(?=\s\*\/)/)
// matches " * @symb<anything up to " * @" or $>"
const matchAtSymb = new RegExp(/\s\*\s\@symb[^]+?(?=\s\*\s\@|$)/, 'g')

// remove all @symb from the dest_dir_files
// Comment out this block if you do not want to remove the existing @symb in dest_dir_files
for (var v of source_symbols) {
  const name = v.match(beginsWithR)[1]
  const filePath = dest_dir + '/' + name + '.js'
  const fileStr = fs.readFileSync(filePath, 'utf8')
    .replace(matchComment, match => match.replace(matchAtSymb, ''))
  
  fs.writeFileSync(filePath, fileStr, 'utf8')
}

// add new @symb to the file
// Comment out this block if you do not want to add the new symbols from source_file to dest_dir_files
for (var v of source_symbols) {
  const name = v.match(beginsWithR)[1]
  const filePath = dest_dir + '/' + name + '.js'
  
  if (dest_dir_files.includes(name + '.js')) {

    const fileStr = fs.readFileSync(filePath, 'utf8')
      .replace(matchComment, match => match + ` * @symb ${v}\n`)  
    
    fs.writeFileSync(filePath, fileStr, 'utf8')
    
  } else {
    console.warn('Unknown name in source symbols: ', name)
  }
}

