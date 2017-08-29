import { parseDate } from './time'
import { createForm } from './form'
import { isAdmin, isAuthed } from './permissions'
import { showError, showSuccess, handleApiError } from './notifications'

Vue.mixin({
    methods: {
        parseDate,

        createForm,

        showError,
        showSuccess,
        handleApiError,
    },

    computed: {
        isAdmin,
        isAuthed,
    }
})