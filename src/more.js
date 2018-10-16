function component() {
    let element = document.createElement('div');

    element.innerHTML = 'More elements';

    return element;
}

document.body.appendChild(component());
