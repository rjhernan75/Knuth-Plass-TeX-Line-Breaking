const newLocal = "Wrap text using a more sophisticated algorithm such as the Knuthand Plass TeX algorithm. If your language provides this, you get easy extra credit,but you must reference documentation indicating that the algorithm is somethingbetter than a simple minimum length algorithm";
let str = newLocal;

const Wrap = (any, LineLengthmax) => {
    const words = str.replace(/[\r\n]+/g, ' ').split(' ');
    let lineLength = 0;
    
    return words.reduce((result, word) => {
      if (lineLength + word.length >= LineLengthmax) {
        lineLength = word.length;
        return result + `\n${word}`; 
      } else {
        lineLength += word.length + (result ? 1 : 0);
        return result ? result + ` ${word}` : `${word}`; 
      }
    }, '');
  }
  console.log(Wrap(str, 50));

  