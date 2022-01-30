const puppeteer = require("puppeteer");
// puppeteer's every function returns promise. Therefore it will be a great learning experienec to deal to with Async Js.
// Puppeteer by default runs a headless browser, it means it is hidden and we can open it using headless:false.
// Puppeteer lib downloads chromium browser for testing its automation.

let currPage;
console.log("Before");
const browserOpenpromise = puppeteer.launch({ 
	headless: false,
	slowMo: true,
	defaultViewport: null,
	args:["--start-maximized"]
 });

browserOpenpromise
	.then(function (browser) {
		// console.log("Browser Openned")
		// Currently Openned Tabs
		const pageArrpromise = browser.pages();
		return pageArrpromise;
	})
	.then(function (browserPages) {
		currPage = browserPages[0];
		let gotoPromise = currPage.goto("https://www.google.com/");
		return gotoPromise;
	}).then(function(){
		// Waiting for element to appear on the page
		let elementWaitPromise = currPage.waitForSelector("input[type='text']", {visible:true});
		return elementWaitPromise;
	})
	.then(function () {
		//console.log("reached google home page");
		// Types any element on the page, done using the help of css selectors. By doing inspect element.
		let keysWillBeSendPromise = currPage.type("input[type='text']", "pepcoding")
		return keysWillBeSendPromise;
	}).then(function () {
		// page.keyboard is used to type Special Characters.
		let enterWillBePressed = currPage.keyboard.press("Enter")
		return enterWillBePressed;
	}).then(function(){
		// before
		let elemWaitPromise = currPage.waitForSelector("h3.LC20lb.DKV0Md", {visible:true})
		return elemWaitPromise;
	}).then(function(){
		// Mouse click
		let clickedPromise = currPage.click("h3.LC20lb.DKV0Md")
		return clickedPromise;
	})
	
	.catch(function (err) {
		console.log("error", err);
	})

console.log("After");
