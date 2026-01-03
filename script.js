console.log("script.js");

let row1 = document.querySelectorAll(".row-direction, .column-direction, .row-reverse-direction, .column-reverse-direction");

let flexName = document.querySelectorAll(".flex-name");
let clsList = document.querySelector(".clsList");
let flexView = document.querySelector(".flex-view");

let r2 = document.querySelector(".row2");
let r3 = document.querySelector(".row3");
let r4 = document.querySelector(".row4");
let r5 = document.querySelector(".row5");

let flexWrapReminder = null;
let AlignContentReminder = null;
let JustifyContentReminder = null;
let AlignItemsReminder = null;
let AlignSelfReminder = null;

let row1FlowingName = document.querySelectorAll(".flowing-name1, .flowing-name2, .flowing-name3, .flowing-name4");

let settingOption = document.querySelectorAll(".s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9");
let itemCountBefore = 3;

let resetBtn = document.querySelector(".resetBtn");

let boxNum = 0;
let growNum = 0;
let shrinkNum = 0;
let basisNum = 0;
let boxNum2 = 0;

let switchOutline = document.querySelector(".switchOutline");
let switchBg = document.querySelector(".switchBg");
let dot = document.querySelector(".dot");
let flexViewSizeFix = false;

let unitList = document.querySelector(".unitList");
let unitListBool = false;

let allUnitList = document.querySelectorAll(".unitList li");
let unitValue = null;

let row6 = document.querySelector(".row6");
let flexNameSelf = document.querySelector(".flex-name-self");

let openButton = document.querySelector(".openGround");
let Slider = document.querySelectorAll(".leftSlider, .rightSlider");
let containers = document.querySelectorAll(".left-container, .right-container");
let title = document.querySelector(".text");
openButton.addEventListener("click", () => {
    title.style.display = "none";
    Slider[0].style.left = -50 + "%";
    Slider[1].style.right = -50 + "%";
    openButton.style.right = 20 + "%";
    containers[0].style.transform = "scale(1)";
    containers[1].style.transform = "scale(1)";    
});

function addFlexWrapReminder() {
    let row2 = document.querySelectorAll(".flex-nowrap, .flex-wrap");
    let row2FlowingName = document.querySelectorAll(".flowing-name5, .flowing-name6");
    row2.forEach((a, aIndex) => {
        if (flexWrapReminder === "nowrap" && aIndex == 0) {
            a.style.border = "4px solid #ffffff";
            row2FlowingName[0].innerText = "Remove flex-wrap: nowrap;";
        } else if (flexWrapReminder === "wrap" && aIndex == 1) {
            a.style.border = "4px solid #ffffff";
            row2FlowingName[1].innerText = "Remove flex-wrap: wrap;";
        }
    });
}

function addAlignContentReminder() {
    let row3 = document.querySelectorAll(".flex-center, .flex-start, .flex-end, .flex-space-around, .flex-space-between, .flex-stretch");
    let row3FlowingName = document.querySelectorAll(".flowing-name7, .flowing-name8, .flowing-name9, .flowing-name10, .flowing-name11, .flowing-name12");
    row3.forEach((a, aIndex) => {
        if (AlignContentReminder === "center" && aIndex == 0) {
            a.style.border = "4px solid #ffffff";
            row3FlowingName[0].innerText = "Remove align-content: center;";
        } else if (AlignContentReminder === "flex-start" && aIndex == 1) {
            a.style.border = "4px solid #ffffff";
            row3FlowingName[1].innerText = "Remove align-content: flex-start;";
        } else if (AlignContentReminder === "flex-end" && aIndex == 2) {
            a.style.border = "4px solid #ffffff";
            row3FlowingName[2].innerText = "Remove align-content: flex-end;";
        } else if (AlignContentReminder === "space-around" && aIndex == 3) {
            a.style.border = "4px solid #ffffff";    
            row3FlowingName[3].innerText = "Remove align-content: space-around;";    
        } else if (AlignContentReminder === "space-between" && aIndex == 4) {
            a.style.border = "4px solid #ffffff";
            row3FlowingName[4].innerText = "Remove align-content: space-between;";
        } else if (AlignContentReminder === "stretch" && aIndex == 5) {
            a.style.border = "4px solid #ffffff";
            row3FlowingName[5].innerText = "Remove align-content: stretch;";
        }
    });
}

function addJustifyContentReminder() {
    let row4 = document.querySelectorAll(".flex-center-2, .flex-start-2, .flex-end-2, .flex-space-between-2, .flex-space-around-2, .flex-space-evenly");
    let row4FlowingName = document.querySelectorAll(".flowing-name13, .flowing-name14, .flowing-name15, .flowing-name16, .flowing-name17, .flowing-name18");
    row4.forEach((a, aIndex) => {
        if (JustifyContentReminder === "center" && aIndex == 0) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[0].innerText = "Remove justify-content: center;";
        } else if (JustifyContentReminder === "flex-start" && aIndex == 1) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[1].innerText = "Remove justify-content: flex-start;";
        } else if (JustifyContentReminder === "flex-end" && aIndex == 2) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[2].innerText = "Remove justify-content: flex-end;";
        } else if (JustifyContentReminder === "space-between" && aIndex == 3) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[3].innerText = "Remove justify-content: space-between;";
        } else if (JustifyContentReminder === "space-around" && aIndex == 4) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[4].innerText = "Remove justify-content: space-around;";
        } else if (JustifyContentReminder === "space-evenly" && aIndex == 5) {
            a.style.border = "4px solid #ffffff";
            row4FlowingName[5].innerText = "Remove justify-content: space-evenly;";
        }
    });
}

function addAlignItemsReminder() {
    let row5 = document.querySelectorAll(".align-items-center, .align-items-flex-start, .align-items-flex-end, .align-items-stretch, .align-items-baseline");
    let row5FlowingName = document.querySelectorAll(".flowing-name19, .flowing-name20, .flowing-name21, .flowing-name22, .flowing-name23");
    row5.forEach((a, aIndex) => {
        if (AlignItemsReminder === "center" && aIndex == 0) {
            a.style.border = "4px solid #ffffff";
            row5FlowingName[0].innerText = "Remove align-items: center;";
        } else if (AlignItemsReminder === "flex-start" && aIndex == 1) {
            a.style.border = "4px solid #ffffff";
            row5FlowingName[1].innerText = "Remove align-items: flex-start;";
        } else if (AlignItemsReminder === "flex-end" && aIndex == 2) {
            a.style.border = "4px solid #ffffff";
            row5FlowingName[2].innerText = "Remove align-items: flex-end;";
        } else if (AlignItemsReminder === "stretch" && aIndex == 3) {
            a.style.border = "4px solid #ffffff";
            row5FlowingName[3].innerText = "Remove align-items: stretch;";
        } else if (AlignItemsReminder === "baseline" && aIndex == 4) {
            a.style.border = "4px solid #ffffff";
            row5FlowingName[4].innerText = "Remove align-items: baseline;";
        }
    });
}

