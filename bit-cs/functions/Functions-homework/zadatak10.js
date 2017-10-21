function FindingNemo(array) {
    var max = 0;
    var temp= 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                temp += 1;
            }
        }
        if(temp>max){
            max=temp;
            temp=0;
        }
        else{
            temp=0;
        }
    }
return max;
}
console.log(FindingNemo([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));