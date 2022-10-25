let arr=["madam","dad","master","abdul","MOM"];
let palindrome=arr.filter(function(str){
        let temp=str;
        var res="";
        for(var i=0;i<str.length;i++){
            var res=str.charAt(i)+res;
        }
        if(temp===res){
            return true
        }
    })


console.log(palindrome);