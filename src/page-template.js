
const generateManager = managers => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${manager}</p>
                <p>Manager</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${id}</p>
                <p class = "job-info">Email: ${email}</p>
                <p class = "job-info">Office number: ${office}</p>
            </div>
        </section>
    `;
};

const generateEngineer = engineers => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${engineer}</p>
                <p>Engineer</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${id}</p>
                <p class = "job-info">Email: ${email}</p>
                <p class = "job-info">GitHub: ${github}</p>
            </div>
        </section>
    `;
};

const generateIntern = interns => {
    return `
        <section class = "card">
            <div class = "job-title">
                <p>${intern}</p>
                <p>Intern</p>
            </div>

            <div class = "job-detail">
                <p class = "job-info">ID: ${id}</p>
                <p class = "job-info">Email: ${email}</p>
                <p class = "job-info">School: ${school}</p>
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