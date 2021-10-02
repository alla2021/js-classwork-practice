$(function() {
  const accordionItem = $('li.accordion__item');

  accordionItem.on('click', function (event) {
    const content = $(this).find('.accordion__item-content');

    $('.accordion__item-content').not(content).slideUp(700).removeClass('active');

    if (content.hasClass('active')) {
      content.removeClass('active');
      content.slideUp(700);
    } else {
      content.addClass('active');
      content.slideDown(700);
    }
  });
});

