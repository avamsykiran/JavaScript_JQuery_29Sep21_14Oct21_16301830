console.log("This is inventory mangement system module");

let items = [
    {id:1,name:'A4 Sheets',unit:'Bundle',rate:560},
    {id:2,name:'Ink Jet Catridge Color',unit:'Piece',rate:1560},
    {id:3,name:'Laser Catridge BW',unit:'Piece',rate:860},
    {id:4,name:'Laser Catridge Color',unit:'Piece',rate:1560},
    {id:5,name:'Board Pins',unit:'Pack Of 50',rate:160},
    {id:6,name:'Staples',unit:'Box of 1000',rate:60},
    {id:7,name:'Pen Holder',unit:'Piece',rate:360},
    {id:8,name:'Pen',unit:'Pack Of 10',rate:2060},
    {id:9,name:'Writing Pad',unit:'Piece',rate:340}
];

displayItems = () => {
    console.log("Page load invoked");

    let dataTable = document.querySelector("#content>table");

    let dataTableBody = document.querySelector("#content>table>tbody");
    if(dataTableBody){
        dataTable.removeChild(dataTableBody);
    }

    dataTableBody = document.createElement("tbody");

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