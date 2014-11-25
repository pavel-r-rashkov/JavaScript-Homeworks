function solve(args) {

  var concerts = {};

  (function() {
    for (var i = 0 ; i < args.length ; i += 1) {
      var line = args[i];
      var tokens = line.split(' | ');
      var band = tokens[0];
      var city = tokens[1];
      var stadium = tokens[3];

      var cityConcerts = concerts[city] || {};
      var stadiumConcerts = cityConcerts[stadium] || [];
      
      if(stadiumConcerts.indexOf(band) == -1) {
        stadiumConcerts.push(band);
      }
      cityConcerts[stadium] = stadiumConcerts;
      concerts[city] = cityConcerts;

    };
  })();

  (function() {
    for(var key in concerts) {
      var stadiums = concerts[key];

      var sortedStadiums = sortProperties(stadiums);
      for(var bands in sortedStadiums) {
        sortedStadiums[bands] = sortedStadiums[bands].sort();
      }

      concerts[key] = sortedStadiums;
    }
  })();

  sortedConcerts = sortProperties(concerts);
  console.log(JSON.stringify(sortedConcerts));

  function sortProperties (obj) {
    var prop = Object.keys(obj);
    prop = prop.sort();

    var sortedObj = {};

    for(var index in prop) {
      sortedObj[prop[index]] = obj[prop[index]];
    }

    return sortedObj;
  }
}