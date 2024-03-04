import Symbiote from '@in-wave/symbiote';

class MyCom extends Symbiote {

  allowCustomTemplate = true;

  init$ = {
    text: 'MY TEXT',
  }

}

MyCom.reg('my-com');