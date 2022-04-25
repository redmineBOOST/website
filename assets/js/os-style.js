function os_class () {
	if(hnh_platform.is_macos()) {
		return 'macos';
	}
	if(hnh_platform.is_windows()) {
		return 'windows';
	}
	if(hnh_platform.is_linux()) {
		return 'linux';
	}
	return 'generic';
}

function update_window_chrome() {
	const os_class_name = os_class();
	const os_items = document.getElementsByClassName('replace-os');
	for(e of os_items) {
		e.classList.add(os_class_name);
	}
}

/* main */
document.addEventListener('DOMContentLoaded', function () {
	update_window_chrome();
});