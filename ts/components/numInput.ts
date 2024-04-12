export const numInput = () => {
  // Nominate the containing selector
  var parentSelector = jQuery('.quantity')

  // If it's on the page
  if (parentSelector.length) {
    // Get the original HTML
    var numberInputs = parentSelector.html()
    // Plus button
    var btnMore = '<button class="more">+</button>'
    // Minus button
    var btnLess = '<button class="less">-</button>'
    // Append it all
    parentSelector.prepend(btnLess)
    parentSelector.append(btnMore)

    // increase or decrease the count
    jQuery('.more, .less').on('click', function (e) {
      e.preventDefault()

      var counter = e.currentTarget.classList.contains('more')
        ? jQuery(this).prevAll('input.qty[type="number"]')
        : jQuery(this).nextAll('input.qty[type="number"]')

      var counterVal: any = counter.val()

      if (jQuery(e.target).hasClass('more')) {
        counterVal++
      } else if (counterVal > 0) {
        counterVal--
      }

      counter.val(counterVal)
    })
  }
}
