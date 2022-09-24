﻿





INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090901', 'Christian Eduardo', 'Gonzalez', 'La calle y la que cruza', 27, 'eduardo.gonzaleze@ug.edu.ec', 'Christian', 'cliente', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090902', 'Johann Donato', 'Lucio Vera', 'La calle y la que cruza', 23, 'johann.luciov@ug.edu.ec', 'Johann', 'cliente', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090903', 'Dennis Orlando', 'Gutiérrez León', 'La calle y la que cruza', 22, 'dennis.gutierrezl@ug.edu.ec', 'Dennis', 'cliente', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090904', 'James Douglas', 'Cantos Pinto', 'La calle y la que cruza', 21, 'james.cantosp@ug.edu.ec', 'James', 'cliente', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090905', 'Victor Ivan', 'Espinoza de los Monteros', 'La calle y la que cruza', 20, 'victor.espinozam@ug.edu.ec', 'Victor', 'cliente', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090901', 'Christian Eduardo', 'Gonzalez', 'La calle y la que cruza', 27, 'eduardogonzaleze@ug.edu.ec', 'Eduardo', 'administrador', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090902', 'Johann Donato', 'Lucio Vera', 'La calle y la que cruza', 23, 'johann.luciov@ug.edu.ec', 'Donato', 'administrador', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090903', 'Dennis Orlando', 'Gutiérrez León', 'La calle y la que cruza', 22, 'dennis.gutierrezl@ug.edu.ec', 'Orlando', 'administrador', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090904', 'James Douglas', 'Cantos Pinto', 'La calle y la que cruza', 21, 'james.cantosp@ug.edu.ec', 'Douglas', 'administrador', 0);
INSERT INTO USUARIOS (cedula, nombres, apellidos, direccion, edad, email, psw, roll, eliminado) VALUES ('0909090905', 'Victor Ivan', 'Espinoza de los Monteros', 'La calle y la que cruza', 20, 'victor.espinozam@ug.edu.ec', 'Ivan', 'administrador', 0);

INSERT INTO GRUPOS (nombre, eliminado) VALUES ('generico', 0);
INSERT INTO GRUPOS (nombre, eliminado) VALUES ('mujer', 0);
INSERT INTO GRUPOS (nombre, eliminado) VALUES ('oferta', 0);
INSERT INTO GRUPOS (nombre, eliminado) VALUES ('coleccion', 0);

INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Alpha Industries Chaqueta',29.00,13,'assets/img/seccion-hombre/item_01.jpg',13,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Chaqueta Vaquera Slim',35.50,22,'assets/img/seccion-hombre/item_02.jpg',22,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Chaqueta de cuero para hombre',59.99,145,'assets/img/seccion-hombre/item_03.jpg',145,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Camiseta deportiva Vans',45.00,48,'assets/img/seccion-hombre/item_04.jpg',48,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Buzo deportiva para caballero',35.99,74,'assets/img/seccion-hombre/item_05.jpg',74,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Camiseta Jogger para hombres',25.99,62,'assets/img/seccion-hombre/item_06.jpg',62,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Chaqueta Street Style',15.99,50,'assets/img/seccion-hombre/item_07.jpg',50,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Camiseta Vans Casual para hombre',5.99,70,'assets/img/seccion-hombre/item_08.jpg',70,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Jeans Vaqueros',0.99,28,'assets/img/seccion-hombre/item_09.jpg',28,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (1, 'Next Level camisa mangas cortas',0.09,80,'assets/img/seccion-hombre/item_10.jpg',80,'',0,'', 0);



INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Calentador',23.00,20,'assets/img/seccion-mujer/item_01.png',13,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Chompa',40.99,10,'assets/img/seccion-mujer/item_02.png',22,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Calentador',30.00,20,'assets/img/seccion-mujer/item_03.png',145,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Abrigo',50.00,48,'assets/img/seccion-mujer/item_04.png',48,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Camisa de la seleccion',60.99,120,'assets/img/seccion-mujer/item_05.png',74,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Chompa',30.00,24,'assets/img/seccion-mujer/item_06.png',62,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Camisa Barcelona',15.99,35,'assets/img/seccion-mujer/item_07.png',50,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Camisa',15.99,60,'assets/img/seccion-mujer/item_08.png',70,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Calentador',25.50,10,'assets/img/seccion-mujer/item_09.png',28,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Chompa',35.99,12,'assets/img/seccion-mujer/item_10.png',80,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Chompa',25.50,10,'assets/img/seccion-mujer/item_11.png',28,'',0,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (2, 'Short',35.99,12,'assets/img/seccion-mujer/item_12.png',80,'',0,'', 0);

INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Real Madrid C.F. adidas Camiseta de entrenamiento para Hombres',41.00,30,'assets/img/camisa-rm.jpg',0,'GR4324',29,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Condivo 21 Hombre Pantalones cortos',35.00,45,'assets/img/adidas-pants.jpg',0,'GJ6804',19.99,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'HEAD Performance Calcetines tobilleros 2 pares',9.99,82,'assets/img/calcetines.jpg',0,'791019001-870',3.50,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Bayern de Múnich Adidas Hombre Pantalones cortos',35.99,156,'assets/img/bayern-pants.jpg',0,'GM5324',22.99,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Adidas Originals Classics Primeblue SST Hombre Chaqueta',45,124,'assets/img/adidas-buzo.jpg',0,'GF0198',30.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Adidas Stadium Niño Chaqueta con capucha',45.00,45,'assets/img/adidas-chaqueta-ninio.jpg',0,'H10163',30.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento',45.00,70,'assets/img/puma-sudadera.jpg',0,'655606-03',20.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Jako Striker Mujer Chaqueta de presentación',35.00,152,'assets/img/jako-chaqueta.jpg',0,'D9816-23',21.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'SportSpar.de DEALMAKER ONE',25,38,'assets/img/sneakers.jpg',0,'Sneakers',12.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Zeus Mida Pantalones cortos de entrenamiento Marino',35.00,29,'assets/img/zeus-pants.jpg',0,'',30.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'PUMA LIGA 1/4 Zip Hombre Sudadera de entrenamiento',27.00,94,'assets/img/puma-sudadera2.jpg',0,'',16.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'HEAD Hiking Unisex Calcetines tobilleros 2 pares',7.50,45,'assets/img/calcetines-tobilleros.jpg',0,'781001001-857',3.50,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Olympique de Marsella PUMA Niño Camiseta',25.00,23,'assets/img/marsella-shirt.jpg',0,'757046-01',16.00,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Bayer 04 Leverkusen Jako Camiseta',29.00,18,'assets/img/leverkusen-shirt.jpg',0,'BA4221H-681',19.99,'', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (3, 'Mizuno Visera J2GW0R05Z-29',15.00,52,'assets/img/visera.jpg',0,'J2GW0R05Z-29',7.00,'', 0);

INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Adidas: Color negro', 50, 20, 'assets/img/Conjunto1.png', 0, 'cl32165', 30, 'La colección de esta temporada de ADIDAS es oscura, sombría y poderosa. Con bolsillos laterales para guardar cosas, tecnología de absorción de la humedad para un mejor control de la temperatura, esta Chamarra de fútbol vistosa es perfecta para ti.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Adidas: Color negro y blanco', 50, 35, 'assets/img/Conjunto2.png', 0, 'cl54453', 30, 'Este conjunto se inspira en la combinación del diseño romántico y vanguardista de Kahlo. Tiene bordados magníficos y bordes fruncidos yuxtapuestos con materiales deportivos de alto performance.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Jordan: Color negro y rojo', 50, 94, 'assets/img/Conjunto10.png', 0, 'cl68572', 30, 'Este modelo cómodo y acogedor incluye un logotipo llamativo en el pecho que es toda una declaración. Está equipado con puños elasticados para mantener el calor en la pista de skate o en la calle. Para que vistas con estilo sin ningún esfuerzo.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Jordan PSG: Color purpura', 50, 12, 'assets/img/Conjunto4.png', 0, 'cl15812', 30, 'Recopilamos nuestros diseños más queridos para nuestra colección,que presenta accesorios modernos con un estilo incomparable,presenta llamativos bloques de color, una fabricación suave y gráficos que seguramente llamarán la atención.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Nike: Color azul', 50, 54, 'assets/img/Conjunto5.png', 0, 'cl56465', 30, 'Nike se asoció con la marca de ropa de BUTTER para crear este cortaviento ligero, diseñado para mantenerte cómodo y con estilo en cualquier situación.Crea un look que resalta, y un diseño con un cuello y abrigadores.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Nike: Color azul marino', 50, 92, 'assets/img/Conjunto7.png', 0, 'cl98463', 30, 'Nuestro cojunto estampado con gorra está hecho 100% de algodón y con detalles llamativos de marca NIKE. Tiene un práctico bolsillo estilo canguro y una gorra ajustable. Es el Sudadera con el diseño perfecto para los que están atentos a la moda. ', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Adidas: Color negro y blanco', 50, 32, 'assets/img/Conjunto8.png', 0, 'cl64278', 30, 'Cuando se trata de jugar, nada es tan importante como tu equipo. Enfréntate a tus rivales con la comodidad y estilo insuperables de nuestro conjunto. Este conjunto con gorra refinado está diseñado pensando en los gamers.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Conjunto deportivo Jordan: Color negro y purpura', 50, 19, 'assets/img/Conjunto9.png', 0, 'cl32175', 30, 'Todo guardarropa necesita una conjunto con gorra clásica, y esta edición de JORDAN de un básico de ropa informal es absolutamente imprescindible.Con un amplio bolsillo canguro para almacenamiento y una práctica gorra ajustable para mayor comodidad. ', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Indumentaria Lakers', 60, 72, 'assets/img/Basquet1.png', 0, 'cl12484', 40, 'Equipo completo de colección de Angeles Lakers, número 24 de Kobe Byrant.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Indumentaria Suns', 60, 25, 'assets/img/Basquet2.png', 0, 'cl47854', 40, 'Diseño personalizado equipos Suns alterno, año 2017.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Indumentaria Porlant', 60, 29, 'assets/img/Basquet3.png', 0, 'cl65746', 40, 'Camiseta retro de los Porlant, usada actualmente por el jugador Damian Lillard.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Leggins Adidas color celeste', 25, 14, 'assets/img/Mas.png', 0, 'cl54423', 20, 'Feroces amantes de la moda, esta es para ti. Diseñados para aquellos que se atreven a sobresalir entre la multitud,Un atrevido estampado integral compuesto con materiales reciclados, una moda de la que puedes estar realmente orgulloso de lucir.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Leggins Jordan color plomo', 25, 2, 'assets/img/Mas1.png', 0, 'cl87483', 20, 'Estos leggings impactantes tienen estampados gráficos sofisticados inspirados en el arte floral. Están confeccionados con un material flexible en las cuatro direcciones y tecnología de absorción de la humedad.', 0);
INSERT INTO item_ropas (grupoid, nombre, precio, stock, srcimg, cantidad, codigo, preciooferta, detalle, eliminado) VALUES (4, 'Leggins nike color azul', 25, 50, 'assets/img/Mas2.png', 0, 'cl65575', 20, 'Lleva tu estilo personal a otro nivel con nuestros leggings de training estampados de largo 7/8 y cintura alta. Estos leggings de alto performance están diseñados para ser duraderos, cómodos y para brindarte una elasticidad multidireccional.', 0);

INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 4, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 4, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 4, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 4, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 5, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 5, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 5, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('proforma', 5, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('factura', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('proforma', 1, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('proforma', 2, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('proforma', 3, 0);
INSERT INTO facturas (tipo, usuarioid, eliminado) VALUES ('proforma', 4, 0);




INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 1, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 1, 23);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 1, 14);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (8, 1, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 1, 6);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 2, 40);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 2, 48);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (12, 2, 37);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 3, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 3, 22);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 3, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 3, 14);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 3, 50);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 3, 45);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 4, 7);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 4, 6);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 4, 2);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 4, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 5, 37);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 5, 32);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 5, 21);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 6, 22);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 6, 45);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 6, 41);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 6, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 6, 36);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 6, 25);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 6, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 7, 7);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 7, 9);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 7, 5);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 8, 41);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 8, 26);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 8, 41);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 8, 22);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 8, 28);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 8, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 8, 10);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 8, 8);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 9, 1);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 9, 6);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 9, 2);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 10, 4);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 10, 3);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 10, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 10, 31);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 10, 38);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 10, 49);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 10, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 11, 18);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 11, 19);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 11, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 12, 18);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 12, 40);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 13, 42);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 13, 18);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 13, 43);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 13, 36);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 13, 43);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 14, 8);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 14, 6);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 14, 4);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 14, 2);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 14, 9);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 15, 1);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 15, 3);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 16, 23);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 16, 22);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 17, 10);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 17, 8);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 17, 48);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 17, 34);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 17, 28);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 17, 13);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 18, 23);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 18, 50);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 18, 42);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 18, 25);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 19, 14);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 19, 3);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 19, 2);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 19, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 19, 24);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 19, 42);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 19, 13);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 19, 34);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 19, 36);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 19, 32);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 20, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 20, 48);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 20, 15);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 21, 43);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 21, 49);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 21, 15);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 21, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 21, 34);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 21, 45);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 22, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 22, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 22, 40);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 22, 13);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 22, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 22, 18);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 22, 43);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 22, 42);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 23, 15);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 23, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 23, 26);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 23, 49);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 23, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 24, 47);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 24, 51);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 24, 13);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 24, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 24, 14);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 24, 19);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 25, 30);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 25, 21);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (4, 25, 10);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 26, 32);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 26, 23);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (1, 26, 51);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 26, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 26, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 26, 43);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (3, 26, 16);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (6, 27, 50);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 27, 12);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (2, 27, 20);
INSERT INTO ItemRopaCarritos (cantidad, facturaid, itemid) VALUES (5, 27, 14);


