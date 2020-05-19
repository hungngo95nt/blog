---
path: leetCode/136-SingleNumber
date: 2020-05-19T15:30:11.766Z
title: "leetCode #136 Single Number "
description: "#Algorithms #Map #HashTable #Bit #Logic #Manipulation"
---
## JS solution using Map
```js
https://github.com/dhara9525/N-Repeated_Element_in_Size_2N_Array

var repeatedNTimes = function(A) 
{
    var length_2n, length_n, result_key ;
    var myMap = new Map();
    length_2n=A.length;
    length_n=Math.round(length_2n/2);
    
    for(var i=0;i<length_2n;i++)
    {
        if(myMap.get(A[i])==undefined)
            {
                myMap.set(A[i],1);
            }
        else
            {
                myMap.set(A[i],(myMap.get(A[i])+1) );
            }
    }
    myMap.forEach(function(value,key){
        if(value==length_n)
         { 
			 result_key=key; 
	      }
		  })
    return result_key;
};
```
** Giải pháp ở trên sẽ không hợp lý, bởi vì đề bài đã cho dãy này sẽ chỉ có 1 phần tử lẻ **
## JS solution using Objects
```js
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let seen = {};
    for(element of A){
        if(seen[element]){return element}
        else{seen[element] = 1}
    }
};
```

## JS solution using Set
```js
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let seen = new Set();
    for(element of A){
        if(seen.has(element)){return element}
        else{seen.add(element)}
    }
};
```
** => both of these solve in 64ms **

## Python solution using Dictionary
[Video] Hash Table rất nhanh nhưng Bit Manipulation rất tiếc.  😛
Trong python kiểu dữ liệu Dictionary là 1 thể hiện cuả HashTable.
Truy xuất bằng hash table rất nhanh nhưng vì trước khi truy xuất thì dữ liệu phải được tiền xử lý qua Hash Function. Việc chạy Hash Function này sẽ dựa trên phép nhân làm tốn tài nguyên bộ nhớ.
Ở yêu của đề bài thì cần O(n) thời gian và O(1) bộ nhớ - Tức là bộ nhớ tuyến tính khi chạy thuật toán.
Sử dụng Bit Manipulation (Bit Logic): and or xor not.
Việc sử dụng toán tử logic sẽ tiết kiệm bộ nhớ.
ở đây theo logic ta có được:

1^2^2 = 1

2^3^4^2^3^4^5= 5
```python
# solution using dictionary
import collections
class Solution:
    def singleNumber(self, nums: List[int]) ->int:
        aDict = collections.defaultdict(int)
        for num in nums:
            aDict[num]+=1
        print(aDict)
# solution using Bit Logic
import collections
class Solution:
    def singleNumber(self, nums: List[int]) ->int:
        first = nums[0]
        for i in range(1, len(nums)):
            first = first ^ nums[i]
        return first
```
### source: 
https://medium.com/algorithms-and-leetcode/bit-manipulation-4-of-leetcode-problems-e67db88598d1

https://leetcode.com/problems/n-repeated-element-in-size-2n-array/discuss/267502/javascript-js-solution-using-map

https://www.youtube.com/watch?v=J21dShN8l_k&t=62s
