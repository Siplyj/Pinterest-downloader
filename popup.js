function click(e) {

	if (e.target.id == 'openImage') { // Open in new tab

		chrome.tabs.executeScript(null, {
			code: `
			if (document.location.href.includes('pinterest.com/pin/')) {
				window.open(document.getElementsByClassName("hCL")[2].src, "_blank")
			}`
		});

	} else if (e.target.id == 'searchByGoogle') { // Search by Google

		chrome.tabs.executeScript(null, {
			code: `
			if (document.location.href.includes('pinterest.com/pin/')) {
				let imgUrl = document.getElementsByClassName("hCL")[2].src;
				window.open('https://lens.google.com/uploadbyurl?url=' + imgUrl);
			} else if (document.location.href.includes('https://i.pinimg.com/')) {
				let imgUrl = document.location.href;
				window.open('https://lens.google.com/uploadbyurl?url=' + imgUrl);
			}`
		});

	} else if (e.target.id == 'searchByYandex') { // Search by Yandex

		chrome.tabs.executeScript(null, {
			code: `
			if (document.location.href.includes('pinterest.com/pin/')) {
				let imgUrl = document.getElementsByClassName("hCL")[2].src;
				window.open('https://yandex.ru/images/search?url=' + imgUrl + '&rpt=imageview');
			} else if (document.location.href.includes('https://i.pinimg.com/')) {
				let imgUrl = document.location.href;
				window.open('https://yandex.ru/images/search?url=' + imgUrl + '&rpt=imageview');
			}`
		});

	} else if (e.target.id == 'searchByBing') { // Search by Bing

		chrome.tabs.executeScript(null, {
			code: `
			if (document.location.href.includes('pinterest.com/pin/')) {
				let imgUrl = document.getElementsByClassName("hCL")[2].src;
				window.open('https://www.bing.com/images/search?view=detailv2&iss=sbi&q=imgurl:' + imgUrl);
			} else if (document.location.href.includes('https://i.pinimg.com/')) {
				let imgUrl = document.location.href;
				window.open('https://www.bing.com/images/search?view=detailv2&iss=sbi&q=imgurl:' + imgUrl);
			}`
		});
	} 

	window.close();
	
}

document.addEventListener('DOMContentLoaded', () => {
	let buttons = document.querySelectorAll('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', click);
	}
});