$(document).ready(function(){
    $("select.Track").change(function(){
        var selectedTrack = $(this).track("option:selected").val();
       
    });
});
