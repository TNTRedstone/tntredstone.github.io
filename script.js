const extensions = [
    {title: "Python", downloads: 131141495, link: "https://marketplace.visualstudio.com/items?itemName=ms-python.python"},
    {title: "Pylance", downloads: 103441894, link: "https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance"},
    {title: "Pylance", downloads: 103441894, link: "https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance"},
    {title: "Juypter", downloads: 80741705, link: "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter"},
    {title: "C++ & C", downloads: 68004626, link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},
    {title: "Juypter keymap", downloads: 62326365, link: "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap"},
    {title: "Juypter notebook renderers", downloads: 61096457, link: "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers"},
    {title: "Live server", downloads: 51664117, link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},
    {title: "Prettier", downloads: 47201205, link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},
    {title: "Intellicode", downloads: 44722974, link: "https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"},
    {title: "Juypter cell tags", downloads: 42625211, link: "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags"},
    {title: "Juypter slide show", downloads: 42555775, link: "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-slideshow"},
    {title: "Python debugger", downloads: 39342866, link: "https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy"},
    {title: "C++ & C theme", downloads: 24571686, link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes"},
    {title: "Material icon theme", downloads: 18692404, link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"},
    {title: "VSCode icons", downloads: 18692404, link: "https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},
    {title: "One dark pro", downloads: 9587072, link: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"},
    {title: "Dracula offical", downloads: 7383041, link: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"},
    {title: "Atom one dark", downloads: 5625386, link: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"},
    {title: "Material theme icons", downloads: 4448301, link: "https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons"},
    {title: "Material theme", downloads: 3295894, link: "https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"},
]

extensions.forEach((extension) => {
    const name = document.createElement("h1");
    name.innerText = extension.title;

    const downloads = document.createElement("h3");
    downloads.innerText = `${extension.downloads.toLocaleString()} downloads`;

    const link = document.createElement("a")
    link.href = extension.link
    link.innerText = "Download"

    const button = document.createElement("button")

    button.append(link)

    const card = document.createElement("div")
    card.classList = ["card"]
    card.append(name)
    card.append(downloads)
    card.append(button)

    document.querySelector(".card-container").append(card)
})