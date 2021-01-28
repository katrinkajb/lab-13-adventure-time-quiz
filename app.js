const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        completed: {},
        lsp: 0,
        bmo: 0,
        treeTrunks: 0,
        bubblegum: 0,
        marceline: 0,
    };
// Figure out alert later 
    // if (user.value) {
    const userString = JSON.stringify(user);

    localStorage.setItem('USER', userString);

    window.location = './map/index.html';
    // } else {
    //     alert('Unacceptable! Please fill out all fields');
    // }
});
