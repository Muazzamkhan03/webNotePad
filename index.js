function display(){
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
    display();
       
}

function deleteNote(){
    let title = document.querySelector("#title").value;
    let obj = JSON.parse(localStorage.getItem("items"));
    delete obj[`${title}`];
    localStorage.setItem("items",JSON.stringify(obj));
    location.reload();
    display();
}

function clicked(id){
    console.log(`clicked on ${id}`);
}

function addNote(){
    
}
