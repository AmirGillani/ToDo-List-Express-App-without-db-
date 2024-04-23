
    //check this module details by built-in module object by node js
    // console.log(module);
    // console.log(module.exports);

exports.getDate = function()
{
var today = new Date();

//format day 
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//update day value to english us format
day = today.toLocaleDateString("en-US", options);

return day;
}

//for calling multiple functions create new property in module.export object and assign function to it
// module.exports.getDay = getDay;

exports.getDay = function()
{
var today = new Date();

//format day 
var options = { weekday: 'long'};

//update day value to english us format
day = today.toLocaleDateString("en-US", options);

return day;
}
console.log(module.exports);