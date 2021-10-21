import java.util.*;

public class Main{
  
  public static final int INF = 999999999;

  public static void main(String[] args){
    // 기본 배열 초기화
    int[] coinTypes = {500, 100, 50, 10};
    int[][] d = new int[5][5]; // 자동으로 0으로 초기화

    // 배열 정렬
    Arrays.sort(coinTypes);

    // 특정 인덱스의 문자값 가져오기
    String[] plans = {"RR", "LL"};
    char plan = plans[0].charAt(0);

    // 문자로 입력된 숫자를 int 타입으로 바꾸기
    int planNumber = plans[0].charAt(0) - '0';

    // 알파벳을 숫자로 바꾸기(a를 1로)
    int alphaNum = 'c' - 'a' +1;

    // max 값 찾기
    int max = Math.max(1, 100);

    // 스택
    Stack<Integer> s = new Stack<>();
    s.push(5);
    s.push(2);
    s.pop();
    s.peek();

    // 큐
    Queue<Integer> q = new LinkedList<>();
    q.offer(5); // 삽입
    q.offer(2); 
    q.poll(); // 삭제


    // ArrayList
    ArrayList<Integer> arrlist = new ArrayList<Integer>();
    arrlist.add(1);
    arrlist.add(2);
    arrlist.get(1);
    arrlist.size();
    
  }

}



