---
path: interview/InterviewTest-2205-2020
date: 2020-05-22T09:37:46.383Z
title: Bài test kĩ thuật fresher ngày 22/05/2020
description: cty nằm ở Phổ Quang
---
# leetcode 338 - Counting Bits
## Cách làm lúc test:
viết 2 hàm
hàm đếm bit 1 của 1 số bên trong sử dụng đệ quy
hàm thứ 2 để duyệt for và tính tổng
## Cách làm trên google: 
1.Khởi tạo array với 2 phần tử 0, 1
2.Duyệt từ phần tử thứ 3 tới number
3.Số bit 1 của giá trị thứ i sẽ bằng số bit 1 của giá trị thứ i/2 và 1bit nếu lẻ (thao tác %2) 

```js
    const countBits = (number) =>{

        if(number === 0)
            return [0];
        let numbers = [0, 1];

        for( let i = 0 ; i <=number ; i++){
           
           numbers[i] = numbers[parseInt(i/2)] + numbers[i%2];
        }
        return numbers;
    }
```
# leetcode 316 - Remove Duplicate Letters
1.Khởi tạo mảng stack rỗng
2.Loop qua các kí tự của chuỗi và tìm trên stack.find(kí tự) 
3.Thêm kí tự đôc lập vào stack
4.Chuyển Stack sang string với mỗi phần tử là 1 kí tự với array method: join(""); 
```js
const removeDuplicateLetters = function(s) {

    let stack = [];

    for(let i = 0; i < s.length; i++){

        if(stack && !stack.find(char => char === s[i])){
        
            stack.push(s[i]);
        }
    }
    stack.sort();
    return  stack.join("");
};
```

# 1 + "ABC" ???
Ở đây khi thực hiện phương thức plus nếu mà 1 trong 2 giá trị là string thì sẽ ép kiểu về string và nối chuỗi
=> đáp án sẽ là chuỗi "1ABC"
# bigO của binary search là bao nhieeu???

1.Best Case - O(1) i.e. constant.
2.Average Case - O(logn).
3.Worst Case - O(logn).

# phép tính logic and/or/xor/not với số nhị phân