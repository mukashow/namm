const productsBtn = document.querySelectorAll('.popular__shopbg');
const cartProductsList = document.querySelector('.menu__cart-list');
const fullPrice = document.querySelector('.menu__products-price');
const subbtn = document.querySelector('.sidebar__subbtn-shop');
const cartQuantity = document.querySelector('.menu__products-num');
const num = document.querySelector('.sidebar__num1');
let price = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () =>{
    fullPrice.textContent = `${normalPrice(price)} р.`;
};

const printQuantity = () => {
    let length = cartProductsList.querySelector('.menu__cart').children.length;
    cartQuantity.textContent = length;
    length > 0 ? subbtn.classList.add('sidebar__subbtn-shop-active') : subbtn.classList.remove('sidebar__subbtn-shop-active')
    length > 0 ? num.classList.add('sidebar__num1-active') : subbtn.classList.remove('sidebar__num1-active')
};

const generateCartProduct = (img, title, price, id) => {
    return`
        <div class="menu__cart" data-id="${id}">
            <a href="#!" class="menu__cart-item">
                  <img src="${img}" alt="" class="menu__cart-pic">
              </a>
              <div class="menu__cart-item">
                  <a href="#!" class="menu__cart-ttl">
                      ${title}
                  </a>
                  <div class="menu__cart-flex">
                      <div class="popular__counter">
                          <div class="popular__minus">
                              -
                          </div>
                          <div class="popular__count-num">
                              1
                          </div>
                          <div class="popular__plus">
                              +
                          </div>
                      </div>
                      <b class="popular__price">${price} <span>р.</span>
                  </div>
                  <i class="far fa-trash-alt menu__cart-del"></i>
              </div>
          </div>
    `;

}


productsBtn.forEach(el => {
    el.closest('.popular__item').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.popular__item');
        let id = parent.dataset.id;
        let img = parent.querySelector('.slick-slide img').getAttribute('src');
        let title = parent.querySelector('.popular__name').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.popular__price').textContent));

        plusFullPrice(priceNumber)
        console.log(price);
        printFullPrice();
        cartProductsList.querySelector('.menu__cart').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id))
        printQuantity();
        self.disabled = true
    });
});















