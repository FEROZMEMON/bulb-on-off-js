const div = document.querySelector("div")



div.addEventListener("mouseout" , function() {
    div.innerHTML = `  <h1>" Bulb Off "</h1><hr>
    <img src="assets/bulb off.jpg" alt="" width="400px" height="500px">`
    
    
})


div.addEventListener("mouseover" , function() {
    div.innerHTML = `  <h1>" Bulb On "</h1><hr>
    <img src="assets/bulb on.jpg" alt="" width="400px" height="500px">`


})

