let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');
let astro = document.getElementById('astro');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
    astro.style.top = value * 0.5 + 'px'; // Astro moves up and down with scroll
});

// document.addEventListener('DOMContentLoaded', function() {
//      const paginationLinks = document.querySelectorAll('.page-link');
//      const contentPages = document.querySelectorAll('.content-page'); 
//      let currentPage = 1; 
//      function showPage(page) { contentPages.forEach(page => page.classList.remove('active')); 
//         document.getElementById(`page${page}`).classList.add('active');
//      } 
//      paginationLinks.forEach(link => {
//          link.addEventListener('click', function(e) 
//         {
//              e.preventDefault(); const page = this.getAttribute('data-page'); 
//              if (page === 'prev' && currentPage > 1) { currentPage--; } 
//              else if (page === 'next' && currentPage < contentPages.length) { currentPage++; } 
//              else if (!isNaN(page)) { 
//                 currentPage = parseInt(page); } showPage(currentPage); 
//                 paginationLinks.forEach(link => link.parentElement.classList.remove('active'));
//                  document.querySelector(`.page-link[data-page="${currentPage}"]`).parentElement.classList.add('active'); 
//                 });
//                  }); 
//                  showPage(currentPage); 
//                 });