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
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //Se define dond se guardara el archivo
        cb(null, FOLDER_FILES_UPLOADED);
    }, //Funcion donde se busca la ruta donde voy a almacenar el archivo
    filename: (req, file, cb)=>{
        const ext = path.extname(file.originalname); //Accede a la extensión del archivo y guardar el formato del archivo original eg- .pdf, .jpg, .png
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_")//Mantenga el nombre original de archivo y su extensión y al mismo tiempo revisar si existe algun simbolo extrano o no común, se reemplazan por un guión bajo (_)
        cb(null, `${base}-${Date.now()}${ext}`);//Al nombre tambien se le agrega un guión con la fecha en la que se cargo el archivo 
    } //Funcion con la cual se nombrara el archivo a guardar
});

//Que tipo de archivos se van a recibir
const fileFilter = (req, file, cb) => {
    const allowed = ['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml'+'image/webp'];

    if(allowed.includes(file.mimetype)){//Revisa el formato del archivo cargado por el usuario si esta dentro de la lista de los formatos permitidos
        cb(null, true); //Si el archivo es permitido después de su validación, este se guardara en la carpeta que fue creada al inicio para estos archivos
    }
    else{
        cb(new Error('File not permited'));//Alerta de cuando el archivo que se quiere guardar no esta permitido
    }
}



//limites de los archivos
const limits = {
    fileSize: 5*1024*1024 // Cada 1024 hace referencia a la medida de los bytes KB, MB, GB, TB ...., dependiendo de la candiad de multiplicaciones de 1024 es el tamaño que se desea como máximo - Para este caso se buscan 5MB como máximo
}

//Exportar caracteristicas
export const upload = multer({storage,fileFilter, limits});