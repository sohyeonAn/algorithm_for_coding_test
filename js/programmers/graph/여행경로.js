// https://programmers.co.kr/learn/courses/30/lessons/43164
// level 3
console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
); // ["ICN", "JFK", "HND", "IAD"]
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

function solution(tickets) {
  const routes = [];
  explore("ICN", tickets);
  if (routes.length > 1) routes.sort(); // 알파벳 앞서는 순서를 return 하기 위함.

  function explore(src, tickets, route = "") {
    route += src + ",";
    if (tickets.length === 0) {
      routes.push(route);
    } else {
      for (let idx in tickets) {
        const [a, b] = tickets[idx];
        if (src === a) {
          const tmpTickets = [...tickets];
          tmpTickets.splice(idx, 1);
          explore(b, tmpTickets, route);
        }
      }
    }
  }

  return routes[0].split(",").slice(0, -1);
}
