var sliderLeft = document.body.querySelector('.GalleryButton-Back');
sliderLeft.addEventListener('mouseover', (e) => {
	e.currentTarget.style.backgroundColor = '#ab8b52';
	console.log(e.currentTarget.children[0]);
	e.currentTarget.children[0].src = './images/arrow-white-b.png';
	console.log(e.currentTarget.children[0]);
});
sliderLeft.addEventListener('mouseout', (e) => {
	e.currentTarget.style.backgroundColor = '#fff';
	e.currentTarget.children[0].src = 'file:///C:/Projects/Castello/images/arrow-back.png';
});

var sliderRight = document.body.querySelector('.GalleryButton-Forward');
sliderRight.addEventListener('mouseover', (e) => {
	e.currentTarget.style.backgroundColor = '#ab8b52';
	e.currentTarget.children[0].src = 'file:///C:/Projects/Castello/images/arrow-white-f.png';
});
sliderRight.addEventListener('mouseout', (e) => {
	e.currentTarget.style.backgroundColor = '#fff';
	e.currentTarget.children[0].src = 'file:///C:/Projects/Castello/images/arrow-forward.png';
});

var toggleMenu = document.body.querySelector('.MobileMenuIcon');
toggleMenu.onclick = () => {
	let menuTarget = document.querySelector('.Mobile-Menu');
	menuTarget.classList.toggle('MobileMenu-Show');
}
