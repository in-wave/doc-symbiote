import { docPage } from '../docPage.js';
import fs from 'fs';

let md = fs.readFileSync('./src/2x/docs/templates/templates.md').toString();

export default await docPage(md, 'templates')

