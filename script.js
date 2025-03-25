var arr = [
   {
      team : "CSK",
      primary: "yellow",
      secondary:"darkblue"
   },
   {
      team : "KKR",
      primary: "purple",
      secondary:"yellow"

   },
   {
      team : "RCB",
      primary: "red",
      secondary:"black"

   },
   {
      team : "MI",
      primary: "blue",
      secondary:"white"

   },
   {
      team : "SRH",
      primary: "yellow",
      secondary:"red"

   },
   {
      team : "RR",
      primary: "blue",
      secondary:"yellow"

   },
   {
      team : "LSG",
      primary: "white",
      secondary:"blue"
   },
   {
      team : "DC",
      primary: "white",
      secondary:"blue"
   },
   {
      team : "GT",
      primary: "darkblue",
      secondary:"white"
   },
];

let btn = document.querySelector('button');
let h1 =  document.querySelector('h1');

btn.addEventListener('click', function(){
   let num=   Math.floor(Math.random()*arr.length);
   let winner = arr[num];
   h1.innerHTML = winner.team;
   h1.style.backgroundColor = winner.primary;
   h1.style.color = winner.secondary;
})