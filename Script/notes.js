
    function setArray(key, array) {
        localStorage.setItem(key, JSON.stringify(array));
    }
    function addNote() {
        ShowContent.innerHTML = '';
        Show2ndContent.innerHTML = '';
        content.innerHTML = '';
        content.innerHTML = ReturnAddNoteContent();
    }
    
    function SaveNoteLocal(NewNote, NoteHead) {
        Notes.push(NewNote);
        setArray('Notes', Notes);
        Notetitle.push(NoteHead);
        setArray('Notetitle', Notetitle);
    }
    function SaveNote() {
        let NewNote = document.getElementById('Note').value;
        let NoteHead = document.getElementById('NoteHead').value;
        if (NoteHead.length <= 24) {
            if (NewNote.length <= 240) {
                SaveNoteLocal(NewNote, NoteHead);
                content.innerHTML = ReturnSaveNoteContent();
            } else {
                alert("Ihre Notiz ist zu lang! Bitte nicht mehr als 240 Zeichen verwenden");
            }
            } else {
            alert("Der Titel ihrer Notiz darf nicht länger als 24 Zeichen sein");
        }
    }
    
    function getTrashNotesLocal() {
        if (localStorage.getItem('notesTrash') === null) {}
        else {
        let noteTrashs = localStorage.getItem('notesTrash');
        let titleTrash = localStorage.getItem('notetitleTrash');
        notesTrash = JSON.parse(noteTrashs);
        notetitleTrash = JSON.parse(titleTrash);
        }
    }
    
    
    function GetNotesLocal(){
        if (localStorage.getItem('Notes') === null) {} //checkTrashNotes(); ist aber wohl falsch hier in der if?? 
        else {
        let Shownote = localStorage.getItem('Notes');
        let Notehead = localStorage.getItem('Notetitle');
        Notes = JSON.parse(Shownote);
        Notetitle = JSON.parse(Notehead);
        }
    }
    function ShowNoteifelse1() {
        content.innerHTML = ReturnContentNote();
        ShowContent.innerHTML = ReturnShowNoteHeader();
        GetNotesLocal()
        let notearea = document.getElementById('notes');
    
        for (let i = 0; i < Notes.length; i++) {
            const Note = Notes[i]
            const Noteheader = Notetitle[i]
            notearea.innerHTML += ReturnNotes1(Note, Noteheader, i);
        }
    }
    
    function ShowNoteifelse2() {  
        content.innerHTML = ReturnContentBothOn();
        Show2ndContent.innerHTML = ReturnShowNoteHeader2();
        GetNotesLocal()
        let notearea = document.getElementById('notes');
    
        for (let i = 0; i < Notes.length; i++) {
            const Note = Notes[i]
            const Noteheader = Notetitle[i]
            notearea.innerHTML += ReturnNotes2(Note, Noteheader, i);
        }
    }
    
    function ShowNoteifelse3() {   
        content.innerHTML = ReturnContentBothOn();
        ShowContent.innerHTML = ReturnShowNoteHeader();
        GetNotesLocal()
        let notearea = document.getElementById('notes');
    
        for (let i = 0; i < Notes.length; i++) {
            const Note = Notes[i]
            const Noteheader = Notetitle[i]
            notearea.innerHTML += ReturnNotes1(Note, Noteheader, i);
        }
    }
    
    function ShowNoteifelse4() {
        content.innerHTML = ReturnContentNote();
        Show2ndContent.innerHTML = ReturnShowNoteHeader2();
        GetNotesLocal()
        let notearea = document.getElementById('notes');
    
        for (let i = 0; i < Notes.length; i++) {
            const Note = Notes[i]
            const Noteheader = Notetitle[i]
            notearea.innerHTML += ReturnNotes2(Note, Noteheader, i);
        }
    }
    function showNote() {
        if (ShowContent.innerHTML.trim() == "") {
            ShowNoteifelse1();
            checkTrashNotes();
        }
        else {
            ShowNoteifelse2()
            checkTrashNotes();
        }
    }
    function checkTrashNotes() {
        const NotesTrashs = localStorage.getItem('notesTrash')
        notesTrash = JSON.parse(NotesTrashs)
        if (notesTrash == '') {
        } else {     
            document.getElementById('delTrash').classList.remove("trashHide");
            document.getElementById('recTrash').classList.remove("trashHide");
        }
    }
    function checkTrashNotesRender() {
        getTrashNotesLocal(); 
        if (notesTrash == '') { 
            Show2ndContent.innerHTML = ``;
        } else { 
            if (ShowContent.innerHTML == '') {
                ShowContent.innerHTML = 
                    `<div class="shContentTrash"><button onclick="delTrash()" id="delTrash" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
                    <button onclick="recoverTrash()" id="recTrash" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean""></button></div>`;        
            } else {
                Show2ndContent.innerHTML = 
                   `<div class="shContentTrash"><button onclick="delTrash()" id="delTrash" title="leeren"><img src="./assets/buttons/trash-full.png" class="trashBean"></button>
                    <button onclick="recoverTrash()" id="recTrash" title="Wiederherstellen"><img src="./assets/buttons/trash-empty.png" class="trashBean" title="Wiederherstellen"></button></div>`;
                }
            
            }
    }
    function trashBeanNote(i) {
        let trashNote = Notes[i]
        let trashNotetitle = Notetitle[i]
        notesTrash.push(trashNote);
        notetitleTrash.push(trashNotetitle);
        Notes.splice(i, 1);
        Notetitle.splice(i, 1);
        setArray('notesTrash', notesTrash);
        setArray('notetitleTrash', notetitleTrash);
        setArray('Notes', Notes);
        setArray('Notetitle', Notetitle);
    }
    
    function delNote(i) {
         trashBeanNote(i);
         
        if (Show2ndContent.innerHTML === '') {
            ShowNoteifelse1();
            checkTrashNotes();
        } else {
            ShowNoteifelse3();
            checkTrashNotes();
        }
    }
    function delNote2(i) {
        trashBeanNote(i);
        if (ShowContent.innerHTML === '') {
            ShowNoteifelse4();
            checkTrashNotes();
        } else {
            ShowNoteifelse2();
            checkTrashNotes();
        }
    }
    function delTrash() {
        getTrashNotesLocal()
        let i = notesTrash.length;
        notesTrash.splice(0, i);
        notetitleTrash.splice(0, i);
        setArray('notesTrash', notesTrash);
        setArray('notetitleTrash', notetitleTrash);
        alert ("Ihr Papierkorb wurde geleert!");
        document.getElementById('delTrash').classList.add("trashHide");
        document.getElementById('recTrash').classList.add("trashHide");
    
    }
    function emptyRecNoteBean() {
        let i = notesTrash.length;
        notesTrash.splice(0, i);
        notetitleTrash.splice(0, i);
        setArray('notesTrash', notesTrash);
        setArray('notetitleTrash', notetitleTrash);
    }
    function recoverTrash() {
        getTrashNotesLocal();
        noteTrashTransfer();
        render();
        emptyRecNoteBean();
        document.getElementById('delTrash').classList.add("trashHide");
        document.getElementById('recTrash').classList.add("trashHide");
    }
    
    function noteTrashTransfer() {
        const recNotes = notesTrash;
        const recNotetitle = notetitleTrash;
        for (i = 0; i < notesTrash.length; i++) {
        Notes.push(recNotes[i]);
        Notetitle.push(recNotetitle[i]); 
        }
        setArray('Notes', Notes);
        setArray('Notetitle', Notetitle);
    }