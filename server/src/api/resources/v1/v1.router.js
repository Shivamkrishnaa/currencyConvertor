import express from 'express';
import v1Controller from './v1.controller';
import { validateBody, schemas } from '../../../middleware/validator';
import { sanitize } from '../../../middleware/sanitizer';
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

export const v1Router = express.Router();
v1Router.route('/upload').post( upload.single('file'),  v1Controller.upload);

 