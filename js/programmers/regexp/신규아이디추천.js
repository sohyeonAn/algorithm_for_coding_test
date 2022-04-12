// https://programmers.co.kr/learn/courses/30/lessons/72410#
// 2021 KAKAO BLIND RECRUITMENT
// level 1

console.log(solution("...!@BaT#*..y.abcdefghijklm"))//"bat.y.abcdefghi"
console.log(solution("z-+.^."))//"z--"
console.log(solution("=.="))//"aaa"
console.log(solution("123_.def"))//"123_.def"
console.log(solution("abcdefghijklmn.p"))//"abcdefghijklmn"

function solution(new_id) {
  var answer = '';
  let recommend = new_id;
  // 1. 대문자 -> 소문자
  recommend = recommend.toLowerCase()
  // 2. 불가능한 문자 제거
              .replace(/[^0-9a-z-_.]/g, '')
  // 3. 연속된 마침표 한개로 치환
              .replace(/\.{2,}/g, '.')
  // 4. 처음/끝 마침표 제거
              .replace(/^\.|\.$/, '')
  // 5. 빈문자열이면 'a' 대입
              .replace(/^$/, 'a')
  // 6. 16자 이상이면 처음부터 15까지 자르고 마지막 마침표 제거
              .substring(0, 15).replace(/\.$/g, '');
  // 7. 2자 이하이면 마지막 문자를 길이가 3이 될 때까지 추가
  const len = recommend.length;
  if(len <= 2) recommend += recommend.charAt(len-1).repeat(3-len);
  
  answer = recommend;
  return answer;
}