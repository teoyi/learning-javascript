// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
const node = document.createTextNode('Hey I\'m red!')
para.style.color = 'red';
para.appendChild(node);
container.appendChild(para);

const head = document.createElement('H3');
const node2 = document.createTextNode('I\'m blue h3!')
head.style.color = 'blue';
head.appendChild(node2);
container.appendChild(head);

const division = document.createElement('div');
division.style.backgroundColor = 'pink';
division.style.border = '1px solid black'

const header = document.createElement('H1')
const node3 = document.createTextNode('I\'m in a div');
const para1 = document.createElement('p');
const node4 = document.createTextNode('me too!')
header.appendChild(node3);
division.appendChild(header);
para1.appendChild(node4);
division.appendChild(para1);

container.appendChild(division);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});