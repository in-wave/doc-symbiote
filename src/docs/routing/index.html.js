import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/routing/routing.md').toString();

export default await docPage(md, 'routing')
