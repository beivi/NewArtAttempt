
var numsArray = [];
var text;
var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        text = reader.result;

        console.log(reader.result.substring(0, 200));
        text = text.replace(/[0-9.,""''!-;:\n]/g, "");
        text = text.toLowerCase();
        lilFunc();

    };
    reader.readAsText(input.files[0]);
};

var countedWords;
var wordArray;
function lilFunc(){
    wordArray = text.split(" ");
    countedWords = wordArray.reduce(function(allWords, word){
        if(word in allWords){
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        return allWords;
    },{});
    console.log(wordArray);
    console.log(countedWords);
}

var txt;
function justVals(){
    txt = "";
    for (x in countedWords){
        txt += countedWords[x] + " ";
        console.log(txt);
    }
    // numsArray = txt.split(" ");
    // console.log(numsArray);
    //$(numsArray).slice(0,2).css("color","red");
    document.getElementById('numbers').innerHTML = txt;


}

var num;
function prettyColors(){
    for(var i = 0; i < numsArray.length; i++){
        num = numsArray[i];
        console.log(num);
        $(num).filter(function(){

        });
        // if(num > 1){
        //     document.getElementById('numbers').style.color = "red";
        // }

    }

}

// function gridMaking(){
//
//     var row = document.getElementById("firstRow");
//
//         var x = row.insertCell(0);
//
//         var cell = "this shit";
//
//         x.innerHTML = cell;
//
// }

$("button").click(function(){
    justVals();
    //prettyColors();
    //gridMaking();



});
