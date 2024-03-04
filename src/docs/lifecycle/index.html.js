import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/lifecycle/lifecycle.md').toString();

export default await docPage(md, 'lifecycle')

