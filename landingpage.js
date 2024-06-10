
document.getElementById('id1').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('id2').addEventListener('click', function() {
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('b').addEventListener('click', function() {
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('b1').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});