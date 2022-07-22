$(document).ready(function(){
    $('#btn').click(function(){
        $('#text').select();
        document.execCommand('copy');
    });
});