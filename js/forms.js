(function(){

    var inputs = document.getElementsByTagName('input');


    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', toggle_label);
    }

})();

function toggle_label() {
    if (this.value != "" ) {
        if (!this.classList.contains('active')) {
            console.log('active');
            this.classList.add('active');
        }
    } else {
        if (this.classList.contains('active')) {
            console.log('inactive');
            this.classList.remove('active');
        }
    }
}
