CHARACTER_HEIGHT = 10;
CHARACTER_FONT = '12px serif';

CANVAS = document.getElementById("display");
CANVAS2D = CANVAS.getContext('2d');

DEFAULT_X = 10;
DEFAULT_Y = 10;

// Program

var _pointerX = DEFAULT_X;
var _pointerY = DEFAULT_Y;

CANVAS.setAttribute('width', window.innerWidth);
CANVAS.setAttribute('height', window.innerHeight);

writeChar("LLPCL");
newLine();
writeChar("LOADING GENERAL SYSTEM");
newLine();

var _currentP = "";

var _procPac = {};

function writeCmd(char) {
    writeChar(char);
    _currentP += char;
}

function writeChar(char) {
    CANVAS2D.fillText(char, _pointerX, _pointerY);
    var txt = CANVAS2D.measureText(char);
    _pointerX += txt.width;
}

function writeNewLineCmd() {
    newLine();
    parse(_currentP);
    _currentP = '';
    writeChar("> ");
}

function newLine() {
    _pointerY += CHARACTER_HEIGHT;
    _pointerX = DEFAULT_X;
}

function parse(cmd) {
    var cmds = cmd.split(' ');
    if (cmds[0] == 'CMDS') {
        for (var name in _procPac) {
            writeChar(name + ' ');
        }
        newLine();
        return;
    }
    try {
        _procPac[cmds[0]](cmds);
    }
    catch {
        writeChar('NO COMMAND. CMDS TO LIST UP INSTALLED COMMAND');
    }
    newLine();
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "Enter":
            writeNewLineCmd();
            break;

        case "Shift":
            break;

        case "Backspace":
            break;

        case "Control":
            newLine();
            writeChar('> ');
            _currentP = "";
            break;

        default:
            writeCmd(e.key);
            break;
    }
});

function addProcessPack(name, callback) {
    writeChar('        ' + name);
    newLine();
    _procPac[name] = callback;
}

window.onload = function () {
    writeChar("LOADING MAIN SYSTEM SHELL");
    newLine();
    newLine();

    CANVAS2D.textBaseline = "top";
    CANVAS2D.font = CHARACTER_FONT;

    writeChar('> ');
};

writeChar("LOADING THIRDPARTY LIBRARY");
newLine();
