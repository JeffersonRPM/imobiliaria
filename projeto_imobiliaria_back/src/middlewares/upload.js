import multer from "multer";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempFolder = path.resolve(__dirname, "../", "../", "uploads");
const tempUpload = path.resolve(tempFolder, "uploads");

export default {
    directory: tempFolder,
    uploadFolder: tempUpload,
    storage: multer.diskStorage({
        destination: tempFolder,
        filename(request, file, callback) {
            const hashFile = crypto.randomBytes(10).toString("hex");
            const nameFile = `${hashFile}-${file.originalname}`;

            return callback(null, nameFile);
        }
    }),
    fileFilter: function (request, file, callback) {
        const fileType = file.originalname.split(".").pop();
        if (fileType !== 'jpg' && fileType !== 'jpeg' && fileType !== 'png') {
            return callback(new Error('Tipo de arquivo não suportado!'), false);
        }
        callback(null, true);
    }
}