import { checkFill } from "./beyefendi";

var text1 = checkFill({
  text: "lorem word5 ipsum word3 ",
  addWords: ["word5", "word6"],
  deleteWords: ["word1", "word2"],
  returnType: 1,
});

var text2 = checkFill({
  text: "lorem word5 ipsum word3 ",
  addWords: ["word5", "word6"],
  deleteWords: ["word1", "word2"],
  returnType: 0,
});

document.querySelector("#app").innerHTML = `
  <div>
  <div> ${text1} </div>
  <div> is "lorem word5 ipsum word3" have bad words?  ${text2} </div>
  </div>
`;
