function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(() => resolve(), milliseconds));
}

async function animate_lines(milliseconds) {
    const console_window = document.getElementById('redmine-boost-console-window');
    const lines = console_window.getElementsByTagName('div')
    for(line of lines) {
        await sleep(milliseconds);
        line.classList.add('visible');
    }
}
/* main */
animate_lines(400);
