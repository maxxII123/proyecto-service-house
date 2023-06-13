
//Esta funcion espera a que cargue el html, y después se ejecuta. Es necesaria SIEMPRE que manipules el html desde tu js
//revisa bien el codigo que copiaste, puede que algo más esté mañl
// a veces, hay algun codigo que solo podi correr así, es una lata, pero es lo primero que tienes que probar
        //si mal no recuerdo, tambien puede ser un import esto        
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }