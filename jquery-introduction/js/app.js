$('#instagram-form').submit(function(event) {
	event.preventDefault();
	var frm = $('#instagram-form');
	var username = frm.find("input[name='q']");	
	var error = false;
	
	console.log('Form Submitted');
	
	if(username.val() == '') {
		username.css('border-color','red');
		error = true;
	}

	if (!error) {
		//do my ajax here
		$.ajax({
			url:frm.attr('action'),
			type:frm.attr('method'),
			data:frm.serialize(),
			dataType: 'jsonp',
			success:function(data){
			for (var i = 0; i < 10; i++) {
				var i_username = data.data[i].username;
				var i_picture = data.data[i].profile_picture;
				var i_fullname = data.data[i].full_name;
				$('#instagram-users').append('<li><a href="https://instagram.com/' + i_username + '">' + i_fullname + '</a></li>');
				}
			},
			error:function(data){
				console.log(data);
			}
		});
	}
});


$('#username').keyup(function(){
	$('#instagram-form').trigger('submit');
})