document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
 document.querySelectorAll(".video-container").forEach(container => {
    const thumbnail = container.querySelector(".video-thumbnail");
    const video = container.querySelector(".hidden-video");

    thumbnail.addEventListener("click", () => {
        thumbnail.style.display = "none";
        video.style.display = "block";
        video.play();
    });
});

  var swiper = new Swiper(".testimonials-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });


  const swiperEl = document.querySelector('.testimonials-swiper');
  if (swiperEl) {
    swiperEl.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiperEl.addEventListener('mouseleave', () => swiper.autoplay.start());
  }


  const counters = document.querySelectorAll('.counter');
  const speed = 100;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / speed;
      const updateCount = () => {
        const count = +counter.innerText.replace(/\D/g, '');
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          if (target === 5) counter.innerText = "5 Y";
          else if (target === 1000) counter.innerText = "+ 1,000";
          else if (target === 150) counter.innerText = "+ 150";
          else if (target === 98) counter.innerText = "98 %";
        }
      };
      updateCount();
    });
  };

  let started = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.impact-section');
    if (!section) return;
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (!started && sectionTop < windowHeight - 100) {
      started = true;
      animateCounters();
    }
  });


  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isActive = btn.classList.contains("active");
      const content = btn.nextElementSibling;

      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("active", "open");
          otherBtn.classList.add("collapsed");
          otherBtn.querySelector(".icon").innerHTML = "<i class='fa-solid fa-angle-down'></i>";
          const otherContent = otherBtn.nextElementSibling;
          otherContent.style.maxHeight = null;
          otherContent.classList.remove("open");
        }
      });

      if (!isActive) {
        btn.classList.add("active");
        btn.classList.remove("collapsed");
        btn.querySelector(".icon").innerHTML = "<i class='fa-solid fa-arrow-down'></i>";
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        btn.classList.remove("active");
        btn.classList.add("collapsed");
        btn.querySelector(".icon").innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        content.style.maxHeight = null;
        content.classList.remove("open");
      }
    });
  });

  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  const container = document.getElementById('coursesContainer');

  if (gridBtn && listBtn && container) {
    gridBtn.addEventListener('click', () => {
      container.classList.remove('list-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', () => {
      container.classList.add('list-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
  }


});
