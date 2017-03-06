// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include my-select.js

sayHello();

$(function () {
	var $filter = $('.js-filter'),
			$filterList = $('.js-filter__list'),
			$filterListItems = $filterList.children('.js-filter-choice-remove'),
			duration = 300;

	$filterListItems.on('click', removeChoice);

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
				$parentLabel = $this.parent(),
				$parentText = $parentLabel.data('title');

		$parentLabel.toggleClass('is-checked');

			if($parentLabel.hasClass('is-checked')) {
				$('<span class="choice__item js-filter-choice-remove" data-title="' + $parentText + '">' + $parentText +'</span>').appendTo($filterList);
				$('.choice__item').on('click', removeChoice);
			} else {
				$('span.js-filter-choice-remove[data-title="' + $parentText + '"]').remove();
			}

	}

	function removeChoice() {
		var $this = $(this);
		// console.log($this);
		$this.remove();
		var $title = $this.data('title');
		var $label = $('.js-filter__label[data-title="' + $title + '"]');
		$label.removeClass('is-checked');

	}
});