import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/docs/get_started/get_started.md').toString();

export default await docPage(md, 'get started')

