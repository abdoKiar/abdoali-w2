var text1 = document.querySelector("text1")
var text2 = document.querySelector("text2")
var text3 = document.querySelector("text3")



function findLongestWord(x,y,z) {
  const stringArray = (text1,text2,text3).split(" ");
  const orderedArray = stringArray.sort(() => {
  return text1.length - text2.length - text3.length
  });
  return orderedArray[0].length;
}
/*------*/

var parts = sentence.split();
var longestIndex = -1;
var longestWord = 0;

for(var i=0; i < parts.length; i++){
    if(parts[i].length > longestWord){
        longestWord = parts[i].length;
        longestIndex = i;
    }
}


var a = function() {}
text1.a('onclick', findLongestWord);
