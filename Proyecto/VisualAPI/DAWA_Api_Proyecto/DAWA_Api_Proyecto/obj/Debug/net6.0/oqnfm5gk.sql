CREATE TABLE [DAWA_Api_Proyecto].[Item_ropas] (
    [Id] int NOT NULL IDENTITY,
    [Nombre] nvarchar(max) NOT NULL,
    [Precio] int NOT NULL,
    [Stock] int NOT NULL,
    [SrcImg] nvarchar(max) NOT NULL,
    [Cantidad] int NOT NULL,
    [Codigo] nvarchar(max) NOT NULL,
    [Preciooferta] int NOT NULL,
    [Detalle] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Item_ropas] PRIMARY KEY ([Id])
);
GO


