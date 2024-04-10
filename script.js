const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select")


for ( let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode
    newOption.value = countryList[currCode]
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected"
    } else if(select.name === "to" && currCode === "INR"){
       newOption.selected = "selected"    
    }
    select.append(newOption)
  }
  select.addEvenListener("change", (e) => {
    updateFlag(e.target)
  });
}



const updateFlag = (ele)  => {
  
} 