'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'ng1/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';

        this.checkboxValue = true;
        this.onCheckboxChange = function(e) {
          console.log('onCheckboxChange >>>>>>> ');
        };

        this.value = ['f26f3eca-b96a-11e7-abc4-cec278b6b50a'];
        this.items = [
          {
            id: 'f26f3eca-b96a-11e7-abc4-cec278b6b50a',
            name: 'test1',
            type: 'User Group'
          }, {
            id: 'f26f3eca-b96a-11e7-abc4-cec278b6b50b',
            name: 'test2',
            type: 'Computer Group'
          }
        ];


        this.xxx = function(text) {
          console.log('xxx works fine >>> ', text);
        }
      }
    ]
  });
