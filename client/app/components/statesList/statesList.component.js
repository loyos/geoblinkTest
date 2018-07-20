import template from './statesList.component.html'
import controller from './statesList.controller.js'
import './statesList.component.scss'

let statesListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'statesListController'
}
export default statesListComponent
