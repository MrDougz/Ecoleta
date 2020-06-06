const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// db.serialize(() => {
//     // create table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?)
// `
//     const values = [
//         'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
//         'Papersider',
//         'Guilherme Gemballa, Jardim América',
//         'Nº 260',
//         'Santa Catarina',
//         'Rio do Sul',
//         'Resíduos Eletrônicos, Lâmpadas'
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log('cadastrado com sucesso!')
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log('Aqui estão os registros')
//     //     console.log(rows)
//     // })

//     // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log('Dado deletado')
//     //     console.log(rows)
//     // })
// })