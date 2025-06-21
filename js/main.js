AOS.init({
  offset: 120,
  delay: 100,
  duration: 400,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',
});

const iconNav = document.getElementById('iconNavbar');

const iconNavToggle = document.querySelector('.navbar-toggler');

iconNavToggle.addEventListener('click', () => {
  if (iconNav.classList.contains('fa-bars')) {
    iconNav.classList.remove('fa-bars');
    iconNav.classList.add('fa-xmark');
  } else {
    iconNav.classList.add('fa-bars');
    iconNav.classList.remove('fa-xmark');
  }
});

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > 100) {
    document.querySelector('.navbar').classList.add('shadow');
    document.querySelector('.navbar').classList.add('opacity-75');
    document.getElementById('backToTop').classList.remove('d-none');
  } else {
    document.querySelector('.navbar').classList.remove('shadow');
    document.querySelector('.navbar').classList.remove('opacity-75');
    document.getElementById('backToTop').classList.add('d-none');
  }
});

document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

var swiper = new Swiper('.mySwiper', {
  loop: true, // لازم يكون موجود عشان autoplay يشتغل كويس
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
