const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

function getUniqueUsers(users){
    let userMap=new Map();
    for (const user of users) {
        if(!userMap.has(user.id)){
            userMap.set(user.id,user);
        }
    }
    return Array.from(userMap.values());
}

console.log(getUniqueUsers(users));//[ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]