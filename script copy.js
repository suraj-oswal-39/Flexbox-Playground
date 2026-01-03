console.log("script.js");

let row1 = document.querySelectorAll(".row-direction, .column-direction, .row-reverse-direction, .column-reverse-direction");
let row2 = document.querySelectorAll(".flex-nowrap, .flex-wrap");
let row3 = document.querySelector(".row3");
let row4 = document.querySelector(".row4");
let row5 = document.querySelector(".row5");

let flexName = document.querySelectorAll(".flex-name");
let clsList = document.querySelector(".clsList");
let flexView = document.querySelector(".flex-view");

let r2 = document.querySelector(".row2");
let r3 = document.querySelector(".row3");
let r4 = document.querySelector(".row4");
let r5 = document.querySelector(".row5");


function changeToRow() {
    r2.innerHTML = `<img src="/svg/flex-wrap/flex-nowrap.svg" class="svg-img flex-nowrap">
                    <img src="/svg/flex-wrap/flex-wrap.svg" class="svg-img flex-wrap">`;
    r3.innerHTML = `<img src="/svg/align-content/flex-center.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between.svg" class="svg-img">
                    <img src="/svg/align-content/flex-stretch.svg" class="svg-img">`;
    r4.innerHTML = `<img src="/svg/align-content/flex-center-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around-2.svg" class="svg-img">
                    <img src="/svg/justify-content/flex-space-evenly.svg" class="svg-img">`;
    r5.innerHTML = `<img src="/svg/align-items/align-items-center.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-start.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-end.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-stretch.svg" class="svg-img ais">
                    <img src="/svg/align-items/align-items-baseline.svg" class="svg-img">`;
}

function changeToColumn() {
    r2.innerHTML = `<img src="/svg/flex-wrap/flex-nowrap-reverse.svg" class="svg-img flex-nowrap">
                    <img src="/svg/flex-wrap/flex-wrap-reverse.svg" class="svg-img flex-wrap">`;
    r3.innerHTML = `<img src="/svg/align-content/flex-center-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-stretch-2.svg" class="svg-img">`;
    r4.innerHTML = `<img src="/svg/align-content/flex-center.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around.svg" class="svg-img">
                    <img src="/svg/justify-content/flex-space-evenly-2.svg" class="svg-img">`;
    r5.innerHTML = `<img src="/svg/align-items/align-items-center-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-start-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-end-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-stretch-column.svg" class="svg-img ais">
                    <img src="/svg/align-items/align-items-baseline.svg" class="svg-img">`;
}

function changeToRowReverse() {
    r2.innerHTML = `<img src="/svg/flex-wrap/flex-nowrap.svg" class="svg-img flex-nowrap">
                    <img src="/svg/flex-wrap/flex-wrap.svg" class="svg-img flex-wrap">`;
    r3.innerHTML = `<img src="/svg/align-content/flex-center.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between.svg" class="svg-img">
                    <img src="/svg/align-content/flex-stretch.svg" class="svg-img">`;
    r4.innerHTML = `<img src="/svg/align-content/flex-center-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around-2.svg" class="svg-img">
                    <img src="/svg/justify-content/flex-space-evenly.svg" class="svg-img">`;
    r5.innerHTML = `<img src="/svg/align-items/align-items-center.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-start.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-end.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-stretch.svg" class="svg-img ais">
                    <img src="/svg/align-items/align-items-baseline.svg" class="svg-img">`;
}

function changeToColumnReverse() {
    r2.innerHTML = `<img src="/svg/flex-wrap/flex-nowrap-reverse.svg" class="svg-img flex-nowrap">
                    <img src="/svg/flex-wrap/flex-wrap-reverse.svg" class="svg-img flex-wrap">`;
    r3.innerHTML = `<img src="/svg/align-content/flex-center-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between-2.svg" class="svg-img">
                    <img src="/svg/align-content/flex-stretch-2.svg" class="svg-img">`;
    r4.innerHTML = `<img src="/svg/align-content/flex-center.svg" class="svg-img">
                    <img src="/svg/align-content/flex-end.svg" class="svg-img">
                    <img src="/svg/align-content/flex-start.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-between.svg" class="svg-img">
                    <img src="/svg/align-content/flex-space-around.svg" class="svg-img">
                    <img src="/svg/justify-content/flex-space-evenly-2.svg" class="svg-img">`;
    r5.innerHTML = `<img src="/svg/align-items/align-items-center-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-start-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-flex-end-column.svg" class="svg-img">
                    <img src="/svg/align-items/align-items-stretch-column.svg" class="svg-img ais">
                    <img src="/svg/align-items/align-items-baseline.svg" class="svg-img">`;
}

