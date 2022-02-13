module.exports = function(sequelize,dataTypes){
    const alias='User';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true 
        },
        first_name:{
            type:dataTypes.STRING
        },
        
        last_name:{
            type:dataTypes.STRING
        },
        email:{
            type:dataTypes.STRING
        },
        
        password: {
            type:dataTypes.STRING,
        },
        rol: {
            type:dataTypes.STRING,
        },
        
        
    };
    const config={
        tableName:'users',
        timestamps:false,
        underscored: true
    }
    const User=sequelize.define(alias,cols,config);
    User.associate=function(models) {
        User.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: "rol_id",
            timestamps:false
        });
	}
        
    return User;
};