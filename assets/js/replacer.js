function issue_date() {
    return new Date(Date.now());
}
function issue_number() {
    return 2;
}
function issue_subject() {
    return 'Example Issue';
}
function assignee() {
    return 'Kirk Rocket';
}
function tracker1_name() {
    return 'Bug';
}
function tracker2_name() {
    return 'Feature';
}
function project1_name() {
    return 'AI Shopping System';
}
function project2_name() {
    return 'Social Media Opinion Mining';
}
function project3_name() {
    return 'Redmine Hourglass';
}
function issue_notes() {
    return 'Lorem ipsum dolor…'
}
function issue_description() {
    return 'Example description'
}

function issue_due_date() {
    const days = 30; 
    // Date.now() gives the epoch date value (in milliseconds) of current date 
    return new Date( Date.now() + days * 24 * 60 * 60 * 1000)
}

function replace_issue_subjects() {
    const text_items = document.getElementsByClassName('issue-subject-text');
    for(e of text_items) {
        e.innerHTML = issue_subject();
    }
    const value_attribute_items = document.getElementsByClassName('issue-subject-attribute-value');
    for(e of value_attribute_items) {
        e.setAttribute('value', issue_subject());
    }
    
    const placeholder_attribute_items = document.getElementsByClassName('issue-subject-attribute-placeholder');
    for(e of placeholder_attribute_items) {
        e.setAttribute('placeholder', issue_subject());
    }
}

function replace_issue_numbers() {
    const text_items = document.getElementsByClassName('issue-number-text');
    for(e of text_items) {
        e.innerHTML = issue_number();
    }
};
function replace_assignee() {
    const text_items = document.getElementsByClassName('assignee-text');
    for(e of text_items) {
        e.innerHTML = assignee();
    }
};
function replace_tracker() {
    var text_items = document.getElementsByClassName('tracker-1-text');
    for(e of text_items) {
        e.innerHTML = tracker1_name();
    }
    text_items = document.getElementsByClassName('tracker-2-text');
    for(e of text_items) {
        e.innerHTML = tracker2_name();
    }
};

function replace_project() {
    var text_items = document.getElementsByClassName('project-1-text');
    for(e of text_items) {
        e.innerHTML = project1_name();
    }
    text_items = document.getElementsByClassName('project-2-text');
    for(e of text_items) {
        e.innerHTML = project2_name();
    }
    text_items = document.getElementsByClassName('project-3-text');
    for(e of text_items) {
        e.innerHTML = project3_name();
    }
}

function replace_notes() {
    const text_items = document.getElementsByClassName('note-text');
    for(e of text_items) {
        e.innerHTML = issue_notes();
    }
    
    const placeholder_attribute_items = document.getElementsByClassName('note-attribute-placeholder');
    for(e of placeholder_attribute_items) {
        e.setAttribute('placeholder', issue_notes());
    }
}

function replace_issue_description() {
    const text_items = document.getElementsByClassName('issue-description-text');
    for(e of text_items) {
        e.innerHTML = issue_description();
    }
    
    const placeholder_attribute_items = document.getElementsByClassName('issue-description-attribute-placeholder');
    for(e of placeholder_attribute_items) {
        e.setAttribute('placeholder', issue_description());
    }
}

function replace_issue_dates() {
    const text_items = document.getElementsByClassName('issue-date-text');
    for(e of text_items) {
        e.innerHTML = issue_date().getFullYear + '-' + issue_date().getMonth() + '-' + issue_date().getDay();
    }
};
function replace_issue_due_dates() {
    const text_items = document.getElementsByClassName('issue-due-date-text');
    const due_date = issue_due_date();
    for(e of text_items) {
        e.innerHTML = due_date.getFullYear() + '-' + String(due_date.getMonth() + 1).padStart(2, '0') + '-' + String(due_date.getDate()).padStart(2, '0') ;
    }
};

replace_issue_subjects();
replace_issue_numbers();
replace_issue_dates();
replace_issue_due_dates();
replace_issue_description();
replace_notes();

replace_assignee();
replace_tracker();
replace_project();
