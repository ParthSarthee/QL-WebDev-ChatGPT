// Fetch API

fetch('http://localhost:3000/contact')
    .then(response => response.json())
    .then(data => console.log(data))


async function printData() {
    const contactList = await fetch('http://localhost:3000/contact');
    const data = await contactList.json();
    console.log(data);
}

printData();