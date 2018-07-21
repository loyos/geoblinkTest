class statesListController {
  constructor($http, geoService) {
    'ngInject'

    const vm = this
    vm.name = 'statesList';
    vm.showError = false;
    vm.loading = false;

    vm.$onInit = function () {
      vm.loading = true;
      var statesArray = [];

      geoService.getData(BACKEND_URL).then((data) => {
        vm.test = data;
        for (var key in vm.test) {
          var jsonAux = {};
          jsonAux.fullName = vm.test[key];
          jsonAux.shortName = key;
          statesArray.push(jsonAux);
        }
        vm.statesArray = statesArray;
        vm.loading = false;
      }
      ).catch(function (reason) {
        console.log("reason:", reason);
        if (reason === 500) {
           vm.showError = true;
           vm.loading = false;
        }
     });
    }
  }
}

export default statesListController
