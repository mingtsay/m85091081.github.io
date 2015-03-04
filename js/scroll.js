(function() {
    var bodyRect = document.body.getBoundingClientRect(),
        targets = document.getElementById('main').getElementsByTagName('li'),
        eventListener = function(e) {
            for (var i = 0; i < targets.length; ++i) {
                var target = targets[i];
                target.className = target.getBoundingClientRect().top < 0 ? 'past' : '';
            }
        };
    setInterval(eventListener, 1000);
}());