function addAlignSelfReminder() {
    let row6 = document.querySelectorAll(".align-self-center, .align-self-start, .align-self-end, .align-self-stretch, .align-self-baseline");
    let row6FlowingName = document.querySelectorAll(".flowing-name24, .flowing-name25, .flowing-name26, .flowing-name27, .flowing-name28");
    row6.forEach((a, aIndex) => {
        if (AlignSelfReminder === "center" && aIndex == 0) {
            a.style.border = "4px solid #ffffff";
            row6FlowingName[0].innerText = "Remove align-self: center;";
        } else if (AlignSelfReminder === "start" && aIndex == 1) {
            a.style.border = "4px solid #ffffff";
            row6FlowingName[1].innerText = "Remove align-self: start;";
        } else if (AlignSelfReminder === "end" && aIndex == 2) {
            a.style.border = "4px solid #ffffff";
            row6FlowingName[2].innerText = "Remove align-self: end;";
        } else if (AlignSelfReminder === "stretch" && aIndex == 3) {
            a.style.border = "4px solid #ffffff";
            row6FlowingName[3].innerText = "Remove align-self: stretch;";
        } else if (AlignSelfReminder === "baseline" && aIndex == 4) {
            a.style.border = "4px solid #ffffff";
            row6FlowingName[4].innerText = "Remove align-self: baseline;";
        }
    });
}

function changeToRow() {
    r2.innerHTML = `<div class="r2a">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-nowrap.svg" class="svg-img flex-nowrap">
                        <p class="flowing-name5">Add flex-direction: nowrap;</p>
                    </div>
                    <div class="r2b">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-wrap.svg" class="svg-img flex-wrap">
                        <p class="flowing-name6">Add flex-direction: wrap;</p>
                    </div>`;
    r3.innerHTML = `<div class="r3a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center.svg" class="svg-img flex-center">
                        <p class="flowing-name7">Add align-content: center;</p>
                    </div>
                    <div class="r3b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start.svg" class="svg-img flex-start">
                        <p class="flowing-name8">Add align-content: flex-start;</p>
                    </div>
                    <div class="r3c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end.svg" class="svg-img flex-end">
                        <p class="flowing-name9">Add align-content: flex-end;</p>
                    </div>
                    <div class="r3d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around.svg" class="svg-img flex-space-around">
                        <p class="flowing-name10">Add align-content: space-around;</p>
                    </div>
                    <div class="r3e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between.svg" class="svg-img flex-space-between">
                        <p class="flowing-name11">Add align-content: space-between;</p>
                    </div>
                    <div class="r3f">
                        <img src="/Flexbox-Playground/svg/align-content/flex-stretch.svg" class="svg-img flex-stretch">
                        <p class="flowing-name12">Add align-content: stretch;</p>
                    </div>`;
    r4.innerHTML = `<div class="r4a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center-2.svg" class="svg-img flex-center-2">
                        <p class="flowing-name13">Add justify-content: center;</p>
                    </div>
                    <div class="r4b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start-2.svg" class="svg-img flex-start-2">
                        <p class="flowing-name14">Add justify-content: flex-start;</p>
                    </div>
                    <div class="r4c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end-2.svg" class="svg-img flex-end-2">
                        <p class="flowing-name15">Add justify-content: flex-end;</p>
                    </div>
                    <div class="r4d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between-2.svg" class="svg-img flex-space-between-2">
                        <p class="flowing-name16">Add justify-content: space-between;</p>
                    </div>
                    <div class="r4e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around-2.svg" class="svg-img flex-space-around-2">
                        <p class="flowing-name17">Add justify-content: space-around;</p>
                    </div>
                    <div class="r4f">
                        <img src="/Flexbox-Playground/svg/justify-content/flex-space-evenly.svg" class="svg-img flex-space-evenly">
                        <p class="flowing-name18">Add justify-content: space-evenly;</p>
                    </div>`;
    r5.innerHTML = `<div class="r5a">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-center.svg" class="svg-img align-items-center">
                        <p class="flowing-name19">Add align-items: center;</p>
                    </div>
                    <div class="r5b">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-start.svg" class="svg-img align-items-flex-start">
                        <p class="flowing-name20">Add align-items: flex-start;</p>
                    </div>
                    <div class="r5c">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-end.svg" class="svg-img align-items-flex-end">
                        <p class="flowing-name21">Add align-items: flex-end;</p>
                    </div>
                    <div class="r5d">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-stretch.svg" class="svg-img align-items-stretch">
                        <p class="flowing-name22">Add align-items: stretch;</p>
                    </div>
                    <div class="r5e">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-items-baseline">
                        <p class="flowing-name23">Add align-items: baseline;</p>
                    </div>`;
    row6.innerHTML =    `<div class="r6a">
                            <img src="/Flexbox-Playground/svg/align-self/self-center.svg" class="svg-img align-self-center">
                            <p class="flowing-name24">Add align-self: center;</p>
                        </div>
                        <div class="r6b">
                            <img src="/Flexbox-Playground/svg/align-self/self-start.svg" class="svg-img align-self-start">
                            <p class="flowing-name25">Add align-self: self-start;</p>
                        </div>
                        <div class="r6c">
                            <img src="/Flexbox-Playground/svg/align-self/self-end.svg" class="svg-img align-self-end">
                            <p class="flowing-name26">Add align-self: self-end;</p>
                        </div>
                        <div class="r6d">
                            <img src="/Flexbox-Playground/svg/align-self/self-stretch.svg" class="svg-img align-self-stretch">
                            <p class="flowing-name27">Add align-self: stretch;</p>
                        </div>
                        <div class="r6e">
                            <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-self-baseline">
                            <p class="flowing-name28">Add align-self: baseline;</p>
                        </div>`;
    addFlexWrapReminder();
    addAlignContentReminder();
    addJustifyContentReminder();
    addAlignItemsReminder();
    addAlignSelfReminder();
}

