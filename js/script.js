'use strict';

$.ajaxSetup({ async: true });

function ajax(options) {
    return new Promise(function (resolve, reject) {
        $.ajax(options).done(resolve).fail(reject);
    });
}

$(function () {

    // Set filter and load articles
    if (document.location.hash) {
        Platform.setFromHash();
    } else {
        Platform.active = Platform.initial;
    }

    // Load preferences from Local Storage
    Preferences.loadInitialFilter();
    Preferences.loadActiveProviders();

    $(".page-header li").on('click', function () {
        Platform.active = $(this).attr('id').replace("filter-", "");
    });

    // Platform settings
    $(".settings-group input[type='radio']").on('click', function () {
        Platform.initial = $(this).attr("id").replace("input-radio-", "");
    });

    // Provider settings
    $(".checkbox-group").click(function () {
        var $checkbox = $(this).find(":checkbox");
        var provider = $(this).attr("id").replace("input-check-", "");
        var isChecked = $checkbox.is(":checked");

        $checkbox.prop("checked", !isChecked);
        Preferences.saveActiveProvider(provider, isChecked);
    });

    $('.checkbox-group :checkbox').click(function () {
        $(this).parent('.checkbox-group').click();
    });

    $("#settingsButton").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".header-hidden").slideToggle({ easing: "easeInOutQuint", duration: 1000 });
    });
});

//# sourceMappingURL=script.js.map