function displayList(){
    let obj;
    let str = "";
    let titleArr;
    if(localStorage.getItem("items") != null){
        obj = JSON.parse(localStorage.getItem("items"));
        titleArr = Object.keys(obj);
        titleArr.forEach((element) => {
            str += `
                <tr>
                <button class="listElement" id="${element}" onclick=clicked(this.id)>${element}</button>
                </tr>`;
        });
        document.querySelector("table").innerHTML = str;
    }
}

function displayNote(){
    let obj, titleArr, title, content, titleArea, textArea;
    obj = JSON.parse(localStorage.getItem("items"));
    titleArr = Object.keys(obj);
    title = titleArr[0];
    content = obj[`${title}`];
    titleArea = document.querySelector("#title");
    textArea = document.querySelector("#Note");
    titleArea.value = title;
    textArea.value = content; 
}

function saveNote(){
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#Note").value;
    let obj;
    if(localStorage.getItem("items") != null){
        obj = JSON.parse(localStorage.getItem("items"));
        
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

function clicked(id){
    let obj = JSON.parse(localStorage.getItem("items"));
    let title = id;
    let content = obj[`${id}`];
    if(document.querySelector("#title").value in JSON.parse(localStorage.getItem("items")) == false){
        let confirmed = confirm("This note is not yet saved, are you sure you want to continue without saving this first?");
        if(confirmed){
            let titleArea = document.querySelector("#title");
            let textArea = document.querySelector("#Note");
            titleArea.value = title;
            textArea.value = content; 
        }
    }
    else{
        let titleArea = document.querySelector("#title");
        let textArea = document.querySelector("#Note");
        titleArea.value = title;
        textArea.value = content;
    }
}

displayList();
displayNote();