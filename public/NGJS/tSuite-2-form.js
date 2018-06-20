(function(){
	var app = angular.module('tSuite-2-form', []);

	app.controller('NgmoduleController', function(){
		this.name = 'NgModule';
	});

	app.controller('AddruleController', ['$scope', '$http', function($scope, $http){
		this.rules = rules_config;
		this.rule = {};
		this.formUrl = '/NGJS/tSuite/2';

		this.addRule = function(){
			this.rule.rule_id = this.rules.length + 1;
			this.rules.push(this.rule);
		
			$http({
				method: 'POST',
				url: '/NGJS/tSuite/2',
				data: this.rule
			}).then(function(response){
				this.rules.push(response.data);
			});

			this.rule = {};
		};
	}]);

	var rules_config = [{
		name: "rule",
		enabled: "false",
		action: "block",
		rule_id: 1,
		condition: "path == '/form/moved/'"
	}];
})();
