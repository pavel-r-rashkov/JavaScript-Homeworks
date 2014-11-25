'use strict';

function findCardFrequency(hand) {
	
	var cards = hand.split(' ');
	var faces = {};

	(function() {
		for(var iCard in cards) {
			var face = '*' + cards[iCard].substring(0, cards[iCard].length - 1);
			var count = faces[face];

			if(count === undefined) {
				count = 0;
			}

			faces[face] = count + 1;
		}
	})();

	for(var iFace in faces) {
		console.log(iFace.substring(1) + ' -> ' + ((faces[iFace] / cards.length) * 100).toFixed(2) + '%');
	} 
}

(function() {
	var firstExample = '8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦';
	findCardFrequency(firstExample);
	console.log('-------------');

	var secondExample = 'J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠';
	findCardFrequency(secondExample);
	console.log('-------------');

	var thirdExample = '10♣ 10♥';
	findCardFrequency(thirdExample);
})();

