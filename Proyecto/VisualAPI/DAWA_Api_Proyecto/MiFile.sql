IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Grupos] (
    [Id] int NOT NULL IDENTITY,
    [Nombre] nvarchar(max) NOT NULL,
    [Eliminado] int NOT NULL,
    CONSTRAINT [PK_Grupos] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [TokenDBs] (
    [Id] int NOT NULL IDENTITY,
    [value] nvarchar(max) NOT NULL,
    [Eliminado] int NOT NULL,
    CONSTRAINT [PK_TokenDBs] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Usuarios] (
    [Id] int NOT NULL IDENTITY,
    [Cedula] nvarchar(max) NOT NULL,
    [Nombres] nvarchar(max) NOT NULL,
    [Apellidos] nvarchar(max) NOT NULL,
    [Direccion] nvarchar(max) NOT NULL,
    [Edad] int NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Psw] nvarchar(max) NOT NULL,
    [Roll] nvarchar(max) NOT NULL,
    [Eliminado] int NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Item_ropas] (
    [Id] int NOT NULL IDENTITY,
    [GrupoId] int NOT NULL,
    [Nombre] nvarchar(max) NOT NULL,
    [Precio] float NOT NULL,
    [Stock] int NOT NULL,
    [SrcImg] nvarchar(max) NOT NULL,
    [Cantidad] int NOT NULL,
    [Codigo] nvarchar(max) NOT NULL,
    [Preciooferta] float NOT NULL,
    [Detalle] nvarchar(max) NOT NULL,
    [Eliminado] int NOT NULL,
    CONSTRAINT [PK_Item_ropas] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Item_ropas_Grupos_GrupoId] FOREIGN KEY ([GrupoId]) REFERENCES [Grupos] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [Facturas] (
    [Id] int NOT NULL IDENTITY,
    [UsuarioId] int NOT NULL,
    [Eliminado] int NOT NULL,
    CONSTRAINT [PK_Facturas] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Facturas_Usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [Usuarios] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [ItemRopaCarritos] (
    [Id] int NOT NULL IDENTITY,
    [Cantidad] int NOT NULL,
    [FacturaId] int NOT NULL,
    CONSTRAINT [PK_ItemRopaCarritos] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ItemRopaCarritos_Facturas_FacturaId] FOREIGN KEY ([FacturaId]) REFERENCES [Facturas] ([Id]) ON DELETE CASCADE
);
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Apellidos', N'Cedula', N'Direccion', N'Edad', N'Eliminado', N'Email', N'Nombres', N'Psw', N'Roll') AND [object_id] = OBJECT_ID(N'[Usuarios]'))
    SET IDENTITY_INSERT [Usuarios] ON;
INSERT INTO [Usuarios] ([Id], [Apellidos], [Cedula], [Direccion], [Edad], [Eliminado], [Email], [Nombres], [Psw], [Roll])
VALUES (1, 'Gonzalez', '0909090901', 'La calle y la que cruza', 27, 0, 'eduardo.gonzaleze@ug.edu.ec', 'Christian Eduardo', 'Christian', 'cliente'),
(2, N'Lucio Vera', N'0909090902', N'La calle y la que cruza', 23, 0, N'johann.luciov@ug.edu.ec', N'Johann Donato', N'Johann', N'cliente'),
(3, N'Gutiérrez León', N'0909090903', N'La calle y la que cruza', 22, 0, N'dennis.gutierrezl@ug.edu.ec', N'Dennis Orlando', N'Dennis', N'cliente'),
(4, N'Cantos Pinto', N'0909090904', N'La calle y la que cruza', 21, 0, N'james.cantosp@ug.edu.ec', N'James Douglas', N'James', N'cliente'),
(5, N'Espinoza de los Monteros', N'0909090905', N'La calle y la que cruza', 20, 0, N'victor.espinozam@ug.edu.ec', N'Victor Ivan', N'Victor', N'cliente'),
(6, N'Gonzalez', N'0909090901', N'La calle y la que cruza', 27, 0, N'eduardogonzaleze@ug.edu.ec', N'Christian Eduardo', N'Eduardo', N'administrador'),
(7, N'Lucio Vera', N'0909090902', N'La calle y la que cruza', 23, 0, N'johann.luciov@ug.edu.ec', N'Johann Donato', N'Donato', N'administrador'),
(8, N'Gutiérrez León', N'0909090903', N'La calle y la que cruza', 22, 0, N'dennis.gutierrezl@ug.edu.ec', N'Dennis Orlando', N'Orlando', N'administrador'),
(9, N'Cantos Pinto', N'0909090904', N'La calle y la que cruza', 21, 0, N'james.cantosp@ug.edu.ec', N'James Douglas', N'Douglas', N'administrador'),
(10, N'Espinoza de los Monteros', N'0909090905', N'La calle y la que cruza', 20, 0, N'victor.espinozam@ug.edu.ec', N'Victor Ivan', N'Ivan', N'administrador');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Apellidos', N'Cedula', N'Direccion', N'Edad', N'Eliminado', N'Email', N'Nombres', N'Psw', N'Roll') AND [object_id] = OBJECT_ID(N'[Usuarios]'))
    SET IDENTITY_INSERT [Usuarios] OFF;
GO

CREATE INDEX [IX_Facturas_UsuarioId] ON [Facturas] ([UsuarioId]);
GO

CREATE INDEX [IX_Item_ropas_GrupoId] ON [Item_ropas] ([GrupoId]);
GO

CREATE INDEX [IX_ItemRopaCarritos_FacturaId] ON [ItemRopaCarritos] ([FacturaId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220921213813_mi_tabla', N'6.0.8');
GO

COMMIT;
GO

