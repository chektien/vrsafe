AFRAME.registerComponent('handle-btn2', {
    init: function() {
        this.gotoRealLecture = this.gotoRealLecture.bind(this);
        this.pause();
    },
    play: function () {
        this.el.addEventListener('click', this.gotoRealLecture); 
    },
    pause: function () {
        this.el.removeEventListener('click', this.gotoRealLecture); 
    },
    gotoRealLecture: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log("in window.gotoRealLecture()");

            // simply goto youtube link
            window.location.href = './3.html'; 
        }
    }
});

