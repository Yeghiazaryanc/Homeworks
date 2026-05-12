// 4

async function showData() {
  let response = fetch('/api/data');
  let data = await response.json(); 
  console.log(data);
}

async function showData() {
  let response = await fetch('/api/data');
  let data = await response.json(); 
  console.log(data);
}


// 5
function loadProfile() {
  let user = await fetch('/api/profile');
  console.log('Profile loaded');
}

async function loadProfile() {
  let user = await fetch('/api/profile');
  console.log('Profile loaded');
}

// 6

function sayHello() {
  return "Hello";
}


async function sayHello() {
  return "Hello";
}

//7
button.addEventListener('click', (event) => {
  const data = fetch('/api/click-stats'); // we need to wait for this!
  console.log('Saved');
});


button.addEventListener('click', async (event) => {
  const data =await fetch('/api/click-stats'); // we need to wait for this!
  console.log('Saved');
});