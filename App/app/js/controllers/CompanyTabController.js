myFirstApp.controller("CompanyTabController", function($scope) {
	$scope.oneAtATime = true;

	$scope.groups = [
	{
		title: 'Maecenas iaculis',
		content: 'Sed tempus malesuada tincidunt. Curabitur fringilla orci in viverra adipiscing'
	},
	{
		title: 'Phasellus in sem gravida',
		content: 'Donec tortor diam, cursus id sodales non, ornare eget arcu. Aenean ullamcorper scelerisque libero'
	}
	];

	$scope.items = [
	'Ut euismod tortor nisi, viverra tincidunt massa varius at', 
	'Phasellus leo ante, varius ac sem sit amet, mollis suscipit leo.<span class="highlightText"> Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus</span>', 
	'Nulla nisl turpis, feugiat quis malesuada id, fermentum ut lectus. Sed luctus magna eget erat tincidunt, vel suscipit justo posuere.'];


	$scope.companyAnnoucements = [
		{
			header: "LEADERSHIP MESSAGES",
			imageUrl: "/img/dog.png",
			title: "Maecenas iaculis, arcu eu lobortis cursus, sem quam tristique libero.",
			content: "Ut euismod tortor nisi, viverra tincidunt massa varius at. Phasellus leo ante, varius ac sem sit amet, mollis suscipit leo. Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus. <a href='#' tooltip-placement='top' tooltip='Curabitur ut dolor vitae quam rutrum scelerisque ut in tellus.'>Phasellus vitae risus lacus. </a> Ut quis pharetra nulla, laoreet rutrum arcu. Mauris iaculis dapibus nibh, eget tristique metus porttitor sit amet. Nulla odio lacus, laoreet sed risus at, tincidunt blandit magna. Mauris nec mattis odio."
		}
	];
})