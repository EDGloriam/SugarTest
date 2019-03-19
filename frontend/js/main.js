let resultContainer = $('#was-finded');

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 536, 10000 ],
      slide: function( event, ui ) {
        $("#min-price" ).text(ui.values[ 0 ]);
        $("#max-price" ).text(ui.values[ 1 ]);
      }
    });
  });

  $("#find-tires-btn").mousedown(function(){
    resultContainer.toggleClass("show");
  });

  $("#find-tires-btn").click(function(event){
    event.preventDefault();
    const form = $("#find-tires");
    const params = {
        type: form.find(".car-type").find("input[type='radio']:checked").val().toLowerCase().trim(),
        radius: form.find(".tires-params").find(".radius .select-selected").text().trim(),
        width: form.find(".tires-params").find(".width .select-selected").text().toLowerCase().trim(),
        height: form.find(".tires-params").find(".height .select-selected").text().toLowerCase().trim(),
        brand: form.find(".brand").find(".select-selected").text().toLowerCase().trim(),
        season: form.find(".season").find("input[type='radio']:checked").val().toLowerCase().trim(),
        price: {
            min: form.find(".price").find("#min-price").text().trim(),
            max: form.find(".price").find("#max-price").text().trim()
        }
    }
    resultContainer.addClass("show");
    searchTires(params);
    console.log(params);
  });

  function searchTires(params){
    const coincidence = db.filter(tire => {
        return ((params.type === 'all') || (params.type === tire.type)) &&
            ((params.radius === 'Любой') || (params.radius === tire.radius)) &&
            ((params.width === "любая") || (params.width === tire.width)) &&
            ((params.height === "любая") || (params.height === tire.height)) &&
            ((params.brand === "любой") || (params.brand === tire.brand)) &&
            (params.season === tire.season) &&
            ((params.price.min <= tire.price ) && (params.price.max >= tire.price));
    });

    resultContainer.find("#amount").text(function() {
        return `${coincidence.length} ${getNoun(coincidence.length, "шина", "шины", "шин")}`;
      });
  }

  function getNoun (number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
} 