function changeToColumn() {
    r2.innerHTML = `<div class="r2a">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-nowrap-reverse.svg" class="svg-img flex-nowrap">
                        <p class="flowing-name5">Add flex-direction: nowrap;</p>
                    </div>
                    <div class="r2b">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-wrap-reverse.svg" class="svg-img flex-wrap">
                        <p class="flowing-name6">Add flex-direction: wrap;</p>
                    </div>`;
    r3.innerHTML = `<div class="r3a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center-2.svg" class="svg-img flex-center">
                        <p class="flowing-name7">Add align-content: center;</p>
                    </div>
                    <div class="r3b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start-2.svg" class="svg-img flex-start">
                        <p class="flowing-name8">Add align-content: flex-start;</p>
                    </div>
                    <div class="r3c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end-2.svg" class="svg-img flex-end">
                        <p class="flowing-name9">Add align-content: flex-end;</p>
                    </div>
                    <div class="r3d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around-2.svg" class="svg-img flex-space-around">
                        <p class="flowing-name10">Add align-content: space-around;</p>
                    </div>
                    <div class="r3e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between-2.svg" class="svg-img flex-space-between">
                        <p class="flowing-name11">Add align-content: space-between;</p>
                    </div>
                    <div class="r3f">
                        <img src="/Flexbox-Playground/svg/align-content/flex-stretch-2.svg" class="svg-img flex-stretch">
                        <p class="flowing-name12">Add align-content: stretch;</p>
                    </div>`;
    r4.innerHTML = `<div class="r4a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center.svg" class="svg-img flex-center-2">
                        <p class="flowing-name13">Add justify-content: center;</p>
                    </div>
                    <div class="r4b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start.svg" class="svg-img flex-start-2">
                        <p class="flowing-name14">Add justify-content: flex-start;</p>
                    </div>
                    <div class="r4c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end.svg" class="svg-img flex-end-2">
                        <p class="flowing-name15">Add justify-content: flex-end;</p>
                    </div>
                    <div class="r4d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between.svg" class="svg-img flex-space-between-2">
                        <p class="flowing-name16">Add justify-content: space-between;</p>
                    </div>
                    <div class="r4e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around.svg" class="svg-img flex-space-around-2">
                        <p class="flowing-name17">Add justify-content: space-around;</p>
                    </div>
                    <div class="r4f">
                        <img src="/Flexbox-Playground/svg/justify-content/flex-space-evenly-2.svg" class="svg-img flex-space-evenly">
                        <p class="flowing-name18">Add justify-content: space-evenly;</p>
                    </div>`;
    r5.innerHTML = `<div class="r5a">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-center-column.svg" class="svg-img align-items-center">
                        <p class="flowing-name19">Add align-items: center;</p>
                    </div>
                    <div class="r5b">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-start-column.svg" class="svg-img align-items-flex-start">
                        <p class="flowing-name20">Add align-items: flex-start;</p>
                    </div>
                    <div class="r5c">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-end-column.svg" class="svg-img align-items-flex-end">
                        <p class="flowing-name21">Add align-items: flex-end;</p>
                    </div>
                    <div class="r5d">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-stretch-column.svg" class="svg-img align-items-stretch">
                        <p class="flowing-name22">Add align-items: stretch;</p>
                    </div>
                    <div class="r5e">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-items-baseline">
                        <p class="flowing-name23">Add align-items: baseline;</p>
                    </div>`;
    row6.innerHTML =    `<div class="r6a">
                            <img src="/Flexbox-Playground/svg/align-self/self-center-column.svg" class="svg-img align-self-center">
                            <p class="flowing-name24">Add align-self: center;</p>
                        </div>
                        <div class="r6b">
                            <img src="/Flexbox-Playground/svg/align-self/self-flex-start.svg" class="svg-img align-self-start">
                            <p class="flowing-name25">Add align-self: self-start;</p>
                        </div>
                        <div class="r6c">
                            <img src="/Flexbox-Playground/svg/align-self/self-flex-end.svg" class="svg-img align-self-end">
                            <p class="flowing-name26">Add align-self: self-end;</p>
                        </div>
                        <div class="r6d">
                            <img src="/Flexbox-Playground/svg/align-self/self-stretch-column.svg" class="svg-img align-self-stretch">
                            <p class="flowing-name27">Add align-self: stretch;</p>
                        </div>
                        <div class="r6e">
                            <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-self-baseline">
                            <p class="flowing-name28">Add align-self: baseline;</p>
                        </div>`;
    addFlexWrapReminder();
    addAlignContentReminder();
    addJustifyContentReminder();
    addAlignItemsReminder();
    addAlignSelfReminder();
}

function changeToRowReverse() {
    r2.innerHTML = `<div class="r2a">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-nowrap.svg" class="svg-img flex-nowrap">
                        <p class="flowing-name5">Add flex-direction: nowrap;</p>
                    </div>
                    <div class="r2b">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-wrap.svg" class="svg-img flex-wrap">
                        <p class="flowing-name6">Add flex-direction: wrap;</p>
                    </div>`;
    r3.innerHTML = `<div class="r3a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center.svg" class="svg-img flex-center">
                        <p class="flowing-name7">Add align-content: center;</p>
                    </div>
                    <div class="r3b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start.svg" class="svg-img flex-start">
                        <p class="flowing-name8">Add align-content: flex-start;</p>
                    </div>
                    <div class="r3c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end.svg" class="svg-img flex-end">
                        <p class="flowing-name9">Add align-content: flex-end;</p>
                    </div>
                    <div class="r3d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around.svg" class="svg-img flex-space-around">
                        <p class="flowing-name10">Add align-content: space-around;</p>
                    </div>
                    <div class="r3e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between.svg" class="svg-img flex-space-between">
                        <p class="flowing-name11">Add align-content: space-between;</p>
                    </div>
                    <div class="r3f">
                        <img src="/Flexbox-Playground/svg/align-content/flex-stretch.svg" class="svg-img flex-stretch">
                        <p class="flowing-name12">Add align-content: stretch;</p>
                    </div>`;
    r4.innerHTML = `<div class="r4a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center-2.svg" class="svg-img flex-center-2">
                        <p class="flowing-name13">Add justify-content: center;</p>
                    </div>
                    <div class="r4b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end-2.svg" class="svg-img flex-start-2">
                        <p class="flowing-name14">Add justify-content: flex-start;</p>
                    </div>
                    <div class="r4c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start-2.svg" class="svg-img flex-end-2">
                        <p class="flowing-name15">Add justify-content: flex-end;</p>
                    </div>
                    <div class="r4d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between-2.svg" class="svg-img flex-space-between-2">
                        <p class="flowing-name16">Add justify-content: space-between;</p>
                    </div>
                    <div class="r4e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around-2.svg" class="svg-img flex-space-around-2">
                        <p class="flowing-name17">Add justify-content: space-around;</p>
                    </div>
                    <div class="r4f">
                        <img src="/Flexbox-Playground/svg/justify-content/flex-space-evenly.svg" class="svg-img flex-space-evenly">
                        <p class="flowing-name18">Add justify-content: space-evenly;</p>
                    </div>`;
    r5.innerHTML = `<div class="r5a">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-center.svg" class="svg-img align-items-center">
                        <p class="flowing-name19">Add align-items: center;</p>
                    </div>
                    <div class="r5b">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-start.svg" class="svg-img align-items-flex-start">
                        <p class="flowing-name20">Add align-items: flex-start;</p>
                    </div>
                    <div class="r5c">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-flex-end.svg" class="svg-img align-items-flex-end">
                        <p class="flowing-name21">Add align-items: flex-end;</p>
                    </div>
                    <div class="r5d">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-stretch.svg" class="svg-img align-items-stretch">
                        <p class="flowing-name22">Add align-items: stretch;</p>
                    </div>
                    <div class="r5e">
                    <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-items-baseline">
                        <p class="flowing-name23">Add align-items: baseline;</p>
                    </div>`;
    row6.innerHTML =    `<div class="r6a">
                            <img src="/Flexbox-Playground/svg/align-self/self-center.svg" class="svg-img align-self-center">
                            <p class="flowing-name24">Add align-self: center;</p>
                        </div>
                        <div class="r6b">
                            <img src="/Flexbox-Playground/svg/align-self/self-start.svg" class="svg-img align-self-start">
                            <p class="flowing-name25">Add align-self: self-start;</p>
                        </div>
                        <div class="r6c">
                            <img src="/Flexbox-Playground/svg/align-self/self-end.svg" class="svg-img align-self-end">
                            <p class="flowing-name26">Add align-self: self-end;</p>
                        </div>
                        <div class="r6d">
                            <img src="/Flexbox-Playground/svg/align-self/self-stretch.svg" class="svg-img align-self-stretch">
                            <p class="flowing-name27">Add align-self: stretch;</p>
                        </div>
                        <div class="r6e">
                            <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-self-baseline">
                            <p class="flowing-name28">Add align-self: baseline;</p>
                        </div>`;
    addFlexWrapReminder();
    addAlignContentReminder();
    addJustifyContentReminder();
    addAlignItemsReminder();
    addAlignSelfReminder();
}

