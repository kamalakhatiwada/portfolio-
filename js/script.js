$(document).ready(function () {
	$('nav a').on('click',function(){
		//current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		//set heading text
		$('h1#heading').text($(this).text());

		//get and filter link text
		var category = $(this).text().toLowerCase().replace('','-');

		//remove hidden class if 'all-projects' is selected

		if(category=='all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		}
		else{
			('ul#gallery li').each(function(){
				if(!$(this).hasCalss(category)){
					$(this).hide().addClass('hidden');
				}
				else{
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});			
		}
		//stoplink behaviour

        return false;
    });

    $('ul#gallery li').on('mouseover',function(){
    	var title = $(this).children('a').attr('data-title');
    	var desc = $(this).children('a').attr('data-desc');
    	if(desc==null){
    		desc = 'Click To Enlarge';
    	}

    	if(title==null){
    		title = '';
    	}

    	$(this).append('<div class="overlay"></div>');

    	var overlay = $(this).children('.overlay');

    	overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

    	overlay.fadeIn(400);
    });

    $('ul#gallery li').on('mouseout',function(){
    	$(this).append('<div class="overlay"></div>');
    	
    	var overlay = $(this).children('.overlay');	

    	overlay.fadeOut(250);
    });
});


