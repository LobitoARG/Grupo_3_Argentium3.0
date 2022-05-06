module.exports=function(sequelize, dataTypes){


    const alias = 'Compra';
    const columnas = {
        id_compra: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        total: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        id_usuario:{
            type: dataTypes.INTEGER.UNSIGED,
            allowNull: false
        }
    };
    
    const config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: false,
        deletedAt: false
    };
    
    
    const Compra = sequelize.define(alias, columnas, config);
    
    Compra.associate = (modelos) => {
        Compra.belongsTo(modelos.Usuario, { 
            as: "Usuario",            
            foreignKey: 'id_usuario',            
        });

        Compra.belongsToMany(modelos.Productos, {
            as: "Productos",
            through: 'productos_compras',
            foreignKey: 'id_compra',
            otherKey: 'id_producto',
            timestamps: true,
            createdAt: 'created_at'
        });


    };
    
    return Compra;
    }