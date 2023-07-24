const { Router } = require( 'express' );

const { validateToken } = require( '../middlewares/validate-jwt.middleware.js' );
const { getFile } = require('../controllers/upload.controller');
const multerMiddleware = require('../middlewares/upload-file.middleware');

const router = Router();
const fileUploadFieldName = 'image';     // --> Nombre de la propiedad que subira el archivo

// Ruta para subir archivos (Restringida)
router.post( 
    '/', 
    validateToken,
    multerMiddleware.single( fileUploadFieldName ),     // --> Se encarga de subir el archivo
    getFile                                             // --> Se encarga de registrar datos del archivo subido
);

module.exports = router;