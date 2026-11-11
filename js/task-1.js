'use strict';
const categories = document.querySelectorAll('#categories .item');
console.log('Numbers of categories: ' + categories.length);

for (const category of categories) {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
}
