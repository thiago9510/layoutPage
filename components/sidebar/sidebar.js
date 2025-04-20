document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector(".sidebar").classList.toggle('open-sidebar');
  });
  
  document.querySelectorAll('.side-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
  
      document.querySelectorAll('.side-item').forEach(i => {
        i.classList.remove('active');
      });
  
      item.classList.add('active');
    });
  });
  