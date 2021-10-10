import { createStore } from 'vuex';

export default createStore({
	state: {
		invoiceData: [],
		invoiceModal: null,
		modalActive: null,
		invoicesLoaded: null,
		currentInvoiceArray: null,
		editInvoice: null,
	},
	mutations: {
		TOGGLE_INVOICE(state) {
			state.invoiceModal = !state.invoiceModal;
		},
		TOGGLE_MODAL(state) {
			state.modalActive = !state.modalActive;
		},
	},
	actions: {},
	modules: {},
});
