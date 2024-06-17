export const presets: Preset[] = [
    {title: "Crowdsource Token", details: ["1% Options allocation to Team", "99% Options allocation to AllStars",
    "DAO governed by holders"], price: 10, link: "CrowdsourceToken.md",
    voteDuration: 129600, council: false, minToVote: 1, quorum: 2, allocation: [1,99,0,0]},

    {title: "Investment DAO", details: ["2% allocation to Team", "98% allocation to DAO treasury",
    "DAO governed by investors"], price: 20, link: "InvestmentDAOPreset.md",
    voteDuration: 172800, council: false, minToVote: 1, quorum: 1, allocation: [2,0,98,0]},

    {title: "Early Stage DAO", details: ["100% allocation to Team", "Team decides the DAO's direction",
    "Team issues further tokens"], price: 25, link: "EarlyStageDAOPreset - Documentation.md",
    voteDuration: 129600, council: false, minToVote: 1, quorum: 1, allocation: [100,0,0,0]},

    {title: "Memecoin", details: ["89% allocation to the Allstar list", "10% allocation to liquidity pool",
    "1% allocation to Team"], price: 30, link: "MemecoinPreset.md",
    voteDuration: 129600, council: false, minToVote: 1, quorum: 12, allocation: [1,99,0,0]},

    {title: "DAO", details: ["Fixed supply of 100 tokens", "1 token to each address",
    "DAO governed by the holders"], price: 34, link: "DAOPreset.md",
    voteDuration: 129600, council: false, minToVote: 1, quorum: 1, allocation: [0,100,0,0]},

    {title: "Protocol DAO", details: ["60% allocation to the team", "40% allocation to DAO", 
    "Team issues further tokens"], price: 40, link: "ProtocolDAO.md",
    voteDuration: 259200, council: true, minToVote: 1, quorum: 30, allocation: [60,0,40,0]},
    
    {title: "Generic", details: [], price: 15, link: '',
    voteDuration: 216000, council: true, minToVote: 1, quorum: 10, allocation: [5,15,80,0]},
]