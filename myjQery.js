var a=0;// variable for count comment
var view=[];    //create array
$(document).ready(function ()
{
    $('#btn').click(function () {                                     //on click button call this jquery function

        name=$('#responser').val();                                    //retrive name of responder
        value=$('#textresponse').val();                                 // text value of textarea

        view[a] = "<tr><td>Respond from:"+name +"</td><td><p>"+ value + "</p></td></tr>";    //insert into array
        a++;                                                            // count comment and also for array increment
        $('#count').html(a);                                            //display number of comment on html element

        $('#comment').html(view.toString());                            //display content of array
        $('#responser').val('');
        $('#textresponse').val('');                                       //clear text area after responding
    });

});