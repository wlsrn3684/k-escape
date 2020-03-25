$(document).ready(function(){

    var istoggle = false

    $('.toggle-btn').click( () => {
        $('.toggle-menu').css({'display':''})
        if(istoggle) {
            $('.toggle-menu').removeClass("animated")
            $('.toggle-menu').removeClass("slideInDown")  
            $('.toggle-menu').addClass("animated")
            $('.toggle-menu').addClass("slideOutUp")  
            istoggle = false
        }
        else {
            $('.toggle-menu').removeClass("animated")
            $('.toggle-menu').removeClass("slideOutUp")
            $('.toggle-menu').addClass("animated")
            $('.toggle-menu').addClass("slideInDown")
            istoggle = true
        }
    })

 })