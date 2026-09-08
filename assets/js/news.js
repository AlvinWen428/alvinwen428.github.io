(function() {
	'use strict';

	var newsList = document.getElementById('news-list');
	var newsToggle = document.querySelector('.news-toggle');

	if (!newsList || !newsToggle) {
		return;
	}

	var newsItems = newsList.getElementsByTagName('li');

	// Do not render a control when there is nothing to expand.
	if (newsItems.length <= 10) {
		newsToggle.hidden = true;
		return;
	}

	newsToggle.addEventListener('click', function() {
		var isExpanded = newsList.classList.toggle('is-expanded');
		var label = isExpanded ? 'Show fewer news' : 'Show all news';

		newsToggle.setAttribute('aria-expanded', String(isExpanded));
		newsToggle.setAttribute('title', label);
		newsToggle.querySelector('.sr-only').textContent = label;
		newsToggle.querySelector('.news-toggle-icon').classList.toggle('fa-chevron-down', !isExpanded);
		newsToggle.querySelector('.news-toggle-icon').classList.toggle('fa-chevron-up', isExpanded);
	});
})();
