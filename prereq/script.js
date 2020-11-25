///////////////////////////
//      JavaScript       //
///////////////////////////

function hamburger() {

    document.getElementById('sp-navmenu').classList.toggle('in');
    document.getElementById('top').classList.toggle('top-line');
    document.getElementById('middle').classList.toggle('middle-line');
    document.getElementById('bottom').classList.toggle('bottom-line');
    document.getElementById('first-v-catch-hidden').classList.toggle('f-v-catch-hidden');
}


document.getElementById('hum').addEventListener('click', hamburger);
document.getElementById('sp-navmenu').addEventListener('click', hamburger);

const options = {
    threshold: ' 0.5'
}

const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll('.menu-item-img, .c-img');

targets.forEach(target => observer.observe(target));

function callback(entries) {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}


///////////////////////////
//        jQuery         //
//////////////////////////

$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$('#sp-navmenu a[href]').on('click', function (event) {
    $('#hum').trigger('click');
});


