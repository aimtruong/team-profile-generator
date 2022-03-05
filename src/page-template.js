
const generateEngineer = engineers => {
    return `
        <section class = "card">
            <div class = "job-title">
            ${engineers
                .map(({ engName, engId, engEmail, engGit }) => {
                    return `
                        <p>${engName}</p>
                        <p>Engineer</p>
                        </div>

                        <div class = "job-detail">
                            <p class = "job-info">ID: ${engId}</p>
                            <p class = "job-info">Email: ${engEmail}</p>
                            <p class = "job-info">GitHub: ${engGit}</p>
                        </div>
                        </section>
                    `
                })
                .join("")
            }
    `;
};

const generateIntern = interns => {
    return `
        <section class = "card">
            <div class = "job-title">
            ${interns
                .map(({ intName, intId, intEmail, intSchool }) => {
                    return `
                    <p>${intName}</p>
                    <p>Intern</p>
                    </div>

                    <div class = "job-detail">
                        <p class = "job-info">ID: ${intId}</p>
                        <p class = "job-info">Email: ${intEmail}</p>
                        <p class = "job-info">School: ${intSchool}</p>
                    </div>
                    </section>
                    `
                })
                .join("")
            }
                    
    `;
};

module.exports = answers => {
    const { manName, manId, manEmail, manOffice, eng, int } = answers;

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
                <section class = "card">
                    <div class = "job-title">
                        <p>${manName}</p>
                        <p>Manager</p>
                    </div>
                    <div class = "job-detail">
                        <p class = "job-info">ID: ${manId}</p>
                        <p class = "job-info">Email: ${manEmail}</p>
                        <p class = "job-info">Office number: ${manOffice}</p>
                    </div>
                </section>
                ${generateEngineer(eng)}
                ${generateIntern(int)}
            </main>
        </body>

        </html>
    `;

};