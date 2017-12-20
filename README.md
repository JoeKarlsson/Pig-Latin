# Pig Latin Translator

[![Greenkeeper badge](https://badges.greenkeeper.io/JoeKarlsson/Pig-Latin.svg)](https://greenkeeper.io/)
I created a module that translates a string into Pig Latin, and is capable of translating Pig Latin back into in the native language.

You can check out the page [here](https://joekarlsson1.github.io/Pig-Latin/).

##How Pig Latin Works
Basically, the Pig Latin system used here works as follows:

You take the first letter of a word (e.g. Hello = H) and use the last letters (e.g. Hello = ello) and add 'ay' to the first letter (e.g. Hello = Ello hay).

- Words that start with a vowel (A, E, I, O, U) simply have "ay" appended to the end of the word.
     - Examples are:
          - "eat" → "eatay"
          - "omelet" → "omeletay"
          - "are" → "areay"

- Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "-ay" is appended.
     -('Y' is counted as a vowel in this context)
     - Examples are:
          - "pig" → "ig-pay"
          - "banana" → "anana-bay"
          - "trash" → "ash-tray"
          - "happy" → "appy-hay"
          - "duck" → "uck-day"
          - "glove" → "ove-glay"

##Additional Examples
phrase = 'This phrase will be converted into piglatin, please insert your phrase here.'

pigString= 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray'

!['Pig latin'](https://media.giphy.com/media/c2rJA8UVBVodi/giphy.gif)

Thaaaaaaanks :D