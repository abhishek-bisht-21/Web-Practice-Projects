import java.util.*;  
public class Arraydeque{  
public static void main(String[] args) {
  
//Creating Deque and adding elements  

ArrayDeque<String> deque = new ArrayDeque<String>();  
deque.add("Gautam");  
deque.add("Karan");
deque.addFirst("amrit"); 
deque.add("Ajay"); 
deque.push("vivek");
deque.pop(); 
//Traversing elements  
for (String str : deque) {  
System.out.println(str);  
}  
}  
} 