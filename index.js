let myLeads = []
let saveleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
let dlt = document.getElementById("dlt-btn")


// localStorage.setItem("myname","ujjawal tyagi")
// name=localStorage.getItem("myname")
// console.log(name)
// localStorage.clear()


v = JSON.parse(localStorage.getItem("myLeads"))
if (v) {
    saveleads = v
    render(saveleads)
}



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

})




tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        saveleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(saveleads))
        render(saveleads)
    })
})



// tabBtn.addEventListener("click", function(){
//     // Save the url instead of logging it out
//     saveleads.push(inputEl.value)
//     localStorage.setItem("myLeads",JSON.stringify(saveleads))
//     // console.log(tabs[0].url)
// })


function render(leads) 
{
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    //     v=JSON.parse((localStorage.getItem("myLeads")))
    // console.log(v)
}


dlt.addEventListener("click", function ()
 {
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
)



// myLeads=JSON.parse(myLeads)
// myLeads.push("www.facebook.com")
// console.log(typeof myLeads)
// console.log(myLeads)