function addContact() {

    ShowContent.innerHTML = '';
    Show2ndContent.innerHTML = '';
    content.innerHTML = '';
    content.innerHTML = ReturnAddContact();
}

function KontaktSave() {
    let Name = document.getElementById('Name').value;
    let Adresse = document.getElementById('Adresse').value;
    let Telefon = document.getElementById('Tele').value;
    let Email = document.getElementById('Email').value;
    let Sonstige = document.getElementById('Sonstiges').value;

    if (Name.length <= 3) {
        alert('Bitte geben Sie einen Namen mit mindestens 3 Buchstaben ein');
    } if (Sonstige.length > 100) {
        alert('Bitte bei Sonstige Notizen nicht mehr als 100 Zeichen eingeben!')
    } else {
        SaveContactsLocal(Name, Adresse, Telefon, Email, Sonstige);
        content.innerHTML = ReturnAddContactDone();
    }
}

function SaveContactsLocal(Name, Adresse, Telefon, Email, Sonstige){
        Namen.push(Name);
        Adressen.push(Adresse);
        Telenummer.push(Telefon);
        Emails.push(Email);
        Sonstiges.push(Sonstige);
        setArrayContacts()       
}

function setArrayContacts() {
        setArray('Namen', Namen);
        setArray('Adressen', Adressen);
        setArray('Telenummer', Telenummer);
        setArray('Emails', Emails);
        setArray('Sonstiges', Sonstiges);
}









function showContacts() {
    if (ShowContent.innerHTML.trim() == "") {
        ShowContactifelse1();
        checkContTrash();
    }
    else {
        ShowContactifelse2();
        checkContTrash();
    }
}
function checkContTrash(){
    const namesTrashs = localStorage.getItem('nameTrash')
    nameTrash = JSON.parse(namesTrashs)
    if (nameTrash == ''){
    } else {
        document.getElementById('delContTrash').classList.remove("trashHide");
        document.getElementById('recContTrash').classList.remove("trashHide");
    }
}





function checkContTrashRender(){
    getTrashContactLocal()
    if (nameTrash == '') {
        ShowContent.innerHTML = ``;
    } else {
        if (ShowContent.innerHTML == '') {
            ShowContent.innerHTML = 
                `<div class="shContentTrash"><button onclick="delContTrash()" id="delContTrash" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
                <button onclick="recContTrash()" id="recContTrash" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean" title="Wiederherstellen">Wiederherstellen</button></div>`;        
        } else {
            Show2ndContent.innerHTML = 
               `<div class="shContentTrash"><button onclick="delContTrash()" id="delContTrash"><img src="./assets/buttons/trash-full.png" class="trashBean" title="leeren"></button>
                <button onclick="recContTrash()" id="recContTrash" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean" title="Wiederherstellen">Wiederherstellen</button></div>`;
            }
        
        }
}

function hideContentNote1() {
    ShowContent.innerHTML = ``;
    if (Show2ndContent.innerHTML === '') {
        content.innerHTML = ReturnMainContent();
    } else {
        content.innerHTML = ReturnHeaderShowCo();
    }
}

