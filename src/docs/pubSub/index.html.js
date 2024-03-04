import { docPage } from '../docPage.js';

import fs from 'fs';

let md = fs.readFileSync('./src/docs/pubSub/pubSub.md').toString();

export default await docPage(md, 'pubSub')
