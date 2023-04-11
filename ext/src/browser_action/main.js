chrome.storage.local.get('email_blur_durum', function (data) {
    if (data.email_blur_durum === "yes")
        console.log('Extension activated!');
        // if (document.querySelector("#polymer-app") || document.querySelector("#masthead") || window.Polymer) {
        //     justDoIt()
        //     setInterval(function () {
        //         justDoIt()
        //     }, 400);
        // }

});
