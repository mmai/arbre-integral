var fs = require('fs')

// var inputFile = "ProcreationSonnets.txt"
// var outputFile = "shakespeare.json"
var inputFile = process.argv[2]
var outputFile = process.argv[3]

var nbCircles = 7

fs.readFile(inputFile, 'utf8', function(err, data){
  if (err) { return console.log(err) }
  json = composeJsonFromText(data)
  fs.writeFile(outputFile, json, 'utf8', function(err){
      if (err) { return console.log(err) }
      console.log('Generation completed')
    })
})

function composeJsonFromText(text){
  var leafs = {}
  var quotes = shuffle(text.split('\n'))

  leafs["0"] = makeLeaf(0, 0, quotes.pop())

  for (var numCircle = 1; numCircle < nbCircles; numCircle++){
    var nbLeafs = Math.pow(2, numCircle)
    for (var numLeaf = 0; numLeaf < nbLeafs; numLeaf++){
      var idLeaf = getLeafId(numCircle, numLeaf)
      leafs[idLeaf] = makeLeaf(numCircle, numLeaf, quotes.pop())
    }
  }

  return JSON.stringify(leafs)
}

function makeLeaf(numCircle, numLeaf, quote){
  return {
    'name': makeName(numCircle, numLeaf),
    'word': getRandomWord(quote),
    'content': quote
  }
}

function makeName(circ, leaf){
  switch(circ){
  case 0: return "Sun"
  case 1: return "Moon"
  case 2: return "Mars"
  case 3: return "Mercury"
  case 4: return "Jupiter"
  case 5: return "Venus"
  case 6: return "Saturn"
  }
  return "Beyond"
}

function getRandomWord(quote){
  var words = quote.split(' ').filter(function(w){return w.length > 4})
  var rand_idx = Math.floor(Math.random()*words.length)
  return  words[rand_idx]
}

function getLeafId(circ, pos){
  //Normalize pos
  if (!(pos == 0 && circ == 0)){// not root
    var circleLength = Math.pow(2, circ);
    pos = (pos - 1) % circleLength + 1;
    while (pos < 1){
      pos += circleLength;
    }
  }

  var id = "0";
  var level = circ; 
  var cpos = pos; 
  while (level > 0){
    var half = Math.pow(2, level - 1);
    if (cpos <= half) {
      id += "0";
    } else {
      id += "1";
      cpos -= half;
    }
    level -= 1;
  }
  return id;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a
}