function updateRow2Listeners() {
    row2 = document.querySelectorAll(".flex-nowrap, .flex-wrap");
    row2.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                flexName[1].innerText = "flex-wrap: nowrap;";
                a.style.removeProperty("border");
                let line2 = document.querySelector("#line2");
                clsList.removeChild(line2);
                flexView.style.removeProperty("flex-wrap");
                return;
            }
            row2.forEach((b) => {
                b.style.removeProperty("border") 
                let line2 = document.querySelector("#line2");
                if (line2) {
                    clsList.removeChild(line2);
                }
            });
            a.style.border = "4px solid #ffffff";
            let newLI = document.createElement('li');
            newLI.id = "line2";
            if (aIndex == 0) {
                newLI.innerHTML = "flex-wrap: nowrap;";
                flexView.style.flexWrap = "nowrap";
                flexName[1].innerText = "flex-wrap: nowrap;";
            } else {
                newLI.innerHTML = "flex-wrap: wrap;";
                flexView.style.flexWrap = "wrap";
                flexName[1].innerText = "flex-wrap: wrap;";
            }
            clsList.appendChild(newLI);
        });
    });
}
row1.forEach((a, aIndex) => {
    a.addEventListener("click", () => {
        if (a.style.border) {
            flexName[0].innerText = "flex-direction: row;";
            a.style.removeProperty("border");
            let line1 = document.querySelector("#line1");
            clsList.removeChild(line1);
            let line2 = document.querySelector("#line2");
            if (line2) {
                clsList.removeChild(line2);                
            }
            flexView.style.removeProperty("flex-direction");
            changeToRow();
            updateRow2Listeners();
            return;
        }
        row1.forEach((b) => {
            b.style.removeProperty("border");
            let line1 = document.querySelector("#line1");
            if (line1) {
                clsList.removeChild(line1);
            }
        });
        a.style.border = "4px solid #ffffff";
        let newLI = document.createElement('li');
        newLI.id = "line1";
        if (aIndex == 0) {
            newLI.innerHTML = "flex-direction: row;";
            flexView.style.flexDirection = "row";
            flexName[0].innerText = "flex-direction: row;";
            changeToRow();
            updateRow2Listeners();
        } else if (aIndex == 1) {
            newLI.innerHTML = "flex-direction: column;";
            flexView.style.flexDirection = "column";
            flexName[0].innerText = "flex-direction: column;";
            changeToColumn();
            updateRow2Listeners();
        } else if (aIndex == 2) {
            newLI.innerHTML = "flex-direction: row-reverse;";
            flexView.style.flexDirection = "row-reverse";
            flexName[0].innerText = "flex-direction: row-reverse;";
            changeToRowReverse();
            updateRow2Listeners();
        } else if (aIndex == 3) {
            newLI.innerHTML = "flex-direction: column-reverse;";
            flexView.style.flexDirection = "column-reverse";
            flexName[0].innerText = "flex-direction: column-reverse;";
            changeToColumnReverse();
            updateRow2Listeners();
        }
        clsList.appendChild(newLI);
    });
});

updateRow2Listeners();
// row2.forEach((a, aIndex) => {
//     a.addEventListener("click", () => {
//         if (a.style.border) {
//             flexName[1].innerText = "flex-wrap: nowrap;";
//             a.style.removeProperty("border");
//             let line2 = document.querySelector("#line2");
//             clsList.removeChild(line2);
//             flexView.style.removeProperty("flex-wrap");
//             return;
//         }
//         row2.forEach((b) => {
//             b.style.removeProperty("border");
//             let line2 = document.querySelector("#line2");
//             if (line2) {
//                 clsList.removeChild(line2);
//             }
//         });
//         a.style.border = "4px solid #ffffff";
//         let newLI = document.createElement('li');
//         newLI.id = "line2";
//         if (aIndex == 0) {
//             newLI.innerHTML = "flex-wrap: nowrap;";
//             flexView.style.flexWrap = "nowrap";
//             flexName[1].innerText = "flex-wrap: nowrap;";
//         } else if (aIndex == 1) {
//             newLI.innerHTML = "flex-wrap: wrap;";
//             flexView.style.flexWrap = "wrap";
//             flexName[1].innerText = "flex-wrap: wrap;";
//         }
//         clsList.appendChild(newLI);
//     });
// });