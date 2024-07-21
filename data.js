`document.addEventListener('DOMContentLoaded', () => {});
setTimeout(() => {}, 500);

setTimeout(() => {
  let btnString = document.querySelector('.product_main .product-form__buttons span.swym-wishlist-cta');
  let btnStringData = document.querySelector('.product_main .product-form__buttons span.swym-wishlist-cta')?.innerText;
  let btnStringNew = btnStringData?.replace('To', 'to');
  btnString.innerText = btnStringNew;
}, 3000);

if (document.getElementById("main-collection-filters")) {
  window.addEventListener('scroll', function () {
  let elem = document.getElementById("main-collection-filters");
  let topCoord = elem.getBoundingClientRect().top;
  if (topCoord &lt; 56) { elem.style.opacity=0; } if (topCoord> 50) {
    elem.style.opacity = 1;
    }
  });
}`