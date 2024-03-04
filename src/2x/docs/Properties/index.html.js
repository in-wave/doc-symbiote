import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/2x/docs/properties/properties.md').toString();

export default await docPage(md, 'properties')
