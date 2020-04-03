$(document).ready( () => {

    /* 
    
    $('.changePW-form').submit( () => {

    }).then( () => {
        if(check.checkValidity()) {
            Swal.fire({
                icon: 'success',
                title: '비밀번호가 변경되었습니다.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
    
    */

    $('#refresh-btn').click( () => {
        Swal.fire({
            icon: 'error',
            title: '조회를 실패했습니다.',
            text: '학번이나 비밀번호를 확인하세요'
        })   
    })

    $('.STD-ID').keypress( () => {
        if(event.keyCode<48 || event.keyCode>57) {
            event.returnValue=false;
        }
    })

})