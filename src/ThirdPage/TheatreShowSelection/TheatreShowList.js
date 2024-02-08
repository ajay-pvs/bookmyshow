let date = new Date();
let hrs = date.getHours();
let mins = date.getMinutes();
let theatreTimingList = [];
console.log(hrs, mins);
if (hrs < 10) {
  theatreTimingList = [
    {
      timings: "10:30 AM",
    },
    {
      timings: "02:30 PM",
    },
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs == 10) {
  if (mins < 10) {
    theatreTimingList = [
      {
        timings: "02:30 PM",
      },
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  } else {
    theatreTimingList = [
      {
        timings: "02:30 PM",
      },
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  }
} else if (hrs < 14) {
  theatreTimingList = [
    {
      timings: "02:30 PM",
    },
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
  console.log("passed");
} else if (hrs == 14) {
  theatreTimingList = [
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs < 18) {
  theatreTimingList = [
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs == 18) {
  if(mins<10)
  {
    theatreTimingList = [
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  }
  else{
    theatreTimingList = [
      {
        timings: "10:30 PM",
      },
    ];
    console.log("passe2");
  }
  
} else if (hrs < 22) {
  theatreTimingList = [
    {
      timings: "10:30 PM",
    },
  ];
  console.log("passed1");
} 
else if(hrs==22) 
{
  if(mins<10){
  theatreTimingList = [
    {
      timings: "10:30 PM",
      
    },
  ];
  console.log("passed");
  }
  else{
    theatreTimingList = [
      {
        timings: "Please heck out movies timings for tommorow's day",
      },
    ];
  }
}
else{
  theatreTimingList = [
    {
      timings: "Please heck out movies timings for tommorow's day",
    },
  ];
}


//console.log(theatreTimingList);

export default theatreTimingList;

let theatreNamelist = [
  {
    id: 1,
    name: "Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:1,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:1,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:1,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:1,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:1,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:2,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:2,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:2,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:2,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:2,
    name:"SPI Palazzo: Nexus Vijaya Mall, Vadapalani,Chennai",
  },
  {
    id:2,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:3,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:3,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:3,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:3,
    name:"INOX National: Arcot Road",
  },
  {
    id:3,
    name:"PVR: SKLS Galaxy Mall, Red Hills Chennai",
  },
  {
    id:3,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:4,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:4,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:4,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:4,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:4,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:4,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:5,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:5,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:5,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  { 
    id:5,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:5,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:6,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:6,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:6,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:6,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:6,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:6,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
  {
    id:7,
    name:"Broadway Cinemas: Coimbatore",
  },
  {
    id:7,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:7,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  { 
    id:7,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:7,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore ",
  },
  {
    id: 8,
    name: "Broadway Cinemas: Coimbatore",
  },
  {
    id:8,
    name:"Ambal Complex (Senthil Kumaran): Coimbatore",
  },
  {
    id:8,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:8,
    name:"Cinepolis: Fun Republic Mall, Coimbatore",
  },
  {
    id:8,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:8,
    name:"Arasan Cinemas A/C 4K Dolby: Coimbatore",
  },
];
export {theatreNamelist};