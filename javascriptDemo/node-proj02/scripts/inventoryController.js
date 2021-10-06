import invService from './inventoryService.js';

const displayItems = () => {
    console.log("Page load invoked");

    let dataTable = document.querySelector("#content>table");

    let dataTableBody = document.querySelector("#content>table>tbody");
    if(dataTableBody){
        dataTable.removeChild(dataTableBody);
    }

    dataTableBody = document.createElement("tbody");

    let items = invService.getAll();

    items.forEach(item => {
        let tr = document.createElement("tr");
        let tds = [];
        for(let i=0;i<4;i++){
            tds.push(document.createElement("td"));
            tr.appendChild(tds[i]);
        }

        tds[0].textContent = item.id;
        tds[1].textContent = item.name;
        tds[2].textContent = item.unit;
        tds[3].textContent = item.rate;

        dataTableBody.appendChild(tr);
    });

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.textContent=`Total ${items.length} Item(s) in stock`;
    td.colSpan=4;

    tr.appendChild(td);
    dataTableBody.appendChild(tr);

    dataTable.appendChild(dataTableBody);

}

const addItem = () => {

    let tbId = document.querySelector("#tbItemId");
    let tbName = document.querySelector("#tbItemName");
    let tbUnit = document.querySelector("#tbItemUnit");
    let tbRate = document.querySelector("#tbItemRate");

    let item ={
        id:parseInt(tbId.value),
        name:tbName.value,
        unit:tbUnit.value,
        rate:parseFloat(tbRate.value)
    };

    if(items.findIndex(i => i.id===item.id)>-1){
        alert("The item with that id already available");
        return;
    }

    invService.add(item);

    displayItems();

    tbId.value="";
    tbName.value="";
    tbUnit.value="";
    tbRate.value="";
}

export default { displayItems, addItem }