function hideContentNote2() {

    Show2ndContent.innerHTML = ``;
    if (ShowContent.innerHTML === "") {
        content.innerHTML = ReturnMainContent();
    }
    else {
        content.innerHTML = ReturnHeaderShowCo();
        Show2ndContent.innerHTML = ``;
    }
}
function hideContent2() {

    Show2ndContent.innerHTML = ``;
    if (ShowContent.innerHTML === "") {
        content.innerHTML = ReturnMainContent();
    }
    else {
        content.innerHTML = ReturnContentNote();
        Show2ndContent.innerHTML = ``;
    }
}
function hideContent() {
    ShowContent.innerHTML = ``;
    if (Show2ndContent.innerHTML === "") {
        content.innerHTML = ReturnMainContent();
    } else {
        content.innerHTML = ReturnContentNote();

    }

}
function ContactsLocalGet() {
    if (localStorage.getItem('Namen') === null) {}
    else {
    let Namelist = localStorage.getItem('Namen');
    let Adreslist = localStorage.getItem('Adressen');
    let Tellist = localStorage.getItem('Telenummer');
    let Maillist = localStorage.getItem('Emails');
    let Elselist = localStorage.getItem('Sonstiges');
    Namen = JSON.parse(Namelist);
    Adressen = JSON.parse(Adreslist);
    Telenummer = JSON.parse(Tellist);
    Emails = JSON.parse(Maillist);
    Sonstiges = JSON.parse(Elselist);
    }
}
function ShowContactifelse1() {
    
    content.innerHTML = ReturnHeaderShowCo();
    ShowContent.innerHTML = ReturnContactTable();
    ContactsLocalGet();
    for (i = 0; i < Namen.length; i++) {
        const names = Namen[i]
        const adress = Adressen[i]
        const telnumber = Telenummer[i]
        const mail = Emails[i]
        const anyelse = Sonstiges[i]
        contactlist = document.getElementById('Kontaktliste')
        if ((i % 2) == 0) {
            contactlist.innerHTML += ReturnForIfTable(names, adress, telnumber, mail, anyelse);
        } else {
            contactlist.innerHTML += ReturnForIfTable2(names, adress, telnumber, mail, anyelse);
        }
    }
}

function ShowContactifelse2() {
    content.innerHTML = ReturnContentBothOn();
    Show2ndContent.innerHTML = ReturnContactTable2();
    ContactsLocalGet();
    for (i = 0; i < Namen.length; i++) {
        const names = Namen[i]
        const adress = Adressen[i]
        const telnumber = Telenummer[i]
        const mail = Emails[i]
        const anyelse = Sonstiges[i]
        contactlist = document.getElementById('Kontaktliste')
        if ((i % 2) == 0) {
            contactlist.innerHTML += ReturnForIfTable3(names, adress, telnumber, mail, anyelse);
        } else {
            contactlist.innerHTML += ReturnForIfTable4(names, adress, telnumber, mail, anyelse);
        }
    }
}

function ShowContactifelse3() {
    content.innerHTML = ReturnContentBothOn();
    ShowContent.innerHTML = ReturnContactTable();
    ContactsLocalGet();
    for (i = 0; i < Namen.length; i++) {
        const names = Namen[i]
        const adress = Adressen[i]
        const telnumber = Telenummer[i]
        const mail = Emails[i]
        const anyelse = Sonstiges[i]
        contactlist = document.getElementById('Kontaktliste')
        if ((i % 2) == 0) {
            contactlist.innerHTML += ReturnForIfTable(names, adress, telnumber, mail, anyelse);
        } else {
            contactlist.innerHTML += ReturnForIfTable2(names, adress, telnumber, mail, anyelse);
        }
    }
}

function ShowContactifelse4() {
    content.innerHTML = ReturnHeaderShowCo();
    Show2ndContent.innerHTML = ReturnContactTable2();
    ContactsLocalGet();
    for (i = 0; i < Namen.length; i++) {
        const names = Namen[i]
        const adress = Adressen[i]
        const telnumber = Telenummer[i]
        const mail = Emails[i]
        const anyelse = Sonstiges[i]
        contactlist = document.getElementById('Kontaktliste')
        if ((i % 2) == 0) {
            contactlist.innerHTML += ReturnForIfTable3(names, adress, telnumber, mail, anyelse);
        } else {
            contactlist.innerHTML += ReturnForIfTable4(names, adress, telnumber, mail, anyelse);
        }
    }
}

function ContactSplice(i) {
    Namen.splice(i, 1);
    Adressen.splice(i, 1);
    Telenummer.splice(i, 1);
    Emails.splice(i, 1);
    Sonstiges.splice(i, 1);
    setArrayContacts()
}

function setArrayContactTrash() {
setArray('nameTrash', nameTrash);    
setArray('adressTrash', adressTrash);
setArray('teleTrash', teleTrash);
setArray('emailTrash', emailTrash);
setArray('sonstigeTrash', sonstigeTrash);

}

