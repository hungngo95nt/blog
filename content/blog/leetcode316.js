const removeDuplicateLetters = function(s) {
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        
        if(stack && stack.find(char => char === s[i])){
            
            
        }
        else{
            stack.push(s[i]);
        }
    }
    stack.sort();
    return  stack.join("");

};
removeDuplicateLetters("avbvbc");