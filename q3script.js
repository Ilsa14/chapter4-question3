const heading = document.createElement('h1');
heading.textContent = 'Rules for Naming JS Variables';
document.body.appendChild(heading);
const rules = [
    'Variable names can only contain numbers, $, and _. For example: $my_1stVariable',
    'Variables must begin with a letter, $, or _. For example: $name, _name, or name',
    'Variable names are case sensitive',
    'Variable names should not be JS keywords'
];

const ul = document.createElement('ul');
rules.forEach(rule => {
    const li = document.createElement('li');
    li.textContent = rule;
    ul.appendChild(li);
});

document.body.appendChild(ul);

