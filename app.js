const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
id: 0,
text: "Pick a vacation destination: ",
answers: [
    {
       text: "New York",
       image: "https://unsplash.com/photos/5omwAMDxmkU",
       alt: "Photo of the Empire State building during daytime",
       credit: "Oliver Nibett"
    },
    {
        text: "Austin",
        image: "https://unsplash.com/photos/ztVcGTSD8xw",
        alt: "Photo of Austin City",
        credit: "Mitchell Kmetz"
    },
    {
        text: "Portland",
        image: "https://unsplash.com/photos/6iFihNnzqyo",
        alt: "High rise buildings",
        credit: "Elena Kuchko"   
    },
    {
        text: "New Orleans",
        image: "https://unsplash.com/photos/jQwv5FnpksM",
        alt: "Road with people and house",
        credit: "João Francisco"
    }
]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://unsplash.com/photos/NzHRSLhc6Cs",
                alt: "Sourdough Pizza",
                credit: "Masimo Grabar"   
            },
            {
                text: "Sandwich",
                image: "https://unsplash.com/photos/U0PiIS4Uvkc",
                alt: "Sandwich",
                credit: "Pille R. Priske"
            },
            {
                text: "Pasta",
                image: "https://unsplash.com/photos/d9jcPTRD9fo",
                alt: "Ragu Pasta",
                credit: "Nicholas Grande"  
            },
            {
                text: "Hamburger",
                image: "https://unsplash.com/photos/jh5XyK4Rr3Y",
                alt: "Hamburger",
                credit: "amirali mirhashemian"  
            },
            {
                id: 2,
                text: "Pick a home:",
                answers: [
                    {
                        text: "Traditional",
                        image: "https://unsplash.com/photos/1ddol8rgUH8",
                        alt: "Traditional house",
                        credit: "Scott Webb"
                    },
                    {
                        text: "Modern",
                        image: "https://unsplash.com/photos/yFV39g6AZ5o",
                        alt: "Modern house",
                        credit: "Stephan Bechert"   
                    },
                    {
                        text: "House",
                        image: "https://unsplash.com/photos/178j8tJrNlc",
                        alt: "House with garden",
                        credit: "Todd Kent"   
                    },
                    {
                        text: "Mountain House",
                        image: "https://unsplash.com/photos/JT-RUtO2sfs",
                        alt: "Mountain House",
                        credit: "Aswathy N"   
                    }
                ]
            }
        ]
    }
]


const populateQuestions = () => {
    
}
