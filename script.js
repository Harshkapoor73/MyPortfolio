
document.querySelector(".hamburger").addEventListener('click',function(){
   document.querySelector('.navvbar').classList.toggle('active')
})



// dark mode toggler 
let toggle = document.querySelector('.dark-mode');toggle.addEventListener('click',function(){
  toggle.classList.toggle('togglemode');
  document.body.classList.toggle('darkmode');

});


// scroll to top


