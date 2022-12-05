sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("gestioneclienti.gestioneclienti.controller.dettaglio", {
                onInit: function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.getRoute("Routedettaglio").attachMatched(this._onObjectMatched, this);
                },
                _onObjectMatched: function(oEvent) {
                   // var selectedArguments = oEvent.getParameter("arguments");
                   // var selectedRecord = JSON.parse(selectedArguments.selectedobj);
                
                   // var obj = {
                       // "clienti": selectedRecord
                  //  };
                  //  var navigationobjModel = new JSONModel();
                  //  navigationobjModel.setData(obj);
                  //  this.getView().setModel(navigationobjModel, "tabella");
                 
                  //  var oModel= this.getModel();
                 //   oModel.metadataLoaded().then(function(){
                 //     var oContext = oModel.createEntry("assistito");
                 //     this.getView().setBindingContext(oContext);
                 //   }.bind(this));

                 var sObjectId =  oEvent.getParameter("arguments");
                 this._bindView("/cliente" + sObjectId);
                  
                },
                onNavBack: function() {
                    window.history.go(-1);
                },



                // BOTTONI 

                onCheck: function () {

                    // vista e modello
    
                    let view = this.getView();
    
                    // cattura input 
    
                    let inputUomo = view.byId("uomo");
                    let inputDonna = view.byId("donna");
                    let inputEta = view.byId("eta");
                    let inputIndirizzo = view.byId("indirizzo");
                    let inputCitta = view.byId("citta");
                    let inputCap = view.byId("cap");
                    let inputProvincia = view.byId("provincia");
                    let inputReferente = view.byId("referente");
                    let inputEmail = view.byId("email");
                    let inputTelefono = view.byId("telefono");
    
                    // cattura valore input 
    
                    let valoreUomo = inputUomo.getValue();
                    let valoreDonna = inputDonna.getValue();
                    let valoreEta = inputEta.getValue();
                    let valoreIndirizzo = inputIndirizzo.getSelectedKey();
                    let valoreCitta = inputCitta.getValue();
                    let valoreCap = inputCap.getValue();
                    let valoreProvincia = inputProvincia.getValue();
                    let valoreReferente = inputReferente.getValue();
                    let valoreEmail = inputEmail.getValue();
                    let valoreTelefono = inputTelefono.getValue();
                    
    
                    // Condizione Check 
    
    
                    if (valoreEta == "" || valoreIndirizzo == "" || valoreCitta == "" || valoreCap == "" || valoreProvincia == "" || valoreReferente == "" || valoreEmail == "" || valoreTelefono == "") {
                        let msgError = "Non hai compilato tutti i campi!";
                        if (valoreEta == "") {

                            this.getView().byId("eta").setValueState(sap.ui.core.ValueState.Error)

                        } else {

                            this.getView().byId("eta").setValueState("None")
                        }
                        if (valoreIndirizzo == "") {
                            this.getView().byId("indirizzo").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("indirizzo").setValueState("None")
                        }
                        if (valoreCitta == "") {
                            this.getView().byId("citta").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("citta").setValueState("None")
                        }
                        if (valoreCap == "") {
                            this.getView().byId("cap").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("cap").setValueState("None")
                        }
                        if (valoreProvincia == "") {
                            this.getView().byId("provincia").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("provincia").setValueState("None")
                        }
                        if (valoreReferente == "") {
                            this.getView().byId("referente").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("referente").setValueState("None")
                        }
                        if (valoreEmail == "") {
                            this.getView().byId("email").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("email").setValueState("None")
                        }
                        if (valoreTelefono == "") {
                            this.getView().byId("telefono").setValueState(sap.ui.core.ValueState.Error)
                        } else {
                            this.getView().byId("telefono").setValueState("None")
                        }
    
                        MessageToast.show(msgError);
    
                    }
                    else {
    
                        // I campi rossi vengono rimossi
    
                        this.getView().byId("uomo").setValueState("valoreUomo"),
                        this.getView().byId("donna").setValueState("valoreDonna"),
                        this.getView().byId("eta").setValueState("valoreEta"),
                        this.getView().byId("indirizzo").setValueState("valoreIndirizzo"),
                        this.getView().byId("citta").setValueState("valoreCitta"),
                        this.getView().byId("cap").setValueState("valoreCap"),
                        this.getView().byId("provincia").setValueState("valoreProvincia"),
                        this.getView().byId("referente").setValueState("valoreReferente"),
                        this.getView().byId("email").setValueState("valoreEmail"),
                        this.getView().byId("telefono").setValueState("valoreTelefono")
    
                        let msgOK = "Hai completato tutti i campi.";
                        MessageToast.show(msgOK);
    
                        // Il form torna a non essere compilabile
    
                        this.getView().byId("uomo").setEditable(false);
                        this.getView().byId("donna").setEditable(false);
                        this.getView().byId("eta").setEditable(false);
                        this.getView().byId("indirizzo").setEditable(false);
                        this.getView().byId("citta").setEditable(false);
                        this.getView().byId("cap").setEditable(false);
                        this.getView().byId("provincia").setEditable(false);
                        this.getView().byId("referente").setEditable(false);
                        this.getView().byId("email").setEditable(false);
                        this.getView().byId("telefono").setEditable(false);
    
    
    
                    }
    
    
                },
    
                onReset: function () {

                    let view = this.getView();
                    let inputUomo = view.byId("uomo");
                    let inputDonna = view.byId("donna");
                    let inputEta = view.byId("eta");
                    let inputIndirizzo = view.byId("indirizzo");
                    let inputCitta = view.byId("citta");
                    let inputCap = view.byId("cap");
                    let inputProvincia = view.byId("provincia");
                    let inputReferente = view.byId("referente");
                    let inputEmail = view.byId("email");
                    let inputTelefono = view.byId("telefono");
    
                    // cattura valore input 
    
                    let valoreUomo = inputUomo.setValue("");
                    let valoreDonna = inputDonna.setValue("");
                    let valoreEta = inputEta.setValue("");
                    let valoreIndirizzo = inputIndirizzo.setSelectedKey("");
                    let valoreCitta = inputCitta.setValue("");
                    let valoreCap = inputCap.setValue("");
                    let valoreProvincia = inputProvincia.setValue("");
                    let valoreReferente = inputReferente.setValue("");
                    let valoreEmail = inputEmail.setValue("");
                    let valoreTelefono = inputTelefono.setValue("");
    
                    this.getView().byId("uomo").setEditable(false);
                    this.getView().byId("donna").setEditable(false);
                    this.getView().byId("eta").setEditable(false);
                    this.getView().byId("indirizzo").setEditable(false);
                    this.getView().byId("citta").setEditable(false);
                    this.getView().byId("cap").setEditable(false);
                    this.getView().byId("provincia").setEditable(false);
                    this.getView().byId("referente").setEditable(false);
                    this.getView().byId("email").setEditable(false);
                    this.getView().byId("telefono").setEditable(false);
    
                    this.getView().byId("uomo").setValueState("None"),
                    this.getView().byId("donna").setValueState("None"),
                    this.getView().byId("eta").setValueState("None"),
                    this.getView().byId("indirizzo").setValueState("None"),
                    this.getView().byId("citta").setValueState("None"),
                    this.getView().byId("cap").setValueState("None"),
                    this.getView().byId("provincia").setValueState("None"),
                    this.getView().byId("referente").setValueState("None"),
                    this.getView().byId("email").setValueState("None"),
                    this.getView().byId("telefono").setValueState("None")
    
    
                },

                onEdit: function () {

                    this.getView().byId("uomo").setEditable(true);
                    this.getView().byId("donna").setEditable(true);
                    this.getView().byId("eta").setEditable(true);
                    this.getView().byId("indirizzo").setEditable(true);
                    this.getView().byId("citta").setEditable(true);
                    this.getView().byId("cap").setEditable(true);
                    this.getView().byId("provincia").setEditable(true);
                    this.getView().byId("referente").setEditable(true);
                    this.getView().byId("email").setEditable(true);
                    this.getView().byId("telefono").setEditable(true);

    
                },
            
        });
     
    });