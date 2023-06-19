window.onload = function () {
    stickyNavbar();
    jalaliDatepicker.startWatch({
        autoShow: false
    });
    const inputList = document.querySelectorAll("input[data-jdp]");
    for (i = 0; i < inputList.length; i++) {
        inputList[i].addEventListener('focus', function () {
            const defaults = {
                date: true,
                time: false,
                dayRendering: null
            };
            if (this.hasAttribute("data-jdp-option-1")) {
                jalaliDatepicker.updateOptions({
                    date: false,
                    time: true
                });
            } else if (this.hasAttribute("data-jdp-option-2")) {
                jalaliDatepicker.updateOptions({
                    date: true,
                    time: false,
                    dayRendering() {
                        return {isHollyDay: true};
                    }
                });
            } else {
                jalaliDatepicker.updateOptions(defaults);
            }
            jalaliDatepicker.show(this);
        });
    }
}
//convert english digits to persian
// const convertToPersianNumerals = event => {
//     // Get the typed value from the input
//     const typedValue = event.target.value;
//     // Replace each Arabic numeral with the corresponding Persian numeral
//     // Set the input value to the Persian numerals
//     event.target.value = typedValue.replace(/[0-9]/g, numeral => String.fromCharCode(numeral.charCodeAt(0) + 1728));
// };

//navbar
function stickyNavbar() {
    var navbar = document.querySelector('nav.navbar');     // Get the navbar
    var topOffset = navbar.offsetTop;     // Calculate the distance between the navbar and the page top
    window.onscroll = function() {        // Add a scroll listener to the window
        if (window.pageYOffset >= topOffset) {    // Check if the user has scrolled past the navbar
            navbar.classList.add('sticky-top');    // Add the 'sticky-top' class to the navbar
        } else {
            navbar.classList.remove('sticky-top'); // Remove the 'sticky-top' class from the navbar to restore its original position
        }
    };
}