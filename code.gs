// open the below code by clicking the Script editor under tools in Google Sheets



function autoEntry() {

  var wrkBk = SpreadsheetApp.getActiveSpreadsheet();
  var wrkSht = wrkBk.getSheetByName("Sheet1");
  
  var formURL=""
  var formData = ""
  
  var name ="";
  var gender= "";
  var school = "";
  var dob = "";
  
  
  var noOfRows = 30;
  
  for (i=2;i<=noOfRows; i++){
    name = wrkSht.getRange("D" + i).getDisplayValue();
    gender = wrkSht.getRange("E" + i).getDisplayValue();
    school = wrkSht.getRange("C" + i).getDisplayValue();
    dob = wrkSht.getRange("I" + i).getDisplayValue();
    
    
    formURL = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfyBaUtxt3x9mlPw7d-vhjtp41ROmRbLQ1JszpQwUPYOBOn9Q/formResponse?&pageHistory=0"
    formData = "&entry.721524059=" + name + "&entry.1485050518=" + gender + "&entry.309533276=" + school + "entry.618236848=" + dob
    
    var finalURL = formURL + formData
    
    var options = {
      "method": "post"
    };
    
    UrlFetchApp.fetch(finalURL, options);
  
  }
}
