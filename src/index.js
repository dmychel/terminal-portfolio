const userCommand = document.querySelector('#userCommand');
const terminal = document.querySelector('#terminal');
const terminalDisplay = document.querySelector('#terminalDisplay');
const inputLabel = document.querySelector('#inputLabel');
const asciiSection = document.querySelector('#ascii');
const introSection = document.querySelector('#intro');
const upArrow = document.querySelector('#upArrow');

// GLOBAL VARIABLES
let rootUser;
let userHistory = [];


onload = function findOS() {
    let userOS = navigator.userAgent;
    if (userOS.includes('X11')) {
        rootUser = 'linux';
        inputLabel.innerHTML = '[visitor@Linux ~]$';
    }
    else if (userOS.search('Windows')) {
        rootUser = 'windows'
        inputLabel.innerHTML = '[visitor@Windows ~]$';
    }
    else if (userOS.search('Mac')) {
        rootUser = 'macos';
        inputLabel.innerHTML = '[visitor@MacOS~]$';
    }
    else {
        rootUser = standard;
        inputLabel.innerHTML = '[visiter@system ~]$';
    }
}


document.onkeydown = function(e) {
    if(e.keyCode === 38){;
     let command = userHistory.splice(-1);
     userCommand.value = command;
    }
}

userCommand.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let value = userCommand.value;
        let str = String(value);
        let lowerCase = str.toLowerCase();
        command = lowerCase;
        userHistory.push(command);

        switch (command) {
            case 'help': {
                console.log('--help')
                userCommand.value = '';

                // CREATE CONTAINERS
                const helpContainer = document.createElement('div');
                const commandEl = document.createElement('div');
                const descriptionEl = document.createElement('div');


                // CREATE COMMANDS
                const about = document.createElement('p')
                const aboutNode = document.createTextNode('-- about');

                const projects = document.createElement('p');
                const projectNode = document.createTextNode('-- projects');


                const contact = document.createElement('p');
                const contactNode = document.createTextNode('-- contact');

                const cd = document.createElement('p');
                const cdNode = document.createTextNode('-- cd');

                const cdHome = document.createElement('p');
                const cdHomeNode = document.createTextNode('-- cd ~');

                const gui = document.createElement('p');
                const guiNode = document.createTextNode('-- exit');

                const clear = document.createElement('p');
                const clearNode = document.createTextNode('-- clear');

                const history = document.createElement('p');
                const historyNode = document.createTextNode('-- \'up arrow key\'');

                // CREATE COMMAND DESCRIPTIONS
                const aboutDescription = document.createElement('p');
                const aboutDescriptionNode = document.createTextNode('About me.');

                const projectDescription = document.createElement('p');
                const projectDescriptionNode = document.createTextNode('List of my web development projects.');

                const contactDescription = document.createElement('p');
                const contactDescriptionNode = document.createTextNode('How to contact me.');

                const cdDescription = document.createElement('p');
                const cdDescriptionNode = document.createTextNode('\'cd\' into links');

                const cdHomeDescription = document.createElement('p');
                const cdHomeDescriptionNode = document.createTextNode('Home shortcut.')

                const guiDescription = document.createElement('p');
                const guiDescriptionNode = document.createTextNode('Exit Terminal.');

                const clearDescription = document.createElement('p');
                const clearDescriptionNode = document.createTextNode('Clears terminal.');
                
                const historyDescription = document.createElement('p');
                const historyDescriptionNode = document.createTextNode('Cycles through command history.');


                // APPEND CONTAINERS
                terminalDisplay.append(helpContainer);
                helpContainer.append(commandEl);
                helpContainer.append(descriptionEl);

                //APPEND COMMANDS
                about.appendChild(aboutNode)
                commandEl.append(about);

                projects.appendChild(projectNode);
                commandEl.append(projects);

                contact.appendChild(contactNode)
                commandEl.append(contact);

                cd.appendChild(cdNode);
                commandEl.append(cd);

                cdHome.appendChild(cdHomeNode);
                commandEl.append(cdHome);

                gui.appendChild(guiNode);
                commandEl.append(gui);

                clear.appendChild(clearNode);
                commandEl.append(clear);

                history.appendChild(historyNode);
                commandEl.append(history);

                // APPEND DESCRIPTIONS
                aboutDescription.appendChild(aboutDescriptionNode);
                descriptionEl.append(aboutDescription);

                projectDescription.appendChild(projectDescriptionNode);
                descriptionEl.append(projectDescription);

                contactDescription.appendChild(contactDescriptionNode);
                descriptionEl.append(contactDescription);

                cdDescription.appendChild(cdDescriptionNode);
                descriptionEl.append(cdDescription);

                cdHomeDescription.appendChild(cdHomeDescriptionNode);
                descriptionEl.append(cdHomeDescription);

                guiDescription.appendChild(guiDescriptionNode);
                descriptionEl.append(guiDescription);

                clearDescription.appendChild(clearDescriptionNode);
                descriptionEl.append(clearDescription);

                historyDescription.appendChild(historyDescriptionNode);
                descriptionEl.append(historyDescription);

                // ASSIGN CLASS
                helpContainer.classList = 'help-container-el';
                commandEl.classList = 'command-el';
                descriptionEl.classList = 'description';
                about.style.color = 'yellow';
                projects.style.color = 'yellow';
                contact.style.color = 'yellow';
                cd.style.color = 'yellow';
                cdHome.style.color = 'yellow';
                gui.style.color = 'yellow';
                clear.style.color = 'yellow';
                history.style.color = 'yellow';

                scrollToBottom();

                break
            }
            case 'about': {
                console.log('--about');

                // INPUT LABEL
                if (rootUser === 'linux') {
                    inputLabel.innerHTML = '[visiter@Linux about]$';
                }
                else if (rootUser === 'macos') {
                    inputLabel.innerHTML = '[visiter@MacOS about]$';
                }
                else if (rootUser === 'windows') {
                    inputLabel.innerHTML = '[visiter@Windows about]$';
                }
                else {
                    inputLabel.innerHTML = '[visiter@system about]$';
                }

                // CLEAR INPUT
                userCommand.value = '';

                // CREATE CONTAINERS
                const about = document.createElement('p');

                // CREATE CONTENT
                const aboutNode = document.createTextNode('Hi I\'m Dylon. I\'m a front-end developer from Massachussettes and I love to code!');

                // APPEND CONTAINER
                terminalDisplay.append(about);

                // APPEND CONTENT
                about.append(aboutNode);

                scrollToBottom();

                break
            }
            case 'projects': {
                console.log('--projects');

                // INPUT LABEL
                if (rootUser === 'linux') {
                    inputLabel.innerHTML = '[visiter@Linux projects]$';
                }
                else if (rootUser === 'macos') {
                    inputLabel.innerHTML = '[visiter@MacOS projects]$';
                }
                else if (rootUser === 'windows') {
                    inputLabel.innerHTML = '[visiter@Windows projects]$';
                }
                else {
                    inputLabel.innerHTML = '[visiter@system projects]$';
                }

                // CLEAR INPUT
                userCommand.value = '';

                // CREATE CONTAINERS
                const projects = document.createElement('section');
                const projectTip = document.createElement('p');
                const streetCombat = document.createElement('div');
                const calculator = document.createElement('div');
                const gameLibrary = document.createElement('div');


                // CREATE CONTENT
                const projectHelpCommand = document.createTextNode('Tip: type  \'project-help\' for additional commands.')
                const streetCombatNode = document.createTextNode('street-fighter-combat');
                const calculatorNode = document.createTextNode('calculator');
                const gameLibraryNode = document.createTextNode('video-game-library');


                // APPEND CONTAINER;
                terminalDisplay.append(projects);
                projects.prepend(projectTip);
                projects.append(streetCombat);
                projects.append(calculator);
                projects.append(gameLibrary);


                // APPEND CONTENT
                projectTip.appendChild(projectHelpCommand);
                streetCombat.appendChild(streetCombatNode);
                calculator.appendChild(calculatorNode);
                gameLibrary.appendChild(gameLibraryNode);

                 // ADD CLASS
                 projectTip.style.color = 'yellow';
                

                scrollToBottom();

                break
            }

            case 'project-help': {
                userCommand.value = '';

                // CREATE CONTAINER
                const projectHelpContainer = document.createElement('section');
                const projectHelpCommand = document.createElement('div');
                const projectHelpDescription = document.createElement('div');
                projectHelpContainer.classList = 'project-help';

                // CREATE CONTENT
                const cdLive = document.createElement('p');
                const cdLiveNode = document.createTextNode('-- cd project-name');
                const cdRepo = document.createElement('p');
                const cdRepoNode = document.createTextNode('-- cd project-name-repo');

                const cdLiveDescription = document.createElement('p');
                const cdLiveDescriptionNode = document.createTextNode('View live site.');
                const cdRepoDescription = document.createElement('p');
                const cdRepoDescriptionNode = document.createTextNode('View project repo.');

                // APPEND CONTAINER
                terminalDisplay.append(projectHelpContainer);
                projectHelpContainer.append(projectHelpCommand);
                projectHelpContainer.append(projectHelpDescription);

                projectHelpCommand.append(cdLive);
                projectHelpCommand.append(cdRepo);
                projectHelpDescription.append(cdLiveDescription);
                projectHelpDescription.append(cdRepoDescription);


                // APPEND CONTENT
                cdLive.appendChild(cdLiveNode);
                cdRepo.appendChild(cdRepoNode);
                cdLiveDescription.appendChild(cdLiveDescriptionNode);
                cdRepoDescription.appendChild(cdRepoDescriptionNode);

                // ASSIGN CLASS
                projectHelpCommand.classList = 'description';
                projectHelpDescription.classList = 'description';
                cdLive.style.color = 'yellow';
                cdRepo.style.color = 'yellow';

                scrollToBottom();

                break
            }

            case 'cd street-fighter-combat': {
                userCommand.value = '';

                window.open('https://dmychel.github.io/street-fighter-combat/')

                break
            }

            case 'cd calculator': {
                userCommand.value = '';

                window.open('https://dmychel.github.io/calculator/')

                break
            }

            case 'cd video-game-library': {
                userCommand.value = '';

                window.open('https://dmychel.github.io/library/')

                break
            }

            case 'cd street-fighter-combat-repo': {
                userCommand.value = '';

                window.open('https://github.com/dmychel/street-fighter-combat')

                break
            }

            case 'cd calculator-repo': {
                userCommand.value = '';

                window.open('https://github.com/dmychel/calculator')

                break
            }

            case 'cd video-game-library-repo': {

                window.open('https://github.com/dmychel/library')

                break
            }

            case 'contact': {
                console.log('--contact');

                // INPUT LABEL
                if (rootUser === 'linux') {
                    inputLabel.innerHTML = '[visiter@Linux contact]$';
                }
                else if (rootUser === 'macos') {
                    inputLabel.innerHTML = '[visiter@MacOS contact]$';
                }
                else if (rootUser === 'windows') {
                    inputLabel.innerHTML = '[visiter@Windows contact]$';
                }
                else {
                    inputLabel.innerHTML = '[visiter@system contact]$';
                }

                // CLEAR INPUT
                userCommand.value = '';

                // CREATE CONTAINERS
                const contactContainer = document.createElement('section');
                const tip = document.createElement('p');
                const linkedIN = document.createElement('p');
                const gitHub = document.createElement('p');


                // CREATE CONTENT
                const tipNode = document.createTextNode('Tip: Try tpying \'cd linkedin\'');
                const linkedInNode = document.createTextNode('https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/');
                const gitHubNode = document.createTextNode('https://github.com/dmychel');

                // APPEND CONTAINERS
                terminalDisplay.append(contactContainer);
                contactContainer.prepend(tip);
                contactContainer.append(linkedIN);
                contactContainer.append(gitHub);

                // APPEND CONTENT
                tip.appendChild(tipNode);
                linkedIN.appendChild(linkedInNode);
                gitHub.appendChild(gitHubNode);

                // ASSIGN CLASS
                contactContainer.classList = 'contact';
                tip.style.color = 'yellow';

                scrollToBottom();
                
                break
            }

            case 'cd linkedin': {
                userCommand.value = '';

                window.open('https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/')

                break
            }
            case 'cd github': {
                userCommand.value = '';

                window.open('https://github.com/dmychel')

                break
            }

            case 'cd ~': {
                console.log('--cd ~');
                userCommand.value = '';

                if (asciiSection.innerHTML == '') {
                    console.log('empty');

                    // INPUT LABEL
                    if (rootUser === 'linux') {
                        inputLabel.innerHTML = '[visiter@Linux ~]$';
                    }
                    else if (rootUser === 'macos') {
                        inputLabel.innerHTML = '[visiter@MacOS ~]$';
                    }
                    else if (rootUser === 'windows') {
                        inputLabel.innerHTML = '[visiter@Windows ~]$';
                    }
                    else {
                        inputLabel.innerHTML = '[visiter@system ~]$';
                    }
                }
                else {
                    console.log('not empty');
                     // INPUT LABEL
                     if (rootUser === 'linux') {
                        inputLabel.innerHTML = '[visiter@Linux ~]$';
                    }
                    else if (rootUser === 'macos') {
                        inputLabel.innerHTML = '[visiter@MacOS ~]$';
                    }
                    else if (rootUser === 'windows') {
                        inputLabel.innerHTML = '[visiter@Windows ~]$';
                    }
                    else {
                        inputLabel.innerHTML = '[visiter@system ~]$';
                    }

                    userCommand.value = '';
                    terminal.prepend(asciiSection, introSection);
                    terminalDisplay.innerHTML = '';

                   
                }

                break
            }

            case 'exit': {
                userCommand.value = '';
                location.href = 'https://dmychel.github.io/dyloncrowley-portfolio/';

                break
            }

            case 'clear': {
                console.log('clear');
                userCommand.value = '';

                // CLEAR DOM
                introSection.remove();
                asciiSection.remove();
                terminalDisplay.innerHTML = '';

                break
            }

            default: {
                const defaulMessage = document.createTextNode(`'${str}' is not a command. Type 'help' for a list of commands`);
                terminalDisplay.appendChild(defaulMessage);
                userCommand.value = '';
            }
        }
    }
})

function scrollToBottom(timedelay=0) {
    let scrollId;
    let height = 0;
    let minScrollHeight = 100;
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0, minScrollHeight);
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
}