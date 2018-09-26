$(".textomenu").addClass("closed");
$('.menures').click(function(){
    if($(".textomenu").hasClass("closed")) {
        $(".textomenu").animate({top:'0'},{duration:400}).removeClass("closed");
    }
    else {
        $(".textomenu").animate({top:'-190'},{duration:400}).addClass("closed");
    }
});
$('.linkmenu').click(function(){
        $(".textomenu").animate({top:'-190'},{duration:400}).addClass("closed");
});