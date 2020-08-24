// LocalStorage System

    // This fuction is called when a checkbox is clicked
    $('.CIS0').on('click', function() {
      var fav, favs = []; // array
      $('.CIS0').each(function() { // run through each of the checkboxes
        fav = {id: $(this).attr('id'), value: $(this).prop('checked')};
        favs.push(fav);
      });
      localStorage.setItem("CIS0", JSON.stringify(favs)); // Save new array
    });
    
    // This fuction is called when the page is uploaded
    $(document).ready(function() {
      var CIS0 = JSON.parse(localStorage.getItem('CIS0'));
      if (!CIS0.length) {return};
      console.debug(CIS0);
    
      for (var i=0; i<CIS0.length; i++) {
        console.debug(CIS0[i].value == 'on');
        $('#' + CIS0[i].id ).prop('checked', CIS0[i].value);
      }
    });
