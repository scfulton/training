#include <string>
#include <iostream>
#include <cstdlib>

#define SIZE 32

/*
 * empty
 * size
 * top
 * push 
 * pop
 * top 
 */


class stack

{
private:
    int *arr;
    int top;
    int capacity;

public:
 stack (int size = SIZE);
 ~stack();

 void push(int);
 int pop();
 int peek();
 int size();
 bool isEmpty();
 bool isFull();
//  void emit(string x);
};
 

 stack::stack (int size){
     arr = new int[size];
     capacity = size;
     top = -1;
 }

 stack::~stack(){
     delete arr;
 }

//  void stack::emit(string x){
//      std::cout << x << std::endl;

//  }

void stack::push(int x){

    if ( isFull() ){
        std::cout << "Stack full, push failed" << std::endl;
    }else{
        std::cout << "Inserting: " << x << std::endl;
        arr[++top] = x;
    }
}
int stack::pop() {
    if ( isEmpty() ){
        std::cout << "Underflow... ERROR" << std::endl;
        return 8008;
    }else{
        std::cout << "Removing: " << peek() << std::endl;
        return arr[top--];
    }
}

int stack::peek(){
    if ( !isEmpty() ){
        return arr[top];
    }else{
        std::cout << "Removing" << peek() << std::endl;
        return 8008;
    }
}

int stack::size(){
    return top+1;   
}

bool stack::isEmpty(){
    return (top == -1);
}

bool stack::isFull(){
    return top == capacity - 1;
}

int main(int argc, char const *argv[])
{
    stack mystack(9);
    // std::cout << mystack.isEmpty() << std::endl;
    mystack.push(8008);
    mystack.push(42);
    mystack.push(7734);
    mystack.push(505);
    // std::cout << mystack.isEmpty() << std::endl;


    mystack.pop();
    mystack.pop();
    mystack.pop();
    mystack.pop();
    mystack.pop();

    
    return 0;
}



