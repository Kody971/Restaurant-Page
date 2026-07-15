export const menu = () => {
    const content = document.querySelector("#content")
    
    const jargon = document.createElement("p")
    jargon.textContent = "TONIGHT'S FIRE"
    content.appendChild(jargon)
    
    const title = document.createElement("h1")
    title.textContent = "Menu"
    content.appendChild(title)

    const listMenu = [
        {
            title: "TO START",
            items: [
                {
                    name: "Charred corn, whipped tofu",
                    price: "Rp 38k"
                },
                {
                    name: "Smokked eggplant, sambal matah",
                    price: "Rp 42k"
                },
                {
                    name: "Grilled prawns, kaffir lime butter",
                    price: "Rp 65k"
                }
            ]
        },
        {
            title: "FROM THE COALS",
            items: [
                {
                    name: "Dry-aged beef rib, 28 days",
                    price: "Rp 210k"
                },
                {
                    name: "Whole grilled river fish, turmeric",
                    price: "Rp 95k"
                },
                {
                    name: "Charcoal chicken, lengkuas glaze",
                    price: "Rp 78k"
                }
            ]
        },
        {
            title: "TO FINISH",
            items: [
                {
                    name: "Burnt banana, palm sugar caramel",
                    price: "Rp 32k"
                },
                {
                    name: "Smoked coconut sorbet",
                    price: "Rp 28k"
                },
                {
                    name: "Palm sugar tart, burnt cream",
                    price: "Rp 35k"
                }
            ]
        }
    ]

    
    // make 3 article, each have 3 section, each section have 2p tag for menu name and price


    const article = document.createElement("article")
    const
}
