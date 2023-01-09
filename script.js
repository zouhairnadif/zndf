const observer = new IntersectionObserver ((entries) => {
     entries.forEach( (entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });
    const hiddenElements = document.querySelectorAll('.hidden' );
    hiddenElements.forEach((el) => observer. observe (el));
  
 function mode(){
     document.getElementById("body").style.backgroundColor = "white";
     document.getElementById("txt1").style.color = "black";
     document.getElementById("logo").style.color = "black";
     document.getElementById("a1").style.color = "black";


 }