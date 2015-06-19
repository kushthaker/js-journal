

var codeBook = new Journal();

codeBook.writeEntry("js is cool 1", "js is pretty dope", "kush", ['code', 'javascript', 'reflection']);
codeBook.writeEntry("js kinda cool 2", "js is really dope", "kush", ['code', 'callback', 'reflection']);
codeBook.writeEntry("js is cool 3", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 4", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 5", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 6", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 7", "js is pretty dope", "kush thaker", ['try', 'javascript', 'unrelated']);

var addEntrytoJournalHTML = function() {
	var HTMLString = codeBook.journaltoHTML();
	$('#journal-body').prepend(HTMLString);
}

$('form').submit(function() {
	event.preventDefault();
	var entrySubmission = $('form').serializeFormToObject();
	codeBook.writeEntry(entrySubmission.title, entrySubmission.content, entrySubmission.author, entrySubmission.tags);
	codeBook.entries.push();
	addEntrytoJournalHTML();
});


addEntrytoJournalHTML();








