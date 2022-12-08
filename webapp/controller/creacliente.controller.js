sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("gestioneclienti.gestioneclienti.controller.creacliente", {
            onInit: function () {
                

            },
            onNavBack: function () {
                window.history.go(-1);
            },

         
            onCheck: function () {

                let view = this.getView();
                let inputAssistito = view.byId("assistito").getValue();
                let inputUomo = view.byId("uomo").getSelected(false);
                let inputDonna = view.byId("donna").getSelected(false);
                let inputEta = view.byId("eta").getValue();
                let inputIndirizzo = view.byId("indirizzo").getValue();
                let inputCitta = view.byId("citta").getValue();
                let inputCap = view.byId("cap").getValue();
                let inputProvincia = view.byId("provincia").getValue();
                let inputReferente = view.byId("referente").getValue();
                let inputEmail = view.byId("email").getValue();
                let inputTelefono = view.byId("telefono").getValue();
                



                if (inputAssistito == "" || inputUomo == false && inputDonna == false || inputEta == "" || inputIndirizzo == "" || inputCitta == "" || inputCap == "" || inputProvincia == "" || inputReferente == "" || inputEmail == "" || inputTelefono == "") {

                    let msgError = "Non puoi salvare, non hai compilato tutti i campi!";
                    if (inputAssistito == "") {
                        this.getView().byId("assistito").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("assistito").setValueState("None")
                    }

                    if (inputUomo == false && inputDonna == true || inputUomo == true && inputDonna == false) {
                        this.getView().byId("uomo").setValueState("None"),
                            this.getView().byId("donna").setValueState("None")
                    } else {
                        this.getView().byId("uomo").setValueState(sap.ui.core.ValueState.Error),
                            this.getView().byId("donna").setValueState(sap.ui.core.ValueState.Error)
                    }
                    if (inputEta == "") {
                        this.getView().byId("eta").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("eta").setValueState("None")
                    }
                    if (inputIndirizzo == "") {
                        this.getView().byId("indirizzo").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("indirizzo").setValueState("None")
                    }
                    if (inputCitta == "") {
                        this.getView().byId("citta").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("citta").setValueState("None")
                    }
                    if (inputCap == "") {
                        this.getView().byId("cap").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("cap").setValueState("None")
                    }
                    if (inputProvincia == "") {
                        this.getView().byId("provincia").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("provincia").setValueState("None")
                    }
                    if (inputReferente == "") {
                        this.getView().byId("referente").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("referente").setValueState("None")
                    }
                    if (inputEmail == "") {
                        this.getView().byId("email").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("email").setValueState("None")
                    }
                    if (inputTelefono == "") {
                        this.getView().byId("telefono").setValueState(sap.ui.core.ValueState.Error)
                    } else {
                        this.getView().byId("telefono").setValueState("None")
                    }

                    MessageToast.show(msgError);

                } else {
                    this.getView().byId("assistito").setValueState("None"),
                    this.getView().byId("uomo").setValueState("None"),
                        this.getView().byId("donna").setValueState("None"),
                        this.getView().byId("eta").setValueState("None"),
                        this.getView().byId("indirizzo").setValueState("None"),
                        this.getView().byId("citta").setValueState("None"),
                        this.getView().byId("cap").setValueState("None"),
                        this.getView().byId("provincia").setValueState("None"),
                        this.getView().byId("referente").setValueState("None"),
                        this.getView().byId("email").setValueState("None"),
                        this.getView().byId("telefono").setValueState("None");

                    let msgOK = "Modifiche salvate!";
                    MessageToast.show(msgOK);
                    this.getView().byId("assistito").setEditable(false);
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
                    this.getView().byId("noteOperative").setEditable(false);
                    this.getView().byId("noteRelazionali").setEditable(false);
                    this.getView().byId("fieldGenere").setVisible(true);
                    this.getView().byId("fieldRadio").setVisible(false);



                }

            },

            onReset: function () {
                this.getView().byId("assistito").setValue("");
                this.getView().byId("uomo").setSelected(false);
                this.getView().byId("donna").setSelected(false);
                
                this.getView().byId("eta").setValue("");
                this.getView().byId("indirizzo").setValue("");
                this.getView().byId("citta").setValue("");
                this.getView().byId("cap").setValue("");
                this.getView().byId("provincia").setValue("");
                this.getView().byId("referente").setValue("");
                this.getView().byId("email").setValue("");
                this.getView().byId("telefono").setValue("");
                this.getView().byId("noteOperative").setValue("");
                this.getView().byId("noteRelazionali").setValue("");

                this.getView().byId("assistito").setValueState("None"),
                this.getView().byId("uomo").setValueState("None");
                this.getView().byId("donna").setValueState("None");
                this.getView().byId("eta").setValueState("None"),
                    this.getView().byId("indirizzo").setValueState("None"),
                    this.getView().byId("citta").setValueState("None"),
                    this.getView().byId("cap").setValueState("None"),
                    this.getView().byId("provincia").setValueState("None"),
                    this.getView().byId("referente").setValueState("None"),
                    this.getView().byId("email").setValueState("None"),
                    this.getView().byId("telefono").setValueState("None");


                


            },

        });

    })