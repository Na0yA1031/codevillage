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



function header_1() {
    const scrollY = window.pageYOffset;


    if (scrollY > 832) {
        document.getElementById('hd-logo').classList.add('hidden');
        document.getElementById('header').classList.add('hd-bgc');
    } else {
        document.getElementById('hd-logo').classList.remove('hidden');
        document.getElementById('header').classList.remove('hd-bgc');
    }
}
function header_2() {
    const scrollY = window.pageYOffset;


    if (scrollY > 600) {
        document.getElementById('hd-logo').classList.add('hidden-2');
        document.getElementById('header').classList.add('hd-bgc-2');
    } else {
        document.getElementById('hd-logo').classList.remove('hidden-2');
        document.getElementById('header').classList.remove('hd-bgc-2');
    }
}






document.addEventListener('scroll', header_1);
document.addEventListener('scroll', header_2);
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
        var headerHight = 70;
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$('#sp-navmenu a[href]').on('click', function (event) {
    $('#hum').trigger('click');
});


