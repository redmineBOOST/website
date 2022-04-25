function update_github_link() {
    const message_input = document.getElementById('github-contact-input-message');
    const message_input_error_description = document.getElementById('github-contact-input-message-error-description');
    const terms_input = document.getElementById('github-contact-input-terms')
    const terms_input_error_description = document.getElementById('github-contact-input-terms-error-description');
    var github_contact_button = document.getElementById('github-contact-submit');
    github_contact_button.onclick = function () {
        var valid = is_contact_form_valid(message_input, message_input_error_description) && is_checkbox_accepted(terms_input, terms_input_error_description);
        if (valid) {
            var github_location = parse_github_link(message_input);
            window.location.href = github_location;
        }
    };
}

function update_mail_link() {
    const message_input = document.getElementById('mail-contact-input-message');
    const message_input_error_description = document.getElementById('mail-contact-input-message-error-description');
    var mail_contact_button = document.getElementById('mail-contact-submit');
    mail_contact_button.onclick = function () {
        var valid = is_contact_form_valid(message_input, message_input_error_description);
        if (valid) {
            var mailto_location = parse_mailto_link(message_input);
            window.location.href = mailto_location;
        }
    };
}

function is_contact_form_valid(message_input, error_desc) {
    var valid = true;
    /* message is required */
    if (message_input.value == '') {
        message_input.classList.add('error');
        error_desc.classList.add('error');
        valid = false;
    }
    else {
        message_input.classList.remove('error');
        error_desc.classList.remove('error');
    }
    return valid;
}

function is_checkbox_accepted(checkbox_input, error_desc) {
    var valid = true;
    /* checkbox is required */
    if (checkbox_input.checked == false) {
        checkbox_input.classList.add('error');
        error_desc.classList.add('error');
        valid = false;
    }
    else {
        checkbox_input.classList.remove('error');
        error_desc.classList.remove('error');
    }
    return valid;
}

function parse_github_link(message_input) {
    const message = message_input.value.replace(/(?:\r\n|\r|\n)/g, '%0D%0A');
    return 'https://github.com/redmineBOOST/support/issues/new?labels=question&body=' + message;
}

function parse_mailto_link(message_input) {
    var message = message_input.value.replace(/(?:\r\n|\r|\n)/g, '%0D%0A');;
    var subject = '[redmineBOOST]'
    return 'mailto:redmineboost@hicknhack-software.com?subject=' + subject + '&body=' + message;
}

/* main */
document.addEventListener('DOMContentLoaded', function () {
    var github_contact_form = document.getElementById('github-contact-form');
    github_contact_form.addEventListener('change', function () {
        update_github_link();
    });
    update_github_link();

    var mail_contact_form = document.getElementById('mail-contact-form');
    mail_contact_form.addEventListener('change', function () {
        update_mail_link();
    });
    update_mail_link();
});
