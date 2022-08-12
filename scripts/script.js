const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const btnScrollToTop = document.querySelector("#btnScrollToTop");


navToggle.addEventListener("click", (event) => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
}

btnScrollToTop.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function sendEmail() {
    Email.send({
        SecureToken: "961923ba-c335-4ff2-bbb5-0b84807f7900",
        To : 'bogdan.mihailescu38@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Form inquiry",
        Body : "Name: " + getElementById("name").value +
                "<br> Email: " + getElementById("email").value +
                "<br> Tel: " + getElementById("number").value + 
                "<br> Message: " + getElementById("message").value
        }).then(
        message => alert("Message send succesfully!")
    );
}