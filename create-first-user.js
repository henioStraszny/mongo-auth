db.createUser({
    user: 'jaceka',
    pwd: 'qwerty1234',
    roles: [{
        role: 'userAdminAnyDatabase',
        db: 'admin'
    }]
})