var titlearray = ["Red Gravy Premix", "White Gravy Premix", "Golden Gravy Premix", "Green Gravy Premix", "Tikka Gravy Premix", "DalMakhani Gravy Premix"];
//var descriptionarray = ["Rs.200 - 1kg", "Rs.200 - 1kg", "Rs.200 - 1kg", "Rs.200 - 1kg", "Rs.200 - 1kg", "Rs.200 - 1kg"];

var dynamic = document.querySelector('.container');
for (var i = 0; i < titlearray.length; i++) {
    var fetch = document.querySelector('.container').innerHTML;
    dynamic.innerHTML = `<div id="cards${i}" class="boxes" data-aos="fade-up">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
      </div>
    </div>` + fetch;
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.png')`;
}