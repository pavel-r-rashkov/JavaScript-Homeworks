function solve(args) {

  var result = args.slice(0);

  for(var lineIndex = 0 ; lineIndex < args.length - 1; lineIndex += 1) {
    

    for(var i = 0 ; i < args[lineIndex].length ; i += 1) {

      if(args[lineIndex][i] == args[lineIndex + 1][i] && args[lineIndex][i] == args[lineIndex + 1][i - 1] && args[lineIndex][i] == args[lineIndex + 1][i + 1]) {

        substitute(lineIndex, i);
        substitute(lineIndex + 1, i - 1);
        substitute(lineIndex + 1, i);
        substitute(lineIndex + 1, i + 1);
      }
    }
  }

  for(var line in result) {
    console.log(result[line]);
  }

  function substitute(row, col) {
    var newLine = result[row].substr(0, col) + '*' + result[row].substr(col + 1);
    result[row] = newLine;
  }
}