const { Router } = require( 'express' );

const router = Router();

// Ruta para subir archivos (Restringida)
router.post( 
    '/', 
    // validateToken,
    ( req, res ) => {
        res.status( 200 ).json({
            ok: true,
            path: `/upload/`,
            msg: 'Subir un archivo'
        }); 
    }
);

module.exports = router;