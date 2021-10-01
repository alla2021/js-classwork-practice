$(function () {
  const accordionItem = $('li.accordion__item');

  // const items = document.querySelectorAll('.accordion__item');

  // console.log(`items`, items)


  // items.addEventListener('click', function() {

  // })

  accordionItem.on('click', function(event) {
    console.log(event)
    // console.log(`this`, this)
    const title = $(this).find('.accordion__item-title');
    const content = $(this).find('.accordion__item-content');

    content.hide(1000);

    console.log(title)
  })

  console.log(`accordionItem`, accordionItem)
});


// $(document).ready(function () {
//   console.log('Ready')
// });