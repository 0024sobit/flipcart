async function fetchData() {
  const res = await fetch('data.json');
  const data = await res.json();
  data.forEach(createProductCard);
}

function createProductCard(product) {
  const container = document.getElementById('product-container');

  const mobileDiv = document.createElement('div');
  mobileDiv.className = 'mobile';

  mobileDiv.innerHTML = `
    <div class="mobileimg">
      <img src="${product.image}" alt="mobile">
    </div>
    <div class="mobilepara">
      <div class="mobilename"><span>${product.name}</span></div>
      <div class="starsection">
        <div class="rating">
          <div class="star">${getStars(product.rating)}</div>
          <div class="starnum">(${product.ratingCount})</div>
        </div>
        <div class="assur"><img src="${product.assuredLogo}" alt=""></div>                     
      </div>
      <div class="pricesection">
        <div class="percen">
          <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
          <div class="percentage">${product.discount}</div>
        </div>
        <div class="oldprice">${product.oldPrice}</div>
        <div class="ogiprice">${product.newPrice}</div>
      </div>
      <div class="green">Lowest price since launch</div>
      <div class="exchange">Upto <span>${product.exchangeOffer}</span> Off on Exchange </div>
      <div class="bankoffer">Bank Offer</div>
      <div class="freedel">Free delivery</div>
      <div class="waranty">${product.warranty}</div>
    </div>
    <div class="love">
      <svg width="24" height="24" viewBox="0 0 256 256">
        <path fill="none" d="M0 0h256v256H0z"></path>
        <path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
      </svg>
    </div>
  `;

  const featuresDiv = document.createElement('div');
  featuresDiv.className = 'features';
  product.features.forEach(fea => {
    const feaOne = document.createElement('div');
    feaOne.className = 'feaone';
    feaOne.innerHTML = `<span>${fea}</span>`;
    featuresDiv.appendChild(feaOne);
  });        

  container.appendChild(mobileDiv);
  container.appendChild(featuresDiv);
}

function getStars(rating) {
  const fullStar = `<div class="staron">★</div>`;
  const halfStar = `<div class="staron" id="hlfstar">⯪</div>`;
  const emptyStar = `<div class="staron">☆</div>`;

  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) stars.push(fullStar);
  if (half) stars.push(halfStar);
  while (stars.length < 5) stars.push(emptyStar);

  return stars.join('');
}














fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('main-container');

    const stars = Math.floor(data.rating);
    const half = data.rating % 1 !== 0;

    const starIcons = Array(stars).fill('<div class="staron">★</div>').join('') +
      (half ? '<div class="staron">☆</div>' : '');

    const features = data.features.map(f => `<div class="feaone"><span>${f}</span></div>`).join('');

    container.innerHTML = `
      <div class="mainflex">
        <div class="mobile">
          <div class="mobileimg">
            <img src="${data.image}" alt="mobile">
          </div>
          <div class="mobilepara">
            <div class="mobilename"><span>${data.name}</span></div>
            <div class="starsection">
              <div class="rating">
                <div class="star">${starIcons}</div>
                <div class="starnum">(${data.reviews.toLocaleString()})</div>
              </div>
              <div class="assur"><img src="${data.assuredImg}" alt="Assured Badge"></div>
            </div>
            <div class="pricesection">
              <div class="percen">
                <svg width="17" height="17" viewBox="0 0 12 12" fill="none">
                  <path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path>
                </svg>
                <div class="percentage">${data.discount}%</div>
              </div>
              <div class="oldprice">₹${data.oldPrice.toLocaleString()}</div>
              <div class="ogiprice">₹${data.price.toLocaleString()}</div>
            </div>
            <div class="green">Lowest price since launch</div>
            <div class="exchange">Upto <span>₹${data.exchange.toLocaleString()}</span> Off on Exchange</div>
            <div class="bankoffer">Bank Offer</div>
            <div class="freedel">Free delivery</div>
            <div class="waranty">1 year warranty by vivo</div>
          </div>
          <div class="love">
            <svg width="24" height="24" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
            </svg>
          </div>
        </div>
        <div class="features">${features}</div>
      </div>
    `;
  })
  .catch(error => {
    console.error('Failed to load product data:', error);
  });





{
    "name": "",
    "image": "",
    "rating": ,
    "number": "",
    "numbers" : "",
    "reviews"  : "",
    "azure": "https://rukminim1.flixcart.com/www/60/20/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=90",
    "percentage": "",
    "oldprice": "₹",
    "price": "₹",
    "upto": "₹",
    "features": [
      "8 GB RAM | 128 GB Storage",
      "17.22 cm (6.78 inch) Display",
      "5500 mAh",
      "50MP + 8MP",
      "50MP Front Camera"
    ]
  }


                                    // <div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>
                                    // <div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>
                                    // <div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>
                                    // <div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>
                                    // <div class="staron" id="hlfstar"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>



                    //                                     <div class="featuress">
                    //     <ul class="gud">
                    //         <li class="feaone"><span>8 GB RAM | 128 GB ROM</span></li>
                    //         <li class="feaone"><span>17.22 cm (6.78 inch) Display</span></li>
                    //         <li class="feaone"><span>50MP + 8MP | 50MP Front Camera</span></li>
                    //         <li class="feaone"><span>5500 mAh Battery</span></li>
                    //         <li class="feaone"><span>Dimensity 9200+ Processor</span></li>
                    //         <li class="feaone"><span>1 Year Warranty on Handset and 6 Months Warranty on Accessories</span></li>
                    //     </ul>
                    // </div>







'kj jh jk jlk hg hgh g sd f sd' 
'sd jk jdjf kj vh j bn  ui nnbjh bns df sd f'
'iu hv hgvh hg ahgd ah'