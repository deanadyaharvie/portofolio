var input_text = document.querySelector('#input_text');
        var input_password = document.querySelector("#input_password");
        var error_msg = document.querySelector(".error_msg");
        var form = document.querySelector("#submit_form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if(input_text.value.length < 1) {
                error_msg.style.display = "inline-block";
                input_text.style.border = "1px solid #f74040";
                return false;
            }

            if (input_password.value.length<1){
                error_msg.style.display="inline-block";
                input_password.style.border="1px solid #f74040";
                return false;
            }

            error_msg.style.display="none";
            alert("Login Successfully");
        });

        var input_fields = document.querySelectorAll(".input");

        input_fields.forEach(function (input_item) {
            input_item.addEventListener("input", function () {
                if (input_item.value.length > 0) {
                    input_item.style.border = "1px solid #1dbf73";
                } else {
                    input_item.style.border = "1px solid #f74040";
                }
            })
        })