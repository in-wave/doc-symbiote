import Symbiote from '@in-wave/symbiote';

class MyCom extends Symbiote {}

MyCom.template = `
  <h2>{{--heading}}</h2>
  <div>{{--text}}</div>
`;

MyCom.reg('my-com');