// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(function () {
	var $filter = $('.js-filter');
	var duration = 300;

	$filter.each(function () {
		var
				$this = $(this),
				$button = $this.children('.js-filter__button'),
				$dropdown = $this.children('.js-filter__dropdown'),
				$label = $dropdown.children('.js-filter__label'),
				$checkbox = $label.children('.js-filter__checkbox');

			$button.on('click', toggleList);
			$checkbox.on('click', changeActivity);
	})

	function toggleList() {
		var $this = $(this);
		
		$this.next('.js-filter__dropdown').slideToggle(duration);
	}

	function changeActivity() {
		var
				$this = $(this),
				$parentLabel = $this.parent();

		$parentLabel.toggleClass('is-checked');
	}
});