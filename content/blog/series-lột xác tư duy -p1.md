---
title: "[Series: Lột Xác Tư Duy] Phần 1: OOP & SOLID - Đừng Viết Code Procedural Trong Vỏ Bọc Class!"
date: 2026-10-11
author: Hùng Ngô
tags: [.NET, OOP, SOLID, System Design, Architecture, C#]
description: "Mổ xẻ OOP và SOLID dưới lăng kính thực chiến của một .NET Engineer: từ Anemic Domain Model đến những 'vết sẹo' tỷ đô do lạm dụng Strategy Pattern."
---

# [Series: Lột Xác Tư Duy] Phần 1: OOP & SOLID - Đừng Viết Code Procedural Trong Vỏ Bọc Class!

Chào anh em! Nếu bạn đang chuẩn bị cho một buổi phỏng vấn vị trí Senior .NET, chắc chắn bạn sẽ gặp câu hỏi: *"Em hãy trình bày 4 tính chất của OOP và 5 nguyên tắc SOLID"*.

Phần lớn chúng ta sẽ trả lời trơn tru: Đóng gói, Kế thừa, Đa hình, Trừu tượng... và đọc vanh vách SRP, OCP, LSP, ISP, DIP. Nhưng, thảm họa thực sự diễn ra ở vòng Technical Review. Code của ứng viên đôi khi vẫn là code "Procedural" (thủ tục) từ thập niên 90, chỉ khác là nó được nhét vào trong các `class`.

Hôm nay, chúng ta sẽ "mổ xẻ" OOP và SOLID dưới lăng kính thực chiến của một Engineer, không phải mớ lý thuyết sách vở.

---

## 1. Sự Thật Cay Đắng: Bạn Có Đang Viết "Anemic Domain Model"?

Hãy nhìn vào đoạn code C# quen thuộc này. Chắc chắn bạn đã thấy nó (hoặc viết nó) hàng ngàn lần ở các project N-Tier:

```csharp
// Data Structure - KHÔNG PHẢI LÀ OBJECT
public class Order 
{
    public int Id { get; set; }
    public decimal TotalAmount { get; set; }
    public int StatusId { get; set; }
}

// Transaction Script - KHÔNG PHẢI LÀ OOP
public class OrderService 
{
    public void ProcessOrder(Order order) 
    {
        if (order.StatusId == 1) // 1 = Pending
        {
            // Tính toán giá trị...
            order.TotalAmount = CalculateTotal(order);
            order.StatusId = 2; // 2 = Processing
        }
        else if (order.StatusId == 2)
        {
            // Do something else...
        }
        // ... Cả tỷ cái if/else khác
    }
}