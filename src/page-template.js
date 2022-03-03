
const generateManager = managers => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${managers.manager}</p>
                <p>Manager</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${managers.id}</p>
                <p class = "job-info">Email: ${managers.email}</p>
                <p class = "job-info">Office number: ${managers.office}</p>
            </div>
        </section>
    `;
};

const generateEngineer = engineers => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${engineers.engineer}</p>
                <p>Engineer</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${engineers.id}</p>
                <p class = "job-info">Email: ${engineers.email}</p>
                <p class = "job-info">GitHub: ${engineers.github}</p>
            </div>
        </section>
    `;
};

const generateIntern = interns => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${interns.intern}</p>
                <p>Intern</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${interns.id}</p>
                <p class = "job-info">Email: ${interns.email}</p>
                <p class = "job-info">School: ${interns.school}</p>
            </div>
        </section>
    `;
};

module.exports = templateData => {
    const {managers, engineers, interns} = templateData;

    return `
        <!DOCTYPE html>
        <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
            <meta http-equiv = "X-UA-Compatible" content = "ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile Generator</title>
        </head>

        <body>

            <header>
                <p class = "header-title">Team Profile</p>
            </header>
        
            <main class = "container">
                ${generateManager(managers)}
                ${generateEngineer(engineers)}
                ${generateIntern(interns)}
            </main>
        </body>

        </html>
    `;

};