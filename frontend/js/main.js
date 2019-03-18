$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 536, 10000 ],
      slide: function( event, ui ) {
          console.log(`${ui.values[ 0 ]} | ${ui.values[ 1 ]}`)
          console.log($("#min-price" ));
        $("#min-price" ).text(ui.values[ 0 ]);
        $("#max-price" ).text(ui.values[ 1 ]);
      }
    });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );