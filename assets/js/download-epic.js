// Function to detect the user's operating system
function detectOS() {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) return "Android";
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
    if (/linux/i.test(userAgent)) return "Linux";
	if (/mac/i.test(userAgent)) return "Mac OS";
	if (/win/i.test(userAgent)) return "Windows";
	if (/windows phone/i.test(userAgent)) return "Windows Phone";
    
	return "Unknown";
}

// Function to trigger the download based on the detected OS
function downloadFile() {
	const userOS = detectOS();
	let downloadLink = "";

	switch (userOS) {
		case "Windows":
			downloadLink = "https://cdn.epicbrowser.com/winsetup/EpicSetup.exe";
			break;
		case "Mac OS":
			downloadLink = "https://cdn.epicbrowser.com/macarm117/epic_117.0.5938.88.dmg";
			break;
		default:
			alert("Sorry, we couldn't detect your operating system.");
			return;
	}

	// Create and trigger a download link
	const link = document.createElement("a");
	link.href = downloadLink;
	link.download = true;
	link.click();
}

// Call function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", downloadFile);
