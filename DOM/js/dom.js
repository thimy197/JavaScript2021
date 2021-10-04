/**
 * HTML DOM
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attr
 * 3. Text: innerText, textContent
 * 
 * Để sd Attribute và Text thì phải tìm đc Element chứa nó trước nha
 */

/**
 * 1. Element: lấy element
 */
// 1.1. ID
// getElementById() do Element đang là số ít, nên kq trả về ở đây chỉ có 1 element
var headingNote = document.getElementById('heading');

// Hiển thị nguyên HTML của note đó lun
console.log(headingNote);

// Để hiển thị thông tin toàn bộ note đó: tên, class, id, các atrr, event,... của note đó lun
// Bỏ vào Object/Arr để xem
console.log({
    element_heading: headingNote
});
console.log([headingNote]);

// 1.2 class
// getElementsByClassName() do Elements đang là số nhiều, nên kq trả về ở đây nhiều element
var headingNotes = document.getElementsByClassName('heading-class');
console.log(headingNotes);
// headingNotes đang trả về là HTMLCollection, có thể lặp các phần tử trong này để xử lý

// 1.3 Tag
var h1TagNotes = document.getElementsByTagName('h1');
console.log(h1TagNotes);

// 1.4 CSS selector
// sử dụng selector như css hay định nghĩa
// Trả về element thỏa đầu tiên -> 1 element đc trả vể
var headingSelectorNote = document.querySelector('.heading-class');
console.log(headingSelectorNote);

var childSelectorNote = document.querySelector('.box h1.heading-class:first-child');
console.log(childSelectorNote);

// Trả về all element thỏa đầu tiên -> tất cả element đc trả về
var allChildSelectorNotes = document.querySelectorAll('.box h1.heading-class');
console.log(allChildSelectorNotes);
console.log(allChildSelectorNotes[1]);

// 1.5 HTML collection

// Ngoài cách để lấy element như trên thì có những phương thức có thể truy cập 1 vài tag
console.log(document.forms);
console.log(document.forms[0]);
// đặt index để lấy thì ko đc tường minh -> ngta có thể chỉ định tên key,
// làm sao biết key gì thì xem trong document.forms, ngoài các element theo index, có thêm các element theo key(Id)
console.log(document.forms['form-2']);
console.log(document.forms.fieldForm); // có thể truy cập trực tiếp như này, nhưng là tên ko có "-", vì dấu "-" gây ra lỗi

// lấy những element có attribute là "name"
console.log(document.anchors);

// => tra thêm gg để biết thêm HTML collection

// Chú ý: Nếu trong Note có nhiều node con khác thì chúng ta có thể truy cập node con đấy theo cách tương tự
var parentNote = document.querySelector('.box-1');
console.log(parentNote);
// những note con trong note cha đã tìm đc
console.log(parentNote.querySelectorAll('li'));
// => bản chất document đang là note cha của mô hình này
// chính vì thế khi ta tìm đc 1 note thì note này chúng ta có thể mặt định là note cha khác

/**
 * 2. Attr
 */
// var headingAttr = document.getElementById('heading-attr');
var headingAttr = document.querySelector('#heading-attr');

// set/get giá trị cho attribute dựa theo attribute có sẵn 
headingAttr.title = 'title of heading-Attr';
// headingAttr.id = 'heading-attr-id';
// className để thêm class nha
headingAttr.className = 'heading-attr-class';
console.log(headingAttr.className);
headingAttr.classList.add('color--red');

// set/get giá trị theo cách khác, các attribute người dùng đặt (data-...)
// ...Attribute('<nameAttribute>');
headingAttr.setAttribute('title','title heading');
console.log(headingAttr.getAttribute('title'));

/**
 * 3. Text
 * innerText, textContent
 */

var headingText = document.querySelector('#heading-text');
// get content text
console.log(headingText.innerText);
console.log(headingText.textContent);

headingText.innerText = 'new Text Heading';
headingText.textContent = 'new Text Heading 1';
// kể cả có tag trong text thì vẫn chỉ là text chứ ko phải tag nha
headingText.innerText = "<i>text nghieng</i>";
console.log(headingText.innerText);

// 1. innerText vs textContent
var headingText1 = document.querySelector('#heading-text-1');
// CHỉ lấy text trong phạm vi của element, cả text của con
// chỉ lấy những gì nhìn thấy trên browser
console.log(headingText1.innerText);
// Chỉ lấy text trong phạm vi của element, cả text của con, giữ nguyên khoảng cách
// lấy toàn bộ text, bỏ qua các syntax của tag
console.log(headingText1.textContent);

// 2. innerText vs textContent
var headingText2 = document.querySelector('#heading-text-2');
//      khi thực hiện set text có xuống dòng --> browser hiển thị là <br>
// headingText2.innerText = `

// innerText

// `;

//      khi thực hiện set text có xuống dòng --> browser hiển thị là khoảng trắng -> sẽ thấy ko bị tách ra
headingText2.textContent= `

innerText

`;


/**
 * 1. Element: thêm element
 * innerHTML, outerHTML
 * 
 * Dựa vào thêm HTMl này ta có thể ứng dụng vào trường hợp là lăn chuột xuống dưới cùng 
 * thì nó sẽ load thêm thông tin cho trang web --> lazy load
 */

var boxElementNote = document.querySelector('.box-element--add');
console.log(boxElementNote);

// innerHTML
// setter data
boxElementNote.innerHTML = '<h1 title="title innerHTML">InnerText HTML</h1>';
console.log(boxElementNote.querySelector('h1').innerText);
// getter data: chỉ lấy con nằm trong Note, ko lấy chính note đó
console.log(boxElementNote.innerHTML);

// outerHTML: 
// getter: lấy cả chính node cha đó
console.log(boxElementNote.outerHTML);
// setter: sửa(ghi đè) chính note cha
boxElementNote.outerHTML = '<span>outer HTML</span>';
//      lúc này thẻ h1 trong boxElementNote ko còn tồn tại trong DOM nữa
console.log(boxElementNote); // vẫn còn, do đây là 1 biến đã lưu trong bộ nhớ
console.log(document.querySelector('.box-element--add')); // null -> do class box-element--add đã bị đè và biến mất trong DOM rồi



