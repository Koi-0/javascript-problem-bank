/**
 * [(lv.2)rotate-array.js]
 *
 * 배열 arr의 마지막 요소를 맨 앞으로 이동하여, 오른쪽으로 한 칸씩 이동된 새 배열을 반환하세요.
 * 예) [1, 2, 3] -> [3, 1, 2]
 *
 * @param {any[]} arr
 * @returns {any[]} 요소가 오른쪽으로 한 칸씩 이동된 새 배열
 */

// TODO: 원본을 변경하지 않고, 마지막 요소를 맨 앞으로 이동한 새 배열을 반환
function rotateArray(arr) {
    if (arr.length === 0) return arr; // 빈 배열 처리

    const lastElement = arr.pop(); // 마지막 요소를 꺼냄

    arr.unshift(lastElement); // 꺼낸 요소를 맨 앞에 추가

    return arr;
}

// export를 수정하지 마세요.
export { rotateArray };
