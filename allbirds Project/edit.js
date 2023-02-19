function loadProduct(id){
    
    
    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/user/"+id,
        success: function(res){
            console.log(res)
            if(!res.error){
                $('#fname').val(res.name)
                $("#phone").val(res.phone)
                $("#mail").val(res.mail)
                $("#passwd").val(res.password)
            }
        },
            error:function(err){
                console.log(err)
            }
    })
}
    let url = location.href
    let arr = url.split("=")
    let id = arr[1]
    loadProduct(id)

    $('#edit').click(function() {
        $.ajax({
            type:"put",
            data:{
                name:$('#fname').val(),
                phone:$('#phone').val(),
                mail:$('#mail').val(),
                password:$('#passwd').val(),
            },
            url:"http://159.65.21.42:9000/user/"+id,
            success:function(res){

                if(!res.error){
                    alert('User successfully edited')
                    $('#fname').val('')
                    $("#phone").val('')
                    $("#mail").val('')
                    $("#passwd").val('')
                }
            },
            error:function(err){
                console.log(err)
            }
        })
    })
        
