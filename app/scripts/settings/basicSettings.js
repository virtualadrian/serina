'use strict'

angular.module('serinaApp').directive('basicSettings', function ($rootScope, $mdColorPalette) {
  return {
    restrict: 'E',
    templateUrl: 'views/settings/basic-settings.html',
    link: function (scope) {

      scope.selectedLanguage = $rootScope.settings.locale
      scope.selectedDisplayFormat = $rootScope.settings.selectedDisplayFormat

      scope.displayFormat = [
        { label: 'card', icon: 'view_agenda' },
        { label: 'list', icon: 'list' }
      ]

      scope.changeDisplayFormat = function () {
        $rootScope.settings.selectedDisplayFormat = scope.selectedDisplayFormat
        localStorage.setItem('serinaSettings', JSON.stringify($rootScope.settings))
      }

      scope.languages = [
        { code: 'en'},
        { code: 'fr'}
      ]

      scope.changeLocaleOfApplication = function () {
        $rootScope.settings.locale = scope.selectedLanguage
        window.i18next.changeLanguage($rootScope.settings.locale)
        localStorage.setItem('serinaSettings', JSON.stringify($rootScope.settings))
      }

      scope.colors = Object.keys($mdColorPalette)

      scope.mdURL = 'https://material.google.com/style/color.html#color-color-palette'

    }
  }
})
