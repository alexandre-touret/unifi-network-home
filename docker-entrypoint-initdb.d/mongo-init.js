db.createUser({
    user: "unifi",
    pwd: "unifi",
    roles: [{
        role: "readWrite",
        db: "unifi"
    }]
});
