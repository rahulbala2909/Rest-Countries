let result = document.querySelector(".result");


  let link = `https://restcountries.com/v3.1/all/`
  fetch(link)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
    
const pagination = (data,page,limit) => {
const start = (page - 1) * limit;

    const end = page * limit;

    return data.slice(start, end);

    }

    let current_page = 1;
    let limit = 9;
 


const displayCountry = (data) => {
  let temp = pagination(data,current_page,limit)

  console.log(temp)

  temp.forEach((country) => {
    const div = document.createElement("div");
    div.className = "card d-flex m-5 shadow";
    div.style.width = "300px";
    div.innerHTML = `
            <img src="${country.flags.png}" class="flag" alt="flag">
            <div class="card-body">
                <h4 class="card-text">${country.name.common}</h4><br>
                <h6 class="card-text">Capital - ${country.capital}</h6>
                <h6 class="card-text">Population - ${country.population}</h6>
                <h6 class="card-text">Continents - ${country.continents}</h6>
                <h6 class="card-text">Region - ${country.subregion}</h6>
                <h6 class="card-text">Area - ${country.area} Km²</h6>
                <h6 class="card-text">Timezone - ${country.timezones}</h6>

            </div>`
    ;
    result.appendChild(div);
  });

}

const nxt = () => {
  current_page++

  let result = document.querySelector(".result");
  result.innerHTML = "<></>"

  let link = `https://restcountries.com/v3.1/all/`
  fetch(link)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
    
}

const prv = () => {
  current_page--

  let result = document.querySelector(".result");
  result.innerHTML = "<></>"

  let link = `https://restcountries.com/v3.1/all/`
  fetch(link)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
    
}