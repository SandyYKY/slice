// JavaScript Document
const showMoreBtn = document.querySelector('.show-more-btn');
const hideNews = document.querySelector('.hideContent');
const mainWrapper = document.querySelector('.main-wrapper');

showMoreBtn.addEventListener('click',showAll);

function showAll(){
	hideNews.style.display = 'block';
	/*count = count + 1 ;//変数の再設定
	outputObject.innerHTML = count;
	
	console.log( count === 10 );
	if( count === 10 ){
		window.alert('10 count!!');*/
	}