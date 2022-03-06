var word1=prompt("Enter 1st word") ;
var word2=prompt("Enter 2nd word") ;

var len1=word1.length;
var len2=word2.length;
var match=0;

if(len1==len2){
    for(i=0;i<len1;i++){
        for(j=0;j<len1;j++){
            if(word1[i]==word2[j]){
                match=match+1;
            }
        }
    }

    if(match==len1){
        document.write("Anagram")
    }

    else{
        document.write("Not Anagram")
    }
}

else{
    document.write("Not Anagram")
} 