function changeToColumnReverse() {
    r2.innerHTML = `<div class="r2a">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-nowrap-reverse.svg" class="svg-img flex-nowrap">
                        <p class="flowing-name5">Add flex-direction: nowrap;</p>
                    </div>
                    <div class="r2b">
                        <img src="/Flexbox-Playground/svg/flex-wrap/flex-wrap-reverse.svg" class="svg-img flex-wrap">
                        <div class="flowing-name6">Add flex-direction: wrap;</p>
                    </div>`;
    r3.innerHTML = `<div class="r3a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center-2.svg" class="svg-img flex-center">
                        <p class="flowing-name7">Add align-content: center;</p>
                    </div>
                    <div class="r3b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start-2.svg" class="svg-img flex-start">
                        <p class="flowing-name8">Add align-content: flex-start;</p>
                    </div>
                    <div class="r3c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end-2.svg" class="svg-img flex-end">
                        <p class="flowing-name9">Add align-content: flex-end;</p>
                    </div>
                    <div class="r3d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around-2.svg" class="svg-img flex-space-around">
                        <p class="flowing-name10">Add align-content: space-around;</p>
                    </div>
                    <div class="r3e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between-2.svg" class="svg-img flex-space-between">
                        <p class="flowing-name11">Add align-content: space-between;</p>
                    </div>
                    <div class="r3f">
                        <img src="/Flexbox-Playground/svg/align-content/flex-stretch-2.svg" class="svg-img flex-stretch">
                        <p class="flowing-name12">Add align-content: stretch;</p>
                    </div>`;
    r4.innerHTML = `<div class="r4a">
                        <img src="/Flexbox-Playground/svg/align-content/flex-center.svg" class="svg-img flex-center-2">
                        <p class="flowing-name13">Add justify-content: center;</p>
                    </div>
                    <div class="r4b">
                        <img src="/Flexbox-Playground/svg/align-content/flex-end.svg" class="svg-img flex-start-2">
                        <p class="flowing-name14">Add justify-content: flex-start;</p>
                    </div>
                    <div class="r4c">
                        <img src="/Flexbox-Playground/svg/align-content/flex-start.svg" class="svg-img flex-end-2">
                        <p class="flowing-name15">Add justify-content: flex-end;</p>
                    </div>
                    <div class="r4d">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-between.svg" class="svg-img flex-space-between-2">
                        <p class="flowing-name16">Add justify-content: space-between;</p>
                    </div>
                    <div class="r4e">
                        <img src="/Flexbox-Playground/svg/align-content/flex-space-around.svg" class="svg-img flex-space-around-2">
                        <p class="flowing-name17">Add justify-content: space-around;</p>
                    </div>
                    <div class="r4f">
                        <img src="/Flexbox-Playground/svg/justify-content/flex-space-evenly-2.svg" class="svg-img flex-space-evenly">
                        <p class="flowing-name18">Add justify-content: space-evenly;</p>
                    </div>`;
    r5.innerHTML = `<div class="r5a">
                        <img src="/Flexbox-Playground/svg/align-items/align-items-center-column.svg" class="svg-img align-items-center">
                        <p class="flowing-name19">Add align-items: center;</p>
                    </div>
                    <div class="r5b">
                        <img src="/Flexbox-Playground/svg/align-items/align-items-flex-start-column.svg" class="svg-img align-items-flex-start">
                        <p class="flowing-name20">Add align-items: flex-start;</p>
                    </div>
                    <div class="r5c">
                        <img src="/Flexbox-Playground/svg/align-items/align-items-flex-end-column.svg" class="svg-img align-items-flex-end">
                        <p class="flowing-name21">Add align-items: flex-end;</p>
                    </div>
                    <div class="r5d">
                        <img src="/Flexbox-Playground/svg/align-items/align-items-stretch-column.svg" class="svg-img align-items-stretch">
                        <p class="flowing-name22">Add align-items: stretch;</p>
                    </div>
                    <div class="r5e">
                        <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-items-baseline">
                        <p class="flowing-name23">Add align-items: baseline;</p>
                    </div>`;
    row6.innerHTML =    `<div class="r6a">
                            <img src="/Flexbox-Playground/svg/align-self/self-center-column.svg" class="svg-img align-self-center">
                            <p class="flowing-name24">Add align-self: center;</p>
                        </div>
                        <div class="r6b">
                            <img src="/Flexbox-Playground/svg/align-self/self-flex-start.svg" class="svg-img align-self-start">
                            <p class="flowing-name25">Add align-self: self-start;</p>
                        </div>
                        <div class="r6c">
                            <img src="/Flexbox-Playground/svg/align-self/self-flex-end.svg" class="svg-img align-self-end">
                            <p class="flowing-name26">Add align-self: self-end;</p>
                        </div>
                        <div class="r6d">
                            <img src="/Flexbox-Playground/svg/align-self/self-stretch-column.svg" class="svg-img align-self-stretch">
                            <p class="flowing-name27">Add align-self: stretch;</p>
                        </div>
                        <div class="r6e">
                            <img src="/Flexbox-Playground/svg/align-items/align-items-baseline.svg" class="svg-img align-self-baseline">
                            <p class="flowing-name28">Add align-self: baseline;</p>
                        </div>
                    `;
    addFlexWrapReminder();
    addAlignContentReminder();
    addJustifyContentReminder();
    addAlignItemsReminder();
    addAlignSelfReminder();
}

