var likeButton = document.getElementById('like');
likeButton.addEventListener('click', like, false);

function like() {
	likeButton.innerText = likeButton.innerText === 'Like' ? 'Unlike' : 'Like';
}