/** Textual markov chain generator */
class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    let textObj = {}
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = {}
    this.words.forEach((word, index) => {
      if(this.words[index + 1]) {
          return chain.hasOwnProperty(word)? chain[word].push(this.words[index + 1]) : chain[word] = [this.words[index + 1]]
      } else {
          return chain.hasOwnProperty(word)? chain[word].push('null') : chain[word] = ['null']
        }
    })

    this.chains = chain
  }
  
  /** return random text from chains */

  

  makeText(numWords = 100) {
    // TODO
    let result = []

    const getRand = length => {
      return Math.floor(Math.random() * length)
    }
  
    const getNextWord = word => {
      console.log(word)
      console.log(this.chains[word])
      console.log(this.chains[word].length)
      if (this.chains[word].length > 1) {
        return this.chains[word][getRand(this.chains[word].length)]
      } else {
        return this.chains[word][0]
      }
    }
    let objLength = Object.keys(this.chains).length
    let currentWord = Object.keys(this.chains)[getRand(objLength)];

    while (numWords) {
      result.push(currentWord);
      numWords --;
      let nextWord = getNextWord(currentWord)
      if(nextWord === 'null') {
        result.push('.')
        currentWord = Object.keys(this.chains)[getRand(objLength)];
      } else {
        currentWord = nextWord
      }
    }

    return result.join(' ')
  }
}

let mm = new MarkovMachine("the boy and the girl went out");

console.log(mm.makeText())

module.exports = { MarkovMachine }