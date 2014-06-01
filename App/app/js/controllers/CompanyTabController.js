myFirstApp.controller("CompanyTabController", function($scope) {
	$scope.oneAtATime = true;

	$scope.company = {
		header: "Company News",
		title: "Maecenas iaculis, arcu eu lobortis cursus, sem quam tristique libero.",
		description: "Aenean ullamcorper scelerisque libero, vitae blandit felis viverra in. Sed tempus malesuada tincidunt. Curabitur fringilla orci in viverra adipiscing. Aliquam nec tempor arcu",
		news: [
		{
			title: "<span class='glyphicon glyphicon-ok'></span> Aliquam nec tempor arcu",
			content: 'Aenean ullamcrper scelerisque libero, vitae blandit felis viverra in',
			isOpen: false
		},
		{
			title: "<span class='glyphicon glyphicon-ok'></span>  Maecenas iaculis, arcu eu lobortis cursus",
			content: 'Sed tempus malesuada tincidunt. Curabitur fringilla orci in viverra adipiscing. Aliquam nec tempor arcu',
			isOpen: false
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			content: '<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Morbi quis mollis odio:</p><ul><li>Ut euismod tortor nisi, viverra tincidunt massa varius at</li><li>Phasellus leo ante, varius ac sem sit amet, mollis suscipit leo.<span class="highlightText"> Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus</span></li></ul><p>Sed non gravida sem, sed aliquet massa. Nullam a gravida sapien. Nullam imperdiet diam et dictum tristique.<span class="highlightText"> Fusce auctor pulvinar odio iaculis luctus.</span></p>',
			isOpen: true
		},
		{
			title: 'Maecenas iaculis',
			content: 'Sed tempus malesuada tincidunt. Curabitur fringilla orci in viverra adipiscing',
			isOpen: false
		},
		{
			title: 'Phasellus in sem gravida',
			content: 'Donec tortor diam, cursus id sodales non, ornare eget arcu. Aenean ullamcorper scelerisque libero',
			isOpen: false
		}
		],
		annoucements: [
		{
			header: "LEADERSHIP MESSAGES",
			imageUrl: "/img/dog.png",
			title: "Maecenas iaculis, arcu eu lobortis cursus, sem quam tristique libero.",
			content: "Ut euismod tortor nisi, viverra tincidunt massa varius at. Phasellus leo ante, varius ac sem sit amet, mollis suscipit leo. Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus. <a href='#' tooltip-placement='top' tooltip='Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus.'>Phasellus vitae risus lacus. </a> Ut quis pharetra nulla, laoreet rutrum arcu. Mauris iaculis dapibus nibh, eget tristique metus porttitor sit amet. Nulla odio lacus, laoreet sed risus at, tincidunt blandit magna. Mauris nec mattis odio."
		}
		],
		recapNewsHeader: "Recap News",
		recapNewsDescription: "Fusce at egestas leo. Maecenas imperdiet nibh accumsan est dictum euismod. Donec scelerisque nibh eu vulputate ultricies. Maecenas nulla quam, ullamcorper ac dui sed, interdum aliquet leo. Duis quis blandit nunc. Quisque semper tortor eget leo feugiat, a ultrices diam mattis. Nunc erat leo, consequat non mattis ac, mollis ac libero. <span class='highlightText'>Vivamus in laoreet metus.</span>"
	};
	

	
})