function solve(args) {

  console.log('<table>')
  console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
  
  var start = Number(args[0]);
  var end = Number(args[1]);

  (function() {
    for(var i = start ; i <= end ; i += 1) {
      var fib = (isPerfectSquare(5 * Math.pow(i, 2) + 4) || isPerfectSquare(5 * Math.pow(i, 2) - 4)) ? 'yes' : 'no';

      console.log('<tr><td>' + i + '</td><td>' + Math.pow(i, 2) + '</td><td>' + fib + '</td></tr>');
    }
  })();

  console.log('</table>');

  function isPerfectSquare(number) {

    return Math.pow(parseInt(Math.sqrt(number)), 2) == number;
  }
}