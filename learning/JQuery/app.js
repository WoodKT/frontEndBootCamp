let p = $(`#test`);
let div = $(`.my-class`);
let ul = $(`ul`);

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text(`New Text`)

$(`input`).attr('placeholder', 'Placeholder Text');

div.prepend('<p>prepared paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph added before div</p>');
div.after('<p>paragraph added after div</p>');

div.empty();
ul.remove();

$('input').hide();
setTimeout(() => $('input').show(), 2000);