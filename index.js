function saveNote(){
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#Note").value;
    let obj;
    if(localStorage.getItem("items") != null){
        obj = JSON.parse(localStorage.getItem("items"));
        obj[`${title}`] = content;
        localStorage.setItem("items",JSON.stringify(obj));
    }
    else{
        obj = {};
        obj[`${title}`] = content;
        localStorage.setItem("items",JSON.stringify(obj));
    }
    displayList();
       
}

function addNote(){
    let titleArea = document.querySelector("#title");
    let textArea = document.querySelector("#Note");
    if(document.querySelector("#title").value in JSON.parse(localStorage.getItem("items")) == false){
        let confirmed = confirm("This note is not yet saved, are you sure you want to make a new one, without saving this first?");
        if(confirmed){
            textArea.value = "";
            titleArea.value = "";
        }
    }
    else{
        textArea.value = "";
        titleArea.value = "";
    }
}

function deleteNote(){
    let title = document.querySelector("#title").value;
    let obj = JSON.parse(localStorage.getItem("items"));
    delete obj[`${title}`];
    localStorage.setItem("items",JSON.stringify(obj));
    location.reload();
    displayList();
}

displayList();