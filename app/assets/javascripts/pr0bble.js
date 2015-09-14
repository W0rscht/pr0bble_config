function pr0bble_initialize ( platform, configuration_json, return_to ) {

  // platform can be aplite, basalt or unknown

  var configuration = JSON.parse(configuration_json);

 for (var element in configuration) {
    if (typeof configuration[element] === 'boolean') {
      $('[name='+ element +']').prop('checked', configuration[element] );
    } else {
      $('[name='+ element +']').val( configuration[element] );
    }
  }

  $('#button-submit').on('click', function(){
      pr0bble_store( return_to );
  });
}

function pr0bble_store( return_to ) {

  var configuration = {};
  $.each( ['username', 'config_dickbutt', 'config_dickbutt_intensity'], function(index, element) {

      if ($('#'+ element).attr('type') === 'checkbox') {
        configuration[element] = $('#'+ element).prop('checked');;
      }
      else {
        configuration[element] = $('#'+ element).val();
      }
  });

  window.location.href = return_to + encodeURIComponent(JSON.stringify(configuration));

  return false;
}