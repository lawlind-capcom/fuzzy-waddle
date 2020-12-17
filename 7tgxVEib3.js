function pop_rip()
{
    var uid = '294038';
    var wid = '597544';
    var a11 = '//cdn.po';
    var b12 = 'pcash.net/show.js';
    var c21 = '//cdn2.po';
    var pop_tag = document.createElement('script');pop_tag.src=a11/*staying*/+/*alive*/b12;document.body.appendChild(pop_tag);
    pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src=c21/*just staying*/+/*alive*/b12;document.body.appendChild(pop_tag)};
    removeEventListener('touchmove', pop_rip);
};
if (document.referrer && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
{
    addEventListener('touchmove', pop_rip);
};
