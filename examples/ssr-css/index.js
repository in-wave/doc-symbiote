import Symbiote from '@in-wave/symbiote';

class MyCom extends Symbiote {
  processInnerHtml = true;

  init$ = {
    onUpdate: () => {
      this.$['--text'] = `Updated text... (${Date.now()})`;
    }
  }
}

MyCom.reg('my-com');