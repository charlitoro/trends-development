var education = []
var work = []


var divSummary = document.getElementById('summary')

function onClickAddEducation() {
    var degreeName = document.getElementById('educationDegree').value
    var institute = document.getElementById('educationInstitute').value

    if( !degreeName || !institute ) {
        alert('Error: Degree Name or Institute fields are empty, this fields are required')
        return undefined
    }
    education.push({ degree: degreeName, institute })
}

function onClickAddWork() {
    var company = document.getElementById('workCompany').value
    var position = document.getElementById('workPosition').value

    if( !company || !position) {
        alert('Error: Company and Position fields are empty, this fields are required')
        return undefined
    }
    work.push({company, position})
}

function onClickSummary() {
    var name = document.getElementById('personalName').value
    var lastName = document.getElementById('personalLastname').value
    if (! name || !lastName) {
        alert('Error: Name and Lastname are required fields')
        return undefined
    }

    var educationHtml = ''
    var workHtml = ''
    for(var i = 0; i < education.length; i++) {
        educationHtml += `<h5>${education[i].degree}(${education[i].institute})</h5>`
    }
    for(var i = 0; i < work.length; i++) {
        workHtml += `<h5>${work[i].position}(${work[i].company})</h5>`
    }
    divSummary.innerHTML = `
        <h2>Summary</h2>
        <h3>${name} ${lastName}</h3>
        <h4>Education</h4>
        ${educationHtml}
        <h4>Work</h4>
        ${workHtml}
    `
}

function onClickCancel() {
   education = [];
   work = []
}