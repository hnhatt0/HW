const listScore = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
    let min = 0;
    let max = 0;
    let high = 0;
    let low = 0;
    for(let i = 0; i <scores.length; i++) {
        if(i===0) {
            high = scores[i];
            low = scores[i];
        } else {
            if(scores[i]<low) {
                low = scores[i];
                min++
            }
            if(scores[i]>high) {
                high = scores[i];
                max++
            }
        }
    }
    return [max, min]
}

const res = breakingRecords(listScore);
console.log(res);