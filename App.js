
const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"hello world react js")))



const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent)