var animalsListDiv = document.getElementById('animalsListDiv');
var cliqueAquiBtn = document.getElementById('cliqueAquiBtn');

cliqueAquiBtn.addEventListener('click',function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    
    ourRequest.send();

});

function renderHTML(data) {

    var htmlString = "";

    for (var i = 0; i < Object.keys(data).length; i++) {
        htmlString += "<p>" + data[i].name + "</p>";
    }

    animalsListDiv.insertAdjacentHTML('beforeend', htmlString);
}