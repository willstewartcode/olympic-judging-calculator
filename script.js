/*
    Gets the scores from 8 judges and calculates
    the average score, excluding the highest and
    lowest scores.
*/
function calculateScores() {

    // Gets the form and the scores from each of the 8 judges
    let form = document.forms.judgeScores;
    let judgeAscore = parseFloat(form.elements.judgeA.value);
    let judgeBscore = parseFloat(form.elements.judgeB.value);
    let judgeCscore = parseFloat(form.elements.judgeC.value);
    let judgeDscore = parseFloat(form.elements.judgeD.value);
    let judgeEscore = parseFloat(form.elements.judgeE.value);
    let judgeFscore = parseFloat(form.elements.judgeF.value);
    let judgeGscore = parseFloat(form.elements.judgeG.value);
    let judgeHscore = parseFloat(form.elements.judgeH.value);

    // Array containing each of the 8 scores
    let scores = [judgeAscore, 
                  judgeBscore, 
                  judgeCscore,
                  judgeDscore,
                  judgeEscore,
                  judgeFscore,
                  judgeGscore,
                  judgeHscore];

    // Sets score to 0 if field is left blank
    for (let i = 0; i < scores.length; i++) {
        if (isNaN(scores[i])) {
            scores[i] = 0;
        }
    }

    console.log(scores);
    
    let average = getUnbiasedAverage(scores);

    document.getElementById("results").innerHTML = "Average: " + average.toFixed(2);

}

// Calculates the average, minus the smallest and largest values.
function getUnbiasedAverage(scores) {
    let avg = 0;
    let smallestValue = getSmallestValue(scores);
    let largestValue = getLargestValue(scores);
    let total = getTotal(scores);

    avg = (total - smallestValue - largestValue) / (scores.length - 2);
    console.log("avg = " + avg);
    return avg;
}

// Finds the smallest value in the array.
function getSmallestValue(scores) {
    let smallest = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < smallest) {
            smallest = scores[i];
        }
    }
    console.log("Smallest = " + smallest);
    return smallest;
}

// Finds the largest value in the array
function getLargestValue(scores) {
    let largest = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > largest) {
            largest = scores[i];
        }
    }
    console.log("Largest = " + largest);
    return largest;
}

// Calculates the sum of all values in the array.
function getTotal(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum+=scores[i];
        console.log("Current sum = " + sum);
    }
    console.log("Sum = " + sum);
    return sum;
}