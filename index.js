function displayList(){
    let obj, titleArr, str = "";

    if(JSON.parse(localStorage.getItem("items")).length!= 0){
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

    titleArea = document.querySelector("#title");
    textArea = document.querySelector("#Note");

    if(JSON.parse(localStorage.getItem("items")).length!= 0){
        obj = JSON.parse(localStorage.getItem("items"));
        titleArr = Object.keys(obj);
        title = titleArr[0];
        content = obj[`${title}`];
        titleArea.value = title;
        textArea.value = content; 
    }
    else{
        textArea.value = "";
        titleArea.value = "";
    }
}

function saveNote(){
    let title, content, obj;

    title = document.querySelector("#title").value;
    content = document.querySelector("#Note").value;

    if(JSON.parse(localStorage.getItem("items")).length!= 0){
        obj = JSON.parse(localStorage.getItem("items"));

        if(`${title}` in obj){

        }
        else{
            obj[`${title}`] = content;
            localStorage.setItem("items",JSON.stringify(obj));
        }
    }
    else{
        obj = {};
        obj[`${title}`] = content;
        localStorage.setItem("items",JSON.stringify(obj));
    }

    displayList();
       
}

function addNote(){
    let titleArea, textArea;

    titleArea = document.querySelector("#title");
    textArea = document.querySelector("#Note");

    if(JSON.parse(localStorage.getItem("items")).length!= 0){
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
}

function deleteNote(){
    let title, obj;

    title = document.querySelector("#title").value;
    obj = JSON.parse(localStorage.getItem("items"));

    delete obj[`${title}`];

    localStorage.setItem("items",JSON.stringify(obj));
    location.reload();

    // displayList();
}

function clicked(id){
    let obj, title, content;

    obj = JSON.parse(localStorage.getItem("items"));
    title = id;
    content = obj[`${id}`];

    if(document.querySelector("#title").value in JSON.parse(localStorage.getItem("items")) == false){
        let confirmed = confirm("This note is not yet saved, are you sure you want to continue without saving this first?");

        if(confirmed){
            let titleArea, textArea;
            titleArea = document.querySelector("#title");
            textArea = document.querySelector("#Note");
            titleArea.value = title;
            textArea.value = content; 
        }
    }
    else{
        let titleArea, textArea;
        titleArea = document.querySelector("#title");
        textArea = document.querySelector("#Note");
        titleArea.value = title;
        textArea.value = content;
    }
}


displayList();
displayNote();