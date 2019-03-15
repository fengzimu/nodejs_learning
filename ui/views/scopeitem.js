function loadSivs() {
  $.ajax('/api/scopeitems', {
    success: function(scopeitems) {
      scopeitems.forEach(function(d) {
        appendSiv(d)
      })
    }
  })
}

function appendSiv(siv) {
  $('#sivsList').append(createSivLi(siv))
}

function createSivLi(siv) {
  return $(`<li id="${siv.id}">
    <span>Scope Item Name: </span> <a href="#">${siv.name}</a>
    <span><button onclick="showSiv(${siv.id})">Detail</button></span>
   </li>`)
}

function showSiv(sivId) {
  $.ajax('/api/scopeitems/' + sivId, {
    success: function(siv) {
      showSivDetail(siv)
    }
  })
}

function showSivDetail(siv) {
  $('#showSivDetail').html('')
  $('#showSivDetail').append(
    $(`<div>Scope Item</div>
  <div>Name:  ${siv.name}</div>
  <div>ID:  ${siv.id}</div>
  <button onclick="removeSiv(${siv.id})">Remove</button><div>
  <div>
    <input id="updateSivInput" type="text" />
  </div>
  <div>
    <button onclick="updateSiv(${siv.id})">Update SI</button>
  </div>
</div>`)
  )
}

function addSiv() {
  var $sivInput = $('#sivInput')
  $.ajax('/api/scopeitems', {
    method: 'POST',
    data: {
      text: $sivInput.val()
    },
    success: function(siv) {
      appendSiv(siv)
      $sivInput.val('')
    }
  })
}

function updateSiv(id) {
  var $updateSivInput = $('#updateSivInput')
  $.ajax(`/api/scopeitems/${id}`, {
    method: 'PUT',
    data: {
      text: $updateSivInput.val()
    },
    success: function() {
      loadSivs()
      $updateSivInput.val('')
    }
  })
}

function removeSiv(id) {
  $.ajax(`/api/scopeitems/${id}`, {
    method: 'DELETE',
    success: function(resp) {
      removeSivLi(id)
      $('#showSivDetail').html('')
    }
  })
}

function removeSivLi(sivId) {
  $(`#${sivId}`).remove()
}

loadSivs()
