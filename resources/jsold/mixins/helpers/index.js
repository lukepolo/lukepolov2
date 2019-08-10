import { parseDate } from "./time";
import { scrollToTop } from "./window";
import { isAdmin, isAuthed } from "./permissions";
import { createForm, getDefaultColors } from "./form";
import { showError, showSuccess, handleApiError } from "./notifications";

Vue.mixin({
  methods: {
    parseDate,

    createForm,
    getDefaultColors,

    showError,
    showSuccess,
    handleApiError,

    scrollToTop
  },

  computed: {
    isAdmin,
    isAuthed
  }
});
