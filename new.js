var arrayOrg = [
    {title:"sample-project",lang:"JavaScript"},
    {title:"redux-biolerplate",lang:"JavaScript"},
    {title:"ckeditor-task",lang:"TypeScript"},
    {title:"task-hack",lang:"CSS"},
    {title:"intranet",lang:"CSS"},
]
let card = document.getElementById("cardValue")
let searchValue = document.getElementById("searchKey");

arrayTemp = arrayOrg.slice()

function filterArray(){
card.innerHTML = ""
   arrayTemp = arrayOrg.filter(ele=>{
        if(ele.title.includes(searchValue.value)|| ele.lang.toLowerCase().includes(searchValue.value.toLowerCase())){
            return ele
        }
    })
    printArray()
}

function printArray(){
    arrayTemp.map(element => {
card.innerHTML +=   
`<div>
<h2>${element.title}</h2>
<p>${element.lang}</p>
</div>
<hr> `
});
}
printArray()