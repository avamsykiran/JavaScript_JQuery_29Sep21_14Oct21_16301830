
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

export default {

    getAll : () => items,

    getById : id => items.find(i=> i.id==id),

    add : item => items.push(item),

    deleteById: id => { let index = items.findIndex(i=>i.id==id);items.splice(index,1);},

}