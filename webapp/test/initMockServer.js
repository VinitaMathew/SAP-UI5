sap.ui.define(["../localService/mockserver"], function (mockserver) {
  "use strict";

  //initialize the mock server
  mockserver.init();

  //initialize the embedded component in the HTML page
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
