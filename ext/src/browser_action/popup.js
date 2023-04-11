document.querySelector("#durum").addEventListener("click", function () {
    if (document.getElementById('durum').checked) {
        chrome.storage.local.set({
            'email_blur_durum': "yes"
        });
        // localStorage.setItem("email_blur_durum","yes");

    } else {
        chrome.storage.local.set({
            'email_blur_durum': "no"
        });
        // localStorage.setItem("email_blur_durum","no");


    }
})

chrome.storage.local.get('email_blur_durum', function (data) {
    if (data.email_blur_durum === "yes")
        document.querySelector("#durum").checked = true;
    else
        document.querySelector("#durum").checked = false;

});