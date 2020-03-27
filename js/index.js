$(document).ready(function(){   

    setTimeout(() => {
        $('#loader-wrapper').css({'display':'none'})     
    }, 1500)
    
    var istoggle = false
    
    $('.toggle-btn').click( () => {
        $('#sidebar-wrapper').css({'display':'inline-block'})
        if(istoggle) {
            $('.overlay').removeClass("active")
            $('#sidebar-wrapper').removeClass("animated")
            $('#sidebar-wrapper').removeClass("slideInLeft")  
            $('#sidebar-wrapper').addClass("animated")
            $('#sidebar-wrapper').addClass("slideOutLeft")  
            istoggle = false
        }
        else {
            $('.overlay').addClass("active")
            $('#sidebar-wrapper').removeClass("animated")
            $('#sidebar-wrapper').removeClass("slideOutLeft")
            $('#sidebar-wrapper').addClass("animated")
            $('#sidebar-wrapper').addClass("slideInLeft")
            istoggle = true
        }
    })

    $('.overlay').click( () => {
        $('.overlay').removeClass("active")
        $('#sidebar-wrapper').removeClass("animated")
        $('#sidebar-wrapper').removeClass("slideInLeft")  
        $('#sidebar-wrapper').addClass("animated")
        $('#sidebar-wrapper').addClass("slideOutLeft")  
        istoggle = false
    })

    $(window).resize( () => {
        var width_size = window.outerWidth
        
        if(width_size > 1025) {
            $('.overlay').removeClass("active")
            $('#sidebar-wrapper').removeClass("animated")
            $('#sidebar-wrapper').removeClass("slideInLeft")
            istoggle = false
        }

    })

 })