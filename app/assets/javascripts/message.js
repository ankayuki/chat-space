$(function(){
  function buildHTML(message){
    var insertImage = ' ';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    };
    var html = `<div class="message" data-id='messsage.id'>
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <div class="lower-message__image">
                      ${insertImage}
                    </div>
                  </div>
                </div>`;
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.form__new-message__submit-button').prop('disabled', false);
      var $messages = $('.messages');
      $messages.animate({
        scrollTop: $messages[0].scrollHeight
      }, 1500);
    })
    .fail(function(){
        alert('error')
        $('.form__new-message__submit-button').prop('disabled', false);
    })
  })
  var reloadMessages = function() {
    var last_message_id = $('.message:last').data('message-id')
    var group_id = $('.message').data('group-id')
    $.ajax({
      url: "/groups/"+group_id+"/api/messages",
      type: "GET",
      dataType: 'json',
      data: {id: last_message_id},
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 5000);
});

