function populate(a){
	return `
	  <tr>
		  <th>${a.name}</th>
		  <th>${a.phone}</th>
		  <th>${a.email}</th>
		  <th>${a.password}</th>
		<th>
		  <a href="edit.html?id=${a._id}" class="edit"><button >Edit</button></a>
		  <a data-id="${a._id}" class="delete"><button>Delete</button></a>
	  	</th>
	  </tr>
	`
  }

function populateproduct(){

	$.ajax({
		type:"get",
		url:"http://159.65.21.42:9000/users",
		success: function(res){

			for(let i=0; i<res.length; i++){
				let x = res[i]
					let product = populate(x)
					$("#users").append(product)
				}
			}
		,
		error:function(err){
			console.log(err)
		}
	})
}
populateproduct()

$(document).on('click','.delete',function(){
    let id = $(this).attr('data-id')
    let res = confirm("Are you sure you want to delete")
    if(res == true){
        
    $.ajax({
        type:"delete",
        url:"http://159.65.21.42:9000/user/"+id,
        success: function(res){
            alert("User deleted")
        },
        error: function(err){
            console.log(err)
        }
    })
    }

})
  

$('#register').click(function () {

      $.ajax({
        type: "post",
        url: "http://159.65.21.42:9000/register",
        data: {
          "name": $('#fname').val(),
          "phone": $('#phone').val(),
          "email": $('#mail').val(),
          "password": $('#passwd').val(),
        },
        success: function (res) {
          if (res.error) {
            $('#msg').html(res.error)
  
          } else {
            $('#msg').html("User Created")
  
          }
        },
        error: function (err) {
  
        }
      })
  
  })
  