//practicing thinking in objects, making a simple journal application
//Journal includes all entries and ability to read, search and display entries
//Entries include title, content, author and an array of tags

function Journal() {

    this.entries = [];

    this.writeEntry = function writeEntry(title, content, author, tags) {
        this.entries.push(new Entry(title, content, author, tags));
    }

    this.readSingleEntry = function readSingleEntry(entryNumber) {
        var dateStamp = new Date();
        var str = this.entries[entryNumber].title + "\n\n" + this.entries[entryNumber].content +
            "\n\n" + "made with love by " + this.entries[entryNumber].author + "\n" +
            dateStamp + "\n\n" + "---------------------";
        str += "\n\n";
        return str;
    }

    this.readAllEntries = function readAllEntries() {
        var str = "";

        for (var i = 0; i < this.entries.length; i++) {
            str += this.readSingleEntry(i);
        }

        return str;
    }

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

}

function Entry(title, content, author, tags) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
}

var codeBook = new Journal();
codeBook.writeEntry("js is cool 1", "js is pretty dope", "kush", ['code', 'javascript', 'reflection']);
codeBook.writeEntry("js is cool 2", "js is pretty dope", "kush", ['code', 'callback', 'reflection']);
codeBook.writeEntry("js is cool 3", "js is pretty dope", "kush", ['code', 'dope', 'jazz']);
codeBook.writeEntry("js is cool 4", "js is pretty dope", "kush", ['try', 'javascript', 'unrelated']);

var singleEntryTest = codeBook.readSingleEntry(1);
var allEntriesTest = codeBook.readAllEntries();
var searchTagTest = codeBook.searchTag('javascript');

console.log(singleEntryTest);
console.log(allEntriesTest);
console.log(searchTagTest);














