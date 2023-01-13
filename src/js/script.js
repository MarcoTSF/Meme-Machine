function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result

            changeMemePicture(uploadImage)

            // document.querySelector("#display-image").style
            // .backgroundImage = `url(${uploadImage})`
        })

        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "chapolin",
            "path": "./src/images/memes/chapolin.jpg"
        },
        {
            "name": "chloe",
            "path": "./src/images/memes/chloe.png"
        },
        {
            "name": "funny-cat",
            "path": "./src/images/memes/funny-cat.png"
        },
        {
            "name": "nazare",
            "path": "./src/images/memes/nazare.jpg"
        },
        {
            "name": "coringa",
            "path": "./src/images/memes/coringa.jpg"
        },
        {
            "name": "MacLovin",
            "path": "./src/images/memes/MacLovin.jpg"
        },
        {
            "name": "Ednaldo-Bee",
            "path": "./src/images/memes/ednaldo-bee.png"
        }
    ]

    return memesObject
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#meme-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()