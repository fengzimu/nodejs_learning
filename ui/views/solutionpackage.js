function loadSolutionPackages() {
  $.ajax('/api/packages', {
    success: function(packages) {
      packages.forEach(function(d) {
        appendPackage(d)
      })
    }
  })
}
function appendPackage(package) {
  $('#packageList').append(createPackageLi(package))
}
function createPackageLi(package) {
  return $(`<li id="${package.id}">
    <span>Solution Package Name: </span> <a href="#">${package.name}</a>
    <span><button onclick="showPackage(${package.id})">Detail</button></span>
   </li>`)
}

function showPackage(packageId) {
  $.ajax('/api/packages/' + packageId, {
    success: function(package) {
      showPackageDetail(package)
    }
  })
}

function showPackageDetail(package) {
  $('#showPackageDetail').html('')
  $('#showPackageDetail').append(
    $(`<div>Solution Package</div>
  <div>Name:  ${package.name}</div>
  <div>ID:  ${package.id}</div>
  <button onclick="removePackage(${package.id})">Remove</button><div>
  <div>
    <input id="updatePackageInput" type="text" />
  </div>
  <div>
    <button onclick="updateSolutionPackage(${package.id})">Update Solution Package</button>
  </div>
</div>`)
  )
}

function addSolutionPackage() {
  var $packageInput = $('#packageInput')
  $.ajax('/api/packages', {
    method: 'POST',
    data: {
      text: $packageInput.val()
    },
    success: function(package) {
      appendPackage(package)
      $packageInput.val('')
    }
  })
}

function updateSolutionPackage(id) {
  var $packageInput = $('#updatePackageInput')
  $.ajax(`/api/packages/${id}`, {
    method: 'PUT',
    data: {
      text: $packageInput.val()
    },
    success: function() {
      $packageInput.val('')
    }
  })
}

function removePackage(id) {
  $.ajax(`/api/packages/${id}`, {
    method: 'DELETE',
    success: function(resp) {
      removePackageLi(id)
      $('#showPackageDetail').html('')
    }
  })
}

function removePackageLi(feedbackId) {
  $(`#${feedbackId}`).remove()
}

loadSolutionPackages()
