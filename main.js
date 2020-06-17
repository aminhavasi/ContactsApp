const yargs = require('yargs');
yargs.command({
    command: 'create',
    aliases: ['c', 'ct'],
    describe: '[create new contact]',
    builder: {
        fullname: {
            alias: 'f',
            describe: 'person fullname',
            demandOption: true,
            type: 'string',
        },
        phone: {
            alias: 'p',
            describe: 'person phone number',
            demandOption: true,
            type: 'number',
        },
        email: {
            alias: 'e',
            describe: 'person email',
            demandOption: true,
            type: 'string',
        },
    },
    handler({ fullname, phone, email }) {
        console.log(fullname, email, phone);
    },
});

yargs.parse();
