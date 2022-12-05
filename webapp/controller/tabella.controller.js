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
    function (Controller, UIComponent,Filter,FilterOperator,Sorter) {
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
               // this.getRouter().navTo("Routedettaglio");
               
               //var context = oEvent.getParameter("rowContext").getPath();
               //var modelContext = this.getView().getModel().getProperty("ClientiModel", context);
               //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
               //oRouter.navTo("Routedettaglio", {
               //    "selectedobj": selectedPath
              // });
                var oSource = oEvent.getSource(),
                oContext = oSource.getBindingContext("ClientiModel"),
                yes = oContext.getPath(),
                cliente = oContext.getProperty("assistito");
                this.getRouter().navTo("Routedettaglio",{
                    selectedobj : cliente
                });
              
            },
            /*this below code for selected the row data and then navigate to next View */
            handleLiveChange: function(oEvt) {
                var sQuery = oEvt.getParameter("query"),
                 aFilter = [new Filter("assistito",FilterOperator.Contains,sQuery),
                 new Filter("referente",FilterOperator.Contains,sQuery),
                 new Filter("eta",FilterOperator.Contains,sQuery),
                 new Filter("genere",FilterOperator.Contains,sQuery),
                 new Filter("indirizzo",FilterOperator.Contains,sQuery),
                 new Filter("cellulare",FilterOperator.Contains,sQuery),
                 new Filter("cap",FilterOperator.Contains,sQuery),
                 new Filter("città",FilterOperator.Contains,sQuery),
                 new Filter("provincia",FilterOperator.Contains,sQuery),
                 new Filter("email",FilterOperator.Contains,sQuery),
                ],
                 oTable = this.byId("table1"),
                 oBinding = oTable.getBinding("rows"),
                 oFilter = null;
                    if(sQuery.length!=0){
                        oFilter = new Filter({
                        filters: aFilter,
                        and : false
                         });
          }      
          oBinding.filter(oFilter);
            },

            sorting : function(oEvt){
                var sortItem = oEvt.getParameter("sortItem"),
                    groupItem = oEvt.getParameter("groupItem"),
                    sortDesc = oEvt.getParameter("sortDescending"),
                    groupDesc = oEvt.getParameter("groupDescending"),
                    oTable = this.byId("table1"),
                    oBinding = oTable.getBinding("rows"),
                    oSorter = null;
                if(sortItem) {
                  oSorter = new Sorter(sortItem.getKey(),sortDesc);
                }
        
                if(groupItem){
                  oSorter = new Sorter(groupItem.getKey(),groupDesc,true);
                }
                oBinding.sort(oSorter);
            }

            


        });

    });