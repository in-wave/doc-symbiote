## Data context

With Symbiote.js you don't need any external state management library. It's easy to connect, but you really just don't need it in most cases.

All components created with Symbiote.js are present in some data context. Some of properties in that context are local and accessible for certain component only. Some of data could be received form the one of the parent components in document tree. Some of data could be received from the abstract data layers using unique keys. You can organize your application data flow with a high level of flexibility. Let's clarify what does it mean.

To initiate component's data context, use `init$` property:
```javascript
class MyComponent extends BaseComponent {
  init$ = {
    // Local component property initialization:
    myProp: 'some value',

    // Common data context property initialization:
    '*applicationBooleanProp': true,

    // Named context property initialization:
    'user-profile/name': 'John',
  }
}
```

## $ - is for state

We use `Proxy` based interface to organize access to data. 
```javascript
class MyComponent extends BaseComponent {
  initCallback() {
    this.$.myProp = 'My value';
    // ^ this will cause update for all subscribed entities
  }
}
```

To make synchronous multiple updates use `set$`:
```javascript
class MyComponent extends BaseComponent {
  initCallback() {
    this.set$({
      myProp: 'new value',
      someOtherProp: true,
    });
  }
}
```

To get current property value:
```javascript
class MyComponent extends BaseComponent {
  initCallback() {
    console.log(this.$.myProp);
    // or
    console.log(this.$['*someCommonProp']);
    // or
    console.log(this.$['my-named-data-ctx/prop']);
  }
}
```

## Property subscription

```javascript
class MyComponent extends BaseComponent {
  initCallback() {
    this.sub('propName', (val) => {
      console.log(val);
    });
    // ^ this subscription will be automatically removed on component destruction
  }
}
```

## Local context properties

Local data context is accessible for certain component only. This is the simplest type of data interaction with is very similar to state manipulation approach in many other solutions. So you might be already know everything you need about it.

## Hierarchical context properties

Every Symbiote component - is a Custom Element and represented in document tree as a one of it's elements. Every component could have a parent or child components. And every component able to create common data context for it's own children or any other deep nested component. 

To create common context for some DOM subtree manually, use `ctx-name` attribute:
```html
<my-widget ctx-name="my-widget-ctx">
  <inner-block></inner-block>
</my-widget>
```

If context is not created manually with attribute, it will be created by top level component automatically.

## Common context

For components placed at the same hierarchy level, it's possible to create common data context using same `ctx-name` value:
```html
<first-component ctx-name="my-ctx"></first-component>

<second-component ctx-name="my-ctx"></second-component>
```

Now both of these components can read and publish values for the common property:

```javascript
class FirstComponent extends BaseComponent {
  init$ = {
    '*commonProperty': true,
  }
}
FirstComponent.reg('first-component');

class SecondComponent extends BaseComponent {
  initCallback() {
    this.$['*commonProperty'] = false;
  }
}
SecondComponent.reg('second-component');
```

## Named context

Named context - is abstract data context accessible with unique key:
```javascript
import { Data } from '../symbiote/core/Data.js';

Data.registerNamedCtx('my-ctx-name', {
  count: 0,
  increment: () => {
    let ctx = Data.getNamedCtx('my-ctx-name');
    ctx.pub('count', ++ctx.read('count'));
  },
});

class MyComponent extends BaseComponent {}

MyComponent.template /*html*/ `
  <h2 set="textContent: my-ctx-name/count"></h2>
  <button set="onclick: my-ctx-name/increment">Click me!</button>
`;
```