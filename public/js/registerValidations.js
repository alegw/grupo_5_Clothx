window.addEventListener('load', function(){
    let formulario = document.querySelector("form.reservation");

    formulario.addEventListener("submit", function(e){
        let errores = [];

        /* ERRORES CAMPO NOMBRE */
        let inputName = document.getElementById("name");
        if (inputName.value == "") {
            errores.push("Debes introducir un nombre ");
        }else if (inputName.value < 2){
            errores.push("El campo nombre debe tener al menos 2 caracteres");
        } 

        /* ERRORES CAMPO APELLIDO */
        let inputLastName = document.getElementById('last_name');
        if (inputLastName.value == "") {
        errores.push("Debes introducir un apellido ");
        }else if (inputLastName.value < 2){
        errores.push("El campo apellido debe tener al menos 2 caracteres");
        } 

        /* ERRORES CAMPO EMAIL */
        let inputEmail = document.getElementById("email");
        if (inputEmail.value == "") {
        errores.push("Debes introducir un email válido ");
        } 
        
        /* ERRORES CAMPO CONTRASEÑA */
        let inputPassword = document.getElementById('password');
        if (inputPassword.value == "") {
        errores.push("Debes introducir una contraseña");
        }else if (inputLastName.value < 2){
        errores.push("El campo contraseña debe tener al menos 2 caracteres");
        }  

        /*ERRORES CAMPO IMAGEN */
        let inputAvatar = document.getElementById('avatar');
        let avatar = inputAvatar.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = avatar.substring(avatar.lastIndexOf('.'),avatar.length);
        console.log(fileExtension) 

        if (inputAvatar.value == "") {
        errores.push("Debes introducir una imagen");
        }else if (!extensionesValidas.includes(fileExtension)){
        errores.push(`Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}`)
        }   

        if (errores.length > 0){
            e.preventDefault();
            let UlErrores = document.querySelector('div.errores ul');
            for (let i = 0 ; i < errores.length ; i++ ){
                UlErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    })
})