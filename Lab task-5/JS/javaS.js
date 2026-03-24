function analyzeText() {
    const text = document.getElementById("textInput").value;

    const charCount = text.length;

    let wordCount = 0;
    if (text.trim() !== "") {
        wordCount = text.trim().split(" ").length;
    }

    const reversedText = text.split("").reverse().join("");

    document.getElementById("charCount").innerText = charCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("reversedText").innerText = reversedText;

    if (text.trim() === "") {
        alert("Please enter some text to analyze.");
    }
}