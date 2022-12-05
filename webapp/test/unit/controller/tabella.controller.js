/*global QUnit*/

sap.ui.define([
	"gestione_clienti/gestione_clienti/controller/tabella.controller"
], function (Controller) {
	"use strict";

	QUnit.module("tabella Controller");

	QUnit.test("I should test the tabella controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
