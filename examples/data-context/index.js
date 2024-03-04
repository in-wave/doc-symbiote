import Symbiote from '@in-wave/symbiote';

class CtxEl extends Symbiote {

  init$ = {
    '*time': 'Click me!',
  };

  renderCallback() {
    this.onclick = () => {
      this.$['*time'] = Date.now();
    };
  }

}

CtxEl.template = '{{*time}}';
CtxEl.reg('ctx-el');
