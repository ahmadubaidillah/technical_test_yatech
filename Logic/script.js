function solution(a, m, k) {
  let count = 0;

  for (let i = 0; i <= a.length - m; i++) {
    //buat subarray dengan panjang sesuai m
    // console.log(i + ",");
    const subarray = a.slice(i, i + m);
    // console.log(subarray);

    // cek apakah subarray berisi pasangan dengan jumlah sama dengan k
    if (cekSamaDenganK(subarray, k)) {
      count++;
    }
  }

  return count;
}

function cekSamaDenganK(subarray, k) {
  const seen = new Set();

  for (let num of subarray) {
    const complement = k - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Test 1
const a1 = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
const m1 = 4;
const k1 = 10;
console.log(solution(a1, m1, k1)); // output = 5

const a2 = [15, 8, 8, 2, 6, 4, 1, 7];
const m2 = 2;
const k2 = 8;
console.log(solution(a2, m2, k2)); // Output = 2
