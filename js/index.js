// document is ready 
$(document).ready(function (){
    console.log('document ready');
  
    // Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
    $('.actions-wrapper .readmore' ).on('click', function(){
      console.log('clicked on read more');
  
      // Prevent the page jumping when the anchor is clicked with the ```event.preventDefault()``` function
      event.preventDefault();
      console.log('prevent default');
  
        // have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
        $('.actions-wrapper p').slideUp();
        console.log('slide down');
  
        // hide the "Read More" link using ```$.hide()```
        $('.readmore').hide();
        console.log('hide readmore');
  
        //$('#show-this-on-click').removeClass('hide');
        $('#show-this-on-click').removeClass('hide')
        console.log('remove hide class on show this on click');

        //$('#show-this-on-click').removeClass('hide');
        $('.readless').removeClass('hide');
        console.log('show read less');
  
    });
  
      //If a user clicks "Read Less" on the primary column
      $('.readless' ).on('click', function(){
        console.log('clicked on read less');
        event.preventDefault()
  
        // have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
        $('.actions-wrapper p').slideUp()
        console.log('up');
        //hide readless
        $('.readless').hide();
  
        // show the "Read More" link using ```$.show()```
        $('.readmore').show();
    });
  
      
      
      $('.hero-carousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
      });


      $('.brightpink' ).on('hover', function(){
        console.log('clicked on read more');
    
        // Prevent the page jumping when the anchor is clicked with the ```event.preventDefault()``` function
        event.preventDefault();
        console.log('prevent default');
    
          // have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
          $('#show-this-on-click').removeClass('orignal')
          console.log('hover image');

    
      });



  });
  
  
  