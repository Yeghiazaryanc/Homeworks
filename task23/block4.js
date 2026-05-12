//10

async function downloadMovies(movies) {
  movies.forEach(async (movie) => {
    await fetch(`/api/download/${movie}`);
    console.log(`Downloaded: ${movie}`);
  });
  console.log('Done!');
}

async function downloadMovies(movies) {
    for (const element of movies) {
        await fetch(`/api/download/${element}`);
        console.log(`donwloaded ${element}`);
    }
    console.log("Done");
}


// 11

async function getNames(users) {
  const promises = users.map(async (user) => {
    let res = await fetch(`/api/name/${user}`);
    return res.text();
  });
  
  // Add Promise.all here:
  const names = promises;
  console.log(names); 
}

async function getNames(users) {
  const promises = users.map(async (user) => {
    let res = await fetch(`/api/name/${user}`);
    return res.text();
  });
  
  const names= await Promise.all(promises);
  console.log(names); 
}


// 12


async function getDashboard() {
  const weather = await fetch('/api/weather');
  const news = await fetch('/api/news');
  console.log('Data collected');
}


async function getDashboard() {
    let result= await Promise.all([
        fetch('/api/weather'),
        fetch('/api/news')
    ]);
    console.log('Data collected');
}