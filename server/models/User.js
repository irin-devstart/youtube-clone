module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("User", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate : {
                notEmpty: true
            },
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate : {
                notEmpty: true
            },
        },
        googleId: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                notEmpty: true
            },
        },
        channelName: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                notEmpty: true
            },
        },
        profilePictureUrl: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                notEmpty: true
            },
        },
    });
    return User
}