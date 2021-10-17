
function myCallback()
{
 // Your code here
 // Parameters are purely optional.
 let d =new Date();
 let time = d.toLocaleDateString();
 console.log(time);
};
(function main() {
    setInterval(myCallback, [1000]);
}());