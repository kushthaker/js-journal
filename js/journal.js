//practicing thinking in objects, making a simple journal application
//Journal includes all entries and ability to read, search and display entries
//Entries include title, content, author and an array of tags
function Journal() {

    this.entries = [];

    //uses Entry constructor to create entry object and stores it in this.entries[]
    this.writeEntry = function writeEntry(title, content, author, tags) {
        this.entries.push(new Entry(title, content, author, tags));

    }

    //deletes specified entry, returns true if successful
    this.deleteEntry = function deleteEntry(entryIndex) {
        this.entries.splice(entryIndex, 1);
        return true;
    }

    //JSON METHODS

    //exporting to JSON
    this.exportJournaltoJSON = function exportJournaltoJSON() {
        var stringOutput = [];
        stringOutput = JSON.stringify(this.entries);
        return stringOutput;
    }

    //importing from JSON
    this.getJournalfromJSON = function getJournalfromJSON(stringInput) {
        var parsedObject = [];
        parsedObject = JSON.parse(stringInput);
        return parsedObject;
    }

    // JOURNAL HTML METHODS

    //JournaltoHTML function, returns string
    this.journaltoHTML = function journaltoHTML() {
        str = "";

        for (var i = this.entries.length - 1; i >= 0; i--) {
            str += this.entries[i].entrytoHTML(i);
        }

        return str;
    }

    //takes in string tag and returns all object entries with that tag
    this.searchTag = function searchTag(tag, searchDomain) {

        var entriesWithTag = [];

        for (var i = 0; i < searchDomain.length; i++) {
            var currentEntry = searchDomain[i];
            for (var j = 0; j < currentEntry.tags.length; j++) {
                if (searchDomain[i].tags[j] === tag) {
                    entriesWithTag.push(searchDomain[i]);
                }
            }
        }

        return entriesWithTag;
    }

    //takes in string tag and returns all object entries with that tag
    this.searchAuthor = function searchAuthor(author, searchDomain) {

        var entriesWithAuthor = [];

        for (var i = 0; i < searchDomain.length; i++) {
            if (searchDomain[i].author === author) {
                entriesWithAuthor.push(searchDomain[i]);
            }
        }

        return entriesWithAuthor;
    }

    //takes in string and returns all object entries with that string in their title, content, or author
    this.searchGeneral = function searchGeneral(word, searchDomain) {

        var entriesWithWord = [];

        for (var i = 0; i < searchDomain.length; i++) {
            var str = searchDomain[i].title + " " + searchDomain[i].content + " " + searchDomain[i].author;
            check = str.split(word);    
            if (check.length > 1) {
                entriesWithWord.push(searchDomain[i]);
            }
        }
        return entriesWithWord;
    }



    //takes in an array of entry objects, returns HTML string
    this.searchtoHTML = function searchtoHTML(result) {
        str = "";

        for (var i = 0; i < result.length; i++) {
            str += result[i].entrytoHTML(i);
        }

        return str;

    }


} //end of Journal constructor




//helper constructor to create entry objects
function Entry(title, content, author, tags) {
    this.title = title;
    this.content = content;
    this.author = author;
    if (typeof tags === 'string') {
        this.tags = tags.split(', ');
    } else {
        this.tags = tags;
    }

    this.writeTagstoHTML = function writeTagstoHTML() {

        str = "";
        for (var i = 0; i < this.tags.length; i++) {
            str += '#' + this.tags[i] + ' ';
        }

        return str;
    }

    //function to generate HTML string for entry
    this.entrytoHTML = function entrytoHTML(entry) {
        var dateStamp = new Date();
        dateStamp = dateStamp.toUTCString();
        dateStamp = dateStamp.slice(0, 16);

        str = "";

        str += '<article>';
        str += '<h3>' + this.title + '</h3>';
        str += '<h5>' + dateStamp + ', tagged: ';
        str += this.writeTagstoHTML(); + '</h5>';
        str += '<p>' + this.content + '</p>';
        str += '<h4>' + 'Written By: ' + this.author + '</h4>';
        str += '<hr>'
        str += '</article>';

        return str;

    }

}

// var singleEntryTest = codeBook.readSingleEntry(1);
// var searchTagTest = codeBook.searchTag('javascript');
// var searchJournalTest = codeBook.searchJournal('thaker');
// var specificEntriesTest = codeBook.readSpecificEntries(2);
// var allEntriesTest = codeBook.readAllEntries();
// var JSONoutputTest = codeBook.exportJournaltoJSON();
// var JSONinputTest = codeBook.getJournalfromJSON(JSONoutputTest);