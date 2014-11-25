var FallingRocksGame = FallingRocksGame || {};

FallingRocksGame.gameWidth = 250;
FallingRocksGame.gameHeight = 400;
FallingRocksGame.playerWidth = 20;
FallingRocksGame.playerHeight = 20;

FallingRocksGame.Player = function() {
		
	this.x = 0;
	this.y = 370;
	this.dx = 0;
	this.element = document.getElementById('player');

	FallingRocksGame.Player.prototype.update = function() {
		this.x += this.dx;
		
		if(this.x < 0) {
			this.x = 0;
		} else if(this.x > FallingRocksGame.gameWidth - FallingRocksGame.playerWidth) {
			this.x = FallingRocksGame.gameWidth - FallingRocksGame.playerWidth;
		}
	};
};

FallingRocksGame.Player.prototype.render = function() {
		this.element.style.left = (this.x + 'px');
	};

	FallingRocksGame.Player.prototype.setDx = function(dxValue) {
		this.dx = dxValue;
		return;
	};

	FallingRocksGame.Player.prototype.getX = function() {
		return this.x;
	};

	FallingRocksGame.Player.prototype.getY = function() {
		return this.y;
};

FallingRocksGame.Rock = function(s, xPos) {
	
	this.y = 0;
	this.dy = 3;

	this.size = s;
	this.x = xPos;

	this.element = document.createElement('DIV');
	this.element.className = 'rock';
	this.element.style.width = this.size + 'px';
	this.element.style.height = this.size + 'px';
	this.element.style.left = this.x + 'px';
	this.element.style.top = this.y + 'px';

	var field = document.getElementById('field');
	field.appendChild(this.element);

	FallingRocksGame.Rock.prototype.update = function() {
		this.y += this.dy;
		if (this.y > FallingRocksGame.gameHeight) {
			FallingRocksGame.rocks.splice(FallingRocksGame.rocks.indexOf(this), 1);
			field.removeChild(this.element);
		}
	};
};

FallingRocksGame.Rock.prototype.render = function() {
		this.element.style.top = (this.y + 'px');
	};

	FallingRocksGame.Rock.prototype.getSize = function() {
		return this.size;
	};

	FallingRocksGame.Rock.prototype.getX = function() {
		return this.x;
	};

	FallingRocksGame.Rock.prototype.getY = function() {
		return this.y;
};

FallingRocksGame.createNewRocks = function() {
	var create = Math.floor(Math.random() * 14);

	if (create === 0) {
		
		var size = Math.floor((Math.random() * 15) + 20);
		var position = Math.floor(Math.random() * (FallingRocksGame.gameWidth - size));
		var rock = new FallingRocksGame.Rock(size, position);
		FallingRocksGame.rocks.push(rock);
	}
}

FallingRocksGame.rocks = [];

FallingRocksGame.tick = function() {

	FallingRocksGame.createNewRocks();

	FallingRocksGame.player.update();
	FallingRocksGame.player.render();

	for (var i in FallingRocksGame.rocks) {
		var rock = FallingRocksGame.rocks[i];
		rock.update();
		rock.render();
		
		if(FallingRocksGame.checkCollision(rock)) {
			
			clearInterval(FallingRocksGame.interval);
		}
	}

}

FallingRocksGame.checkCollision = function(rock) {

	if(FallingRocksGame.player.getX() < (rock.getX() + rock.getSize()) &&
		(FallingRocksGame.player.getX() + FallingRocksGame.playerWidth) > rock.getX() &&
		(370 + FallingRocksGame.playerHeight) > rock.getY() &&
		370 < (rock.getY() + rock.getSize())) {

		return true;
	}

	return false;
}

FallingRocksGame.startGame = function() {

	var field = document.getElementById('field');
	field.focus();
	field.addEventListener('keydown', FallingRocksGame.keyDownField, false);
	field.addEventListener('keyup', FallingRocksGame.keyUpField, false);

	FallingRocksGame.player = new FallingRocksGame.Player();

	
	FallingRocksGame.interval = setInterval(FallingRocksGame.tick, 50);

}

FallingRocksGame.paused = false;

FallingRocksGame.pauseGame = function() {

	if (FallingRocksGame.paused) {
		FallingRocksGame.interval = setInterval(FallingRocksGame.tick, 50);
		var field = document.getElementById('field');
		field.focus();
		FallingRocksGame.paused = false;
		var pauseButton = document.getElementById('pause');
		pauseButton.innerHTML = 'Pause';

	}else {
		clearInterval(FallingRocksGame.interval);
		FallingRocksGame.paused = true;
		var pauseButton = document.getElementById('pause');
		pauseButton.innerHTML = 'Resume';
	}
}

FallingRocksGame.keyDownField = function(e) {

	var keyCode = e.keyCode;
	if (keyCode === 37) {
		FallingRocksGame.player.setDx(-5);
	} else if (keyCode === 39) {
		FallingRocksGame.player.setDx(5);
	}
}

FallingRocksGame.keyUpField = function(e) {

	var keyCode = e.keyCode;
	if (keyCode === 37) {
		FallingRocksGame.player.setDx(0);
	} else if (keyCode === 39) {
		FallingRocksGame.player.setDx(0);
	}
}





