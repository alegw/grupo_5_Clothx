    let formulario2 = document.querySelector("form.reservation2");

    formulario2.addEventListener("submit", function(e){
        let errores = [];

        /* ERRORES CAMPO NOMBRE DEL PRODUCTO */
        let inputName1 = document.getElementById("name");
        if (inputName1.value == "") {
            errores.push("Debes introducir un nombre de producto ");
        }else if (inputName1.value < 2){
            errores.push("El campo nombre debe tener al menos 2 caracteres");
        } 

        /* ERRORES CAMPO DESCRIPCION DE PRODUCTO */
        let descriptionProducto = document.getElementById('description');
        if (descriptionProducto.value == "") {
        errores.push("Debes introducir una descripcion");
        }else if (descriptionProducto.value < 2){
        errores.push("El campo descripcion debe tener al menos 2 caracteres");
        } 

        /* ERRORES CAMPO COLOR */
        let inputColor = document.getElementById("color");
        if (inputColor.value == "") {
        errores.push("Debes introducir un color válido ");
        }else if (inputColor.value < 2){
        errores.push("El campo color debe tener al menos 2 caracteres");
        } 
        
        /* ERRORES CAMPO PRECIO */
        let inputPrecio = document.getElementById("price");
        if (inputPrecio.value == "") {
        errores.push("Debes introducir un precio válido ");
        }else if (inputPrecio.value < 2){
        errores.push("El campo precio debe tener al menos 2 caracteres");
        }   

        /*ERRORES CAMPO IMAGEN */
        let inputImage = document.getElementById('image');
        let image = inputImage.value;
        let extensionesValidas = [".jpg", ".png", ".gif" ];
        let fileExtension = image.substring(image.lastIndexOf('.'),image.length);
        console.log(fileExtension) 

        if (inputImage.value == "") {
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


