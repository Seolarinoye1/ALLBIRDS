let put = $('#email_login').val()
$('#login').click(function () {
  if ($('#email_login').val() == "" || $('#password').val() == "") {
    $('#msg').html("Username or password cannot be empty")
    $('#imsg').html("Username or password cannot be empty")
    console.log(put)
  } else {
    $('#msg').html('')
    $('#imsg').html('')
    console.log(put)
    $.ajax({
      url: "http://159.65.21.42:9000/login",
      type: "POST",
      data: {
        "email": $('#email_login').val(),
        "password": $('#password').val()
      },
      success: function (res) {
        if (res.error) {
          $('#msg').html(res.error)
          $('#imsg').html(res.error)
        } else {
          $('#imsg').html("Login Successful")
          $('#msg').html("Login Successful")
          localStorage.setItem("user", JSON.stringify(res))
        }

      },
      error: function (err) {
        console.log(err.statusCode)
        $('#msg').html(err)
        $('#imsg').html(err)
      }
    })
  }
})

$('#register').click(function () {
  if ($('#passwd').val() == "" || $('#mail').val() == "") {
    $('#confirm').html("Password and email is required")
  } else {
    $('#confirm').html('')


    $.ajax({
      type: "post",
      url: "http://159.65.21.42:9000/register",
      data: {
        "name": $('#fname').val(),
        "phone": $('#phone').val(),
        "email": $('#mail').val(),
        "password": $('#passwd').val(),
        // "confirmpassword": $('#confirmpwd').val(),
      },
      success: function (res) {
        if (res.error) {
          $('#display').html(res.error)

        } else {
          $('#display').html("User Created")

        }
      },
      error: function (err) {

      }
    })
  }

})










// let mail = document.getElementById('err_email_login')
// let pwd = document.getElementById('err_password')
// let validate = document.getElementById("validatebtn");



// validate.onclick = function () {
//     if (email_login.value == ""){
//         mail.innerHTML = "This field cannot be empty!"
//         }else{
//         mail.innerHTML = ""
//     }if(password.value == ""){
//         pwd.innerHTML ="This field cannot be empty!" 
//         }else{
//         pwd.innerHTML ="" 
//         }
// }       



// function myFunction(){
//     document.getElementsByClassName("pre-btn", "nxt-btn").onclick("slides")
// }
// window.onclick = function(slide){
//     if(slide.target.matches('.slider')
//     ){
//         let Sliders = document.getElementsByClassName("slider");
//         let i;
//         for(i=0; i<Sliders.length; i++){
//             let sliding = Sliders[i];
//             if(sliding.scroll.contains('slide')){
//                 sliding.scroll.remove('slide')
//             }
//         }
//     }
// }


function render(data) {
  return `
  <div class="slide1">
                  <div class="slider-img">
                    <a href="productpage.html?id=${data._id}"><img src="http://159.65.21.42:9000${data.image}" alt=""></a>
                  </div>
                  <div class="slider-info">
                    <h6>${data.name}</h6>
                    <p>${data.description}</p>
                    <p>$${data.price}</p>
                    <div class="sizes">
                        <h6> Quick add</h6>
                        <input type="button" value="8">
                        <input type="button" value="9">
                        <input type="button" value="10">
                        <input type="button" value="11">
                        <input type="button" value="12">
                        <input type="button" value="13">
                        <input type="button" value="14">
                    </div>
                  </div>
  </div>
  `
}

function load() {
  $.ajax({
    type: "get",
    url: "http://159.65.21.42:9000/products",
    success: function(res){
      for(let i=0;i<res.length;i++){
        let d=res[i]
        if(d.category == "sneaker"){
          let product = render(d)
          $(".get_data").append(product)
        }
      }
    },

  })
}

load()