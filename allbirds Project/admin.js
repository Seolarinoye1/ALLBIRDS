function render(d){
	return `<div>
	<a href=" view-product.html?id=${d._id}">${d.name}"</button>
	</div>
	`
}

function load(id){
    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/product/"+id,
        success:function(res){
            $('.name').html(res.name)
            $('.price').html(res.price)
            $('.describe').html(res.description)
            $('.picture').attr('src',"http://159.65.21.42:9000"+res.image)

        },
        error:function(err){
            console.log(err)
        }
    })
}
let url = location.href
let arr = url.split("=")
load(arr[1])


function populate(a){
	return `
	  <tr>
		  <th>${a.name}</th>
		  <th>${a.price}</th>
		  <th>${a.quantity}</th>
		  <th><img src="http://159.65.21.42:9000${a.image}" height="50" width="50"/></th>
		  <th>${a.description}</th>
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
		url:"http://159.65.21.42:9000/products",
		success: function(res){

			for(let i=0; i<res.length; i++){
				let x = res[i]
				if(x.category == "sneaker"){
					let product = populate(x)
					$("#products").append(product)
				}
			}
		},
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
        url:"http://159.65.21.42:9000/product/"+id,
        success: function(res){
            alert("Item deleted")
        },
        error: function(err){
            console.log(err)
        }
    })
    }

})
  
