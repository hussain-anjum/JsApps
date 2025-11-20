// This projecet based on Async JS concepts

const insert = document.querySelector("#insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class='color'>
        <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th> 
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td> 
          <td>${e.code}</td>
        </tr>
        </table>
    </div>
    `;
});

// why window.eventListener not document.eventListener? --->
// because window listens to the whole window, document only listens to the document part. so if we use document.eventListener,
// it will not work when we click outside the document area. That's why we use window.eventListener.

// Also, keydown event works when we press the key down, keyup event works when we release the key.Here we use keydown event because
// we want to show the key info as soon as we press the key.

// Also, e.keyCode is deprecated, but still works in most browsers. it's better to use e.code or e.key.
// e.key gives the value of the key pressed.
// e.code gives the physical key on the keyboard.

// for example, if we press "a" key, e.key == "a", e.keyCode == 65 but e.code == "KeyA".
// if we press "Shift" key, e.key will be "Shift", but e.code will be "ShiftLeft" or "ShiftRight" depending on which shift key is pressed.
