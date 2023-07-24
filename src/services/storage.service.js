const storageModel = require( '../models/Storage.js' );


//  Registra subida de archivos
const registerUploadedFile = async ( { fileName, path, userId } ) => {
    console.log( fileName, path, userId );
    
    return await storageModel.create( { fileName, path, userId } ); 
}


module.exports = {
    registerUploadedFile
};