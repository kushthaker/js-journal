

var codeBook = new Journal();

codeBook.writeEntry("js is cool 1", "js is pretty dope", "kush", ['code', 'javascript', 'reflection']);
codeBook.writeEntry("js kinda cool 2", "js is really dope", "kush", ['code', 'callback', 'reflection']);
codeBook.writeEntry("js is cool 3", "js is pretty dope", "bob", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 4", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 5", "js is pretty dope", "bob", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 6", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 7", "js is pretty dope", "kush thaker", ['try', 'javascript', 'unrelated']);

var addEntrytoJournalHTML = function() {
	var HTMLString = codeBook.journaltoHTML();
	$('#journal-body').prepend(HTMLString);
}


//Entry submission handling
$('#journal-form form').submit(function() {
	event.preventDefault();
	var entrySubmission = $('#journal-form form').serializeFormToObject();
	codeBook.writeEntry(entrySubmission.title, entrySubmission.content, entrySubmission.author, entrySubmission.tags);
	codeBook.entries.push();
	addEntrytoJournalHTML();
});


// COMBINING SEARCH FUNCTION WITH IF CONDITIONS


var tags_result = "";
var author_result = "";
var general_result = "";

$('#search-form form').submit(function() {

	event.preventDefault();
	var query = $('#search-form form').serializeFormToObject();
	console.log(query);

	if (query.tags) {
		var tags_result = codeBook.searchTag(query.tags);
		tags_result = codeBook.toSearchResultString(tags_result);
		$('#journal-body').html(tags_result);
	}

	if (query.author) {
		var author_result = codeBook.searchAuthor(query.author);
		author_result = codeBook.toSearchResultString(author_result);
		$('#journal-body').html(author_result);
	}

	if (query.general) {
		console.log("case 3, haven't worked out the problem yet");
	}

});

addEntrytoJournalHTML();











