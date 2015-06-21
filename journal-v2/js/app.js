var codeBook = new Journal();

codeBook.writeEntry("First Title", "Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't.", "kush", ['deep', 'whoa', 'drizzy']);
codeBook.writeEntry("Second Title", "Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't.", "bob", ['underground', 'hardcore', 'drizzy']);
codeBook.writeEntry("Third Title", "Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't.", "kush", ['code', 'deep', 'too much', 'the hustle']);
codeBook.writeEntry("Fourth Title", "Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't. Lorem Ipsur et ido, some more blah blah writing that makes it seem like a legit post yeah yeah whoa okay stop with the four letter words, that's ironic that I couldn't.", "kush thaker", ['try', 'javascript', 'unrelated']);

var addEntrytoJournalHTML = function() {
    var HTMLString = codeBook.journaltoHTML();
    $('#journal-body').html(HTMLString);
}


//Entry submission handling
$('#journal-form form').submit(function() {
    event.preventDefault();
    var entrySubmission = $('#journal-form form').serializeFormToObject();
    codeBook.writeEntry(entrySubmission.title, entrySubmission.content, entrySubmission.author, entrySubmission.tags);
    codeBook.entries.push();
    addEntrytoJournalHTML();
});


var tags_result = "";
var author_result = "";
var general_result = "";
var final_result = "";

$('#search-form form').submit(function() {

    event.preventDefault();
    var query = $('#search-form form').serializeFormToObject();

    if (query.tags) {
        var tags_result = codeBook.searchTag(query.tags);
        tags_result = codeBook.toSearchResultString(tags_result);
        final_result = tags_result;
    }

    if (query.author) {
        var author_result = codeBook.searchAuthor(query.author);
        author_result = codeBook.toSearchResultString(author_result);
        final_result += author_result;
    }

    if (query.general) {
        var general_result = codeBook.searchGeneral(query.general);
        general_result = codeBook.toSearchResultString(general_result);
        final_result += general_result;
    }

    $('#journal-body').html(final_result);

});

addEntrytoJournalHTML();