function updateRow6Listeners() {
    let row6 = document.querySelectorAll(".align-self-center, .align-self-start, .align-self-end, .align-self-stretch, .align-self-baseline");
    let row6FlowingName = document.querySelectorAll(".flowing-name24, .flowing-name25, .flowing-name26, .flowing-name27, .flowing-name28");
    row6.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                a.style.removeProperty("border");
                flexNameSelf.innerText = "align-self";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.removeProperty("align-self");
                AlignItemsReminder = "";
                if (row6FlowingName[0].innerText == "Remove align-self: center;") {
                    row6FlowingName[0].innerText = "Add align-self: center;";
                } else if (row6FlowingName[1].innerText == "Remove align-self: self-start;") {
                    row6FlowingName[1].innerText = "Add align-self: self-start;";
                } else if (row6FlowingName[2].innerText == "Remove align-self: self-end;") {
                    row6FlowingName[2].innerText = "Add align-self: self-end;";
                } else if (row6FlowingName[3].innerText == "Remove align-self: stretch;") {
                    row6FlowingName[3].innerText = "Add align-self: stretch;";
                } else if (row6FlowingName[4].innerText == "Remove align-self: baseline;") {
                    row6FlowingName[4].innerText = "Add align-self: baseline;";
                }
                return;
            }
            row6.forEach((b) => {
                b.style.removeProperty("border");
                row6FlowingName[0].innerText = "Add align-self: center;";
                row6FlowingName[1].innerText = "Add align-self: self-start;";
                row6FlowingName[2].innerText = "Add align-self: self-end;";
                row6FlowingName[3].innerText = "Add align-self: stretch;";
                row6FlowingName[4].innerText = "Add align-self: baseline;";
            });
            a.style.border = "4px solid #ffffff";
            if (aIndex == 0) {
                flexNameSelf.innerText = "align-self: center;";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.alignSelf = "center";
                AlignSelfReminder = "center";
                row6FlowingName[0].innerText = "Remove align-self: center;";
            } else if (aIndex == 1) {
                flexNameSelf.innerText = "align-self: self-start;";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.alignSelf = "start";
                AlignSelfReminder = "start";
                row6FlowingName[1].innerText = "Remove align-self: self-start;";
            } else if (aIndex == 2) {
                flexNameSelf.innerText = "align-self: self-end;";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.alignSelf = "end";
                AlignSelfReminder = "end";
                row6FlowingName[2].innerText = "Remove align-self: self-end;";
            } else if (aIndex == 3) {
                flexNameSelf.innerText = "align-self: stretch;";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.alignSelf = "stretch";
                AlignSelfReminder = "stretch";
                row6FlowingName[3].innerText = "Remove align-self: stretch;";
            } else if (aIndex == 4) {
                flexNameSelf.innerText = "align-self: baseline;";
                let box = document.querySelector(`.box${boxNum2}`);
                box.style.alignSelf = "baseline";
                AlignSelfReminder = "baseline";
                row6FlowingName[4].innerText = "Remove align-self: baseline;";
            }
        });
    });
}

function updateRow5Listeners() {
    let row5 = document.querySelectorAll(".align-items-center, .align-items-flex-start, .align-items-flex-end, .align-items-stretch, .align-items-baseline");
    let row5FlowingName = document.querySelectorAll(".flowing-name19, .flowing-name20, .flowing-name21, .flowing-name22, .flowing-name23");
    row5.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                a.style.removeProperty("border");
                flexName[4].innerText = "align-items: flex-start;";
                let line5 = document.querySelector("#line5");
                if (line5) {
                    clsList.removeChild(line5);
                }
                flexView.style.removeProperty("align-items");
                AlignItemsReminder = "";
                if (row5FlowingName[0].innerText == "Remove align-items: center;") {
                    row5FlowingName[0].innerText = "Add align-items: center;";
                } else if (row5FlowingName[1].innerText == "Remove align-items: flex-start;") {
                    row5FlowingName[1].innerText = "Add align-items: flex-start;";
                } else if (row5FlowingName[2].innerText == "Remove align-items: flex-end;") {
                    row5FlowingName[2].innerText = "Add align-items: flex-end;";
                } else if (row5FlowingName[3].innerText == "Remove align-items: stretch;") {
                    row5FlowingName[3].innerText = "Add align-items: stretch;";
                } else if (row5FlowingName[4].innerText == "Remove align-items: baseline;") {
                    row5FlowingName[4].innerText = "Add align-items: baseline;";
                }
                return;
            }
            row5.forEach((b) => {
                b.style.removeProperty("border");
                let line5 = document.querySelector("#line5");
                if (line5) {
                    clsList.removeChild(line5);
                }
                row5FlowingName[0].innerText = "Add align-items: center;";
                row5FlowingName[1].innerText = "Add align-items: flex-start;";
                row5FlowingName[2].innerText = "Add align-items: flex-end;";
                row5FlowingName[3].innerText = "Add align-items: stretch;";
                row5FlowingName[4].innerText = "Add align-items: baseline;";
            });
            a.style.border = "4px solid #ffffff";
            let newLI = document.createElement('li');
            newLI.id = "line5";
            if (aIndex == 0) {
                newLI.innerHTML = "align-items: center;";
                flexName[4].innerText = "align-items: center;";
                flexView.style.alignItems = "center";
                AlignItemsReminder = "center";
                row5FlowingName[0].innerText = "Remove align-items: center;";
            } else if (aIndex == 1) {
                newLI.innerHTML = "align-items: flex-start;";
                flexName[4].innerText = "align-items: flex-start;";
                flexView.style.alignItems = "flex-start";
                AlignItemsReminder = "flex-start";
                row5FlowingName[1].innerText = "Remove align-items: flex-start;";
            } else if (aIndex == 2) {
                newLI.innerHTML = "align-items: flex-end;";
                flexName[4].innerText = "align-items: flex-end;";
                flexView.style.alignItems = "flex-end";
                AlignItemsReminder = "flex-end";
                row5FlowingName[2].innerText = "Remove align-items: flex-end;";
            } else if (aIndex == 3) {
                newLI.innerHTML = "align-items: stretch;";
                flexName[4].innerText = "align-items: stretch;";
                flexView.style.alignItems = "stretch";
                AlignItemsReminder = "stretch";
                row5FlowingName[3].innerText = "Remove align-items: stretch;";
            } else if (aIndex == 4) {
                newLI.innerHTML = "align-items: baseline;";
                flexName[4].innerText = "align-items: baseline;";
                flexView.style.alignItems = "baseline";
                AlignItemsReminder = "baseline";
                row5FlowingName[4].innerText = "Remove align-items: baseline;";
            }
            clsList.appendChild(newLI);
        });
    });
}

