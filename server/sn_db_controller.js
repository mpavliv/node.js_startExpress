const sqlite3 = require('sqlite3').verbose();
const DB_NAME = './sn.db';

class SN_DB {

    constructor(name){
        this.db = new sqlite3.Database(DB_NAME, sqlite3.OPEN_READWRITE, (err) => {
            if (err) return console.error(err.message + ' Open DB');
        })
    }

    deleteTable(){
        const sql = 'DROP TABLE sn';
        this.db.run(sql, (err) => {
            if (err) return console.error(err.msg + ' Delete Table');
        });
    }

    createTable(tableName){
        const sql = `CREATE TABLE IF NOT EXISTS ${tableName}
                (id INTEGER PRIMARY KEY, code, product, fabric1, fabric2, fabric3, doc, remarks)`;
        this.db.run(sql, (err) => {
            if (err) return console.error(err.msg + ' Create');
        });
    }

    readSN(_id){
        const sql = '';
        this.db.run(sql, (err) => {
            if (err) return console.error(err.msg + ' Read SN');
        });
    }

    get readAll(){
        const sql = 'SELECT * FROM sn';
        let arr = null; 
        return new Promise((resolve, reject) => {
            this.db.all(sql, [], (err, rows) => {
                if (err) {return console.error(err.msg + ' Read All')}
                else {
                    resolve(rows)
                }
            })
        });
    }

    addSN(item){
        const arr = item.split('/;', 7);
        const sql = `INSERT INTO sn(code, product, fabric1, fabric2, fabric3, doc, remarks)
                VALUES(?,?,?,?,?,?,?)`;
        this.db.run(sql, arr, (err) => {
            if (err) {
                return console.error(err.msg + ' Add SN');
            }    
        });
    }

}

module.exports = new SN_DB(DB_NAME);