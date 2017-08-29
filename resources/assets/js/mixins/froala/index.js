Vue.mixin({
    data() {
        return {
            froalaConfig: {
                heightMin: 200,
                toolbarSticky: true,
                toolbarStickyOffset: 60,

                // pastePlain: false,

                placeholderText: 'type something',
                spellcheck: true,
                tabSpaces: 4,
                codeMirror: true,
                codeMirrorOptions: {
                    tabSize: 4,
                    indentWithTabs: true,
                    lineNumbers: true,
                    lineWrapping: true,
                    mode: 'text/html',
                    tabMode: 'indent',
                },
                codeViewKeepActiveButtons: [], // list of buttons to keep active while in code view
                fontFamily: {
                    'Arial,Helvetica,sans-serif': 'Arial',
                    'Georgia,serif': 'Georgia',
                    'Impact,Charcoal,sans-serif': 'Impact',
                    "'Open Sans',sans-serif": 'Open Sans',
                    'Tahoma,Geneva,sans-serif': 'Tahoma',
                    "'Times New Roman',Times,serif": 'Times New Roman',
                    'Verdana,Geneva,sans-serif': 'Verdana'
                },
                fontFamilyDefaultSelection: 'Open Sans',
                fontFamilySelection: false,
                fontSize: ['8', '10', '11', '12', '14', '16', '18', '30', '36', '48', '60', '96'],
                fontSizeDefaultSelection: '16',
                toolbarButtons: [
                    'bold', 'italic', 'underline', 'strikeThrough', 'fontFamily', 'fontSize', 'color', 'subscript', 'superscript', '|',
                    'fullscreen', 'inlineStyle', 'paragraphStyle', '|',
                    'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                    'insertLink', 'insertImage', 'insertTable', '|',
                    'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
                    'print', 'spellChecker', 'help', 'html', '|',
                    'undo', 'redo'
                ],
                toolbarButtonsMD: [ // medium devices (≥ 992px)
                    'fullscreen', 'bold', 'italic', 'underline', '|',
                    'insertLink', 'align', '-',
                    'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                ],
                toolbarButtonsSM: [ // small devices (≥ 768px).
                    'fullscreen', 'bold', 'italic', 'underline', '|',
                    'insertLink', 'align', '-',
                    'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                ],
                toolbarButtonsXS: [ // small devices (< 768px).
                    'fullscreen', 'bold', 'italic', 'underline', '|',
                    'insertLink', 'align', '-',
                    'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                ],

                imageResizeWithPercent: true,
                imageRoundPercent: false, // Force image percent to round to integer while resizing.
                linkAlwaysBlank: true,
                linkAlwaysNoFollow: true,

                imageUploadURL: '/api/project/uploads',
                fileUploadURL: '/api/project/uploads',
            }
        }
    }
})
