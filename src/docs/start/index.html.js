import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/start/start.md').toString();

export default await docPage(md, 'start')

