$(document).ready(function(){
    
    
    setInterval(function(){
        
    $('.putScore').html(score);
        
    $('.putLines').html(lines);
        
    $('.putLevel').html(level);
        
    $('.putImage').html("<img src="+imgNext+" height='90' width='150'>");
        
    },1);

});