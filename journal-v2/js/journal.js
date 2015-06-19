//practicing thinking in objects, making a simple journal application
//Journal includes all entries and ability to read, search and display entries
//Entries include title, content, author and an array of tags
function Journal() {

    this.entries = [];

    //uses Entry constructor to create entry object and stores it in this.entries[]
    this.writeEntry = function writeEntry(title, content, author, tags) {
        this.entries.push(new Entry(title, content, author, tags));

    }

    //takes index value and returns string that prints the specific entry to console 
    this.readSingleEntry = function readSingleEntry(entryNumber) {
        var dateStamp = new Date();
        var str = this.entries[entryNumber].title + "\n\n" + this.entries[entryNumber].content +
            "\n\n" + "made with love by " + this.entries[entryNumber].author + "\n" +
            dateStamp + "\n\n" + "---------------------";
        str += "\n\n";
        return str;
    }


    //takes in an array of entry indexes and displays specified entries
    this.readSpecificEntries = function readSpecificEntries(specified) {
        var str = "";

        for (var i = 0; i < this.entries.length; i++) {
            if (i === specified) {
                str += this.readSingleEntry(i);
            }
        }

        return str;
    }

    //returns string that lists all entries in journal 
    this.readAllEntries = function readAllEntries() {
        var str = "";

        for (var i = 0; i < this.entries.length; i++) {
            str += this.readSingleEntry(i);
        }

        return str;
    }


    //deletes specified entry, returns true if successful
    this.deleteEntry = function deleteEntry(entryIndex) {
        this.entries.splice(entryIndex, 1);
        return true;
    }


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

    //JournaltoHTML function
    this.journaltoHTML = function journaltoHTML() {
        str = "";

        for (var i = this.entries.length - 1; i >= 0; i--) {
            str += this.entries[i].entrytoHTML(i);
        }

        return str;
    }

    //takes in string tag and returns all object entries with that tag
    this.searchTag = function searchTag(tag) {

        var entriesWithTag = [];

        for (var i = 0; i < this.entries.length; i++) {
            var currentEntry = this.entries[i];
            for (var j = 0; j < currentEntry.tags.length; j++) {
                if (this.entries[i].tags[j] === tag) {
                    entriesWithTag.push(this.entries[i]);
                }
            }
        }

        return entriesWithTag;
    }

    //takes in string tag and returns all object entries with that tag
    this.searchAuthor = function searchAuthor(author) {

        var entriesWithAuthor = [];

        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries[i].author == author) {
                entriesWithAuthor.push(this.entries[i]);
            }
        }

        return entriesWithAuthor;
    }

    //takes in string and returns all object entries with that string in their title, content, or author
    this.searchGeneral = function searchGeneral(word) {

        var entriesWithWord = [];

        for (var i = 0; i < this.entries.length; i++) {
            var str = this.entries[i].title + " " + this.entries[i].content + " " + this.entries[i].author;
            check = str.split(word);
            if (check.length > 1) {
                entriesWithWord.push(this.entries[i]);
            }
        }
        return entriesWithWord;
    }

    //takes in an array of entry objects, returns HTML string
    this.toSearchResultString = function toSearchResultString(result) {
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

        str = "";

        str += '<article>';
        str += '<h3>' + this.title + '</h3>';
        str += '<p>' + this.content + '</p>';
        str += '<p>' + 'Written By: ' + this.author + '</p>';
        str += '<p>' + this.writeTagstoHTML() + '</p>';
        str += '<p>' + dateStamp.getFullYear() + ' - ' + dateStamp.getMonth() + ' - ' + dateStamp.getDay() + '</p>';
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