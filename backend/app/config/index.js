const config = {
    app: {
        port: process.env.PORT || 8080
    },
    db: {
        url: "mongodb://localhost:27017/animeinfo"
    },
    jwt: {
        secret: "animeinfo-secret-key"
    }
};

module.exports = config;
