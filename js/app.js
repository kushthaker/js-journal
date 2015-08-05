var codeBook = new Journal();

// var storedData = localStorage.getItem('entries');
// if (storedData)
// {

//     codeBook.loadEntriesFromJSON(storedData);
// //    codeBook.entries = JSON.parse(storedData);
//     console.log(codeBook.entries);
// }

codeBook.writeEntry("First Title", "Lorizzle ipsum shizzlin dizzle i saw beyonces tizzles and my pizzle went crizzle amizzle, phat i'm in the shizzle elizzle. Nullizzle sapien velizzle, things volutpizzle, check out this gangster, uhuh ... yih! vizzle, brizzle. Pellentesque i'm in the shizzle tortor. Uhuh ... yih! eros. Nizzle izzle dolor dapibus fo shizzle own yo' mah nizzle. Maurizzle yo mamma nibh et . Izzle in yo mamma. Pellentesque tellivizzle da bomb fizzle. In hac yo mamma platea dictumst. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle ma nizzle. Curabitur tellus brizzle, pretizzle sure, mattizzle ac, check it out vitae, nunc. Bizzle suscipizzle. Fo shizzle semper sizzle yippiyo fo shizzle.", "Kush", ['deep', 'whoa', 'drizzy']);
codeBook.writeEntry("Second Title", "Lorizzle ipsum shizzlin dizzle i saw beyonces tizzles and my pizzle went crizzle amizzle, phat i'm in the shizzle elizzle. Nullizzle sapien velizzle, things volutpizzle, check out this gangster, uhuh ... yih! vizzle, brizzle. Pellentesque i'm in the shizzle tortor. Uhuh ... yih! eros. Nizzle izzle dolor dapibus fo shizzle own yo' mah nizzle. Maurizzle yo mamma nibh et . Izzle in yo mamma. Pellentesque tellivizzle da bomb fizzle. In hac yo mamma platea dictumst. This line is unique, mah home g-dizzle ma nizzle. Curabitur tellus brizzle, pretizzle sure, mattizzle ac, check it out vitae, nunc. Bizzle suscipizzle. Fo shizzle semper sizzle yippiyo fo shizzle.", "Mike", ['underground', 'hardcore', 'drizzy']);
codeBook.writeEntry("Third Title", "Lorizzle ipsum shizzlin dizzle i saw beyonces tizzles and my pizzle went crizzle amizzle, phat i'm in the shizzle elizzle. Nullizzle sapien velizzle, things volutpizzle, check out this gangster, uhuh ... yih! vizzle, brizzle. Pellentesque i'm in the shizzle tortor. Uhuh ... yih! eros. Nizzle izzle dolor dapibus fo shizzle own yo' mah nizzle. Maurizzle yo mamma nibh et . Izzle in yo mamma. Pellentesque tellivizzle da bomb fizzle. In hac yo mamma platea dictumst. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle ma nizzle. Curabitur tellus brizzle, pretizzle sure, mattizzle ac, check it out vitae, nunc. Bizzle suscipizzle. Fo shizzle semper sizzle yippiyo fo shizzle.", "Bob", ['code', 'deep', 'hard', 'the hustle']);
codeBook.writeEntry("Fourth Title", "Lorizzle ipsum shizzlin dizzle i saw beyonces tizzles and my pizzle went crizzle amizzle, phat i'm in the shizzle elizzle. Nullizzle sapien velizzle, things volutpizzle, check out this gangster, uhuh ... yih! vizzle, brizzle. Pellentesque i'm in the shizzle tortor. Uhuh ... yih! eros. Nizzle izzle dolor dapibus fo shizzle own yo' mah nizzle. Maurizzle yo mamma nibh et . Izzle in yo mamma. Pellentesque tellivizzle da bomb fizzle. In hac yo mamma platea dictumst. Another unique line fo rizzle, mah home g-dizzle ma nizzle. Curabitur tellus brizzle, pretizzle sure, mattizzle ac, check it out vitae, nunc. Bizzle suscipizzle. Fo shizzle semper sizzle yippiyo fo shizzle.", "Kush", ['swag', 'drizzy', 'whoa']);

var addEntrytoJournalHTML = function() {
    var HTMLString = codeBook.journaltoHTML();
    $('#journal-body').html(HTMLString);
};


//Entry submission handling
$('#journal-form form').submit(function() {
    event.preventDefault();
    var entrySubmission = $('#journal-form form').serializeFormToObject();
    codeBook.writeEntry(entrySubmission.title, entrySubmission.content, entrySubmission.author, entrySubmission.tags);
    
    localStorage.setItem('entries', codeBook.exportJournaltoJSON());
    console.log(localStorage.getItem('entries'));

    addEntrytoJournalHTML();
});


var tags_result = "";
var author_result = "";
var general_result = "";
var final_result = [];

$('#search-form form').submit(function() {
    event.preventDefault();
    $('#journal-body').html("");

    var query = $('#search-form form').serializeFormToObject();
    final_result = codeBook.entries;


    if (query.tags) {
        var tags_result = codeBook.searchTag(query.tags, final_result);
        final_result = tags_result;
    }

    if (query.author) {
        var author_result = codeBook.searchAuthor(query.author, final_result);
        final_result = author_result;     
    }

    if (query.general) {
        var general_result = codeBook.searchGeneral(query.general, final_result);
        final_result = general_result;
    }


    final_result = codeBook.searchtoHTML(final_result);
    $('#journal-body').html(final_result);


});

addEntrytoJournalHTML();

