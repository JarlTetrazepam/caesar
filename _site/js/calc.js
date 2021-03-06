const submit = document.getElementById("submit")
const text = document.getElementById("text")
const form = document.getElementById("decryptForm")
const output = document.getElementById("output")

form.addEventListener("submit", event => {
    event.preventDefault()
    output.children[1].innerHTML = `${decrypt(text.value)[0]}`
    output.children[3].innerHTML = `${decrypt(text.value)[1]}`
    output.classList.add("outputActive")
})

const decrypt = function(input) {
    let text = input.split("").join("")

    for (let i = 0; i < 26; i++) {

        let decryptAttempt = text.replace(/[a-z]/g, lowerLetter => {
            return String.fromCharCode(((lowerLetter.charCodeAt(0) - 19 + i) % 26) + 97)
        }).replace(/[A-Z]/g, upperLetter => {
            return String.fromCharCode(((upperLetter.charCodeAt(0) - 13 + i) % 26) + 65)
        })

        if(dicComparison(decryptAttempt)) return [i, decryptAttempt]

    }

    return "no match found"

}

const dicComparison = (text) => {
    const dic = 
        `My name is you. 
        Each day drive my kids to school. My daughter goes to a school that far from our house. 
        It takes minutes to get there. Then drive my son to his school. 
        close to my job. My daughter is in the sixth grade and my son is in the second. 
        They are both good students. My daughter usually sings her favorite songs while drive. 
        My son usually sleeps. arrive at the office at AM. 
         say good morning to all my workmates then get a big cup of hot coffee. 
         turn on my computer and read my email. Some days have a lot to read. Soon I 
        need another cup of coffee. The Grand Canyon, one of the Seven Wonders of the Natural World, 
        is located in the state of Arizona. It is also a UNESCO World Heritage Site. 
        Formed by over 70 million years of erosion from the Colorado River, the Grand Canyon offers a spectacular view. 
        The canyon spans 277 miles in length, up to 18 miles in width, and it measures over a mile in depth at its deepest points. 
        Carlos always wanted to visit the Grand Canyon, and recently he received the chance to hike some of the 
        trails and take several panoramic photographs during his visit. When Carlos arrived at the visitor center, 
        he watched a brief movie that taught tourists about the Grand Canyon National Park and the geological history of 
        the canyon???s formation. Later, Carlos followed a hiking trail to become even further acquainted with the canyon. 
        While walking through the trails, Carlos saw some tourists riding donkeys to traverse the canyon???s ridges. 
        Throughout his hiking expedition, Carlos used a map to find some of the best hot spots for photographs within the canyon. 
        He revisited some areas at different points in the day because sun angles and lighting can make a big difference in the quality of a photo.
        Carlos was very pleased that he got to travel to the Grand Canyon. He loves hiking and photography, 
        so this was the perfect outdoor experience for him. He posted all of his best pictures on social media, 
        and his friends were amazed by his breathtaking, panoramic shots.`.toLowerCase().replace(/\si\s/g, " ").replace(/[^\s\w]/g, "").replace(/[ ]+/g, " ").split(" ")

    const matchingWords = text.toLowerCase().replace(/[^\s\w]/g, "").replace(/[ ???]+/g, " ").split(" ").filter(word => dic.includes(word))

    if (matchingWords.length >= 3 || text.split("").length <= 3 && matchingWords.length) {
        return true
    }
    return false
}