function updateRow4Listeners() {
    let row4 = document.querySelectorAll(".flex-center-2, .flex-start-2, .flex-end-2,  .flex-space-between-2, .flex-space-around-2, .flex-space-evenly");
    let row4FlowingName = document.querySelectorAll(".flowing-name13, .flowing-name14, .flowing-name15, .flowing-name16, .flowing-name17, .flowing-name18");
    row4.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                a.style.removeProperty("border");
                flexName[3].innerText = "justify-content: flex-start;";
                let line4 = document.querySelector("#line4");
                if (line4) {
                    clsList.removeChild(line4);
                }
                flexView.style.removeProperty("justify-content");
                JustifyContentReminder = "";
                if (row4FlowingName[0].innerText == "Remove justify-content: center;") {
                    row4FlowingName[0].innerText = "Add justify-content: center;";
                } else if (row4FlowingName[1].innerText == "Remove justify-content: flex-start;") {
                    row4FlowingName[1].innerText = "Add justify-content: flex-start;";
                } else if (row4FlowingName[2].innerText == "Remove justify-content: flex-end;") {
                    row4FlowingName[2].innerText = "Add justify-content: flex-end;";
                } else if (row4FlowingName[3].innerText == "Remove justify-content: space-between;") {
                    row4FlowingName[3].innerText = "Add justify-content: space-between;";
                } else if (row4FlowingName[4].innerText == "Remove justify-content: space-around;") {
                    row4FlowingName[4].innerText = "Add justify-content: space-around;";
                } else if (row4FlowingName[5].innerText == "Remove justify-content: space-evenly;") {
                    row4FlowingName[5].innerText = "Add justify-content: space-evenly;";
                }
                return;
            }
            row4.forEach((b) => {
                b.style.removeProperty("border");
                let line4 = document.querySelector("#line4");
                if (line4) {
                    clsList.removeChild(line4);
                }
                row4FlowingName[0].innerText = "Add justify-content: center;";
                row4FlowingName[1].innerText = "Add justify-content: flex-start;";
                row4FlowingName[2].innerText = "Add justify-content: flex-end;";
                row4FlowingName[3].innerText = "Add justify-content: space-between;";
                row4FlowingName[4].innerText = "Add justify-content: space-around;";
                row4FlowingName[5].innerText = "Add justify-content: space-evenly;";
            });
            a.style.border = "4px solid #ffffff";
            let newLI = document.createElement('li');
            newLI.id = "line4";
            if (aIndex == 0) {
                newLI.innerHTML = "justify-content: center;";
                flexName[3].innerText = "justify-content: center;";
                flexView.style.justifyContent = "center";
                JustifyContentReminder = "center";
                row4FlowingName[0].innerText = "Remove justify-content: center;";
            } else if (aIndex == 1) {
                newLI.innerHTML = "justify-content: flex-start;";
                flexName[3].innerText = "justify-content: flex-start;";
                flexView.style.justifyContent = "flex-start";
                JustifyContentReminder = "flex-start";
                row4FlowingName[1].innerText = "Remove justify-content: flex-start;";
            } else if (aIndex == 2) {
                newLI.innerHTML = "justify-content: flex-end;";
                flexName[3].innerText = "justify-content: flex-end;";
                flexView.style.justifyContent = "flex-end";
                JustifyContentReminder = "flex-end";
                row4FlowingName[2].innerText = "Remove justify-content: flex-end;";
            } else if (aIndex == 3) {                
                newLI.innerHTML = "justify-content: space-between;";
                flexName[3].innerText = "justify-content: space-between;";
                flexView.style.justifyContent = "space-between";
                JustifyContentReminder = "space-between";
                row4FlowingName[3].innerText = "Remove justify-content: space-between;";
            } else if (aIndex == 4) {
               newLI.innerHTML = "justify-content: space-around;";
                flexName[3].innerText = "justify-content: space-around;";
                flexView.style.justifyContent = "space-around";
                JustifyContentReminder = "space-around";
                row4FlowingName[4].innerText = "Remove justify-content: space-around;";
            } else if (aIndex == 5) {
                newLI.innerHTML = "justify-content: space-evenly;";
                flexName[3].innerText = "justify-content: space-evenly;";
                flexView.style.justifyContent = "space-evenly";
                JustifyContentReminder = "space-evenly";
                row4FlowingName[5].innerText = "Remove justify-content: space-evenly;";
            }
            clsList.appendChild(newLI);
        });
    });
}

function updateRow3Listeners() {
    let row3 = document.querySelectorAll(".flex-center, .flex-start, .flex-end, .flex-space-around, .flex-space-between, .flex-stretch");
    let row3FlowingName = document.querySelectorAll(".flowing-name7, .flowing-name8, .flowing-name9, .flowing-name10, .flowing-name11, .flowing-name12");
    row3.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                a.style.removeProperty("border");
                flexName[2].innerText = "align-content: stretch;";
                let line3 = document.querySelector("#line3");
                if (line3) {
                    clsList.removeChild(line3);
                }
                flexView.style.removeProperty("align-content");
                AlignContentReminder = "";
                if (row3FlowingName[0].innerText == "Remove align-content: center;") {
                    row3FlowingName[0].innerText = "Add align-content: center;";
                } else if (row3FlowingName[1].innerText == "Remove align-content: flex-start;") {
                    row3FlowingName[1].innerText = "Add align-content: flex-start;";
                } else if (row3FlowingName[2].innerText == "Remove align-content: flex-end;") {
                    row3FlowingName[2].innerText = "Add align-content: flex-end;";
                } else if (row3FlowingName[3].innerText == "Remove align-content: space-around;") {
                    row3FlowingName[3].innerText = "Add align-content: space-around;";
                } else if (row3FlowingName[4].innerText == "Remove align-content: space-between;") {
                    row3FlowingName[4].innerText = "Add align-content: space-between;";
                } else if (row3FlowingName[5].innerText == "Remove align-content: stretch;") {
                    row3FlowingName[5].innerText = "Add align-content: stretch;";
                }
                return;
            }
            row3.forEach((b) => {
                b.style.removeProperty("border");
                let line3 = document.querySelector("#line3");
                if (line3) {
                    clsList.removeChild(line3);
                }
                row3FlowingName[0].innerText = "Add align-content: center;";
                row3FlowingName[1].innerText = "Add align-content: flex-start;";
                row3FlowingName[2].innerText = "Add align-content: flex-end;";
                row3FlowingName[3].innerText = "Add align-content: space-around;";
                row3FlowingName[4].innerText = "Add align-content: space-between;";
                row3FlowingName[5].innerText = "Add align-content: stretch;";
            });
            a.style.border = "4px solid #ffffff";
            let newLI = document.createElement('li');
            newLI.id = "line3";
            if (aIndex == 0) {
                newLI.innerHTML = "align-content: center;";
                flexName[2].innerText = "align-content: center;";
                flexView.style.alignContent = "center";
                AlignContentReminder = "center";
                row3FlowingName[0].innerText = "Remove align-content: center;";
            } else if (aIndex == 1) {
                newLI.innerHTML = "align-content: flex-start;";
                flexName[2].innerText = "align-content: flex-start;";
                flexView.style.alignContent = "flex-start";
                AlignContentReminder = "flex-start";
                row3FlowingName[1].innerText = "Remove align-content: flex-start;";
            } else if (aIndex == 2) {
                newLI.innerHTML = "align-content: flex-end;";
                flexName[2].innerText = "align-content: flex-end;";
                flexView.style.alignContent = "flex-end";
                AlignContentReminder = "flex-end";
                row3FlowingName[2].innerText = "Remove align-content: flex-end;";
            } else if (aIndex == 3) {
                newLI.innerHTML = "align-content: space-around;";
                flexName[2].innerText = "align-content: space-around;";
                flexView.style.alignContent = "space-around";
                AlignContentReminder = "space-around";
                row3FlowingName[3].innerText = "Remove align-content: space-around;";
            } else if (aIndex == 4) {
                newLI.innerHTML = "align-content: space-between;";
                flexName[2].innerText = "align-content: space-between;";
                flexView.style.alignContent = "space-between";
                AlignContentReminder = "space-between";
                row3FlowingName[4].innerText = "Remove align-content: space-between;";
            } else if (aIndex == 5) {
                newLI.innerHTML = "align-content: stretch;";
                flexName[2].innerText = "align-content: stretch;";
                flexView.style.alignContent = "stretch";
                AlignContentReminder = "stretch";
                row3FlowingName[5].innerText = "Remove align-content: stretch;";
            }
            clsList.appendChild(newLI);
        });
    });
}

