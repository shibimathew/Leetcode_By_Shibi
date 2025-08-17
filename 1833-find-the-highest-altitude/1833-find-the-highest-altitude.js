/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    // let currentAltitude = 0;
    // let maxAltitude = 0;

    // for (let i = 0; i < gain.length; i++) {
    //     currentAltitude += gain[i];
    //     if (currentAltitude > maxAltitude) {
    //         maxAltitude = currentAltitude;
    //     }
    // }

    // return maxAltitude;
    let curr=0
    let maxi=0
    for(let i=0;i<gain.length;i++){
        curr+=gain[i]
        maxi= Math.max(maxi,curr)
    }
    return maxi
}
