module.exports = (sequelize, Datatypes) => {
    const Upload = sequelize.define("Upload", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: false,
            validate : {
                notEmpty: true
            },
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: false,
            validate : {
                notEmpty: true
            },
        },
        channel: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                notEmpty: true
            },
        },
        thumbnailUrl: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: false,
            validate : {
                notEmpty: true
            },
        },
        videoPathname: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                notEmpty: true
            },
        },
    });
    return Upload
}