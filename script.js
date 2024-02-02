function rotateCertificate(element) {
    element.classList.toggle('clicked');
}

const certificates = document.getElementsByClassName("certificate");
[...certificates].forEach(elem => {
    elem.addEventListener("click", function() {
        rotateCertificate(this);
    });
});
