function colorGeneration(num) {
    const VALUES = {
        1:1,2:2,3:3,4:4,5:8,6:9,7:10
    }

    if (VALUES[num]) {
        let currentElement = document.getElementById(VALUES[num]);
        do {
            currentElement.classList += ".generator-color";
            currentElement = currentElement.nextElementSibling ? currentElement.nextElementSibling : "";
        } while (currentElement.nextElementSibling);
    } else {
        return null;
    }

    return num;
}
colorGeneration(3)