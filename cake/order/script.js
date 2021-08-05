var titlearray = ["Chocolate truffle", "Doll cake", "Photo cake", "Cartoon cake", "2 Tier cake", "3 Tier cake", "Blueberry", "Pinapple", "Mirror glaze", "Anniversary Special", "Sponge cake", "Black forest", "White forest", "Rose flavour", "Butterscotch", "Rasmalai"];
var descriptionarray = ["Rs.350 ", "Rs.800", "Rs.350", "Rs.350", "Rs.600", "Rs.1000", "Rs.300", "Rs.250", "Rs.300", "Rs.350", "Rs.250", "Rs.250", "Rs.250", "Rs.300", "Rs.250", "Rs.350"];

var dynamic = document.querySelector('.container');
for (var i = 0; i < titlearray.length; i++) {
    var fetch = document.querySelector('.container').innerHTML;
    dynamic.innerHTML = `<div id="cards${i}" class="boxes"  data-aos="fade-up">
      <div class="box-content" >
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
      </div>
    </div>` + fetch;
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
}