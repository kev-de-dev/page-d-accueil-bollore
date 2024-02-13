


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const id = section.getAttribute('id');
        const title = section.querySelector('h1').textContent;
        const description = section.querySelector('p').textContent;
        const links = [];

        section.querySelectorAll('ul li a').forEach(link => {
            const href = link.getAttribute('href');
            const text = link.textContent;
            links.push({ href, text });
        });

        console.log(`Section ID: ${id}`);
        console.log(`Title: ${title}`);
        console.log(`Description: ${description}`);
        console.log(`Links:`, links);
        console.log('--------------------');
    });
});
