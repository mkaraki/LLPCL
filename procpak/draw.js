addProcessPack('SETCOLOR', function (cmd) {
    CANVAS2D.fillStyle = cmd[1];
});

addProcessPack('DRAWP', function (cmd) {
    var x = parseInt(cmd[1]);
    var y = parseInt(cmd[2]);
    CANVAS2D.fillRect(x, y, 1, 1);
});

addProcessPack('DRAWRECT', function (cmd) {
    var x = parseInt(cmd[1]);
    var y = parseInt(cmd[2]);
    var w = parseInt(cmd[3]);
    var h = parseInt(cmd[4]);
    CANVAS2D.fillRect(x, y, w, h);
});