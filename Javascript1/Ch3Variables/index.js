/* Leticia Martinez 03-25-2025 
    // Adapted from video tutorial in canvas,
    // http://javascript30.com/*/
    /* new js: this, setProperty method  */ 

const inputs = document.querySelectorAll(' .controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


/*function handleUpdate() {
    const suffix = this.dataset.sizing || ''; document.documentElement.
    style.setProperty(`--${this.name}` , this.value + suffix);
    
}*/

// I wrotw 3 functions to brake out code vs. 1 handleUpdate functio
function changeSpacing() {
    const spacing = document.getElementById('spacing');
    document.documentElement.style.setProperty('--spacing', spacing.value + "%");
}

function changeBlur() {
    const blur = document.getElementById('blur');
    document.documentElement.style.setProperty('--blur', blur.value + "px");
}
function changeBaseColor() {
    const baseColor = document.getElementById('base');
    document.documentElement.style.setProperty('--base', baseColor.value);
}

/* Here I call all functios to this page works propertly*/
function handleUpdate() {
    changeSpacing();
    changeBlur();
    changeBaseColor();
}



 
   