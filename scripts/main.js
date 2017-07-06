$( document ).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var res = true;

    var input=$('#recipient-email');
    var errorbox1=$('#emailerror');
    var errorbox2=$('#intenterror');
    var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var is_email = $.trim(input.val()).match(re) ? true : false;
    if(is_email){
      res = true;
      errorbox1.hide();
    }
    else{
      res = false;
      errorbox1.show();
    }
    if($('[name="intent"]:checked').length > 0) {
      res = true;
      errorbox2.hide();
    }else{
      res = false;
      errorbox2.show();
    }
    if(res){
      $(this).off('submit').submit();
    };
  });
});
