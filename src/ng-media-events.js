(function(angular) {
  'use strict';

  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;

  /**
   * Converts snake_case to camelCase.
   * Also there is special case for Moz prefix starting with upper case letter.
   * @param name Name to normalize
   */
  function camelCase(name) {
    return name.
      replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).
      replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

  /**
   * Converts all accepted directives format into proper directive name.
   * @param name Name to normalize
   */
  function directiveNormalize(name) {
    return camelCase(name.replace(PREFIX_REGEXP, ''));
  }

  // Define one directive for each media event
  angular.module('ngMedia', []).directive(
    [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'emptied',
      'ended',
      'error',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'resize',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting'
    ].reduce(function(ngMediaDirectives, eventName) {
        var directiveName = directiveNormalize('ng-' + eventName);

        // Actual directive
        ngMediaDirectives[directiveName] = ['$parse', function($parse) {

          return {
            restrict: 'A',
            compile: function($element, attrs) {

              // Parse callback
              var fn = $parse(attrs[directiveName], /* interceptorFn */ null, /* expensiveChecks */ true);

              // Return the event handler
              return function ngEventHandler(scope, element) {
                element.on(eventName, function(event) {
                  scope.$apply(function() {
                    fn(scope, { $event: event });
                  });
                });
              };
            }
          };
        }];

        return ngMediaDirectives;
      }, {})
  );

}(angular));
