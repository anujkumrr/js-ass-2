// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
function pattern(num) {
    for( let i=1; i <= num; i++){
        let row ="";
        for (let j = num; j>= i; j--){
            row += j;
        }
        console.log(row);
    }
}
let myNumber =5;
pattern(myNumber);

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

let array =[3,2,1,4,5,45];
document.write(array.sort(function(a,b){
    return a-b
}
))

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
function string(a,b){
    if(a.length !== b.length){
        return 'not correct input'
    }
    let asorted = a.split('').sort().join('');
    let bsorted = b.split('').sort().join('');
    if(asorted===bsorted){
        return 'its anagram';
    
    } else{
        return 'its not anagram';
    }
}
console.log(string('LISTIEN','SILENT'))

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
function reverse(str){
    let newstr =''
    for(var i=str.length - 1; i>= 0; i--){
        newstr = newstr + str[i];
    }
    console.log(newstr)
}
reverse('HELLO')



























