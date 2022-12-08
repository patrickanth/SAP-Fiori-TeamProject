sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, Filter, FilterOperator, Sorter) {
        "use strict";
        return Controller.extend("gestioneclienti.gestioneclienti.controller.tabella", {
            onInit: function () {
                var dataModel = this.getOwnerComponent().getModel("model/clienti.json");
                this.getView().setModel(dataModel, "ClientiModel")
            },
        
            getRouter: function () {
                return UIComponent.getRouterFor(this);
            },
            vaiAlDettaglio: function (oEvent) {

                var oSource = oEvent.getSource(),
                    oContext = oSource.getBindingContext("ClientiModel"),
                    yes = oContext.getPath(),
                    cliente = oContext.getProperty("id");
                this.getRouter().navTo("Routedettaglio", {
                    selectedobj: cliente
                });

            },
            clienteNuovo: function () {
                this.getRouter().navTo("Routeclientenuovo");
            },
            
            handleLiveChange: function (oEvt) {
                var sQuery = oEvt.getParameter("query"),
                    aFilter = [new Filter("assistito", FilterOperator.Contains, sQuery),
                    new Filter("referente", FilterOperator.Contains, sQuery),
                    new Filter("eta", FilterOperator.Contains, sQuery),
                    new Filter("genere", FilterOperator.Contains, sQuery),
                    new Filter("indirizzo", FilterOperator.Contains, sQuery),
                    new Filter("cellulare", FilterOperator.Contains, sQuery),
                    new Filter("cap", FilterOperator.Contains, sQuery),
                    new Filter("città", FilterOperator.Contains, sQuery),
                    new Filter("provincia", FilterOperator.Contains, sQuery),
                    new Filter("email", FilterOperator.Contains, sQuery),
                    ],
                    oTable = this.byId("table1"),
                    oBinding = oTable.getBinding("rows"),
                    oFilter = null;
                if (sQuery.length != 0) {
                    oFilter = new Filter({
                        filters: aFilter,
                        and: false
                    });
                }
                oBinding.filter(oFilter);
            },



            filtroInattivi: function () {
                var oEvt = this.getView().byId("table1").getValueSelected();
                if (oEvt == false) {
                    console.log("entrato nel false");


                }
            }



        });

    });