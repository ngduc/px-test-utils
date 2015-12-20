# px-test-utils
Helper functions for mocha unit tests using [teaspoon](https://github.com/jquense/teaspoon), react-addons-test-utils, etc.

# Installation
```
npm install px-test-utils --save-dev
```

# Usage
```
import PxTestUtils from 'px-test-utils';

describe('My Component', () => {
  let renderer;
  let $el;
  const reactEl = (<MyComp><div>Content</div></MyComp>);

  beforeEach(() => {
    [ renderer, $el ] = PxTestUtils.render(reactEl);
  });

  it('should have 1 div', () => {
    expect($el.find('div').length).to.equal(1);
  });
})
```

# Why
px-test-utils is just a wrapper to help write shorter, cleaner React unit tests.