var dropDownElements = document.querySelectorAll('.drop-down__item');
var feedBackCardElements = document.querySelectorAll('.feedback__card');

$('.slider').slick({
   dots: true,
   infinite: true,

   speed: 300,
   slidesToShow: 1,

   adaptiveHeight: true,
   mobileFirst: true,
   responsive: [
      {
         breakpoint: 1023,
         settings: "unslick"
      }
   ]
});

function dropDownClick () {
   function classModify (e) {
      var activeEl = document.querySelector('.drop-down__item.active');
      var currentEl = e.currentTarget;
      if (activeEl) {
         activeEl.classList.remove('active');
      }

      if (activeEl !== currentEl) {
         currentEl.classList.add("active")
      }
      return false
   }

   for (var i = 0; i < dropDownElements.length; i++) {
      dropDownElements[i].addEventListener('click', classModify)
   }
}
dropDownClick()

function feedbackItemClick () {
   function classModify (e) {
      var activeEl = document.querySelector('.feedback__card.active');
      var currentEl = e.currentTarget
      
      if (currentEl.className.split(" ")[1] === 'reverse') {
         activeEl.classList.add('reverse');
         currentEl.classList.remove('reverse')
      }
      activeEl.classList.remove('active');
      currentEl.classList.add("active")
      return false
   }
   for (var i = 0; i < feedBackCardElements.length; i++) {
      feedBackCardElements[i].addEventListener('click', classModify)
   }
}
feedbackItemClick()