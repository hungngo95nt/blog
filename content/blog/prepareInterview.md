---
path: interview/html-css
date: 2020-05-21
title: Interview 1
description: "#html #css"
---
# HTML/HTML5
-- html5 có thêm 2 tag Video và Audio
-- html5 hỗ trợ SGV, canvas
-- html5 sử dụng web SQL databases, application cache để lưu dữ liệu tạm
-- html5 hỗ trợ hoàn toàn cho js chạy nền nhờ vào JS web worker API của html5
-- html5 cải tiến với các tag mới làm cho code trông rõ ràng tường minh hơn vd như
---- <div id="header">header</div> 
---- Trờ thành <header>header</header>
-- local storage là một nâng cấp cực lớn của HTML5. Trước đây nếu muốn lưu bất kì thông tin nào họ phải tạo cookie

# CSS/CSS3
-- tính năng mới của CSS3:
---- animation: Xác định chuyển động của một thành phần
---- border-radius: định dạng bo góc viền
---- box-shadow: định dạng bóng đổ
---- column: chia nội dung page thành từng cột.
---- @font-face: Định dạng các dạng font chữ khác nhau theo các dạng font riêng.
---- @keyframes: Dùng để điều khiển diễn biến một hoạt động thành phần, dùng chung với thuộc tính animation.
-- khác nhau giữa <span> và <div>
---- thẻ <span>: với display:inline
---- thẻ <div>: với display:block
-- margin là căn lề ngoài, padding là căn lề trong
-- block sẽ làm thẻ đó có space trước và sau nó, và space đó sẽ chiếm hết các width có sẵn. Inline thì chỉ sài đủ width yêu cầu.
-- relative/ absolute/ fixed/ static
---- relative: định vị tuyệt đối(vị trí bao ngoài), các thẻ HTML bên trong coi thẻ này là cha.
---- absolute: định vị tương đối theo thẻ relative bọc bên ngoài, nếu trường hợp không có khai báo relative bên ngoài thì sẽ định vị theo thẻ body.
---- fixed: định dạng tương đối với cửa sổ browser(kéo scroll tới đâu thì tag sẽ theo tới đó).
---- static: dạng mặc định