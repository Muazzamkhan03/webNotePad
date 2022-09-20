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

    let str = "";
    str = document.querySelector("table").innerHTML;
    str += `
                <tr>
                <button class="listElement" id="${title}" onclick=clicked(this.id)>${title}</button>
                </tr>`;
    document.querySelector("table").innerHTML = str;
       
}

function deleteNote(){
    let title = document.querySelector("#title").value;
    let obj = JSON.parse(localStorage.getItem("items"));
    delete obj[`${title}`];
    localStorage.setItem("items",JSON.stringify(obj));
    location.reload();
}

function clicked(id){
    console.log(`clicked on ${id}`);
}

function addNote(){
    
}
