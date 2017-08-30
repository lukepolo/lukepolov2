import { parseDate } from './time'
import { createForm, getDefaultColors } from './form'
import { isAdmin, isAuthed } from './permissions'
import { showError, showSuccess, handleApiError } from './notifications'

Vue.mixin({
    methods: {
        parseDate,

        createForm,
        getDefaultColors,

        showError,
        showSuccess,
        handleApiError,
    },

    computed: {
        isAdmin,
        isAuthed,
    }
})