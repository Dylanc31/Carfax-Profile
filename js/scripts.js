
// This script manages my growing list of skills and sends it as a list to my webpage
var skillList = [
  'HTML',
  'CSS',
  'JavaScript',
  'Photoshop',
  'Illustrator',
  'UI Design',
  'Drupal',
  'Wordpress',
  'Bootstrap'
]

var skills = document.getElementById('skillSet')

function printList(list){
  var htmlList = '<ul class="customList">';
  for (i = 0; i < list.length; i += 1){
    htmlList += '<li>' + list[i] + '</li>';
  }
  htmlList += '</ul>';
  skills.innerHTML = htmlList;
}
printList(skillList);
