function plaindrome(str) {  
    str = str.toUpperCase()
    var notmatch=0

    // get the total length of the words  
    const len = str.length;  

    for (let i = 0; i < len; i++) {  

        if(str[i]!=str[len-1-i]){
            notmatch=notmatch+1;
        }
    }  

    if(notmatch>0){
        document.write("Word is not a palindrome");
    }
    else {
        document.write("Word is a palindrome");
    }
}  

// accept the string or number from the prompt  
var string = prompt('Enter a word: ');    
plaindrome(string);  
