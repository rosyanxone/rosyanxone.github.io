// penggunaan jquery
$('#chk').change(() => {
    $('.mode-bg').toggleClass('dark-bg'); 
    $('.mode-text').toggleClass('light-text'); 
    $('.mode-img').toggleClass('light-img');
});