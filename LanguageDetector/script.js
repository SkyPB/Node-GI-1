const LanguageDetect = require("languagedetect");
const languageDetector = new LanguageDetect();

console.log(languageDetector.detect("Es macht gut", 1));
console.log(languageDetector.detect("Dobra prace", 1));
console.log(languageDetector.detect("Gwaith da", 1));
