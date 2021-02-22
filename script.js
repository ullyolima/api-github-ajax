const htmlImg = document.querySelector(".js-avatar")
const h2Name = document.querySelector(".js-name")
const pLogin = document.querySelector(".js-login")
const pBio = document.querySelector(".js-bio")
const pLocation = document.querySelector(".js-location")
const pUrl = document.querySelector(".js-url")

function recoverData() {

    const githubPromise = () => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open("GET", "https://api.github.com/users/ullyolima")
            xhr.send(null)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject("Error")
                    }
                }
            }
        })
    }

    githubPromise().then((res) => {
        const name = res.name
        const avatar = res.avatar_url
        const url = res.html_url
        const location = res.location
        const login = res.login
        const bio = res.bio

        htmlImg.setAttribute("src", avatar)
        h2Name.innerHTML = name
        pLogin.innerHTML = login
        pBio.innerHTML = bio
        pLocation.innerHTML = location
        pUrl.setAttribute("href", url)
    }).catch((error) => {
        console.warn(error)
    })
}