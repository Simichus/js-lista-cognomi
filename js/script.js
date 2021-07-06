// variables
var lastNames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var userLastName;
var lastNamesList = '';
var lastNamesListElement = document.getElementById('last-names-list');
var userLastNamePosition = document.getElementById('user-last-name-position');
var userLastNamePositionMessage = 'Sei alla posizione numero: ';

do {
    userLastName = prompt('Inserire il cognome');
} while (!userLastName)

lastNames.push(userLastName);
lastNames.sort();

var userLastNameCounter = 0;
while (lastNames[userLastNameCounter] !== userLastName) {
    userLastNameCounter++;
}

for (var i = 0; i < lastNames.length; i++) {
    lastNamesList += '<li> ' + lastNames[i] + ' </li>';
}

lastNamesListElement.innerHTML = lastNamesList;

userLastNamePosition.innerHTML = userLastNamePositionMessage + (userLastNameCounter + 1);







