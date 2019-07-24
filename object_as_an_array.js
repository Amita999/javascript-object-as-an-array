function lookup(val)
{
var result = "";

var objFind =// array of object 
{
    "name":"Amita",//"" are important           
    "age":26,
    "sex":"Female",
    "education":"Ms"
};
result = objFind[val];//result of objFind[val](ie, the value of the key=val of array ObjFind) is stored in the variable
return result;
}
console.log("The returned value is "+lookup("name"));
//Check whether the object has its own property
 
var checkProperty =
{
    "cricket":"bat",
    "badminton":"racket",
    "chess":"keys"
};

function objHasProperty(val)
{
    if(checkProperty.hasOwnProperty(val))
    {
        var result =checkProperty[val];
        return result;
        //can also be defined return checkProperty[val];
    }
    else
    {
     return ("Not found");
    }

}
console.log ("The property is present in the Object "+objHasProperty("chess"));



