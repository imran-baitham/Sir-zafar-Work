const tweetForm = document.querySelector("#tweetForm");
const addItems = document.querySelector("#tweet");

tweetForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const usernameInput = tweetForm.elements.username;
	// console.dir(tweetForm.el)
	addTweet(usernameInput.value);
	usernameInput.value = " ";
});
const addTweet = (username) => {
	const newTweet = document.createElement("li");
	// console.log(newTweet.usernameInput.value)
	newTweet.append(username);
	addItems.append(newTweet);
};
addItems.addEventListener("click", function (e) {
	e.target.remove();
});



