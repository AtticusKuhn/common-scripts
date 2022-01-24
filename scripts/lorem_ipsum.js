console.log("lorem_ipsum.js of https://common-scripts.atticuskuhn.repl.co ")
/*
    This script automatically generates lorem impsum placeholder text
    try <div className="lorem 5 paragraphs"/> and you will instantly have placeholder text
 */
// Selects random.
window.addEventListener('DOMContentLoaded', (event) => {

var pickRandom = function (choices) {
	var rand = Math.floor(choices.length * Math.random());
	return choices[rand];
}


// Join all words with a delimiter.
var joinAll = function (words, delimiter) {
	var sentence = delimiter;
	for (var i = 0; i < words.length; i++) {
		sentence += delimiter + words[i];
	}
	return sentence;
}


// Function appends a dot at the end of word.
var makeFirst = function (word) {
	var firstLetter = word[0].toUpperCase();		
	var remainLetters = word.slice(1);
	word = firstLetter + remainLetters;
	return word;
}


// Function appends a dot at the end of word.
var makeLast = function (word) {
	return word.toLowerCase() + pickRandom([".", "!", "?", ",", ";"]);
}

// Punctuate punctuates random variables.
var punctuate = function (words) {
	var counter = 0;
	var rand = 6;
	while (counter < words.length - 1) {
		words[rand] = makeLast(words[rand]);
		words[rand + 1] = makeFirst(words[rand + 1]);
		var num = 4 + Math.floor(Math.random() * 5);
		rand = num + counter;
		counter += num;
	}
	return words;
}


// Create a random collection of words, Returns a list of words.
var createCollection = function (loremWords, numWords) {

	// Starting with an empty collection.
	var collection = [];

	// Iterate number of words required in sentence times.
	for (var i = 0; i < numWords; i++) {
		var loremWord = pickRandom(loremWords);
		// If it is the first iteration.
		if (i === 0) {
			loremWord = makeFirst(loremWord);
		}
		// If it is the last iteration.
		else if (i === numWords - 1) {
			loremWord = makeLast(loremWord);	
		}
		// Else
		else {
			loremWord = makeFirst(loremWord);	
		}
		// Append everything to the collection.	
		collection.push(loremWord);	
	}

	return collection;
}

// This function creates lorem ipsum text of given length.
var buildLorem = function (elem, loremWords, num) {
	// 'finalWords' holds the punctuated and Capitalized set of words.
	var finalWords;
	var wordCollection = createCollection(loremWords, num);
	// Punctuate will not be triggered if num is less than 7.
	(num > 7)? finalWords = punctuate(wordCollection): finalWords = myCollection;
	// joinAll(words, <delimiter>)
	return joinAll(finalWords, " ");
}

// If the found elem is a div then this will be triggered.
var isNotDiv = function (elem) {
	var classes = elem.classList;

	// iterate over all classes 
	for (var i = 0; i < classes.length; i++) {

		// If there is a class called Extra-large.
		if (classes[i] === "xl") {
			elem.innerHTML = buildLorem(elem, loremWords, 350);
			break;
		}
		// Else if there is a class called large.
		else if (classes[i] === "lg") {
			elem.innerHTML = buildLorem(elem, loremWords, 200);
			break;
		}
		// Else if there is a class called medium.
		else if (classes[i] === "md") {
			elem.innerHTML = buildLorem(elem, loremWords, 70);
			break;
		}
		// Else if there is a class called small.
		else if (classes[i] === "sm") {
			elem.innerHTML = buildLorem(elem, loremWords, 20);
			break;
		}
		// Else if there is a class called xtra-small.
		else if (classes[i] === "xs") {
			elem.innerHTML = pickRandom(["Nunc eros", "Lorem ipsum", "Integer non", "Maecenas placerat", "Morbi congue", "Nulla eu"]);
			break;
		}
		// Else if it is the word 'lo' we got nothin to do then.
		else if (classes[i] === "lo" || classes[i] === "lorem") {
			// Do nothing
		}
		// Else if it is a number.
		else if (isNaN(classes[i]) === false) {
			elem.innerHTML = buildLorem(elem, loremWords, Number(classes[i]) + 1);
			break;
		}	

	}

}

// If the found elem is a div, then this will be triggered
var isDiv = function (elem) {
    console.log("isDiv was called")
	var classes = elem.classList;
	var pgraphs = 0;
	var numWords = 0;

	// iterate over all classes.
	for (var i = 0; i < classes.length; i++) {
		// If it is a div and contains classes lo or lorem.
		if (classes[i] === "lo" || classes[i] === "lorem") {
			// Do nothing
		}
		// Else if it is a div and has a number and we never hit number before.
		else if (isNaN(classes[i]) === false && pgraphs === 0) {
			pgraphs = (Number(classes[i]) + 1);	
		}
		// Else if it is a div and we have hit number before.
		// even the strings are becoming numbers.
		else if (isNaN(classes[i]) === false && pgraphs > 0) {
			numWords = (Number(classes[i]) + 1);
			break;
		}
	}	

	// If both number of paragraphs and words per paragraph are specified.	
	if (numWords > 0 && pgraphs > 0) {
		// Iterate for given paragraph number of times.
		for (var i = 0; i < pgraphs; i++) {
			// buildLorem(elem, loremWords, <number of words>);
			elem.innerHTML += "<p>" + buildLorem(elem, loremWords, numWords) + "</p>";
		}
	}
	// After completing iterations and only number of paragraphs are specified.
	else if (numWords === 0) {
		// Iterate for given paragraph number of times.
		for (var i = 0; i < pgraphs; i++) {
			// buildLorem(elem, loremWords, <number of words>);
			elem.innerHTML += "<p>" + buildLorem(elem, loremWords, pickRandom([5, 6, 7, 8])) + "</p>";
		}
	}

}










// ========================= REAL STUFF STARTS HERE ======================================

// Al list of words we will use.
var loremWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nullam', 'viverra', 'odio', 'eu', 'turpis', 'facilisis', 'iaculis', 'Curabitur', 'felis', 'dui', 'tempor', 'non', 'euismod', 'pretium', 'imperdiet', 'vel', 'dolor', 'Pellentesque', 'varius', 'hendrerit', 'orci', 'vitae', 'porttitor', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Morbi', 'nec', 'porta', 'enim', 'Suspendisse', 'ut', 'accumsan', 'lorem', 'Sed', 'bibendum', 'sed', 'odio', 'sed', 'laoreet', 'Ut', 'in', 'eleifend', 'nisl', 'Aliquam', 'cursus', 'magna', 'ipsum', 'id', 'pretium', 'augue', 'elementum', 'vel', 'Suspendisse', 'eu', 'elit', 'augue', 'Proin', 'scelerisque', 'varius', 'eros', 'ut', 'tincidunt', 'Sed', 'facilisis', 'rhoncus', 'odio', 'ut', 'auctor', 'Donec', 'nulla', 'erat', 'ultricies', 'ac', 'nisl', 'eget', 'faucibus', 'feugiat', 'risus', 'In', 'eros', 'nunc', 'finibus', 'eget', 'tortor', 'ac', 'blandit', 'posuere', 'ex', 'Praesent', 'massa', 'ante', 'tempor', 'ac', 'purus', 'id', 'suscipit', 'ornare', 'nisi', 'Maecenas', 'tristique', 'magna', 'lectus', 'sit', 'amet', 'eleifend', 'tortor', 'ultricies', 'sed', 'Quisque', 'ornare', 'erat', 'a', 'fringilla', 'molestie', 'Donec', 'at', 'lorem', 'enim', 'In', 'hac', 'habitasse', 'platea', 'dictumst', 'Nulla', 'pretium', 'in', 'velit', 'ac', 'malesuada', 'Vestibulum', 'pharetra', 'urna', 'sed', 'nisl', 'faucibus', 'dapibus', 'ut', 'ut', 'arcu', 'Ut', 'a', 'dignissim', 'metus', 'commodo', 'molestie', 'elit', 'Praesent', 'non', 'diam', 'elit', 'Praesent', 'sollicitudin', 'neque', 'in', 'tellus', 'ultricies', 'tempus', 'Maecenas', 'convallis', 'odio', 'nec', 'libero', 'lacinia', 'accumsan', 'Vivamus', 'finibus', 'scelerisque', 'magna', 'ut', 'vehicula', 'Nulla', 'tristique', 'velit', 'non', 'elit', 'varius', 'sagittis', 'Ut', 'non', 'lectus', 'eu', 'odio', 'venenatis', 'ultrices', 'eu', 'sed', 'sapien', 'Sed', 'a', 'consectetur', 'turpis', 'Etiam', 'euismod', 'risus', 'ut', 'nibh', 'venenatis', 'feugiat', 'Praesent', 'a', 'elit', 'eget', 'dolor', 'molestie', 'lobortis', 'at', 'dapibus', 'lorem', 'Cras', 'lectus', 'purus', 'consectetur', 'vitae', 'enim', 'ut', 'scelerisque', 'fermentum', 'turpis', 'Phasellus', 'efficitur', 'lorem', 'pretium', 'eleifend', 'laoreet', 'elit', 'enim', 'imperdiet', 'risus', 'in', 'dictum', 'augue', 'turpis', 'a', 'elit', 'Vestibulum', 'dictum', 'blandit', 'sapien', 'vel', 'lobortis', 'Aliquam', 'et', 'posuere', 'mi', 'sit', 'amet', 'volutpat', 'elit', 'In', 'nunc', 'justo', 'ullamcorper', 'sed', 'consequat', 'sed', 'gravida', 'eget', 'erat', 'Nunc', 'vel', 'ex', 'ut', 'enim', 'commodo', 'auctor', 'Aenean', 'commodo', 'rutrum', 'volutpat', 'Vivamus', 'congue', 'euismod', 'ex', 'sit', 'amet', 'porttitor', 'odio', 'efficitur', 'quis', 'Suspendisse', 'a', 'neque', 'sit', 'amet', 'felis', 'interdum', 'sagittis', 'non', 'ut', 'dui', 'Integer', 'augue', 'nunc', 'consequat', 'vel', 'viverra', 'in', 'malesuada', 'sed', 'leo', 'Praesent', 'condimentum', 'facilisis', 'bibendum', 'Cras', 'elementum', 'fermentum', 'odio', 'in', 'malesuada', 'Nam', 'dignissim', 'felis', 'non', 'magna', 'mollis', 'id', 'dictum', 'est', 'sodales', 'Aliquam', 'risus', 'arcu', 'pretium', 'eget', 'sagittis', 'a', 'convallis', 'vel', 'magna', 'Integer', 'facilisis', 'est', 'erat', 'eget', 'pulvinar', 'sem', 'egestas', 'posuere', 'Maecenas', 'a', 'blandit', 'magna', 'Nulla', 'pretium', 'lectus', 'at', 'turpis', 'consequat', 'fermentum', 'Quisque', 'vulputate', 'pharetra', 'dictum', 'Nam', 'aliquam', 'odio', 'turpis', 'sed', 'feugiat', 'quam', 'ornare', 'quis', 'Cras', 'eu', 'faucibus', 'arcu', 'Cras', 'consectetur', 'porta', 'bibendum', 'Ut', 'sed', 'semper', 'neque', 'id', 'ultrices', 'odio', 'Aenean', 'in', 'lorem', 'sodales', 'pulvinar', 'enim', 'vel', 'dapibus', 'ex', 'Nam', 'eu', 'diam', 'efficitur', 'pellentesque', 'diam', 'vitae', 'luctus', 'neque', 'Curabitur', 'vitae', 'lacus', 'non', 'tellus', 'interdum', 'accumsan', 'eu', 'ac', 'tortor', 'Sed', 'congue', 'imperdiet', 'nibh', 'in', 'pharetra', 'enim', 'eleifend', 'eget', 'Integer', 'in', 'vestibulum', 'ante', 'Donec', 'vitae', 'neque', 'ac', 'massa', 'dictum', 'blandit', 'ut', 'ac', 'est', 'Morbi', 'facilisis', 'mauris', 'sit', 'amet', 'dictum', 'semper', 'orci', 'felis', 'lobortis', 'massa', 'eu', 'sollicitudin', 'justo', 'ex', 'finibus', 'sapien', 'Quisque', 'sit', 'amet', 'elementum', 'massa', 'Aenean', 'et', 'velit', 'turpis', 'Morbi', 'venenatis', 'purus', 'eros', 'nec', 'laoreet', 'eros', 'elementum', 'in', 'Quisque', 'sed', 'felis', 'mauris', 'Phasellus', 'ac', 'pellentesque', 'dui', 'Quisque', 'venenatis', 'dignissim', 'suscipit', 'Suspendisse', 'leo', 'ante', 'eleifend', 'ut', 'felis', 'vel', 'rutrum', 'placerat', 'magna', 'Maecenas', 'dapibus', 'metus', 'sit', 'amet', 'lacus', 'viverra', 'a', 'luctus', 'nisl', 'consequat', 'Vivamus', 'et', 'sodales', 'est', 'a', 'dapibus', 'odio', 'Nullam', 'scelerisque', 'odio', 'in', 'ligula', 'ornare', 'facilisis', 'Nulla', 'iaculis', 'condimentum', 'imperdiet', 'Pellentesque', 'iaculis', 'justo', 'sed', 'rhoncus', 'aliquam', 'Aliquam', 'erat', 'volutpat', 'Donec', 'condimentum', 'scelerisque', 'aliquam', 'Vestibulum', 'efficitur', 'augue', 'id', 'consectetur', 'mattis', 'sem', 'nibh', 'vulputate', 'nunc', 'eget', 'accumsan', 'nisi', 'orci', 'in', 'tortor', 'Vivamus', 'at', 'nunc', 'a', 'urna', 'congue', 'finibus', 'in', 'sed', 'mauris', 'In', 'neque', 'sem', 'lobortis', 'et', 'pulvinar', 'non', 'semper', 'quis', 'est', 'Vivamus', 'tempor', 'augue', 'nec', 'efficitur', 'dignissim', 'mauris', 'enim', 'maximus', 'lacus', 'ac', 'aliquet', 'nibh', 'sem', 'in', 'urna', 'Proin', 'iaculis', 'quis', 'libero', 'eget', 'suscipit', 'Sed', 'tempor', 'ligula', 'lacus', 'at', 'feugiat', 'nibh', 'accumsan', 'sit', 'amet', 'Vestibulum', 'faucibus', 'sed', 'ipsum', 'pharetra', 'scelerisque', 'Aliquam', 'finibus', 'ipsum', 'velit', 'vel', 'pulvinar', 'mi', 'ornare', 'id', 'Ut', 'a', 'dui', 'eleifend', 'cursus', 'nisl', 'vel', 'vehicula', 'ex', 'Quisque', 'sagittis', 'sit', 'amet', 'arcu', 'non', 'accumsan', 'Nunc', 'mattis', 'purus', 'eget', 'sem', 'faucibus', 'bibendum', 'Cras', 'quis', 'maximus', 'orci', 'Praesent', 'vitae', 'ligula', 'et', 'lorem', 'vulputate', 'hendrerit', 'quis', 'vitae', 'dui', 'Aliquam', 'ut', 'bibendum', 'est', 'eu', 'gravida', 'massa', 'Sed', 'justo', 'augue', 'tincidunt', 'a', 'lorem', 'sit', 'amet', 'iaculis', 'tempor', 'orci', 'Morbi', 'malesuada', 'dolor', 'sit', 'amet', 'finibus', 'tincidunt', 'Vivamus', 'ornare', 'elit', 'ut', 'iaculis', 'tristique', 'Quisque', 'pulvinar', 'leo', 'at', 'iaculis', 'blandit', 'nulla', 'nisi', 'aliquet', 'nisl', 'eget', 'iaculis', 'eros', 'leo', 'in', 'mauris', 'Pellentesque', 'fringilla', 'sapien', 'non', 'diam', 'semper', 'mollis', 'Fusce', 'quis', 'congue', 'ligula', 'et', 'varius', 'tellus', 'In', 'a', 'urna', 'finibus', 'fringilla', 'lectus', 'ac', 'pellentesque', 'arcu', 'Nam', 'dignissim', 'non', 'lorem', 'eget', 'tincidunt', 'Nunc', 'imperdiet', 'augue', 'metus', 'vel', 'egestas', 'lacus', 'aliquet', 'sit', 'amet', 'aenean', 'malesuada', 'finibus', 'ullamcorper', 'Integer', 'tincidunt', 'ipsum', 'vel', 'justo', 'congue', 'lobortis', 'viverra', 'quam', 'ullamcorper', 'aliquam', 'dignissim', 'eget', 'ligula', 'sit', 'amet', 'maximus', 'nunc', 'fermentum', 'convallis', 'enim', 'non', 'consequat', 'Nam', 'cursus', 'mi', 'quis', 'dolor', 'volutpat', 'pharetra'];

// Select all elems that have 'lo' and 'lorem' class.
var loElems = document.querySelectorAll(".lo");
var loremElems = document.querySelectorAll(".lorem");
console.log(loremElems)
// >>>>LO<<<<< ELEMENTS
//======================================================================================
if (loElems.length > 0) {

	// Iterate over all elements that have a class of 'lo'.
	for (var i = 0; i < loElems.length; i++) {

		switch (loElems[i].tagName) {
			case "SPAN":
			case "P":
			case "H1":
			case "H2":
			case "H3":
			case "H4":
			case "H5":
			case "H6":
				isNotDiv(loElems[i]);
				break;
			case "DIV":
				isDiv(loElems[i]);
				break;
			default:
				console.error("You can't use 'lo' class on '" + loElems[i].tagName.toLowerCase() + "' tag");
		}

	}

}

// >>>>LOREM<<<<< ELEMENTS
//======================================================================================
if (loremElems.length > 0) {
	// Iterate over all elements that have a class of 'lorem'.
	for (var i = 0; i < loremElems.length; i++) {

		switch (loremElems[i].tagName) {
			case "SPAN":
			case "P":
			case "H1":
			case "H2":
			case "H3":
			case "H4":
			case "H5":
			case "H6":
				isNotDiv(loremElems[i]);
				break;
			case "DIV":
				isDiv(loremElems[i]);
				break;
			default:
				console.error("You can't use 'lo' class on '" + loElems[i].tagName.toLowerCase() + "' tag");

		}

	}

}
})