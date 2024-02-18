// // let html = document.documentElement;
// // let body = document.body;
// // let head = document.head;

// // console.log(html, body, head);

// // // for (let i = 0; i < document.body.childNodes.length; i++) {
// // //     console.log(document.body.childNodes[i]);
// // // }

// // // for(let item of document.body.childNodes) {
// // //     console.log(item);
// // // }

// // // let arr = Array.from(document.body.childNodes)

// // // arr.forEach(element => {
// // //     console.log(element)
// // // });

// // let first = html.firstChild;
// // let last = html.lastChild;

// // console.log(first);
// // console.log(last);

// // console.log(html.hasChildNodes());

// // // Only tags

// // for (child of document.body.children) {
// //   console.log(child);
// // }

// // // Важно помнить что childNodes покажывает и текстовые строки #text a children только HTML Элементы

// // // nextSibling and previousSibling. Следующий элемент и предыдуший

// // // console.log(document.head.nextSibling);
// // // console.log(document.body.previousSibling);
// // // console.log(document.body.parentNode);

// // // Selectors

// // // const heading = document.getElementById('heading');
// // // console.log(heading);

// // // const ul = document.querySelectorAll('ul > li');
// // // console.log(ul);

// // // for (val of ul) {
// // //     console.log(val);
// // // }

// // let documentHead = document.head;
// // let documentBody = document.body;
// // let documentHTML = document.documentElement;

// // console.log(documentHead, documentBody, documentHTML);

// // console.log(documentHead.nextSibling);
// // console.log(documentBody.previousSibling);

// // console.log(documentHead.nextElementSibling);
// // console.log(documentBody.previousElementSibling);

// // const ol = document.querySelectorAll("ol > li");
// // console.log(ol);

// // for (list of ol) {
// //   console.log(list);
// // }

// // ol.forEach((element) => {
// //   console.log(element);
// // });

// // console.log(documentBody.previousElementSibling);

// // console.log(documentBody.children);

// // for (item of documentBody.children) {
// //   console.log(item);
// // }

// // console.log(documentBody.constructor.name);

// // console.log(documentBody instanceof HTMLBodyElement);

// // // nodeName. tagName

// // let h1 = document.querySelector("#heading");

// // console.log(h1.innerHTML);

// // h1.innerHTML = "Измененный <span><u>заголовок</u></span>";
// // h1.innerHTML += " С <span><u><i>дoбавленным<u></i></span> текстом";

// // h1.outerHTML = "<h1> Измененный заголовок с h1 на h2</h1>";

// // // innerHTML и outerHTML Работает только если это тэг. А data. Мы можем менять комментарии и так далее

// // // console.log(documentBody.textContent);

// // h1.hidden = true;
// // setInterval(() => {
// //   h1.hidden = !h1.hidden;
// // }, 500);

// // const todoList = document.querySelector(".todo-list");
// // const input = document.querySelector(".input");
// // const btn = document.querySelector(".btn");

// // const num = document.querySelector(".timer");
// // const start = document.querySelector(".start");
// // const pause = document.querySelector(".pause");
// // const reset = document.querySelector(".reset");

// // let timerID;
// // let number = 0;
// // console.log(num, start, pause, reset);

// // start.addEventListener("click", function () {
// //   timerID = setInterval(() => {
// //     number = number + 1;
// //     num.innerHTML = number;
// //     start.classList.add("removeStart");
// //   }, 1000);
// // });

// // pause.addEventListener("click", function () {
// //   clearInterval(timerID);
// //   const newBtn = document.createElement("button");
// //   newBtn.setAttribute("role", "button");
// //   newBtn.innerHTML = "Continue";
// //   start.append(newBtn);
// // });

// // reset.addEventListener("click", function () {
// //   clearInterval(timerID);
// //   number = 0;
// //   num.innerHTML = 0;
// //   start.classList.remove("removeStart");
// //   start.innerHTML = "Start";
// // });

// // documentBody.myStyle = {
// //   color: "red;",
// //   fontSize: 20,
// // };

// // body.getFontSize = function () {
// //   return this.myStyle.fontSize;
// // };

// // console.log(body.getFontSize());

// // /*
// //   elem.hasAttribute(name) - Проверяет наличие атрибута;
// //   elem.getAttribute(name) - Получает значение атрибута;
// //   elem.setAttribute(name, value) - Устанавливает значение атрибута;
// //   elem.removeAttribute(name) - Удаляет атрибут;
// // */

// // let div = document.createElement("div");
// // div.className = "msg";
// // div.innerText = "Важная Информация";
// // document.body.append(div);

// // /*
// //   node.prepend - вставляет узлы или строки в начало;
// //   node.beofre - вставляет узлы или строки до node;
// //   node.after - вставляет узлы или строки после node;
// //   node.replace - заменяет node заданными узлами или строками.
// // */

