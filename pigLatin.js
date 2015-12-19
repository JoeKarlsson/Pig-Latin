module.exports = pigPhrase;
module.exports = unpigPhrase;

/**
 * Takes an sentence and converts each word into pig latin
 * @param  [String] phrase that will be converted into pig latin.
 * @return [String] Phrase that has been translated into pig latin
 */
function pigPhrase (phrase) {
  var sentence = phrase.split(' ');
  var piggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    piggedPhrase.push(pigWord(sentence[i]));
  };
  return piggedPhrase.join(' ');
}

/**
 * converts a pig latin phrase back into it's native language
 * @param  [String] Pig Latin phrase that will be converted back into the native language.
 * @return [String] Phrase that has been translated into the native language.
 */
function unpigPhrase (phrase) {
  var sentence = phrase.split(' ');
  var unpiggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    unpiggedPhrase.push(unpigWord(sentence[i]));
  };
  return unpiggedPhrase.join(' ');
}

/**
 * Takes a word and converts it into pig latin
 * @param  [string] This is the word that will be converted
 * @return [string] Word that hass been converted into pig latin
 */
function pigWord (word) {
  return word.slice(findFirstVowel(word), word.length) + '-' + word.slice( -word.length, findFirstVowel(word)) + 'ay';
}

/**
 * Takes a word in pig latin and converts it into a human readable word
 * @param  [String] piggedWord that will be translated
 * @return [String] Translated word
 */
function unpigWord ( piggedWord ) {
  return piggedWord.slice( piggedWord.search('-') + 1, -2 ) + piggedWord.slice( 0, piggedWord.search('-'));
}

/**
 * Finds the first vowel in a word
 * @param  [sting] word
 * @return [int] position of the first vowel in the word
 */

function findFirstVowel (word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i <= word.length - 1; i++) {

    if (vowels.indexOf(word[i]) !== -1 ) {
      return i;
    }
  }
  return word.length;
}

console.log(pigPhrase('I built a pig latin translator program'));
//
// console.log(unpigPhrase( 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray' ));