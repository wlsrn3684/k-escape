$(document).ready(function(){

    var istoggle = false

    $('.toggle-btn').click( () => {
        $('#sidebar-wrapper').css({'display':'inline-block'})
        if(istoggle) {
            $('#sidebar-wrapper').removeClass("animated")
            $('#sidebar-wrapper').removeClass("slideInLeft")  
            $('#sidebar-wrapper').addClass("animated")
            $('#sidebar-wrapper').addClass("slideOutLeft")  
            istoggle = false
        }
        else {
            $('#sidebar-wrapper').removeClass("animated")
            $('#sidebar-wrapper').removeClass("slideOutLeft")
            $('#sidebar-wrapper').addClass("animated")
            $('#sidebar-wrapper').addClass("slideInLeft")
            istoggle = true
        }
    })

    $(window).resize( () => {
        var width_size = window.outerWidth

        if(width_size) {
            
        }
    })

 })