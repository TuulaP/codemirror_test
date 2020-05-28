$(document).ready(function () {
    var cm = $(".codemirror-textarea")[0];
    var editor = CodeMirror.fromTextArea(cm, {
        lineNumbers: true,
        mode: "xml",
        autoCloseTags: true
    });
});