// // let list12 = document.querySelector("ul");
// // list.after("after");
// // list.before("Before");
// // console.log(list12);

// // let list1 = document.createElement("li");
// // list1.innerText = "TEXT Example";
// // list12.prepend(list1);

// // let list2 = document.createElement("li");
// // list1.innerText = "Последний элемент";
// // list12.append(list2);

// // let li = document.querySelectorAll("li");

// // li.addEventListener("click", function () {
// //   alert("Miateles click are vort kchxem");
// // });

// /*
//   String
//   Number
//   Boolean
//   Function
//   Symbol
//   Null
//   Undefined
//   Object
// */

// // let q1 = prompt("Как вас зовут?");
// // let q2 = prompt(`${q1}. Ваша фамилиия.`);
// // let q3 = prompt("Сколько вам лет?");
// // let q4 = prompt("Где вы живете?");

// // let person = [
// //   `Имя: ${q1}`,
// //   `Фамилия: ${q2}`,
// //   `Возраст: ${q3}`,
// //   `Место Проживание: ${q4}`,
// // ];

// // console.log(person);

// // person.forEach((element) => {
// //   console.log(element);
// // });

// let textNode = document.createTextNode("Текстовый элемент");
// document.body.append(textNode);

// // let list = document.querySelector("li");
// // list.insertAdjacentHTML("beforebegin", "<p>Список планет<hr>");
// // list.insertAdjacentHTML("afterend", "<hr><p>Конец списка");
// // list.insertAdjacentHTML("afterbegin", "<li> Солнце");
// // list.insertAdjacentHTML("beforeend", "<li> Марс");

// /* let idRemove = setInterval(() => {
//   let li = document.querySelector("ul.list > li:last-child");
//   if (li === null) {
//     clearInterval(idRemove);
//     alert4("Список удален");
//   } else {
//     li.remove();
//   }
// }, 500); */

// let t = document.querySelector("table");
// let r = document.querySelector("table>tbody>tr:last-child");

// console.log(r);

// let row = r.cloneNode(true);
// row.firstChild.innerHTML = "11111";
// t.append(row);

// let fr = new DocumentFragment();
// let list = ["Mercury", "Venera", "Mars", "Pluto"];
// for (let p of list) {
//   let item = document.createElement("li");
//   item.innerHTML = p;
//   fr.append(item);
// }

// let ul = document.querySelector("ul");
// ul.append(fr);

// const msg = document.querySelector("div.msg");

// console.log(msg.className);

// let elem = msg.nextElementSibling;
// console.log(elem.style.marginTop);

// const heading = document.querySelector(".heading");
// let scroll = 0;

// // let interval = setInterval(() => {
// //   scroll = scroll + 5;
// //   heading.style.top = scroll + "px";
// //   // console.log(Rabotaet);
// // }, 50);

// // setTimeout(() => {
// //   clearInterval(interval)
// // }, 5000);

// let move = setInterval(() => {
//   if (!heading.style.display) {
//     heading.style.display = "none";
//   } else {
//     heading.style.display = "";
//   }
// }, 100);

// setTimeout(() => {
//   clearInterval(move);
// }, 4000);
// // getcoumputedstyle позазывает css селекторы

// btn2.addEventListener("click", function () {
//   clearInterval(interval);
//   // btn2.classList.add("btn2");
//   // btn.classList.remove("btn2");
//   num = 0;
// });

const input = document.querySelector("#todo-list-input");
const lists = document.querySelector("#list");
const addBtn = document.querySelector(".todo-list-btn");

addBtn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = input.value;
  lists.append(item);
  input.value = "";
  input.focus();

  // delete

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerHTML = "X";
  deleteBtn.classList.add("todo-btn");
  item.append(deleteBtn);

  // remove

  deleteBtn.onclick = () => {
    item.remove();
  };
});

const dark = document.querySelector(".dark-theme");
const light = document.querySelector(".light-theme");
const todoListBody = document.querySelector(".todo-list-body");
const heading = document.querySelector("#todo-list-heading");

dark.addEventListener("click", function () {
  dark.classList.add("darkOff");
  light.classList.add("lightOn");
  todoListBody.classList.add("bodyLight");
  input.classList.add("inputBackground");
  addBtn.classList.add("btnDark");
  heading.style.color = "black";
  lists.classList.add("listDark");
});

light.addEventListener("click", function () {
  dark.classList.remove("darkOff");
  light.classList.remove("lightOn");
  todoListBody.classList.remove("bodyLight");
  input.classList.remove("inputBackground");
  addBtn.classList.remove("btnDark");
  heading.style.color = "white";
  lists.classList.remove("listDark");
});
