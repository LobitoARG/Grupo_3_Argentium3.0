module.exports = function(sequelize, dataTypes){
const alias = 'Producto';

const columnas = {
    id_producto: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: dataTypes.STRING(100),
        allowNull: false        
    },
    precio:{
        type: dataTypes.DECIMAL(10,2).UNSIGED,
        allowNull: false        
    },
    descuento: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    tipo:{
        type: dataTypes.STRING(50),
        allowNull: false        
    },
    componentes:{
        type: dataTypes.TEXT,
        allowNull: false
    },
    imagen:{
        type: dataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: dataTypes.TEXT,
        allowNull: true
    },
    id_categoria_producto:{
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


const Producto = sequelize.define(alias, columnas, config);

Producto.associate = (modelos) => {
    Producto.belongsTo(modelos.categoria_producto, { 
        as: "cateogria_producto",            
        foreignKey: 'id_categoria_producto',            
        });
    

    Compra.belongsToMany(modelos.Compra, {
        as: "Compra",
        through: 'productos_compras',
        foreignKey: 'id_producto',
        otherKey: 'id_compra',
        timestamps: true,
        createdAt: 'created_at'
        });
    }

    return Producto;

}



