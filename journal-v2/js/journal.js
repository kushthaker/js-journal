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


    //takes in string and returns all object entries with that string in their title, content, or author
    this.searchJournal = function searchJournal(word) {

        var entriesWithWord = [];
        var check = 0;

        for (var i = 0; i < this.entries.length; i++) {
            var str = this.entries[i].title + " " + this.entries[i].content + " " + this.entries[i].author;
            check = str.indexOf(word);
            if (check != -1) {
                entriesWithWord.push(this.entries[i]);
            }
        }
        return entriesWithWord;
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


    //toHTML function
    this.entrytoHTML = function entrytoHTML(entry) {
        
        var title = this.entries[entry].title;
        var content = this.entries[entry].content;
        var author = this.entries[entry].author;

        str = "";

        str += '<article>';
        str += '<h3>' + title + '</h3>';
        str += '<p>' + content + '</p>';
        str += '<p>' +  'Written By: ' + author + '</p>';
        str += '</article>';

        return str;

    }

    //JournaltoHTML function
    this.journaltoHTML = function journaltoHTML() {
        str = "";
        
        for (var i = this.entries.length - 1; i >= 0; i--) {
            str += this.entrytoHTML(i);
        }

        return str;
    }


} //end of Journal constructor




//helper constructor to create entry objects
function Entry(title, content, author, tags) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
}

// var singleEntryTest = codeBook.readSingleEntry(1);
// var searchTagTest = codeBook.searchTag('javascript');
// var searchJournalTest = codeBook.searchJournal('thaker');
// var specificEntriesTest = codeBook.readSpecificEntries(2);
// var allEntriesTest = codeBook.readAllEntries();
// var JSONoutputTest = codeBook.exportJournaltoJSON();
// var JSONinputTest = codeBook.getJournalfromJSON(JSONoutputTest);











