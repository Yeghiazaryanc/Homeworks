// 1
function getUser() {
  fetch('/api/user')
    .then(response => response.json())
    .then(data => console.log('User:', data));
}

async function getUser() {
    let response=await fetch('/api/user');
    let data= await response.json();
    console.log("User:",data);
}

// 2

function getSettings() {
  fetch('/api/settings')
    .then(res => res.json())
    .catch(error => console.log('An error occurred:', error));
}

async function getSettings() {
    try{
        let response=await fetch('/api/settings');
        let data= await response.json();
    }catch(error){
        console.log('An error occurred:', error)
    }
}


//3

function loadData() {
  fetch('/api/user')
    .then(res => res.json())
    .then(user => {
      return fetch(`/api/posts/${user.id}`);
    })
    .then(res => res.json())
    .then(posts => console.log('Posts:', posts));
}

async function loadData() {
    let response=await fetch('/api/user');
    let data= await response.json(); 
    let posts= await fetch(`/api/posts/${data.id}`);
    let data2=await posts.json();
    console.log("posts:",data2);  
}