import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/styling/styling.md').toString();

export default await docPage(md, 'styling')
