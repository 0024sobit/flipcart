window.addEventListener('scroll', () => {
    const header = document.querySelector('.headtwo');
    if(window.scrollY > 40) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
});


let alldata = [];
let decsdata = [];

fetch('data.json')
  .then(res => res.json())                     
  .then(data => {
    alldata = data;
    decsdata = data;
    productList(alldata);
    descList(decsdata);
  })
  .catch(error => console.error("Error loading JSON:", error)); 
    


function productList(alldata) {
    const mainContainer = document.querySelector('.containermain');
    const mainFlex = document.createElement('div')
    mainFlex.className = 'mainflex'

    alldata.forEach(product => {
        const mobile = document.createElement('div')
        mobile.className = 'mobile'

        mobile.innerHTML = `
                    <div class="mobileimg"><img src="${product.image}" alt="mobile"></div>
                    <div class="mobilepara">
                        <div class="mobilename"><span>${product.name}</span></div>
                        <div class="starsection">
                            <div class="rating">
                                <div class="star">${getStars(product.rating)}</div>
                                <div class="starnum">${product.number}</div>
                            </div>
                            <div class="assur"><img src="${product.azure}" alt=""></div>
                        </div>
                        <div class="pricesection">
                            <div class="percen">
                                <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
                                <div class="percentage">22%</div>
                            </div>
                            <div class="oldprice">${product.oldprice}</div>
                            <div class="ogiprice">${product.price}</div>
                        </div>
                        <div class="left">Only 1 left</div>
                        <div class="exchange">Upto <span>${product.upto}</span> Off on Exchange </div>
                        <div class="bankoffer">Bank Offer</div>
                        <div class="freedel">Free delivery</div>
                        <div class="waranty">1 year warranty by vivo</div>
                        <div class="love"><svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg></div>
        `;
        const featuresDiv = document.createElement('div')
        featuresDiv.className = 'features'
        product.features.forEach(fea => {
            const feaOne = document.createElement('div')
            feaOne.className = 'feaone'
            feaOne.innerHTML = `<span>${fea}</span>`
            featuresDiv.appendChild(feaOne)
        })

            mainFlex.appendChild(mobile);
            mainFlex.appendChild(featuresDiv);
    })
    mainContainer.appendChild(mainFlex);
}

     

function getStars(rating) {
  const fullStar = `<div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#008c00;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>`;
  const halfStar = `<div class="staron" id="hlfstar"><svg width="200px" height="200px" viewBox="0 0 47.94 47.94" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="half">
      <rect x="0" y="0" width="23.97" height="47.94" />
    </clipPath>
  </defs>
  <path fill="#cccccc" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 
    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 
    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 
    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 
    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 
    C22.602,0.567,25.338,0.567,26.285,2.486z"/>
  <path fill="#008c00" clip-path="url(#half)" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 
    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 
    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 
    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 
    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 
    C22.602,0.567,25.338,0.567,26.285,2.486z"/>
    </svg>
    </div>`;
  const emptyStar = `<div class="staron"><svg width="200px" height="200px" viewBox="0 0 47.94 47.94" xmlns="http://www.w3.org/2000/svg">
  <path fill="#cccccc" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 
    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 
    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 
    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 
    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 
    C22.602,0.567,25.338,0.567,26.285,2.486z"/>
    </svg>
    </div>`;

  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) stars.push(fullStar);
  if (half) stars.push(halfStar);
  for(let i = stars.length; i < 5; i++) stars.push(emptyStar);
  return stars.join('');
}



