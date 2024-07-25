//●	Es sollten keine leeren Notizen gespeichert werden können 

let Namen = []; let nameTrash = [];
let Adressen = []; let adressTrash = [];
let Telenummer = []; let teleTrash = [];
let Emails = []; let emailTrash = [];
let Sonstiges = []; let sonstigeTrash = [];
let Notes = [];
let Notetitle = [];
let notesTrash = []
let notetitleTrash = []



function render() {
    let content = document.getElementById('content');
    let ShowContent = document.getElementById('ShowContent');
    let Show2ndContent = document.getElementById('Show2ndContent');
    content.innerHTML = '';
    ShowContent.innerHTML = '';
    Show2ndContent.innerHTML = '';
    GetNotesLocal();
    ContactsLocalGet();
    renderIfElse();
    
}

function renderIfElse() {
    if (Namen && Namen.length > 0) {
        showContacts();
        checkContTrash();
        if (Notes && Notes.length > 0) {
            showNote();
        } else { 
            checkTrashNotesRender()    
        }
    } else {
        checkContTrashRender();
        if (Notes && Notes.length > 0) {
            showNote();
        } else {
            content.innerHTML = ReturnMainContent();
            checkContTrashRender();
            checkTrashNotesRender();
        }
    }
}



