/*!
 * Copyright 2002 - 2014 Webdetails, a Pentaho company.  All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

define(["../lib/jquery", "./ToggleButtonBaseComponent"],
  function($, ToggleButtonBaseComponent) {

  var CheckComponent = ToggleButtonBaseComponent.extend({
    getValue : function() {
      if(this.currentVal != 'undefined' && this.currentVal != null) {
        return this.currentVal;
      } else {
        var a = new Array()
        this.placeholder("." + this.name + ":checked").each(function(i,val) {
          a.push($(this).val());
        });
        return a;
      }
    }
  });

  return CheckComponent;

});
