var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TEST',
});

//GET FUNCTION

conn.connect((err) => {
    if(err) throw err;
    var sql = 'select * from student'
    conn.query(sql,(err, data, fields)=>{
        if(err) throw err;
        data.forEach((el) => {
            console.log(`Number ${el.rollno} is ${el.sname} for ${el.state} who is ${el.age} years old`);
        });
    });
});


//INSERT
/*conn.connect((err) => {
    if(err) throw err;
    var sql = 'insert into student (rollno, sname, age, state) values ?';
    var params = [
        [
            '11', 'tokunbo', '17', 'eboyin',
        ],
        [
            '12', 'tolu', '27', 'jigawa',
        ], 
        [
            '13', 'bolu', '19', 'Lagos',
        ],
    ]
    conn.query(sql,[params], (err, data) => {
        if(err) throw err;
        if(data.affectedRows > 0){
            console.log('Data Inserted Successfully!!!!');
        }
    })
});

//UPDATE 

conn.connect((err) => {
    if(err) throw err;
    var sql = 'UPDATE student set age = ? where rollno = ?';
    var params = [
        [
            '17'
        ],
    ];
    var rollno = [
        [
            3
        ]
    ];
    conn.query(sql,[params, rollno], (err, data) => {
        if(err) throw err;
        if(data.affectedRows > 0){
            console.log('Data Updated Successfully!!!!');
        }
    })
    conn.end();
});

//Delete
conn.connect((err) => {
    if(err) throw err;
    var sql = 'DELETE from student where rollno = ?';
    
    var rollno = [
        [
            11
        ]
    ];
    conn.query(sql,[rollno], (err, data) => {
        if(err) throw err;
        if(data.affectedRows > 0){
            console.log('Data Deleted Successfully!!!!');
        }
    })
    conn.end();
});*/