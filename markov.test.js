const { MarkovMachine } = require('./markov')

describe("test Markov Machine", function () {

    test('check that generated text has correct num of words', function () {
        let mm = new MarkovMachine("the boy and the girl went out");
        let generatedText = mm.makeText(10)
        let arrOfWords = generatedText.split(' ').filter(word => word !== ".")
        expect(arrOfWords.length).toEqual(10)
    });

  
  });