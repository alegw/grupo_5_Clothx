window.onload = function(){
    
    let formulario = document.getElementById("formulario");
    let inputName = document.getElementById("name");
    let inputLastName = document.getElementById('last_name');
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById('password');
    let inputAvatar = document.getElementById('avatar');

    let nameErrors = document.getElementById("nameErrors");
    let lastNameErrors = document.getElementById('lastNameErrors');
    let emailErrors = document.getElementById("emailErrors");
    let passwordErrors = document.getElementById('passwordErrors');
    let avatarErrors = document.getElementById("avatarErrors");
    

    formulario.addEventListener("submit", function(e){
        
        e.preventDefault();
        
        // Se inicializan los Arr de errores -------------
        let nameErrorsAcu = 0;
        let lastNameErrorsAcu = 0;
        let emailErrorsAcu =0;
        let passwordErrorsAcu = 0;
        let avatarErrorsAcu = 0;

        // Se definen las validaciones -------------

        // Validaciones de Name
        if (inputName.value === "") {
            nameErrors.innerHTML = "";
            nameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre " + '</li>';
            nameErrorsAcu++;
        }else if (inputName.value.length < 2) {
            nameErrors.innerHTML = ""
            nameErrorsAcu++;
            nameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un nombre mas largo" + '</li>'
        }else {
            nameErrors.innerHTML = "";
            nameErrorsAcu = 0;
        }

        // Validaciones de Last Name
        if (inputLastName.value === "") {
            lastNameErrors.innerHTML = "";
            lastNameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un apellido " + '</li>';
            lastNameErrorsAcu++;
        }else if (inputName.value.length < 2) {
            lastNameErrors.innerHTML = ""
            lastNameErrorsAcu++;
            lastNameErrors.innerHTML += '<li class="feedback">' + "Debes introducir un apellido mas largo" + '</li>'
        }else {
            lastNameErrors.innerHTML = "";
            lastNameErrorsAcu = 0;
        }

        // Validaciones de Email

        if (inputEmail.value === "") {
            emailErrors.innerHTML = "";
            emailErrors.innerHTML += '<li class="feedback">' + "Debes introducir un email" + '</li>';
            emailErrorsAcu++;
        
        }else {
            emailErrors.innerHTML = "";
            emailErrorsAcu = 0;
        }

        // Validaciones de Password
        if (inputPassword.value === "") {
            passwordErrors.innerHTML = "";
            passwordErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
            passwordErrorsAcu++;
        }else if (inputPassword.value.length < 3) {
            passwordErrors.innerHTML = ""
            passwordErrorsAcu++;
            passwordErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña mas larga" + '</li>'
        }else {
            passwordErrors.innerHTML = "";
            passwordErrorsAcu = 0
        }

                
        // Validaciones de Avatar
        let avatar = inputAvatar.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = avatar.substring(avatar.lastIndexOf('.'),avatar.length);
        console.log(fileExtension) 
        
        if (inputAvatar.value === "") {    
            avatarErrors.innerHTML = "";
            avatarErrors.innerHTML += '<li class="feedback">' + "Debes introducir una imagen" + '</li>';
            avatarErrorsAcu++;
        }else if (!extensionesValidas.includes(fileExtension)){
            avatarErrors.innerHTML = "";
            avatarErrors.innerHTML += '<li class="feedback">' + `Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}` + '</li>';
            avatarErrorsAcu++;
        }else {
            avatarErrors.innerHTML = "";
            avatarErrorsAcu = 0;
        }

        // Se suman los acumuladores de errores ------------------
        let AcuErrors =
        nameErrorsAcu +
        lastNameErrorsAcu +
        emailErrorsAcu +
        passwordErrorsAcu +
        avatarErrorsAcu; 


        // Si no hay errores se hace el submit del formulario
        if (AcuErrors === 0) {
            formulario.submit();
        }
    })
}
