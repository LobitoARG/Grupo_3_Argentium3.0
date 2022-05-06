module.exports = function(sequelize, dataTypes) {

//Parámetros para el define: 
const alias = 'Usuario';
const columnas = {
    id_usuario: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name:{
        type: dataTypes.STRING(50),
        allowNull: false        
    },
    last_name:{
        type: dataTypes.STRING(50),
        allowNull: false        
    },
    password:{
        type: dataTypes.STRING(50),
        allowNull: false        
    },
    email:{
        type: dataTypes.STRING(50),
        allowNull: false
    },
    telefono:{
        type: dataTypes.STRING(50),
        allowNull: false
    },
    imagenUsers: {
        type: dataTypes.STRING(50),
        allowNull: true
    },
    id_categoria_usuario:{
        type: dataTypes.INTEGER.UNSIGED,
        allowNull: false
    }
};

const config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };


    //Defino el modelo: 
    const Usuario = sequelize.define(alias, columnas, config);

    //Asocio Usuario con categoria_usuario de 1:N
    Usuario.associate = (modelos) => {
        Usuario.belongsTo(modelos.categoria_usuario, { 
            as: "cateogria_usuario",            
            foreignKey: 'id_categoria_usuario',            
        });

        Usuario.hasMany(modelos.Compra,{
            as: "Compra",
            foreignKey: "id_usuario" 
        });
    }

    return Usuario; 

}






