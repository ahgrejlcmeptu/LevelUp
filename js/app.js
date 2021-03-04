let reviews = new Swiper('.reviews-wrapper.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
})

let phoneList = document.querySelectorAll('input[name=phone]')
if (phoneList.length) {
  phoneList.forEach(item=>{
    item.addEventListener('input', function(){
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
      if(this.value.length > 11){
        this.value = this.value.slice(0, 11)
      }
    })
  })
}

let time = 86400;
setInterval(timeOut, 1000)

function timeOut() {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60) - (hours * 60);
  let seconds = time % 60;

  let formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(' : ');

  document.querySelector('.form-timer').textContent = formatted
  time--

}

const anchors = document.querySelectorAll('a[href^="#"]'),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const  blockID = item.getAttribute("href");
    
    let scrollTop = document.querySelector("" + blockID).offsetTop - 100;
    if( blockID === "#page-justice") scrollTop -= 20;
    window.scrollTo({
        top: scrollTop,
        behavior: "smooth"
    });
  });
});