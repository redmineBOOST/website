function render_download_url(baseurl, version, platform, withTutorial) {
	if (baseurl.trim().endsWith('/') === false) {
		baseurl = baseurl + '/';
	}
	var url = withTutorial ? 
	`${baseurl}v${version}/redmineBOOST_v${version}_with-tutorial_${platform}.zip` :
	`${baseurl}v${version}/redmineBOOST_v${version}_${platform}.zip`;
	return url;
}

function set_download_urls(withTutorial) {
	var downloadElements = document.querySelectorAll('.downloads a');

	for(downloadElement of downloadElements) {		
		var baseurl = downloadElement.dataset.baseurl;
		var version = downloadElement.dataset.version;
		var platform = downloadElement.dataset.platform;
		downloadElement.href = render_download_url(baseurl, version, platform, withTutorial);
	}
}

/* main */
document.addEventListener('DOMContentLoaded', function () {
	set_download_urls(false);
});