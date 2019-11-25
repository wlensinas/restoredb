'use strict'

const restore = require('mongodb-restore'); // npm install --save mongodb-restore

async function restoreMyDB() {
    await restore({
        uri: 'mongodb://IP_ADDRESS:PORT/DATABASE',
        root: __dirname, // PATH donde esta el archivo .TAR
        tar: 'backup.tar',
        callback: function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Restore finalizado');
            }
        }
      });
}

restoreMyDB();