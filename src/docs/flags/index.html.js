import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/flags/flags.md').toString();

export default await docPage(md, 'flags')

