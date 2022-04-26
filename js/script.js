(function() {
    'use strict'

    const $BTN = document.querySelector('.btn');
    const $card = document.querySelector('.card');
    const $card2 = document.querySelector('.card2');
    const $imgTks = document.querySelector('.imgTks');

    const $nRatings = document.querySelectorAll('.nRating');
    const $textRating = document.querySelector('.textRating');
    const $hide = document.querySelector('.hide');


    // EVENTOS

    for (let i = 0; i < $nRatings.length; i++) {
        $nRatings[i].addEventListener("click", rating);
    }

    $BTN.addEventListener('click', change);
    $imgTks.addEventListener('click', refresh);

    $imgTks.addEventListener('mouseover', function () {
        $hide.style.opacity = '1'
    })

    $imgTks.addEventListener('mouseout', function () {
        $hide.style.opacity = '0'
    })




    //FUNÇOES

    function rating (e) {
        
        for (let x = 0; x < $nRatings.length; x++) {
            $nRatings[x].classList.remove('selected');
        }

        e.target.classList.add('selected')   
        $textRating.textContent = `You selected ${e.target.textContent} out of 5`
    }

    function change () {
        $card.style.display = "none";
        $card2.style.display = "block";
    }

    function refresh () {
        location.reload()  
    }

})();