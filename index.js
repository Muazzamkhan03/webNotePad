function saveNote(){
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#Note").value;
    let arr;
    if(localStorage.getItem("items") != null){
        arr = JSON.parse(localStorage.getItem("items"));
        arr.push([title,content]);
        localStorage.setItem("items",JSON.stringify(arr));
    }
    else{
        arr = [];
        arr.push([title,content]);
        localStorage.setItem("items",JSON.stringify(arr));
    }

    let str = "";
    str = document.querySelector("table").innerHTML;
    str += `
                <tr>
                <button class="listElement">${title}</button>
                </tr>`;
    document.querySelector("table").innerHTML = str;
    
}

function clicked(){
    console.log(`clicked on ${document.querySelector}`);
}

function addNote(){
    
}