function descList(decsdata){
    const containerTwo = document.querySelector('.containertwo');
    containerTwo.innerHTML = '';

    decsdata.forEach(desc => {
    const mobilee = document.createElement('div')
    mobilee.className = 'mobile'

    mobilee.innerHTML =`
                    <div class="mobileii">
                <div class="mobileimg">
                    <img src="${desc.image}" alt="">
                </div>
                <div class="addbox">
                    <div class="bs1">
                        <label class="arrows">
                            <input type="checkbox" class="checkbox" readonly>
                            <div class="boxx"></div>
                            <div class="namemob jk">Add to Compare</div>
                        </label>
                    </div>
                </div>
                <div class="love">
                    <svg width="16" height="16" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#c8c8c8" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                </div>
            </div>
            <div class="mobilepara">
                <div class="colcol">
                    <div class="mobilename">
                        <span>${desc.name}</span>
                    </div>
                    <div class="ratinng">
                        <span class="stick">
                            <div class="rate">
                                ${desc.rating}
                                <div class="staron"><svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#fff;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg></div>
                            </div>
                        </span>
                        <span class="rattt">
                            <span>${desc.numbers} Ratings </span>
                            <span class="and">&</span>
                            <span> ${desc.reviews} Reviews</span>
                        </span>
                    </div>
                    <div class="featuress">${feature(desc.features)}</div>
                </div>
                <div class="priceof">
                    <div class="privetwo">
                        <div class="ogprice">
                            <div class="comaprison">
                                <div class="ogiprice">${desc.price}</div>
                                <div class="perfle">
                                    <div class="oldprice">${desc.oldprice}</div>
                                    <div class="percen"><span class="percentage">${desc.percentage} off</span></div>
                                </div>
                            </div>
                            <div class="freedel"><span>Free delivery</span></div>
                        </div>
                        <div class="azzur"><img src="${desc.azure}" alt=""></div>
                    </div>
                    <div class="exchange">Upto <span>${desc.upto}</span> Off on Exchange</div>
                </div>
    `
    containerTwo.appendChild(mobilee)
    });
    
}


function feature(features) {
        const ul = document.createElement('ul')
        ul.className = 'gud'

        features.forEach(fea => {
            const li = document.createElement('li')
            li.className = 'feaone';
            li.innerHTML = `<span>${fea}</span>`;
            ul.appendChild(li)
        })
        return ul.outerHTML;
}


//sort btn

const sortBtn = document.getElementById('sortbtn');
const sortParent = document.getElementById('sortparent');
const sortMenu = document.getElementById('sortmenu')

sortBtn.addEventListener('click', () => {
    if(sortParent.style.display === 'none'){
        sortParent.style.display = 'block' 
    }else {    
        sortParent.style.display = 'none'
    }

});

window.addEventListener('click', (e) => {
    if (sortParent.style.display === 'block' && !sortMenu.contains(e.target) 
        && !sortBtn.contains(e.target)) {

        sortParent.style.display = 'none';
    }
});


const filterbtn = document.querySelector('#filter');
const filtermenu = document.querySelector('#filterlike');
const header = document.querySelector('.headtwo');
const backBtn = document.getElementById('filarrow');
const applyMain = document.getElementById('applymain');
const main = document.querySelector('.main');
const twowPad = document.querySelector('.twowpad');
const soora = document.querySelector('.soora'); 


twowPad.style.display = 'none';
applyMain.style.display = 'none';
filtermenu.style.width = '0';

filterbtn.addEventListener('click', () => {
    filtermenu.style.width = '100%';
    header.style.display = 'none';
    applyMain.style.width = '100%';    
    applyMain.style.display = 'block';
    twowPad.style.display = 'block';
    if (main) main.style.display = 'none';
    if (soora) soora.style.display = 'block'; 

    loadFilter('price');
});


backBtn.addEventListener('click', () => {
    filtermenu.style.width = '0';
    header.style.display = 'flex';
    applyMain.style.display = 'none';
    twowPad.style.display = 'none';
    if (soora) soora.style.display = 'none'; 
    if (main) main.style.display = 'block';
});

const tickBoxs = document.querySelectorAll('.tickbox');

tickBoxs.forEach(tickBox => {
tickBox.addEventListener('click', () => {
    const img = tickBox.querySelector('img')
    
    if(img.src.includes('checked')){
        img.src = 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png?q=90'
    }else {
        img.src = 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png?q=90'
    }
});
})

let lastchecked = null;

const radios = document.querySelectorAll('input[type="radio"][name="sort"]');
radios.forEach(radio => {
    radio.addEventListener('click', () => {
        if(lastchecked === this) {
            this.checked = false;
            lastchecked = null
        } else {
            lastchecked = this
        }
    });
});




function checkboxListner() {
     document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      const box = checkbox.querySelector('.checkbox-box');
      box.classList.toggle('checked');
    });
  });



    const customcheck = document.querySelectorAll('.custom-checkbox');
    const mainn = document.querySelector('.main');
    const sortMenuu = document.getElementById('sortmenu');

    customcheck.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        if(main.style.display = 'none')
        mainn.style.display = 'none';
        sortMenuu.style.display = 'block';
    });
});

}



