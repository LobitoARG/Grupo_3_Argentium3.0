module.exports=function(sequelize, dataTypes){
    const alias = 'categoria_producto';
    const columnas = {
        id_categoria_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        titulo_categoria: {
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
    
    
    const categoria_producto = sequelize.define(alias, columnas, config);
    
    categoria_producto.associate = (modelos) => {
        categoria_producto.hasMany(modelos.Producto, { 
            as: "Producto",            
            foreignKey: 'id_categoria_producto',            
        })
    };
    
    return categoria_producto;
    }