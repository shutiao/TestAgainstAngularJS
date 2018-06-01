$('#JS-2-1').on('click', 'button', function(event){
    event.preventDefault();
    var el = $('#JS-2-1');
    var httpMethod = el.find('select[name="httpMethod"]').val(),
        upstream_protocol = el.find('select[name="upstream_protocol"]').val(),
        upstream_ip = el.find('input[name="upstream_ip"]').val(),
        upstream_port = el.find('input[name="upstream_port"]').val(),
        relative_path = el.find('input[name="relative_path"]').val();
    var absolute_path = upstream_protocol + upstream_ip + upstream_port + relative_path;

    console.log(absolute_path);
    $.ajax({
        method: httpMethod || 'GET',
        url: absolute_path,
        dataType: "application/json",
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
        }
    })
})

document.getElementById('JS-2-2').addEventListener('click', function(event){
    event.preventDefault()
});

var JS_2_2 = function(){
    if (typeof XMLHttpRequest == 'undefined'){
        alert("Your browser doesn't support XMLHttpRequest");
        return;
    }

    var xhr = new XMLHttpRequest();
    var uri = $('#JS-2-2').find('input[name="remoteAddress"]').val(),
        method = $('#JS-2-2').find('select[name="httpMethod"]').val();

    if (xhr){
        xhr.open(method, uri);
        xhr.send(null);
    }

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                var responseText = JSON.parse(xhr.responseText);
                updateHeaderWell(responseText);
            }
            else{
                $('#body').text(xhr.responseText);
            }
        }
    }

}

function updateHeaderWell(reqPkg){
    // Update Request Line
    $('#line').text(reqPkg.reqLine);
    // Update Request Headers
    transformJSON2HTML(reqPkg.headers, '#headers');
    // Update Request Body
    transformJSON2HTML(reqPkg.body, '#body');
}

function transformJSON2HTML(object, selector){
    var divHeader = $(selector).parent().find('h4');
    divHeader.text('Ajax Request ' + selector.charAt(1).toUpperCase() + selector.slice(2));
    $(selector).empty();
    var liArray = [];
    for (var key in object) {
        var li = $('<li></li>');
        var label = $('<label></label>');
        label.text(key);
        label.appendTo(li);
        var p = $('<p></p>');
        p.text(object[key]);
        p.appendTo(li);
        liArray.push(li);
    }
    $(selector).html(liArray);
}

$.fn.updateCaseID = function() {
    this.each(function(){
        var idArray = $(this).attr('zendao-case').split(',');
        var idString = idArray.map(function(id, index){
            if (index == 0){
                return '#' + id;
            }
            else {
                return ' #' + id;
            }
        })
        caseIDHTML = ' (' + idString +') ';
        $(this).find('h4').find('.caseID').text(caseIDHTML);
        })
}

$(document).ready(function() {
    $('.caseModule').updateCaseID();
})