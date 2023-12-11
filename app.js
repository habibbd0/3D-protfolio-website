// turn page when click next or prev button 
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
	el.onclick = () => {
		const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

          if (pageTurn.classList.contains('turn')) {
			pageTurn.classList.remove('turn');
			setTimeout( () => {
				pageTurn.style.zIndex = 20 - index;
			},500);
		  }
		  else {
			pageTurn.classList.add('turn');
			setTimeout( () => {
				pageTurn.style.zIndex = 20 + index;
			},500);
		  }
	   }
})

// contact me button click 
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
	pages.forEach((page, index) => {
		setTimeout(() => {
			page.classList.add('turn');

			setTimeout(() => {
			  page.style.zIndex = 20 + index;
			}, 500)
			
		}, (index + 1) * 200 + 100)
	})
}

// create reverse index function 
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
	pageNumber--;
	if (pageNumber < 0) {
		pageNumber = totalPages - 1;
	}
}

// back profile button when click 
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
	pages.forEach((_, index) => {
		setTimeout(() => {
			reverseIndex();
			pages[pageNumber].classList.remove('turn');

			setTimeout(() => {
				reverseIndex();
				pages[pageNumber].style.zIndex = 10 + index;
			}, 500)
		}, (index + 1) * 200 + 100)
			
		
	})
}

// opening animation 
const coverRight = document.querySelector('.cover.cover-right');
const pegeLeft = document.querySelector('.book-page.page-left');

// opening animation (cover right animation)
setTimeout(() => {
	coverRight.classList.add('turn');
}, 2500)

setTimeout(() => {
	coverRight.style.zIndex = -1;
}, 3000)

// opening animation (cover right animation)
setTimeout(() => {
	pegeLeft.style.zIndex = -10;
}, 3800)


// opening animation (all right page animation)
pages.forEach((_, index) => {
	setTimeout(() => {
		reverseIndex();
		pages[pageNumber].classList.remove('turn');

		setTimeout(() => {
			reverseIndex();
			pages[pageNumber].style.zIndex = 10 + index;
		}, 500)
	}, (index + 1) * 200 + 2500)
		
	
})