function updateRow2Listeners() {
    let row2 = document.querySelectorAll(".flex-nowrap, .flex-wrap");
    let row2FlowingName = document.querySelectorAll(".flowing-name5, .flowing-name6");
    row2.forEach((a, aIndex) => {
        a.addEventListener("click", () => {
            if (a.style.border) {
                a.style.removeProperty("border");
                flexName[1].innerText = "flex-wrap: nowrap;";
                let line2 = document.querySelector("#line2");
                if (line2) {
                    clsList.removeChild(line2);
                }
                flexView.style.removeProperty("flex-wrap");
                flexWrapReminder = "";
                if (row2FlowingName[0].innerText == "Remove flex-wrap: nowrap;") {
                    row2FlowingName[0].innerText = "Add flex-wrap: nowrap;";
                } else if (row2FlowingName[1].innerText == "Remove flex-wrap: wrap;") {
                    row2FlowingName[1].innerText = "Add flex-wrap: wrap;";
                }
                return;
            }
            row2.forEach((b) => {
                b.style.removeProperty("border")
                let line2 = document.querySelector("#line2");
                if (line2) {
                    clsList.removeChild(line2);
                }
                row2FlowingName[0].innerText = "Add flex-wrap: nowrap;";
                row2FlowingName[1].innerText = "Add flex-wrap: wrap;";
            });
            a.style.border = "4px solid #ffffff";
            let newLI = document.createElement('li');
            newLI.id = "line2";
            if (aIndex == 0) {
                flexName[1].innerText = "flex-wrap: nowrap;";
                newLI.innerHTML = "flex-wrap: nowrap;";
                flexView.style.flexWrap = "nowrap";
                flexWrapReminder = "nowrap";
                row2FlowingName[0].innerText = "Remove flex-wrap: nowrap;";
            } else if (aIndex == 1) {
                flexName[1].innerText = "flex-wrap: wrap;";
                newLI.innerHTML = "flex-wrap: wrap;";
                flexView.style.flexWrap = "wrap";
                flexWrapReminder = "wrap";
                row2FlowingName[1].innerText = "Remove flex-wrap: wrap;";
            }
            clsList.appendChild(newLI);
        });
    });
}

row1.forEach((a, aIndex) => {
    a.addEventListener("click", () => {
        if (a.style.border) {
            a.style.removeProperty("border");
            flexName[0].innerText = "flex-direction: row;";
            let line1 = document.querySelector("#line1");
            clsList.removeChild(line1);
            flexView.style.removeProperty("flex-direction");
            changeToRow();
            updateRow2Listeners();
            updateRow3Listeners();
            updateRow4Listeners();
            updateRow5Listeners();
            updateRow6Listeners()
            if (row1FlowingName[0].innerText == "Remove flex-direction: row;") {
                row1FlowingName[0].innerText = "Add flex-direction: row;";
            } else if (row1FlowingName[1].innerText == "Remove flex-direction: column;") {
                row1FlowingName[1].innerText = "Add flex-direction: column;";
            } else if (row1FlowingName[2].innerText == "Remove flex-direction: row-reverse;") {
                row1FlowingName[2].innerText = "Add flex-direction: row-reverse;";
            } else if (row1FlowingName[3].innerText == "Remove flex-direction: column-reverse;") {
                row1FlowingName[3].innerText = "Add flex-direction: column-reverse;";
            }
            settingOption[3].value = 0;
            boxNum2 = 0;
            return;
        }
        row1.forEach((b) => {
            b.style.removeProperty("border");
            let line1 = document.querySelector("#line1");
            if (line1) {
                clsList.removeChild(line1);
            }
            row1FlowingName[0].innerText = "Add flex-direction: row;";
            row1FlowingName[1].innerText = "Add flex-direction: column;";
            row1FlowingName[2].innerText = "Add flex-direction: row-reverse;";
            row1FlowingName[3].innerText = "Add flex-direction: column-reverse;";
        });
        a.style.border = "4px solid #ffffff";
        let newLI = document.createElement('li');
        newLI.id = "line1";
        if (aIndex == 0) {
            flexName[0].innerText = "flex-direction: row;";
            newLI.innerHTML = "flex-direction: row;";
            flexView.style.flexDirection = "row";
            changeToRow();
            updateRow2Listeners();
            updateRow3Listeners();
            updateRow4Listeners();
            updateRow5Listeners();
            updateRow6Listeners()
            row1FlowingName[0].innerText = "Remove flex-direction: row;";
        } else if (aIndex == 1) {
            flexName[0].innerText = "flex-direction: column;";
            newLI.innerHTML = "flex-direction: column;";
            flexView.style.flexDirection = "column";
            changeToColumn();
            updateRow2Listeners();
            updateRow3Listeners();
            updateRow4Listeners();
            updateRow5Listeners();
            updateRow6Listeners()
            row1FlowingName[1].innerText = "Remove flex-direction: column;";
        } else if (aIndex == 2) {
            flexName[0].innerText = "flex-direction: row-reverse;";
            newLI.innerHTML = "flex-direction: row-reverse;";
            flexView.style.flexDirection = "row-reverse";
            changeToRowReverse();
            updateRow2Listeners();
            updateRow3Listeners();
            updateRow4Listeners();
            updateRow5Listeners();
            updateRow6Listeners()
            row1FlowingName[2].innerText = "Remove flex-direction: row-reverse;";
        } else if (aIndex == 3) {
            flexName[0].innerText = "flex-direction: column-reverse;";
            newLI.innerHTML = "flex-direction: column-reverse;";
            flexView.style.flexDirection = "column-reverse";
            changeToColumnReverse();
            updateRow2Listeners();
            updateRow3Listeners();
            updateRow4Listeners();
            updateRow5Listeners();
            updateRow6Listeners()
            row1FlowingName[3].innerText = "Remove flex-direction: column-reverse;";
        }
        clsList.appendChild(newLI);
    });
});

updateRow2Listeners();
updateRow3Listeners();
updateRow4Listeners();
updateRow5Listeners();
updateRow6Listeners()

