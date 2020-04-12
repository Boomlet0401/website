import $ from 'jquery';


// input focus 
$('body').on('focusin', '.input_box input,.input_box select', function () {
    let inputBox = $(this).closest('.input_box');
    inputBox.addClass('active');
});
$('body').on('focusout', '.input_box input,.input_box select', function () {
    let inputBox = $(this).closest('.input_box');
    inputBox.removeClass('active');
});

$('body').on('click', "input:checkbox[name='type']", function () {
    var group = "input:checkbox[name='" + $(this).prop("name") + "']";
    $(group).prop("checked", false);
    $(this).prop("checked", true);
})






