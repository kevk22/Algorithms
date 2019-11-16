/*
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// Optimal
var findAnagrams = function (s, p) {
    let res = [];
    if (p.length > s.length) return res;

    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let arrS = new Array(alph.length).fill(0);
    let arrP = new Array(alph.length).fill(0);

    for (let i = 0; i < p.length; i++) {
        let sIdx = alph.indexOf(s[i]);
        let pIdx = alph.indexOf(p[i]);

        arrS[sIdx]++;
        arrP[pIdx]++;
    }

    let low = 0;
    let high = p.length;
    while (high < s.length) {
        if (compare(arrS, arrP)) res.push(low);

        let lowIdx = alph.indexOf(s[low]);
        let highIdx = alph.indexOf(s[high]);

        arrS[lowIdx]--;
        low++;
        arrS[highIdx]++
        high++;
    }

    if (compare(arrS, arrP)) res.push(low);

    return res;
}

function compare(arrS, arrP) {
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] !== arrP[i]) return false;
    }

    return true;
}


// ----------------------------------

// Naive 
var findAnagrams = function(s, p) {
  let res = [];

  if (p.length > s.length) return res;

  for (let i = 0; i < (s.length - p.length + 1); i++){
     if ( check(s.slice(i, i + p.length), p) ) {
       res.push(i);
     }
  }

  return res;
};

function check(s, p){
  let count = {};

  [...s].forEach(char => {
    if (!count[char]) count[char] = 0;
    count[char]++;
  });

  for (let i = 0; i < p.length; i++) {
    if (!count[p[i]]) return false;

    count[p[i]]--;
    if (count[p[i]] < 0) return false;
  }

  return true;
}
