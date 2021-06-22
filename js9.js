//task1
// $("a[href='https://']").attr('target', '_blank');
//task2
// $('h2.head').attr('style', 'background:green;');
// $('h2.head .inner').attr('style', 'font-size:35px;');
//task3
// $('h3').before($('h3+div'));
//task4
 function check() {
    if ($('#checkbox').is(':checked')){
        $('#checkbox').prop('disabled',true)
    } 
   
 }
