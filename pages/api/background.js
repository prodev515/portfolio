const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Technical University of Munich',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering.",
                year: '2012-2016'
            }
            
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Software Technologies',
                role: 'Senior Full Stack Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a Senior Full Stack Developer, Focused on BackEnd, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: 'Apr.2017~Dec.2021',
                location: 'Berlin, Germany'
            },
            {
                id: 2,
                title: 'Block Chain Technologies',
                role: 'Block Chain Developer',
                url: 'https://www.cryptokitties.co/',
                desc: "I work there as a Block chain developer, there I learned about Block chain and developed 8 projects, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'washington, US'
            },
            {
                id: 3,
                title: 'Web full stack Technologies, bloch chain stack Technologies',
                role: 'Senior Full Stack Developer As a Freelancer',
                url: 'https://sevengramscaffe.com/',
                desc: 'Developed some Ecommerce sites using HTML/CSS, JavaScript,WordPress, Shopify and Magento.Very Clean and Neat Designing and making a LIVE Website from Figma with React.js, Rust as much as working very efficient and less timeconsuming.',
                year: 'Jan.2022~',
                location: 'Berlin, Germany'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
