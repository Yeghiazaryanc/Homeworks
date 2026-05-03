
let likesMap=new WeakMap();

function addLike(post,user){
    if(!likesMap.has(post)){
        likesMap.set(post,[]);
    }
    likesMap.get(post).push(user);
}

function getLikes(post){
    return likesMap.get(post);
}

let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');

 console.log(getLikes(post1)); // ['John', 'Anna']
 console.log(getLikes(post2)); // [] or undefined


