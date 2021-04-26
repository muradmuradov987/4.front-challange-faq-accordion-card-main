var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      toggleAccordionActive(this)
  });
}

function toggleAccordionActive(accordion){
    console.log(accordion.classList)
    accordion.classList.toggle("active")
    console.log(accordion.classList)

    for (i = 0; i < acc.length; i++){
        
        var current = acc[i]
        if (current != accordion){
            current.classList.remove("active")
        }
    }
}


