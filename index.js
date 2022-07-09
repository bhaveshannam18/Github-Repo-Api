function createUrl(){
    var name = document.getElementById("name").value;
    console.log(name);
    var url = `https://api.github.com/users/${name}/repos`;
    fetch(url)
    .then(response =>{
        return response.json();
    }).then(data =>{
        //console.log(data);
        for(let i=0;i<data.length;i++){
            //console.log(data[i].name,data[i].description);
            //Create function that creates element 
            createElement(data[i].name,data[i].description);
        }
    });
}




function createElement(repository_name,repository_desc="some random description"){
    var container = document.getElementById("container");
    var repo_div = document.createElement("div");
    repo_div.setAttribute("class","repo");
    var repo_name = document.createElement("h1");
    repo_name.setAttribute("class","repo_name");
    repo_name.innerText = repository_name;
    var repo_desc = document.createElement("p");
    repo_desc.setAttribute("class","repo_desc");
    repo_desc.innerText =  repository_desc;
    repo_div.append(repo_name,repo_desc);
    container.append(repo_div);
}
