const { response, request } = require( 'express' );

const { registerUploadedFile } = require( '../services/storage.service.js' );


const getFile = async ( req = request, res = response ) => {
    try {
        const { authUser, file } = req;

        console.log({ authUser: authUser ? authUser : 'NOT FOUND USER' });
        console.log({ file });

        // Extraemos solo los valores que vamos a insertar en nuestro modelo
        const fileDataToRegister = {
            fileName: `${ file?.filename }`,
            userId: authUser?.id,
            path: `${ file?.path }`
        }

        // Hacemos uso del servicio para registrar la imagen subida por el Middleware (multerMiddleware) anterior
        const result = await registerUploadedFile( fileDataToRegister );

        res.send({ 
            msg: `Archivo subido y registrado con exito`,
            result,
            user: authUser
        });
    }
    catch( error ) {
        console.log( error );
        return res.status( 500 ).json({
            ok: false,
            path: `/upload/`,
            msg: 'Error al subir archivo'
        });  
    }
}


module.exports = {
    getFile
};