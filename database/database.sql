CREATE DATABASE SIU_DB;
USE SIU_DB;
CREATE TABLE `siu_db`.`puntaje_linea_corte` (
  `idPuntaje` INT NOT NULL,
  `idCarrera` INT NOT NULL,
  `nombreCarrera` VARCHAR(45) NOT NULL,
  `puntajeMínimo` FLOAT NOT NULL,
  `año` INT NOT NULL,
  `semestre` INT NOT NULL,
  PRIMARY KEY (`idCarrera`)
);
CREATE TABLE `siu_db`.`criterio_admision` (
  `idCriterio_Admision` INT NOT NULL,
  `idCarrera` INT NOT NULL,
  `porcentajeCN` FLOAT NOT NULL,
  `porcentajeLC` FLOAT NOT NULL,
  `porcentajeM` FLOAT NOT NULL,
  `porcentajeCS` FLOAT NOT NULL,
  `porcentajeI` FLOAT NOT NULL,
  PRIMARY KEY (`idCriterio_Admision`),
  INDEX `idCarrera_idx` (`idCarrera` ASC) VISIBLE,
  CONSTRAINT `idCarrera` FOREIGN KEY (`idCarrera`) REFERENCES `siu_db`.`puntaje_linea_corte` (`idCarrera`) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (1, 1, 'Ingenieria Civil', 68.9, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (2, 2, 'Ingenieria Industrial', 65.3, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (3, 3, 'Ingenieria Mecanica', 50.0, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (4, 4, 'Ingenieria Electronica', 58.3, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (5, 5, 'Ingenieria de Sistemas', 61.9, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (6, 6, 'Ingenieria Electrica', 62.5, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (7, 7, 'Ingenieria Industrial', 63.8, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (8, 8, 'Ingenieria de Petroleos', 47.2, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (9, 9, 'Geologia', 68.7, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (10, 10, 'Ingenieria Quimica', 60.2, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (11, 11, 'Ingenieria Metalurgica', 54.4, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (12, 12, 'Biologia', 68.1, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (13, 13, 'Quimica', 51.8, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (14, 14, 'Fisica', 59.7, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (15, 15, 'Matematicas', 54.5, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (
    16,
    16,
    'Licenciatura en Matematicas',
    43.9,
    2018,
    2
  );
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (17, 17, 'Medicina', 78.5, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (
    18,
    18,
    'Microbiologia y Bioanalisis',
    70.3,
    2018,
    2
  );
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (19, 19, 'Enfermeria', 64.95, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (20, 20, 'Nutricion y Dietetica', 65.5, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (21, 21, 'Fisioterapia', 65.05, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (22, 22, 'Derecho', 63.2, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (23, 23, 'Trabajo Social', 62.3, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (24, 24, 'Economia', 62.75, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (
    25,
    25,
    'Lic. en Literatura y Lengua Castellana',
    57.65,
    2018,
    2
  );
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (26, 26, 'Licenciatura en Musica', 60.0, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (27, 27, 'Filosofia', 42.4, 2018, 2);
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (
    28,
    28,
    'Lic. en Lenguas Extranjeras',
    71.4,
    2018,
    2
  );
INSERT INTO
  puntaje_linea_corte (
    idPuntaje,
    idCarrera,
    nombreCarrera,
    puntajeM í nimo,
    a ñ o,
    semestre
  )
VALUES
  (
    29,
    29,
    'Historia y Archivistica',
    55.85,
    2018,
    2
  );
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (1, 1, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (2, 2, 0.25, 0.2, 0.25, 0.15, 0.15);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (3, 3, 0.3, 0.1, 0.4, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (4, 4, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (5, 5, 0.25, 0.2, 0.25, 0.15, 0.15);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (6, 6, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (7, 7, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (8, 8, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (9, 9, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (10, 10, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (11, 11, 0.3, 0.2, 0.3, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (12, 12, 0.35, 0.2, 0.25, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (13, 13, 0.4, 0.15, 0.25, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (14, 14, 0.2, 0.25, 0.25, 0.2, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (15, 15, 0.1, 0.2, 0.5, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (16, 16, 0.1, 0.2, 0.5, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (17, 17, 0.3, 0.25, 0.2, 0.15, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (18, 18, 0.4, 0.2, 0.2, 0.1, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (19, 19, 0.3, 0.2, 0.15, 0.2, 0.15);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (20, 20, 0.3, 0.2, 0.2, 0.2, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (21, 21, 0.4, 0.2, 0.15, 0.15, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (22, 22, 0.1, 0.4, 0.2, 0.2, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (23, 23, 0.1, 0.4, 0.1, 0.3, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (24, 24, 0.1, 0.25, 0.3, 0.25, 0.1);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (25, 25, 0.1, 0.4, 0.15, 0.2, 0.15);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (26, 26, 0.1, 0.3, 0.2, 0.2, 0.2);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (27, 27, 0.2, 0.2, 0.2, 0.2, 0.2);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (28, 28, 0.1, 0.25, 0.1, 0.2, 0.35);
INSERT INTO
  criterio_admision (
    idCriterio_Admision,
    idCarrera,
    porcentajeCN,
    porcentajeLC,
    porcentajeM,
    porcentajeCS,
    porcentajeI
  )
VALUES
  (29, 29, 0.1, 0.35, 0.2, 0.25, 0.1);