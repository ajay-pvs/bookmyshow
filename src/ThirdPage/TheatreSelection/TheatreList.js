let date = new Date();
let dd = date.getDate();
let dd1;
let dd2; 
let dm = date.getMonth();
  
if (
  dm == 0 ||
  dm == 2 ||
  dm == 4 ||
  dm == 6 ||
  dm == 7 ||
  dm == 9 ||
  dm == 11
) 
{
	if(dd==30)
	{
		dd1=dd+1;
		dd2=1;
	}
	else if(dd==31)
	{
		dd1=1;
		dd2=2;
	}
	else{
		dd1 = dd + 1;
		dd2 = dd1 + 1;
	}
}
else if(dm==3|| dm==5|| dm==8|| dm==10 )
{
if(dd==29)
{
	dd1=dd+1;
	dd2=1;
}
else if(dd==30)
{
dd1=1;
dd2=2;
}
else{
	dd1 = dd + 1;
	dd2 = dd1 + 1;
}
}
else{
	if(dd==27)
	{
		dd1=dd+1;
	}
	else if(dd==28)
	{
		dd1=1;
		dd2=2;
	}
	else{
		dd1 = dd + 1;
		dd2 = dd1 + 1;
	}
}
 

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let dm1,dm2;
if(dm == 0 ||
	dm == 2 ||
	dm == 4 ||
	dm == 6 ||
	dm == 7 ||
	dm == 9 ||
	dm == 11)
  {

	if(dd==30 && dm==11)
	{
		dm1=months[dm];
		dm2=months[0];
	}
	else if(dd==31 && dm==11)
	{
		dm1=months[0];
		dm2=months[0];
	}
	else if(dd==30)
	{
		dm1=months[dm];
		dm2=months[dm+1];
	}
	else if (dd==31)
	{
		dm1=months[dm+1];
		dm2=months[dm+1];
	}
	else{
		
		dm1=months[dm];
		dm2=months[dm];
		
	}
  }
  else if(dm==3|| dm==5|| dm==8|| dm==10)
  {
	if(dd==29)
	{
		//dm=months[dm];
		dm1=months[dm];
		dm2=months[dm+1];
	}
	else if(dd==30)
	{
		//dm=months[dm];
		dm1=months[dm+1];
		dm2=months[dm+1];
	}
	else{
		
		
		dm1=months[dm];
		dm2=months[dm];
	
		
	}
  }
  else{
	if(dd==28)
	{
	
		dm1=months[dm+1];
		dm2=months[dm+1];
	}
	else if(dd==27)
	{
		dm1=months[dm];
		dm2=months[dm+1];
	}
	else{
		
		dm1=months[dm];
		dm2=months[dm];
	
	}
  }
  dm=months[dm];


let dDay = date.getDay();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
dDay = days[dDay];
let dDay1 = date.getDay() + 1;

if (dDay1 >= 6) {
  dDay1 = days[0];
} else {
  dDay1 = days[dDay1];
}

let dDay22= new Date();
dDay22.setDate(`${dDay22.getDate()+2}`);

let dDay2=days[dDay22.getDay()]


let movieDates = [
  {
    day: dDay,
    date: dd,
    mon: dm,
  },
  {
    day: dDay1,
    date: dd1,
    mon: dm1,
  }, 
  {
    day: dDay2,
    date: dd2,
    mon: dm2,
  },
];

export { movieDates };

let movieNamesGenre = [
  {
    id: 1,
    name: "Ayalaan",
    genre: "ACTION",
    genre1: "THRILLER",
  },
  {
    id: 2,
    name: " Captain Miller",
    genre: "ACTION",
    genre1: "THRILLER",
    genre2: "ADVENTURE",
    genre3: "CRIME",
  },
  {
    id: 3,
    name: "Fighter",
    genre: "Comedy",
    genre1: "Drama",
    genre2: "Family",
  },
  {
    id: 4,
    name: "Hanu-Man",
    genre: "Action",
    genre1: "Adventure",
    genre2: "Historical",
  },
  {
    id: 5,
    name: "Mission",
    genre: "Romance",
    genre1: "Drama",
  },
  {
    id: 6,
    name: "Abraham Ozler",
    genre: "Action",
    genre1: "Fantasy",
  },
  {
    id: 7,
    name: "The Beekeeper",
    genre: "Action",
    genre1: "Sci-Fi",
  },
  {
    id: 8,
    name: "Merry Christmas",
    genre: "Period",
    genre1: "Thriller",
  },
];

export { movieNamesGenre };

let theatreShowList = [
  {
    id: 1,
    name: "AGS Cinemas OMR: Navlur",
  },
];

