Array.prototype.reduce2 = function(callback,iniValue){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(iniValue,this[i],i,this);
            iniValue = result;
        }
    }
    return iniValue;
}
var courses = [
    {
    id: 1,
    name: 'Ruby',
    coin: 1 
    },
    {
    id: 2,
    name: 'Js',
    coin: 100,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    }
        
]
// console.log(courses)
courses.length=100
// console.error(courses.length)
var totalCoin = courses.map(function(item,index,array){
    console.log(index)
    return item.name
})
console.log(totalCoin)



