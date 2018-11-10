AFRAME.registerComponent('handle-scene2', {
    init: function () {
        console.log('in ' + this.el.id + '::init()');
        this.gotoNextScene = this.gotoNextScene.bind(this);
        this.video = this.el.components.material.material.map.image;
    },
    play: function () {
        console.log('in ' + this.el.id + '::play() and attaching listeners');
        this.video.addEventListener('ended', this.gotoNextScene);
    },
    pause: function () {
        console.log('in ' + this.el.id + '::pause() and removing listeners');
        this.video.removeEventListener('ended', this.gotoNextScene);
    }, 
    gotoNextScene: function() {
        console.log('in ' + this.el.id + '::gotoNextScene(), VIDEO ended');

        // remove video control listeners
        document.querySelector('#scenes').pause();

        // show btn1
        document.querySelector('#btn2').setAttribute('visible', 'true');
    }
});
