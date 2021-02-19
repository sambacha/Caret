
m4RunButton = undefined
m4StopButton = undefined
m4HelpButton = undefined

m4HelpButton = document.querySelector("m4Help")
m4RunButton = document.querySelector("#m4RunOrRestart")
m4HashButton = document.querySelector("#m4Hash")
m4OptionsMenu = document.querySelector("#options-menu")
m4CloseHelpBtn = document.querySelector("#m4CloseHelp")
console.log(m4RunButton)
m4StopButton = document.querySelector("#m4Stop")
m4RunButton.addEventListener("click", m4RunOrRestart)
m4CloseHelpBtn.addEventListener("click", m4CloseHelp)
m4StopButton.addEventListener("click", m4Stop)
m4HashButton.addEventListener("click", m4Hash)

m4HelpButton = document.querySelector("#m4Help")
m4HelpButton.addEventListener("click", m4Help)

m4ctrlC = ""
m4ctrlD = ""

function m4RunOrRestart() {
    self.sendString_(false, document.querySelector("#stopcmd-selection").value)
    self.sendString_(false, document.querySelector("#runcmd-selection").value)
    m4StopButton.removeAttribute("disabled")
}
function m4Stop() {
    self.sendString_(false, document.querySelector("#stopcmd-selection").value)
    self.sendString_(false, "\n")
    m4StopButton.setAttribute("disabled", "true")
}
function m4Hash() {
    self.sendString_(false, document.querySelector("#hashcmd-selection").value)
}
function m4Help() {
    m4OptionsMenu.style.display = "block"
}
function m4OnStringSent(string) {
    console.log(string)
    if (string == m4ctrlC) {       // ctrl + C
        console.log('ctrl-c')
        m4RunButton.innerHTML = "Run"
    } else if (string == m4ctrlD) { // Ctrl + D
        console.log('ctrl-d')
        m4RunButton.innerHTML = "Restart"
    }
}
function m4CloseHelp() {
    m4OptionsMenu.style.display = "none"
}
/*
function m4OnStringSent(string) {
    console.log(string)
}*/