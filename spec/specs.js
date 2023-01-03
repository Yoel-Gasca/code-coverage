//Variables de configuracion de Jasmine
const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();

// se define la instancia del reporter
let reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});

jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('./spec/jasmine.json');
jasmine.execute();

/*npm run test-coverage -> se ejecuta un test en coverage
*/