class statesListController {
  constructor ($http) {
    'ngInject'

    const vm = this

    vm.name = 'statesList'
    vm.states = null

    vm.$onInit = function () {

      $http.get(BACKEND_URL).then(({ data: states }) => {
        vm.states = states
      })
    }
  }
}

export default statesListController
