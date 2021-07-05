
//Maybe we could make a button on the Angular front end that implements our ts? All we would need is Line 8

//<button id="ajaxButton" type="button">Make a request</button>         FRONT END

(function() {                                                           //SCRIPT FILE
  var xhr;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest); //this line allows us to attach a function to the click event

  function makeRequest() {
    xhr = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    xhr.onreadystatechange = alertContents;
    xhr.open('GET', 'test.html');
    xhr.send();
  }

  function alertContents() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();

//this example was from dev.mozilla - change the function to a fetch request?

//.json vs JSON.parse()
/*
.json is a method that is applied to an XHR to type convert the XHR into a JSON object
JSON.parse() is a method that allows you to convert to a JSON object?
*/