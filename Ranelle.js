/* JavaScript extracted from inline <script> in Ranelle.html */

// Navigation smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});

// Case study navigation
function showCase(caseId) {
	// Hide all case studies
	document.querySelectorAll('.case-study').forEach(cs => {
		cs.classList.remove('active');
	});
	// Show selected case study
	document.getElementById(caseId).classList.add('active');
	// Scroll to top
	window.scrollTo({ top: 0, behavior: 'smooth' });
	// Hide main nav
	document.getElementById('main-nav').style.display = 'none';
}

function hideCase(caseId) {
	document.getElementById(caseId).classList.remove('active');
	document.getElementById('main-nav').style.display = 'block';
	// Scroll to projects section
	document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
}

// Scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
	observer.observe(el);
});

// Initial visibility for elements in viewport
window.addEventListener('load', () => {
	document.querySelectorAll('.fade-in').forEach(el => {
		if (el.getBoundingClientRect().top < window.innerHeight) {
			el.classList.add('visible');
		}
	});
});