function trashPush(trashName, trashAdress, trashTele, trashEmail, trashAnyelse) {
    nameTrash.push(trashName);
    adressTrash.push(trashAdress);
    teleTrash.push(trashTele);
    emailTrash.push(trashEmail);
    sonstigeTrash.push(trashAnyelse);
}

function spliceContacts(i) {
    Namen.splice(i, 1);
    Adressen.splice(i, 1);
    Telenummer.splice(i, 1);
    Emails.splice(i, 1);
    Sonstiges.splice(i, 1);
}
function ContactSplice(i) {
    let trashName = Namen[i]
    let trashAdress = Adressen[i]
    let trashTele = Telenummer[i]
    let trashEmail = Emails[i]
    let trashAnyelse = Sonstiges[i]
        trashPush(trashName, trashAdress, trashTele, trashEmail, trashAnyelse)
        setArrayContactTrash()
        spliceContacts(i)
        setArrayContacts()
        
}

function delContact1(i) {
    ContactSplice(i);
    if (Show2ndContent.innerHTML === '') {
        ShowContactifelse1();
        document.getElementById('delContTrash').classList.remove("trashHide");
        document.getElementById('recContTrash').classList.remove("trashHide");
    } else {
        ShowContactifelse3();
        document.getElementById('delContTrash').classList.remove("trashHide");
        document.getElementById('recContTrash').classList.remove("trashHide");
    }
}

function delContact2(i) {
    ContactSplice(i);
    if (ShowContent.innerHTML === '') {
        ShowContactifelse1();
        document.getElementById('delContTrash').classList.remove("trashHide");
        document.getElementById('recContTrash').classList.remove("trashHide");
    } else {
        ShowContactifelse3();
        document.getElementById('delContTrash').classList.remove("trashHide");
        document.getElementById('recContTrash').classList.remove("trashHide");
    }
}

function contTrashSplice() {
    let i = nameTrash.length;
    nameTrash.splice(0, i);
    adressTrash.splice(0, i);
    teleTrash.splice(0, i);
    emailTrash.splice(0, i);
    sonstigeTrash.splice(0, i);  

}

function delContTrash() {
    getTrashContactLocal()
    contTrashSplice()
    setArrayContactTrash();
    document.getElementById('delContTrash').classList.add("trashHide");
    document.getElementById('recContTrash').classList.add("trashHide");
    alert ("Ihr Papierkorb wurde geleert!");
    
}

function getTrashContactLocal() {
    if (localStorage.getItem('nameTrash') === null) {}
    else {
    let nameTrashs = localStorage.getItem('nameTrash');
    let adressTrashs = localStorage.getItem('adressTrash');
    let teleTrashs = localStorage.getItem('teleTrash');
    let emailTrashs = localStorage.getItem('emailTrash');
    let anyelseTrash = localStorage.getItem('sonstigeTrash');
    nameTrash = JSON.parse(nameTrashs);
    adressTrash = JSON.parse(adressTrashs);
    teleTrash = JSON.parse(teleTrashs);
    emailTrash = JSON.parse(emailTrashs);
    sonstigeTrash = JSON.parse(anyelseTrash);
    }
}

function recContTrash() {
    getTrashContactLocal();
    contactTrashTransfer();
    contTrashSplice();
    setArrayContactTrash();
    render();
    document.getElementById('delContTrash').classList.add("trashHide");
    document.getElementById('recContTrash').classList.add("trashHide");   
}

function contactTrashTransfer() {
    const recName = nameTrash;
    const recAdress = adressTrash;
    const recTele = teleTrash;
    const recEmail = emailTrash;
    const recAnyelse = sonstigeTrash;
    for (i = 0; i < nameTrash.length; i++) {
    Namen.push(recName[i]);
    Adressen.push(recAdress[i]);
    Telenummer.push(recTele[i]);
    Emails.push(recEmail[i]);
    Sonstiges.push(recAnyelse[i]); 
    }
    setArrayContacts();
}