//practicing thinking in objects, making a simple journal application
//Journal includes all entries and ability to read, search and display entries
//Entries include title, content, author and an array of tags

function Journal() {

    this.entries = [];

    //uses Entry constructor to create entry object and stores it in this.entries[]
    this.writeEntry = function writeEntry(title, content, author, tags) {
        this.entries.push(new Entry(title, content, author, tags));
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



} //end of Journal constructor

//helper constructor to create entry objects
function Entry(title, content, author, tags) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
}

var codeBook = new Journal();

codeBook.writeEntry("js is cool 1", "js is pretty dope", "kush", ['code', 'javascript', 'reflection']);
codeBook.writeEntry("js kinda cool 2", "js is really dope", "kush", ['code', 'callback', 'reflection']);
codeBook.writeEntry("js is cool 3", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 4", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 5", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 6", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 7", "js is pretty dope", "kush thaker", ['try', 'javascript', 'unrelated']);

var singleEntryTest = codeBook.readSingleEntry(1);
var searchTagTest = codeBook.searchTag('javascript');
var searchJournalTest = codeBook.searchJournal('thaker');
var specificEntriesTest = codeBook.readSpecificEntries(2);
var allEntriesTest = codeBook.readAllEntries();
var JSONoutputTest = codeBook.exportJournaltoJSON();
var JSONinputTest = codeBook.getJournalfromJSON(JSONoutputTest);

console.log(JSONinputTest);
















