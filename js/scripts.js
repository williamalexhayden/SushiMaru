$(".launch.button").mouseenter(function(){
        $(this).stop().animate(function(){$(this).find('.text').show();});
    }).mouseleave(function (event){
        $(this).find('.text').hide();
        $(this).stop().animate();
    });
$("#nav").sidebar({overlay: true})
    .sidebar('attach events','.ui.launch.button');

    
