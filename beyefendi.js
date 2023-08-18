import { defaultWords } from "./defaultWords";

export const checkFill = (props) => {
  if (props.addWords) {
    props.addWords.map((word) => {
      defaultWords.push(word);
    });
  }
  if (props.deleteWords) {
    props.deleteWords.map((data) => {
      defaultWords.splice(defaultWords.indexOf(data), 1);
    });
  }
  if (props.returnType === 0) {
    const text = props.text.toLowerCase();
    console.log(text);
    const isMatch = defaultWords.some((word) => text.includes(word));
    console.log(isMatch);
    return isMatch;
  }

  var regExpSource = defaultWords.join("|");
  var regExpFilter = new RegExp(regExpSource, "ig");
  var result = props.text.replace(regExpFilter, (word) =>
    replaceFunction(word)
  );
  return result;
};

const replaceFunction = (word) => {
  let asteriks = "";
  for (let i = 0; i < word.length; i++) {
    asteriks += "*";
  }
  return asteriks;
};
