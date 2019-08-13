$(document).ready(function() {
    $('form').submit(function(event){
        event.preventDefault();
        var data = $('#loginform').serialize();
        console.log(data);
        $.ajax({
            type: 'POST'
            , url: './something.php'
            , data: data
            , dataType: 'json'
            , success: function(d) {
                console.log(d);
            }
        })
    })

})