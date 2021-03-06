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
        type: dataTypes.DECIMAL(10,2).UNSIGNED,
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
        allowNull: true
    },
    descripcion: {
        type: dataTypes.TEXT,
        allowNull: true
    },
    id_categoria_producto:{
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
};

const config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        freezeTableName: true
    };


const Producto = sequelize.define(alias, columnas, config);

Producto.associate = (modelos) => {
    Producto.belongsTo(modelos.categoria_producto, { 
        as: "categoria_producto",            
        foreignKey: 'id_categoria_producto',
        onDelete: 'CASCADE'
        });
    

    Producto.belongsToMany(modelos.Compra, {
        as: "Compra",
        through: 'producto_compra',
        foreignKey: 'id_producto',
        otherKey: 'id_compra',
        timestamps: true,
        createdAt: 'created_at',
        onDelete: 'CASCADE'
        });
    }

    return Producto;

}



