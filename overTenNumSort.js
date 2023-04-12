// 배열 Sort 함수는 유니코드 기준으로 정렬하므로 10이상의 숫자가 포함되어 있으면 비교함수를 인수로 전달해야 한다.
// 비교함수는 양수나 음수 또는 0을 리턴해야 하며 0보다 크면 순차정렬, 0보다 작으면 역정렬, 0이면 정렬하지 않는다.
const nums = [1, 2, 4, 6, 3, 7, 5, 12, 11, 19, 16];
nums.sort();

console.log(nums);
for (let i = 0; i < nums.length; i++) {
    console.log('index[' + i + ']: ' + nums[i]);
}

nums.sort((a, b) => (b - a));

console.log(nums);
for (let i = 0; i < nums.length; i++) {
    console.log('index[' + i + ']: ' + nums[i]);
}
