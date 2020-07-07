let difficulty = document.querySelector("#difficulty-pref");
let native = document.querySelector("#native-language");
let suggestion = document.querySelector("#suggestion");
showTab(currentTab = 0);

function showTab(n){
    document.querySelectorAll(".tab").forEach((item) => {
        console.log(item)
        item.style.display = "none";
    })
    document.querySelectorAll(".tab")[n].style.display = "block";
}

document.querySelectorAll("#button-1").forEach(item => 
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentTab == 1) {recc();}
        showTab(++currentTab)
        }
    )
)

document.querySelector("#retry").addEventListener("click", (e) => {
    e.preventDefault();
    showTab(currentTab = 0);
})

//// Language data
languages = [
    {
        "name": "French",
        "en-difficulty": 1,
        "business": 4,
        "culture": 5
    }, {
        "name": "Italian",
        "en-difficulty": 1,
        "business": 1,
        "culture": 5
    }, {
        "name": "Spanish",
        "en-difficulty": 1,
        "business": 3,
        "culture": 3
    }, {
        "name": "Swedish",
        "en-difficulty": 1,
        "business": 1,
        "culture": 2
    }, {
        "name": "German",
        "en-difficulty": 2,
        "business": 5,
        "culture": 3
    },{
        "name": "Swahili",
        "en-difficulty": 3,
        "business": 2,
        "culture": 2
    },{
        "name": "Russian",
        "en-difficulty": 4,
        "business": 3,
        "culture": 4
    },{
        "name": "Hindi",
        "en-difficulty": 4,
        "business": 4,
        "culture": 3
    },{
        "name": "Hebrew",
        "en-difficulty": 4,
        "business": 2,
        "culture": 1
    },{
        "name": "Arabic",
        "en-difficulty": 5,
        "business": 4,
        "culture": 2
    },{
        "name": "Chinese",
        "en-difficulty": 5,
        "business": 5,
        "culture": 5
    },{
        "name": "Japanese",
        "en-difficulty": 5,
        "business": 3,
        "culture": 4
    }
]



function recc(){
    let suitability = [];
    let prefMotivation = $("input[type=radio][name=motivation]:checked")[0].id;
    document.querySelector("#suggestionList").innerHTML = "";

    languages.forEach(item => {
        if (parseInt(difficulty.value) >= item["en-difficulty"] && item[prefMotivation] > 4){
            suitability.push(item.name)}
    })
    suitability.forEach(item => {
        document.querySelector("#suggestionList").innerHTML += `<li>${item}</li>`
    })   
    console.log(suitability);
}