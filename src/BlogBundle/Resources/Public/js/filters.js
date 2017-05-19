//====================================================================
var rest = '/restaurants',
    banq = '/banquet',
    del = '/delivery';
if ((window.location.href == window.location.origin + rest) ||
    (window.location.href == window.location.origin + banq) ||
    (window.location.href == window.location.origin + del)) {
    localStorage.clear();
}
//====================================================================
var checkboxes = document.querySelectorAll('.form-check-input');

for (var i = 0; i < checkboxes.length; i ++) {
    if (localStorage.getItem(checkboxes[i].value) == "true") {
        checkboxes[i].setAttribute('checked','checked');
    }

}

//====================================================================
if (!localStorage.getItem('/restaurants')) {
    var currentUrl = window.location.href;
    localStorage.setItem('/restaurants', currentUrl);
}else {
    currentUrl = localStorage.getItem('/restaurants');
}

//====================================================================
var button = document.getElementsByClassName('btn btn-primary')[0];
var clear = document.getElementById('clear');

button.addEventListener('click',submit);
clear.addEventListener('click',clearFunc);

function submit() {
    var checkedValues = document.querySelectorAll('.form-check-input');
    var textInputs = document.querySelectorAll('.values');
    var valuesHitch = '';

    for (var i = 0; i < checkedValues.length; i ++) {
        if(checkedValues[i].checked) {
            localStorage.setItem(checkedValues[i].value, "true");
            for (var j = 0; j < textInputs.length; j ++) {
                if (checkedValues[i].value == textInputs[j].previousElementSibling.value && textInputs[j].value != false) {
                    valuesHitch+= '=' + textInputs[j].value;
                }
            }
            currentUrl += '/' + checkedValues[i].value + valuesHitch;
            valuesHitch = '';
        } else {
            localStorage.setItem(checkedValues[i].value, "false");
        }

    }

    window.location.replace(currentUrl);

}

function clearFunc() {
    localStorage.clear();
}
//===============