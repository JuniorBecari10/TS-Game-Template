# TypeScript Game Template

A template for creating basic TypeScript games.

## How to use

You can _fork_ or _clone_ the repository, and start coding your game!

### Recommended practices

- Use **Live Server** to automatically update your game, Visual Studio Code provides an extension for doing this, but you can install it by running `npm i -g live-server`, and run `live-server` in your root directory. The result will be the same;
- Execute `tsc -w`, this will execute the TypeScript compiler in **Watch Mode**, that compiles your code every time you modify your files.

## Libraries

This template does not contain any external dependencies, but it provides a small library for creating your games:

- Keyboard support: Use the set `keysPressed` defined in `setup.ts`, it's a set that will contain all the keys pressed at the moment. It also provides some helper functions such as `isKeyPressed(keyCode: number)` and `anyKeyPressed()`;
- Mouse support: Use the variables `mousePos` and `mousePressed`, that contains which button has been pressed. There's the helper function `isMousePressed()`, that returns true if any mouse button has been pressed.

- Tick/Render functions: these two functions run at 60 fps, synchronized with the browser's rendering;
- Init function: This function will execute once, before tick/render. You can use it for defining variables.

- Graphics: This template uses the default Canvas API, whose instance is defined inside the `Graphics` class, defined in `graphics.ts` file.