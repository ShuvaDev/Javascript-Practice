
let skills = document.getElementsByName('skills');
let show = document.getElementById('showSkillResult');

let skillArr = [];
[...skills].forEach((skill) => {
    skill.addEventListener('change', function(event){
        if(event.target.checked) {
            skillArr.push(event.target.value)
            showSkill(show, skillArr)
        } else {
            let index = skillArr.indexOf(event.target.value)
            skillArr.splice(index, 1)
            showSkill(show, skillArr)
        }
    })
})


function showSkill (parent, skills) {
    let str = ''
    skills.forEach((skill, index) => {
        str += `(${index+1}) ${skill}  `
    })
    parent.innerHTML = str
} 