$(function(){
  // Content navigation
  var content = $('#content') // Container of goodness
  content.find('section:not(.active)').hide()
  $('.nav-items a').click(function(){
    var $this = $(this)
      , selector    = $this.attr('href')
      , activated   = content.find(selector)
      , active      = activated.siblings('.active')
      , selected    = $('.nav-items a.selected')

    $this.addClass('selected')
    selected.removeClass('selected')

    active.fadeOut(function(){
      active.removeClass('active')
      activated.addClass('active').fadeIn()
      $.scrollTo(activated, 750);
    })
  })

  // Load page based on anchor/hash tag
  if(window.location.hash) $('.nav-items a[href="' + window.location.hash + '"]').click()
})
