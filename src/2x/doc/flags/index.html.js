import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/doc/flags/flags.md').toString();

export default await docPage(md, 'flags')

