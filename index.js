function calculateDifference(num1,num2){
    let res=Math.abs(num1-num2)
    return res;
}

let diff = calculateDifference(10, 5);

console.log(diff); // Output: 5

function isOdd(num1){
    if(num1%2!=0){
        return true;
    }
    else{
        return false;
    }
}

let isOddNum = isOdd(7);

console.log(isOddNum); // Output: true


function findMin(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

let minNum = findMin([5, 10, 2, 8, 1]);

console.log(minNum); // Output: 1


function filterEvenNumbers(arr){
    let evenArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

let evenNums = filterEvenNumbers([5, 10, 2, 8, 1]);

console.log(evenNums); // Output: [10, 2, 8]

function sortArrayDescending(arr){
    let sortedArr=arr.sort((a, b)=>b-a);
    return sortedArr;
}

let sortedNums = sortArrayDescending([5, 10, 2, 8, 1]);

console.log(sortedNums); // Output: [10, 8, 5, 2, 1]

function lowercaseFirstLetter(stringes){
    for(let i=0;i<stringes.length;i++){
        if(i==0){
            stringes[i]=stringes[i].toLowerCase();
        }
        if(stringes[i]=='\n'||stringes[i]==' '){
            i++;
            stringes[i]=stringes[i].toLowerCase();
        }
    }

    return stringes; 

}

var lowerCaseStrings = lowercaseFirstLetter(["Hello WoRld ThiS Is A TeST"]);

console.log(lowerCaseStrings); // Output: ["hello woRld thiS is a teST"]


function countVowels(stringes){
    let count=0;
    for(let i=0;i<stringes.length;i++){
        if(stringes[i]=='a'||stringes[i]=='e'||stringes[i]=='i'||stringes[i]=='o'||stringes[i]=='u'||
            stringes[i]=='A'||stringes[i]=='E'||stringes[i]=='I'||stringes[i]=='O'||stringes[i]=='U'){
                count++;
        }
    }
    return count;
}

let vowelCount = countVowels("Hello WoRld ThiS Is A TeST");

console.log(vowelCount); // Output: 7


function findAverage(arr){
    let sum=0;
    let i=0;
    for(i;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg=sum/i-1;
    return avg;
}

let avgNum = findAverage([5, 10, 2, 8, 1]);

console.log(avgNum); // Output: 4.2