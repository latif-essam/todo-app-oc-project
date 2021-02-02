/*global app, $on */
(function () {
  "use strict";

  /**
   * Sets up a brand new Todo list.
   *
   * @param {string} name The name of your new to do list.
   */
  function Todo(name) {
    // @ts-ignore
    this.storage = new app.Store(name);
    // @ts-ignore
    this.model = new app.Model(this.storage);
    // @ts-ignore
    this.template = new app.Template();
    // @ts-ignore
    this.view = new app.View(this.template);
    // @ts-ignore
    this.controller = new app.Controller(this.model, this.view);
  }

  var todo = new Todo("todos-vanillajs");

  function setView() {
    todo.controller.setView(document.location.hash);
  }
  // @ts-ignore
  $on(window, "load", setView);
  // @ts-ignore
  $on(window, "hashchange", setView);
})();
