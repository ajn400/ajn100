// res: https://nodejs.org/dist/latest-v14.x/docs/api/console.html

// console.log() – For general output of logging information.
// console.info() – Informative logging of information.
// console.debug() – Outputs a message to the console with the log level debug.
// console.warn() – Outputs a warning message.
// console.error() – Outputs an error message.
function printConsole() {
    console.log(console)
}

function globalConsole() {
    console.log('console.log()');
// Prints: hello world, to stdout
    console.log('hello %s', 'world');
// Prints: hello world, to stdout
    console.error(new Error('Whoops, something bad happened'));
// 看起来好像出错了，是不是，欸黑欸黑
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

    const name = 'Will Robinson';
    console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
}

function classConsole() {
    // const out = getStreamSomehow();
    // const err = getStreamSomehow();
    // const myConsole = new console.Console(out, err);

    myConsole.log('hello world');
// Prints: hello world, to out
    myConsole.log('hello %s', 'world');
// Prints: hello world, to out
    myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err

    const name = 'Will Robinson';
    myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
}

function styledConsole() {
    //wc
    console.log('%c This is a fancy message','color:white;background-color:orange;font-style:italic')
}

function c_console() {
    for(let i=0;i<10;i++){
        console.log('Hello,%s. You\'ve called me %d times','nhy',i+1)
    }
}

function count() {
    for (let i=0;i<10;i++){
        console.count()
    }
}


function init() {
    // printConsole();
    // globalConsole();
    // classConsole()
    // styledConsole();
    // c_console()
    // count()
}

init()