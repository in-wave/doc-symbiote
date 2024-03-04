import { docPage } from '../docPage.js';
import fs from 'fs';

let md = fs.readFileSync('./src/docs/templates/templates.md').toString();

export default await docPage(md, 'templates')

