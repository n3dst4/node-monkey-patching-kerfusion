A demo of how you can't reliably monkeypatch dependencies in Node
=================================================================

This is a test to confirm what happens when you monkeypatch a dependency.

```
app.js                  // requires "alpha" and monkeypatches it
node_modules/
    alpha.js            // first version of alpha.js, loaded by app.js
    bravo/
        node_modules
            alpha.js    // second version of alpha.js, loaded by bravo/index.js
        index.js        // exports a func which reports a value from alpha
```

