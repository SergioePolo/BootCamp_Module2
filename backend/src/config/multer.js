import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url); //_filename = backend/src/config/multimeter.js
const _dirname = path.dirname(_filename); //_dirname = backend/src/config


//Crear una capeta donde se guarden los archivos subidos

const FOLDER_FILES_UPLOADED = path.join(_dirname, '../../uploads');//Ubicación y nombre de la carpeta en la que quiero guardar la informción


//Se encarga de crear la carpeta siempre y cuando no exista en el sistema
if(!fs.existsSync(FOLDER_FILES_UPLOADED)){
    fs.mkdirSync(FOLDER_FILES_UPLOADED)
}


//Especificar como se van a guardar los archivos
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //Se define dond se guardara el archivo
        cb(null, FOLDER_FILES_UPLOADED);
    }, //Funcion donde se busca la ruta donde voy a almacenar el archivo
    filename: (req, file, cb)=>{
        const ext = path.extname(file.originalname); //Accede a la extensión del archivo y guardar el formato del archivo original eg- .pdf, .jpg, .png
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_")//Mantenga el nombre original de archivo y su extensión y al mismo tiempo revisar si existe algun simbolo extrano o no común, se reemplazan por un guión bajo (_)
        cb(null, `${base}-Date.now()${ext}`);//Al nombre tambien se le agrega un guión con la fecha en la que se cargo el archivo 
    } //Funcion con la cual se nombrara el archivo a guardar
});





//Que tipo de archivos se van a recibir




//limites de los archivos




//Exportar caracteristicas