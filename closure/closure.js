(function () {
    var i = 1;

    window.onload = function () {
        alert(i);
    }

    i = 2;

})();

//browser will alert 2 since scope is being return to outer function before termination

