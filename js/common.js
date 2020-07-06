setTimeout(function(){
	/* Textarea Auto-Resize */
	// Targets all textareas with class "txta"
let textareas = document.querySelectorAll('.js-txta'),
    hiddenDiv = document.createElement('div'),
    content = null;

// Adds a class to all textareas
for (let j of textareas) {
  j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "txta" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('js-txta');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.paddingRight = '30px';
hiddenDiv.style.paddingLeft = '30px';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for(let i of textareas) {
  (function(i) {
    // Note: Use 'keyup' instead of 'input'
    // if you want older IE support
    i.addEventListener('input', function() {
      
      // Append hiddendiv to parent of textarea, so the size is correct
      i.parentNode.appendChild(hiddenDiv);
      
      // Remove this if you want the user to be able to resize it in modern browsers
      i.style.resize = 'none';
      
      // This removes scrollbars
      i.style.overflow = 'hidden';

      // Every input/change, grab the content
      content = i.value;

      // Add the same content to the hidden div
      
      // This is for old IE
      content = content.replace(/\n/g, '<br>');
      
      // The <br ..> part is for old IE
      // This also fixes the jumpy way the textarea grows if line-height isn't included
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      // Briefly make the hidden div block but invisible
      // This is in order to read the height
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      // i.style.height = hiddenDiv.offsetHeight + 'px';
      i.style.height = hiddenDiv.offsetHeight + 35 + 'px';

      if (hiddenDiv.offsetHeight > 48) {
      	i.style.overflow = 'auto';
      	i.style.height = 95 + 'px';
      } 
      // console.log(hiddenDiv.offsetHeight);

      // Make the hidden div display:none again
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}

}, 1700);




$(function(){

	/* Preloader */
		setTimeout(function(){
			$(".preloader").fadeOut(400);
		}, 1800);

});


$(document).ready(function() {



	/* email field validation */
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
	var mail = $('input[type="email"]');
	
	 mail.blur(function(){
	 if(mail.val() != ''){

	 	if(mail.val().search(pattern) == 0) {
			 mail.removeClass('hs-input--error');
		} else {
			 mail.addClass('hs-input--error');
	 	}
	 } else {
		 mail.removeClass('hs-input--error');
	 }
	 });


	/* Add some properties */
	setTimeout(function(){
	$("input[type='text']").attr("placeholder", "Name");
	$("input[type='email']").attr("placeholder", "E-mail");
	$("textarea").attr("placeholder", "I'm interested in...");
	$("textarea").addClass("hs-input form__txta js-txta txtstuff");
	}, 1600);

	console.log("All done!");


});
