import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { getStudentProfile, studentDelete, studentLogin, studentRegister, studentUpdate } from '../controller/version1/student.controller.js';
import isStudentLoggedIn from '../middlewares/student.auth.js';

const studentRouter = express.Router();




studentRouter.route('/register').post(
    upload.none(),
    studentRegister
);

studentRouter.route('/login').post(
    upload.none(),
    studentLogin
)



studentRouter.route('/getProfile').get(
    isStudentLoggedIn,
    getStudentProfile
)



studentRouter.route('/update').put(
    
    isStudentLoggedIn,
    upload.none(),
    studentUpdate
);


studentRouter.route('/delete').delete(
    
    isStudentLoggedIn,
    upload.none(),
    studentDelete

);





export default studentRouter;