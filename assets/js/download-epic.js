// Function to detect the user's operating system
function detectOS() {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) return "Android";
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
	if (/linux/i.test(userAgent)) return "Linux";
	if (/mac/i.test(userAgent)) {
		if (/intel/i.test(userAgent)) return "Mac OS (Intel-based)";
		if (/arm/i.test(userAgent)) return "Mac OS (Arm-based)";
	}
	if (/win/i.test(userAgent)) return "Windows";
	if (/windows phone/i.test(userAgent)) return "Windows Phone";

	return "Unknown";
}

// Function to trigger the download based on the detected OS
function downloadFile() {
	try {
		const userOS = detectOS();
		let downloadLink = "";

		switch (userOS) {
			case "Windows":
				downloadLink = "https://cdn.epicbrowser.com/winsetup/EpicSetup.exe";
				break;
			case "Mac OS (Intel-based)":
				downloadLink = "https://cdn.epicbrowser.com/macintel117/epic_117.0.5938.88.dmg";
				break;
			case "Mac OS (Arm-based)":
				downloadLink = "https://cdn.epicbrowser.com/macarm117/epic_117.0.5938.88.dmg";
				break;
			case "Android":
				downloadLink = "https://play.google.com/store/apps/details?id=com.epic.browser&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
				break;
			case "iOS":
				downloadLink = "https://apps.apple.com/us/app/epic-privacy-browser-w-vpn/id1502032811?mt=8";
				break;
			default:
				alert("Sorry, Epic is not yet available for your operating system.");
				return;
		}

		// Create and trigger a download link
		const link = document.createElement("a");
		link.href = downloadLink;
		if (userOS === "Android" || userOS === "iOS") link.target = "_blank";
		if (userOS === "Windows" || userOS === "Mac OS (Intel-based)" || userOS === "Mac OS (Arm-based)") link.download = true;
		link.click();
	} catch (err) {
		// Log error to console and alert user
		console.error(err);
		alert("Sorry, an error occurred.");
		return;
	}
}

// Call function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", downloadFile);
