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

function recc(){
    console.log("run")
    if (native.value.toLowerCase() == "english" && parseInt(difficulty.value) < 3){
        suggestion.innerText = `You should study Spanish!`
    } else if (native.value.toLowerCase() == "english" && parseInt(difficulty.value) >= 3){
        suggestion.innerText = `You should study Chinese!`
    } else if (native.value.toLowerCase() == "spanish" && parseInt(difficulty.value) < 3){
        suggestion.innerText = `Hola! You should study French!`
    } else if (native.value.toLowerCase() == "spanish" && parseInt(difficulty.value) >= 3) {
        suggestion.innerText = `Hola! You should study Arabic!`
    }
}

document.querySelector("#retry").addEventListener("click", (e) => {
    e.preventDefault();
    showTab(currentTab = 0);
})