resetBtn.addEventListener("click", () => {
    let now = settingOption[0].value;
    let itemCount = now;
    if (now < 3) {
        for (now; now != 3; now++) {
            let newItem = document.createElement("div");
            itemCount++;
            newItem.classList = `item box${itemCount}`;
            newItem.innerHTML = itemCount;
            flexView.appendChild(newItem);
        }
        let totalItem = document.querySelectorAll(".item");
        let len = totalItem.length;
        itemCountBefore = len;
    } else if (now > 3) {
        for (now; now != 3; now--) {
            let newItem = document.querySelectorAll(".item");
            let len = newItem.length - 1;
            flexView.removeChild(newItem[len]);
        }
        let totalItem = document.querySelectorAll(".item");
        let len = totalItem.length;
        itemCountBefore = len;
    }
    updateWidthAndHeight();
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        if (item.style.minWidth) {
            item.style.removeProperty("min-width");
        }
    });
    items.forEach((item) => {
        if (item.style.minHeight) {
            item.style.removeProperty("min-height");
        }
    });
    boxNum = 0;
    growNum = 0;
    shrinkNum = 0;
    basisNum = 0;
    unitValue = null;
    settingOption[4].value = 0;
    settingOption[5].value = 0;
    settingOption[6].value = 0;
    settingOption[7].value = 0;
    settingOption[8].innerText = "null";
    for (let i = 1; i < 4; i++) {
        let box = document.querySelector(`.box${i}`);
        if (box.style.flexGrow) {
            box.style.removeProperty("flex-grow");
        } else if (box.style.flexShrink) {
            box.style.removeProperty("flex-shrink");
        } else if (box.style.flexBasis) {
            box.style.removeProperty("flex-basis");
        }
    }
    switchBg.style.width = "32px";
    dot.style.left = "2px";
    dot.style.backgroundColor = "#ff0000";
    flexView.style.removeProperty("width");
    flexView.style.removeProperty("height");
    flexView.style.removeProperty("min-width");
    flexView.style.removeProperty("min-height");
    flexViewSizeFix = !flexViewSizeFix;
    unitList.style.opacity = 0;
    unitList.style.height = "0px";
    unitListBool = !unitListBool;
});

function updateWidthAndHeight() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        settingOption[1].addEventListener("change", () => {
            let Width = settingOption[1].value;
            item.style.minWidth = `${Width}px`;
        });
    });
    items.forEach((item) => {
        settingOption[2].addEventListener("change", () => {
            let Height = settingOption[2].value;
            item.style.minHeight = `${Height}px`; 
        });
    });
}

settingOption[0].addEventListener("change", () => {
    let itemCountAfter = settingOption[0].value;
    let itemCount = itemCountBefore;
    if (itemCountBefore < itemCountAfter) {
        for (itemCountBefore; itemCountBefore != itemCountAfter; itemCountBefore++) {
            let newItem = document.createElement("div");
            itemCount++;
            newItem.classList = `item box${itemCount}`;
            newItem.innerHTML = itemCount;
            flexView.appendChild(newItem);
        }
        updateWidthAndHeight();
    } else if (itemCountAfter < itemCountBefore) {
        for (itemCountBefore; itemCountBefore != itemCountAfter; itemCountBefore--) {
            let newItem = document.querySelectorAll(".item");
            let len = newItem.length - 1;
            flexView.removeChild(newItem[len]);
        }
        updateWidthAndHeight()
    }
});

updateWidthAndHeight();

function addFlex() {
    if (boxNum != 0 && growNum != 0) {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexGrow = growNum;
        }
        boxNum = 0;
        growNum = 0;
        settingOption[4].value = 0;
        settingOption[5].value = 0;
    } else if (boxNum != 0 && shrinkNum != 0) {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexShrink = shrinkNum;
        }
        boxNum = 0;
        shrinkNum = 0;
        settingOption[4].value = 0;
        settingOption[6].value = 0;
    } else if (boxNum != 0 && basisNum != 0 && unitValue != null && unitValue != "content" && unitValue != "auto" && unitValue != 0) {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexBasis = basisNum + unitValue;
        }
        boxNum = 0;
        basisNum = 0;
        unitValue = null;
        settingOption[4].value = 0;
        settingOption[7].value = 0;
        settingOption[8].innerText = "null";
    } else if (boxNum != 0 && unitValue != null && unitValue == "content") {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexBasis = unitValue;
        }
        boxNum = 0;
        basisNum = 0;
        unitValue = null;
        settingOption[4].value = 0;
        settingOption[7].value = 0;
        settingOption[8].innerText = "null";
    } else if (boxNum != 0 && unitValue != null && unitValue == "auto") {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexBasis = unitValue;
        }
        boxNum = 0;
        basisNum = 0;
        unitValue = null;
        settingOption[4].value = 0;
        settingOption[7].value = 0;
        settingOption[8].innerText = "null";
    } else if (boxNum != 0 && unitValue != null && unitValue == "0") {
        let box = document.querySelector(`.box${boxNum}`);
        if (box) {
            box.style.flexBasis = 0;
        }
        boxNum = 0;
        basisNum = 0;
        unitValue = null;
        settingOption[4].value = 0;
        settingOption[7].value = 0;
        settingOption[8].innerText = "null";
    }
}

settingOption[3].addEventListener("change", () => {
    boxNum2 = settingOption[3].value;
    if (boxNum2 && row6.style.display !== "flex") {
        flexNameSelf.style.display = "flex";
        row6.style.display = "flex";
    }
});

settingOption[4].addEventListener("change", () => { 
    boxNum = settingOption[4].value;
    addFlex();
});

settingOption[5].addEventListener("change", () => { 
    growNum = settingOption[5].value;
    addFlex();
});

settingOption[6].addEventListener("change", () => { 
    shrinkNum = settingOption[6].value;
    addFlex();
});

settingOption[7].addEventListener("change", () => { 
    basisNum = settingOption[7].value;
    addFlex();
});

switchOutline.addEventListener("click", () => {
    if (flexViewSizeFix) {
        switchBg.style.width = "32px";
        dot.style.left = "1.5px";
        dot.style.backgroundColor = "#ff0000";
        flexView.style.removeProperty("width");
        flexView.style.removeProperty("height");
        flexView.style.minWidth = "300px";
        flexView.style.minHeight = "300px";
    } else {
        switchBg.style.width = "64px";
        dot.style.left = "34px";
        dot.style.backgroundColor = "#06e906";
        flexView.style.removeProperty("min-width");
        flexView.style.removeProperty("min-height");
        flexView.style.width = "300px";
        flexView.style.height = "300px";
    }
    flexViewSizeFix = !flexViewSizeFix;
});

settingOption[8].addEventListener("click", () => {
    if (unitListBool) {
        unitList.style.opacity = 0;
        unitList.style.height = "0px";
    } else {
        unitList.style.opacity = 1;
        unitList.style.height = "211.84px";
    }
    unitListBool = !unitListBool;
});

allUnitList.forEach(li => {
    li.addEventListener("click", () => {
        settingOption[8].innerText = li.innerText;
        unitValue = li.innerText;
        unitList.style.opacity = 0;
        unitList.style.height = "0px";
        unitListBool = !unitListBool;
        addFlex();
    });
});