// document.getElementsByClassName("menu").onclick = function () {
//     console.log(1);
//     document.getElementById(this).classList.toggle('open')
// }


// Toggle the open class on the element when it is clicked
// let menu = document.querySelector(".menu");
// menu.addEventListener('click', function () {
//     for (let i = 0; i < menu.length; i++) {
//         console.log(1);
//         menu.classList.toggle('open');
//     }
// });


// クリックしたらopenのクラスがつく
// let menu = document.querySelector(".menu");
// menu.addEventListener('click', function () {
//     menu.classList.toggle('open');
// });


// セレクタ指定によりquerySelector()だけでさまざまな属性のHTML要素を取得できる
// querySelector()は最初に合致した要素だけを取得する
// querySelectorAll()は合致した要素をすべて取得できる



// Toggle the open class on the element when it is clicked
// const menu = document.querySelector(".menu");
// const menu = document.querySelectorAll('.menu');
// const menuArr = Array.prototype.slice.call(menu);


// menuArr.forEach((menu) => {
//     // Triggerを全て取得
//     const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
//     // TriggerをArrayに変換(IE対策)
//     const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);

//     accordionTriggersArr.forEach((trigger) => {
//         // Triggerにクリックイベントを付与
//         trigger.addEventListener("click", () => {
//             // '.is-active'クラスを付与or削除
//             trigger.classList.toggle("is-active");
//             // 開閉させる要素を取得
//             const content = trigger.querySelector(".accordion__content");
//             // 要素を展開or閉じる
//             slideToggle(content);
//         });
//     });
// });

// menu.addEventListener('click', function () {
//     menu.classList.toggle('open');
// });



// let menu = document.querySelector(".menu");
// let menuAll = document.querySelectorAll(".menu");

// menu.addEventListener('click', function () {
//     for (let i = 0; i < menuAll.length; i++) {
//         console.log(1);
//         this.classList.toggle('open');
//     }
// });

// let menu = document.querySelector(".menu");




//全てのクラスをとってくる
let menuAll = document.querySelectorAll(".menu");
// for で取得 
for (var i = 0; i < menuAll.length; i++) {
    // 全てのmenuで何個目かを取得
    menuAll[i].addEventListener('click', function () {
        // thisはmenuAll[i]にあたる
        this.classList.toggle('open');
    });
};