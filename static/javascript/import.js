// specify the filename of the data file
var fileName = "/Users/username/tmp/data.txt";  // the tab delimited text file containing the data
var outputDir = "/Users/username/tmp/";    // make sure this ends with a '/'
​
var err = 0;
var idx = 0;
while (err == 0) {
    err = this.importTextData(fileName, idx); // imports the next record
    if (err == -1)
        app.alert("Error: Cannot Open File");
    else if (err == -2)
        app.alert("Error: Cannot Load Data");
    // else if (err == -3)
        // We are not reporting this error because it does
        // indicate the end of our data table: We've exhausted
        // all rows in the data file and therefore are done with
        // processing the file. Time to exit this loop. 
        // app.alert("Error: Invalid Row");
    else if (err == 1)
        app.alert("Warning: User Cancelled File Select");
    else if (err == 2)
        app.alert("Warning: User Cancelled Row Select");
    else if (err == 3)
        app.alert("Warning: Missing Data");
    else if (err == 0) {
        this.saveAs(outputDir + this.getField("Text1").value + "_" + this.getField("Text2").value + ".pdf"); // saves the file
        idx++;
    }
}