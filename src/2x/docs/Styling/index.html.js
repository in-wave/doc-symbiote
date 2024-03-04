import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/docs/styling/styling.md').toString();

export default await docPage(md, 'styling')
