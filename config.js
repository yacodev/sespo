module.exports={
    api:{
        port:process.env.API_PORT||3000,
        project:process.env.API_PROJECT||'25',
    },
    jwt:{
        secret:process.env.JWT_SECRET||'notesecret',
    },
    mysql:{
        host: process.env.MYSQL_HOST||'remotemysql.com',
        user: process.env.MYSQL_USER||'CQmHCA1iJi',
        password: process.env.MYSQL_PASSWORD||'jO43OF4Ycc',
        database: process.env.MYSQL_DATABASE||'CQmHCA1iJi',
    }
}
