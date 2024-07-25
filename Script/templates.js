function ReturnNotes1(Note, Noteheader, i) {
    return /*html*/ `<div class="NoteDesign"><div class="noteAndHead"><h3>${Noteheader}</h3><p>${Note}</p></div>
    <button id="deleteNote" onclick="delNote(${i})" title="Notiz löschen"><img src="./assets/buttons/trashdelete.png" class="trashbinNote"></button></div>`;
}
function ReturnNotes2(Note, Noteheader, i) {
    return /*html*/ `<div class="NoteDesign"><div class="noteAndHead"><h3>${Noteheader}</h3><p>${Note}</p></div>
    <button id="deleteNote" onclick="delNote2(${i})" title="Notiz löschen"><img src="./assets/buttons/trashdelete.png" class="trashbinNote"></button></div>`;
}
function ReturnMainContent() {
    return /*html*/ `<header><h1> Organizer </h1> 
    <nav>
    <button class= "navButton" id="newContact" onclick="addContact()"><img src="./assets/buttons/pencilcase.png" class="navButtonImg" title="Neuer Kontakt"></button>
    <button class= "navButton" id="showContact" onclick="showContacts()"><img src="./assets/buttons/folder.png" class="navButtonImg" title="Kontakte Anzeigen"></button>
    <button class= "navButton" id="newNote" onclick="addNote()"><img src="./assets/buttons/whiteboard.png" class= "navButtonImg" title="Neue Notiz"></button>
    <button class= "navButton" id="showNote" onclick="showNote()"><img src="./assets/buttons/note.png" class="navButtonImg" title="Notizen Anzeigen"></button>
    </nav></header>`;
}
function ReturnAddContact() {
    return /*html*/ `<h1> Kontakt hinzufügen </h1>
    <div id="AddForm">
        <div id="InputArea">
            <div class="AddBezeichnung">
                <label for="Name">Name:</label>
                <label for="Adresse">Adresse:</label>
                <label for="Tele">Telefonnummer:</label>
                <label for="Email">E-Mail Adresse:</label>
                <label for="Sonstiges">Sonstige Notizen:</label>
            </div>
            <div class="AddInput">
                <input id="Name" placeholder="Vor- & Nachname..." type="text">
                <input id="Adresse" placeholder="Adresse eingeben..." type="text">
                <input id="Tele" placeholder="Telefonnummer eingeben..." type="text">
                <input id="Email" placeholder="E-Mail eingeben..." type="text">
                <textarea name="Sonstiges" id="Sonstiges" placeholder="Sonstige Informationen..."></textarea>
            </div>
        </div>
        <button id="speichern" onclick="KontaktSave()" title="Kontakt speichern">Kontakt speichern</button>
        <button onclick="render()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
    </div>`;
}
function ReturnAddContactDone() {
    return /*html*/ `<h1> Kontakt hinzufügen </h1>
    <div id="AddForm">
        <div id="InputArea">
            <div class="AddBezeichnung">
                <label for="Name">Name:</label>
                <label for="Adresse">Adresse:</label>
                <label for="Tele">Telefonnummer:</label>
                <label for="Email">E-Mail Adresse:</label>
                <label for="Sonstiges">Sonstige Notizen:</label>
            </div>
            <div class="AddInput">
                <input id="Name" placeholder="Vor- & Nachname..." type="text">
                <input id="Adresse" placeholder="Adresse eingeben..." type="text">
                <input id="Tele" placeholder="Telefonnummer eingeben..." type="text">
                <input id="Email" placeholder="E-Mail eingeben..." type="text">
                <textarea name="Sonstiges" id="Sonstiges" placeholder="Sonstige Informationen..."></textarea>
            </div>
        </div>
        <button id="speichern" onclick="KontaktSave()" title="Kontakt speichern">Kontakt speichern</button>
        <button onclick="render()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        <p><b>Kontakt wurde gespeichert!</b></p>
    </div>`
}
function ReturnContentBothOn() {
    return /*html*/ `<header><h1> Organizer </h1> 
        <nav>
        <button class= "navButton" id="newContact" onclick="addContact()" title="Neuer Kontakt"><img src="./assets/buttons/pencilcase.png" class="navButtonImg"></button>
        <button class= "navButton" id="newNote" onclick="addNote()"><img src="./assets/buttons/whiteboard.png" class= "navButtonImg" title="Neue Notiz"></button>
        </nav></header>`;
}
function ReturnHeaderShowCo() {
    return /*html*/ `<header><h1> Organizer </h1> 
    <nav>
    <button class= "navButton" id="newContact" onclick="addContact()" title="Neuer Kontakt"><img src="./assets/buttons/pencilcase.png" class="navButtonImg"></button>
    <button class= "navButton" id="newNote" onclick="addNote()" title="Neue Notiz"><img src="./assets/buttons/whiteboard.png" class= "navButtonImg"></button>
    <button class= "navButton" id="showNote" onclick="showNote()" title="Notizen Anzeigen"><img src="./assets/buttons/note.png" class="navButtonImg"></button>
    </nav></header>`;
}
function ReturnContentNote() { //Die selbe wie eins drüber, hier kann gekürzt werden
    return /*html*/ `<header><h1> Organizer </h1> 
<nav>
<button class= "navButton" id="newContact" onclick="addContact()" title="Neuer Kontakt"><img src="./assets/buttons/pencilcase.png" class="navButtonImg"></button>
<button class= "navButton" id="showContact" onclick="showContacts()" title="Neue Notiz"><img src="./assets/buttons/folder.png" class="navButtonImg"></button>
<button class= "navButton" id="newNote" onclick="addNote()" title="Notizen Anzeigen"><img src="./assets/buttons/whiteboard.png" class= "navButtonImg"></button>
</nav></header>`;
}
function ReturnContactTable() {
    return /*html*/ `<h2> KONTAKTE </h2> 
    <table>
    <tbody id="Kontaktliste">
        <tr class="tablehead">
            <td class="tableHeadline">NAME</td>
            <td class="tableHeadline">ADRESSE</td>
            <td class="tableHeadline">TELEFON</td>
            <td class="tableHeadline">E-MAIL</td>
            <td class="tableHeadline">SONSTIGES</td>
        </tr>
        </tbody>
    </table>
    <div class="contactBtn">
        <button onclick="hideContent()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        <button onclick="delContTrash()" id="delContTrash" class="trashHide" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
        <button onclick="recContTrash()" id="recContTrash" class="trashHide" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean"></button>
    </div>`;
}
function ReturnContactTable2() {
    return /*html*/ `<h2> KONTAKTE </h2> 
    <table>
    <tbody id="Kontaktliste">
        <tr class="tablehead">
            <td class="tableHeadline">NAME</td>
            <td class="tableHeadline">ADRESSE</td>
            <td class="tableHeadline">TELEFON</td>
            <td class="tableHeadline">E-MAIL</td>
            <td class="tableHeadline">SONSTIGES</td>
        </tr>
        </tbody>
    </table>
    <div class="contactBtn">
        <button onclick="hideContent2()"><img src="./assets/buttons/arrow.png" class="backArrow" title="Zurück"></button>
        <button onclick="delContTrash()" id="delContTrash" class="trashHide"><img src="./assets/buttons/trash-full.png" class="trashBean" title="leeren"></button>
        <button onclick="recContTrash()" id="recContTrash" class="trashHide"><img src="./assets/buttons/trash-empty.png" class="trashBean" title="Wiederherstellen"></button>
    </div>`;
}
function ReturnSaveNoteContent() {
    return /*html*/ `<h1>NEUE NOTIZ</h1>
        <input id="NoteHead" placeholder="Titel der Notiz...">
        <textarea name="NeueNotiz" id="Note" placeholder="Hier neue Notiz eingeben..."></textarea>
        <div>
        <button onclick="SaveNote()">Notiz speichern</button>
        <button onclick="render()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        </div>
        <p><b>Ihre Notiz wurde gespeichert!</b></p>`;
}
function ReturnShowNoteHeader() {
    return /*html*/ `<h2>NOTIZEN</h2><div id="notes"></div>
        <div class = "Notebtn"><button onclick="hideContentNote1()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        <button onclick="delTrash()" id="delTrash" class="trashHide" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
        <button onclick="recoverTrash()" id="recTrash" class="trashHide" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean"></button></div>`;
}
function ReturnShowNoteHeader2() {
    return /*html*/ `<h2>NOTIZEN</h2><div id="notes"></div>
        <div class = "Notebtn"><button onclick="hideContentNote2()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        <button onclick="delTrash()" id="delTrash" class="trashHide" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
        <button onclick="recoverTrash()" id="recTrash" class="trashHide" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean"></button></div>`;
}
function ReturnForIfTable(names, adress, telnumber, mail, anyelse) {
    return /*html*/ `<tr id="TableRow">
            <td>${names}</td>
            <td>${adress}</td>
            <td>${telnumber}</td>
            <td>${mail}</td>
            <td>${anyelse}</td>
            <td id="deleteColumn"><button id=delContact onclick="delContact1(${i})" title="Kontakt löschen"><img src="./assets/buttons/trashdelete.png" class="trashbin"></button></td>
            </tr>`;
}
function ReturnForIfTable2(names, adress, telnumber, mail, anyelse) {
    return /*html*/ `<tr id="TableRow2">
            <td>${names}</td>
            <td>${adress}</td>
            <td>${telnumber}</td>
            <td>${mail}</td>
            <td>${anyelse}</td>
            <td id="deleteColumn"><button id=delContact onclick="delContact1(${i})" title="Kontakt löschen"><img src="./assets/buttons/trashdelete.png" class="trashbin"></button></td>
            </tr>`;
}
function ReturnForIfTable3(names, adress, telnumber, mail, anyelse) {
    return /*html*/ `<tr id="TableRow">
            <td>${names}</td>
            <td>${adress}</td>
            <td>${telnumber}</td>
            <td>${mail}</td>
            <td>${anyelse}</td>
            <td id="deleteColumn"><button id=delContact onclick="delContact2(${i})" title="Kontakt löschen"><img src="./assets/buttons/trashdelete.png" class="trashbin"></button></td>
            </tr>`;
}
function ReturnForIfTable4(names, adress, telnumber, mail, anyelse) {
    return /*html*/ `<tr id="TableRow2">
            <td>${names}</td>
            <td>${adress}</td>
            <td>${telnumber}</td>
            <td>${mail}</td>
            <td>${anyelse}</td>
            <td id="deleteColumn"><button id=delContact onclick="delContact2(${i})" title="Kontakt löschen"><img src="./assets/buttons/trashdelete.png" class="trashbin"></button></td>
            </tr>`;
}
function ReturnAddNoteContent() {
    return /*html*/ `<h1>NEUE NOTIZ</h1>
        <input id="NoteHead" placeholder="Titel der Notiz...">
        <textarea name="NeueNotiz" id="Note" placeholder="Hier neue Notiz eingeben..."></textarea>
        <div>
        <button onclick="SaveNote()" title="Notiz speichern">Notiz speichern</button>
        <button onclick="render()" title="Zurück"><img src="./assets/buttons/arrow.png" class="backArrow"></button>
        </div>`;
}
