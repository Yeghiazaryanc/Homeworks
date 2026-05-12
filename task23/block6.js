// 16

function getAvatar(username) {
  return fetch(`/api/users/${username}`)
    .then(response => response.json())
    .then(user => {
      console.log('Avatar:', user.avatarUrl);
      return user.avatarUrl;
    });
}


async function getAvatar(username) {
   let response=await fetch(`/api/users/${username}`);
   let data=await response.json();
   console.log("Avatar:",data.avatarUrl);
   return data.avatarUrl
}


// 17 

async function fetchGreeting() {
  const response = await fetch('/api/greeting');
  const text = await response.text();
  console.log(text);
  return text;
}

function fetchGreeting(){
    return fetch('/api/greeting')
    .then(response=>response.text())
    .then(text=>{
        console.log(text);
        return text;
    }
    );
}

// 18 

function deleteComment(id) {
  return fetch(`/api/comments/${id}`, { method: 'DELETE' })
    .then(() => console.log('Comment deleted'))
    .catch(error => console.error('Failed to delete:', error));
}

async function deleteComment(id) {
    try{
        let response=await fetch(`/api/comments/${id}`, { method: 'DELETE' });
        console.log("Comment deleted");
    }catch(error){
        console.error("Filed to delete",error);
    }
}



// 19

async function savePlayerSettings(settings) {
  try {
    await fetch('/api/settings', { method: 'POST', body: settings });
    console.log('Settings saved');
  } catch (err) {
    console.log('Save error');
  }
}


function savePlayerSettings(settings){
    return fetch('/api/settings', { method: 'POST', body: settings })
    .then(()=>{
    console.log("Settings saved");
    })
    .catch(error=>console.log("Save error"));
}

// 20


function getPlayerScore(playerId) {
  return fetch(`/api/players/${playerId}`)
    .then(response => response.json())
    .then(player => {
      return fetch(`/api/scores/${player.gameId}`);
    })
    .then(response => response.json())
    .then(score => {
      console.log(`Current score: ${score.points}`);
    });
}

async function getPlayerScore(playerId) {
    try{
        let response=await fetch(`/api/players/${playerId}`);
        if (!response.ok) {
            throw new Error(`Player API failed with status: ${response.status}`);
        };
        let player=await response.json();
        let responseScore=await fetch(`/api/scores/${player.gameId}`);
        if (!responseScore.ok) {
            throw new Error(`Score API failed with status: ${responseScore.status}`);
        }
        let scoreData=await responseScore.json();
        console.log("Current score:"+ scoreData.points);
    }catch(error){
        console.log("Operation failed:",error.message);
    }
}