document.getElementById('sort-low').addEventListener('change', function () {
    if (this.checked) {
        const sortedData = [...alldata].sort((a, b) => {
           
            const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
            return priceA - priceB;
        });

        const mainContainer = document.querySelector('.containermain');
        mainContainer.innerHTML = ''; 
        productList(sortedData);    
        
    }
});


document.getElementById('sort-high').addEventListener('change', function(){
    if(this.checked) {
        const sorteData = [...alldata].sort((a, b) => {

            const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
            return priceB - priceA;

        });
        const mainContainer = document.querySelector('.containermain');
        mainContainer.innerHTML = '';
        productList(sorteData)

        document.getElementById('sortparent').style.display = 'none';
        document.querySelector('.main').style.display = 'block'

    }
})

document.getElementById('popularity').addEventListener('change', function(){
    if(this.checked){
        const popData = [...alldata].sort(() => Math.random() - 0.5);

        const mainContainer = document.querySelector('.containermain');
        mainContainer.innerHTML = '';
        productList(popData)

    }
    
})
document.getElementById('newest').addEventListener('change', function(){
    if(this.checked){
        const newData = [...alldata].sort(() => Math.random() - 0.5);
        
        const mainContainer = document.querySelector('.containermain');
        mainContainer.innerHTML = '';
        productList(newData)

    }
})


let filterData = {
  price: `
    <div class="filttwo">
      <div class="twoinside">
        <div class="twoboxs">
          <div class="twowpad">
            <div class="paka custom-checkbox" >
              <div class="checkbox-box" id="pricetwok"></div>
              <span class="rup" >Rs. 20000 - Rs. 30000</span>
            </div>
            <div class="paka custom-checkbox">
              <div class="checkbox-box"></div>
              <span class="rup">Rs. 30000 and Above</span>
            </div>
            <div class="paka custom-checkbox">
              <div class="checkbox-box"></div>
              <span class="rup">Rs.10000 and Below</span>
            </div>
            <div class="paka custom-checkbox">
              <div class="checkbox-box"></div>
              <span class="rup">Rs. 10000 - Rs. 15000</span>
            </div>
            <div class="paka custom-checkbox">
              <div class="checkbox-box"></div>
              <span class="rup">Rs. 15000 - Rs. 20000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  brand: `
    <div class="filttwo">
      <div class="twoinside">
        <div class="twoboxs">
          <div class="twowpad">
                <div class="searchbrand">
                    <div class="searicon"><img src="https://rukminim2.flixcart.com/www/40/40/promos/05/02/2019/2c3684ce-966a-43b1-b93b-35d288875e8e.png?q=90" alt=""></div>
                    <input type="text " placeholder="Search Brand" class="brandname">
                </div>
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">vivo</span>
                </div>
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">samsung</span>
                </div>
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">poco</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  `,

  assured: `
    <div class="filttwo">
        <div class="twoinside">
            <div class="twoboxs">
            <div class="twowpad">
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">F-Assured</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  `,

  ratings: `
    <div class="filttwo">
        <div class="twoinside">
            <div class="twoboxs">
            <div class="twowpad">
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">4★ & above</span>
                </div>
                <div class="paka custom-checkbox">
                    <div class="checkbox-box"></div>
                    <span class="rup">3★ & above</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  `
};


function loadFilter(type) {
    const container = document.querySelector('.filttwo');
    if(container) {
        container.innerHTML = filterData[type];
        checkboxListner()
    }
}





// document.addEventListener('DOMContentLoaded', function () {
//     let filteredData = [];

//     document.getElementById('price-20k-30k').addEventListener('change', function () {
//         filteredData = alldata.filter(product => {
//             const numericPrice = parseInt(product.price.replace(/[^\d]/g, ''));
//             return numericPrice >= 20000 && numericPrice <= 30000;
//         });
//     });

//     document.getElementById('apply-btn').addEventListener('click', function () {
//         const mainContainer = document.querySelector('.containermain');
//         mainContainer.innerHTML = '';
//         productList(filteredData); 

//         document.getElementById('filterlike').style.display = 'none';
//         document.querySelector('.main').style.display = 'block';
//     });
// });

document.getElementById('pricetwok').addEventListener('change', function () {
    const filterData = alldata.filter(product => {
        const numericPrice = parseInt(product.price.replace(/[^\d]/g, ''));
        return numericPrice >= 20000 && numericPrice <= 30000;
    });

    const mainContainer = document.querySelector('.containermain');
    mainContainer.innerHTML = '';
    productList(filterData);
});


