import Vuex from "vuex";

const createStore = () =>
  new Vuex.Store({
    state: {
      locales: ["zh", "en"],
      locale: "zh",
    },
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      },
    },
    actions: {

    },
    modules: {

    }
  });
export default createStore;
