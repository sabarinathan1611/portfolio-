window.onload =function() {

    var overlay = document.querySelector('.overlay');
    var spinner = document.querySelector('.lds-roller');
  
    
    overlay.style.display = 'block';
    spinner.style.display = 'block';
  
  
    setTimeout(function () {
      
      overlay.style.display = 'none';
      spinner.style.display = 'none';
    }, 1000); 
  };