let str = "i love coding this is a lie"

let count = 0

for(let i = 0; i < str.length; i++){
    if(checkVowel(str[i])){
        count++
    }
}

function checkVowel(ch){
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch ==  'u'){
        return true;
    }
}

console.log(count)