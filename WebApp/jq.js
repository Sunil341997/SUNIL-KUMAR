$(document).ready(function () {
    $('#Submit').click(function () {
        debugger;

        var No1 = document.getElementById('Name').value;
        var No2 = document.getElementById('DOB').value;
        var No3 = document.getElementById('Address').value;
                   var params = {a: No1, b:No2, c:No3}

        $.ajax({
            cache: false,
            type: "POST",
            async: false,
            url: "http://localhost:1338/h/hellothere",
            data: params,
            contentType: "application/json; charset=ytf-8",
            dataType: "json",
            processData: true,
            success: function (result) {
                alert("data");
            },
            error: function (xhr, textStatus, errorThrown) { alert(textStatus + ':' + errorThrown); }
        });
    });
});