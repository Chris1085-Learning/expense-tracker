function addDeleteEventListener() {
  // 選取所有的 deleteModal 為了尋找餐廳名稱及id
  const trashes = $('[data-target="#deleteModal"]')

  // for (let i = 0; i < trashes.length; i++) {
  //   trashes[i].addEventListener('click', function () {
  //     // 尋找餐廳名稱及id
  //     const restaurantName = trashes.closest('.restaurant').find('.card-title')[i].innerHTML
  //     const id = trashes.closest('.restaurant')[i].children[0].id

  //     // 更改 modal content並重新將form action link指向新的url
  //     $('#deleteContent').text('待刪除項目：' + restaurantName)
  //     $('#deleteForm').attr('action', `./restaurants/${id}?_method=DELETE`)
  //   })
  // }
}

addDeleteEventListener()

// $('.datepicker').datepicker()
function switchExpenseClass() {
  $('#incomeBtn').click('click', function () {
    $(this).removeClass('btn-outline-secondary').addClass('btn-outline-secondary')
    $('#expenseBtn').removeClass('active')
  })

  $('#expenseBtn').click('click', function () {
    $('#incomeBtn').removeClass('active')
    $(this).removeClass('btn-outline-secondary').addClass('btn-outline-secondary')
  })
}

$('.input-group.date').datepicker({
  endDate: '+0d',
  autoclose: true,
  language: 'zh-TW',
  format: 'yyyy/mm/dd',
  todayHighlight: true
})

switchExpenseClass()
