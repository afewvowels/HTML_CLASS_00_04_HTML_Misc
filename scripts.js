window.addEventListener('load', function() {
  document.getElementById('icon').addEventListener('click', myFunction);
  window.removeEventListener();
});

tohide = document.getElementById('to_hide');

function myFunction() {
  if (tohide.style.opacity == 1.0) {
    tohide.style.opacity = 0.0;
  } else {
    tohide.style.opacity = 1.0;
  }
};
