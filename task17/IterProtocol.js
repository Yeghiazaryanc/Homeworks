const myRange={
    from:1,
    to:5,
    [Symbol.iterator]:function(){
        let current=this.to;
        let end=this.from;
        return {
            next:function(){
                if(current>=end){
                    return {value:current--,done:false};
                }else{
                    return {value:undefined,done:true};
                };
            },
        };
    },
};

const reversedNumbers=[...myRange];
console.log(reversedNumbers);
console.log(myRange);

