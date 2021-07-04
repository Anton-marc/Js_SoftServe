document.getElementById('openCustomize').onclick = function() {
    let el =  document.querySelector('.main_block_items_customization_teapot');
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  }
  document.getElementById('openCustomizeLighting').onclick = function() {
    let el =  document.querySelector('.main_block_items_customization_lighting');
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  }
  document.getElementById('openCustomizegarage').onclick = function() {
    let el =  document.querySelector('.main_block_items_customization_garage');
    el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
  }