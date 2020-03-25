addProcessPack('WRITE', function (cmd) {
    writeChar(cmd[1]);
});

addProcessPack('WRITELN', function (cmd) {
    writeChar(cmd[1]);
    newLine();
});

addProcessPack('WRITENLN', function () {
    newLine();
})