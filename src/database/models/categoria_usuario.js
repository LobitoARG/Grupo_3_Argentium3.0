module.exports=function(sequelize, dataTypes){

const alias = 'categoria_usuario';
const columnas = {
    id_categoria_usuario: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: dataTypes.STRING(50),
        allowNull: false
    }
};

const config = {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
};


const categoria_usuario = sequelize.define(alias, columnas, config);

categoria_usuario.associate = (modelos) => {
    categoria_usuario.hasMany(modelos.Usuario, { 
        as: "Usuario",            
        foreignKey: 'id_categoria_usuario',            
    })
};

return categoria_usuario;
}