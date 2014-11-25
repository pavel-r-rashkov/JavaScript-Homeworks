function solve(input) {
  var html = input.join('');

  var anchors = html.match(/<a[^>]+>/g);
  for(var a in anchors) {

    var href = anchors[a].match(/href[\s]*=[\s]*[\S]+/g);

    if(href != undefined) {
      var b = href[0].substr(href[0].indexOf('=') + 1);
      b = b.trim();
      b = b.replace('>', '');

      if(b[0] == '"' || b[0] == "'") {
        b = b.substring(1, b.length - 1);
      }
      
      console.log(b);
    }
  }
}