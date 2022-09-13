function saveNote(){
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#Note").value;
    let arr;
    if(localStorage.getItem("items")){
        arr = JSON.parse(localStorage.getItem("items"));
        arr.push([title,content]);
        localStorage.setItem("items",JSON.stringify(arr));
    }
    else{
        arr = [];
        arr.push([title,content]);
        localStorage.setItem("items",JSON.stringify(arr));
    }
}


