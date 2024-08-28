document.getElementById("resetButton").addEventListener("click", function () {
	 letter11.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter12.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter13.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter21.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter22.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter23.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter31.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter32.name = letterBank.charAt(Math.floor(Math.random()*26));
	 letter33.name = letterBank.charAt(Math.floor(Math.random()*26));
	 updateGrid()
	 gameScoreTemp = 1;
	 gameScore = gameScore - gameScoreTemp;
	 document.getElementById("scoretext").innerHTML = "SCORE: " + gameScore;
	 document.getElementById("roundscoretext").innerHTML = "Minus 1 point for new grid"
	 gameScoreTemp = 0;
});
			
			
			
document.getElementById("wordCheckButton").addEventListener("click", function () {
if (wordlist.includes(row1Barcode)) {
	letter11.tobeexploded = true;
	letter12.tobeexploded = true;
	letter13.tobeexploded = true;
	roundWords.push(row1Barcode)
	document.getElementById("letter11button").classList.add("tobeexplodedvisual");
	document.getElementById("letter12button").style.color = "green";
	document.getElementById("letter13button").style.color = "green";
}
if (wordlist.includes(row2Barcode)) {
	letter21.tobeexploded = true;
	letter22.tobeexploded = true;
	letter23.tobeexploded = true;
	document.getElementById("letter21button").style.color = "green";
	document.getElementById("letter22button").style.color = "green";
	document.getElementById("letter23button").style.color = "green";
}
if (wordlist.includes(row3Barcode)) {
	letter31.tobeexploded = true;
	letter32.tobeexploded = true;
	letter33.tobeexploded = true;
	document.getElementById("letter31button").style.color = "green";
	document.getElementById("letter32button").style.color = "green";
	document.getElementById("letter33button").style.color = "green";
}
if (wordlist.includes(column1Barcode)) {
	letter11.tobeexploded = true;
	letter21.tobeexploded = true;
	letter31.tobeexploded = true;
	document.getElementById("letter11button").style.color = "green";
	document.getElementById("letter21button").style.color = "green";
	document.getElementById("letter31button").style.color = "green";
}
if (wordlist.includes(column2Barcode)) {
	letter12.tobeexploded = true;
	letter22.tobeexploded = true;
	letter32.tobeexploded = true;
	document.getElementById("letter12button").style.color = "green";
	document.getElementById("letter22button").style.color = "green";
	document.getElementById("letter32button").style.color = "green";
}
if (wordlist.includes(column3Barcode)) {
	letter13.tobeexploded = true;
	letter23.tobeexploded = true;
	letter33.tobeexploded = true;
	document.getElementById("letter13button").style.color = "green";
	document.getElementById("letter23button").style.color = "green";
	document.getElementById("letter33button").style.color = "green";
}
if (letter11.tobeexploded) {
	letter11.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter11button").classList.remove("tobeexplodedvisual");;
	gameScoreTemp++;
	letter11.tobeexploded = false;
}
if (letter12.tobeexploded) {
	letter12.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter12button").style.color = "black";
	gameScoreTemp++;
	letter12.tobeexploded = false;
}
if (letter13.tobeexploded) {
	letter13.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter13button").style.color = "black";
	gameScoreTemp++;
	letter13.tobeexploded = false;
}
if (letter21.tobeexploded) {
	letter21.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter21button").style.color = "black";
	gameScoreTemp++;
	letter21.tobeexploded = false;
}
if (letter22.tobeexploded) {
	letter22.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter22button").style.color = "black";
	gameScoreTemp++;
	letter22.tobeexploded = false;
}
if (letter23.tobeexploded) {
	letter23.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter23button").style.color = "black";
	gameScoreTemp++;
	letter23.tobeexploded = false;
}
if (letter31.tobeexploded) {
	letter31.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter31button").style.color = "black";
	gameScoreTemp++;
	letter31.tobeexploded = false;
}
if (letter32.tobeexploded) {
	letter32.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter32button").style.color = "black";
	gameScoreTemp++;
	letter32.tobeexploded = false;
}
if (letter33.tobeexploded) {
	letter33.name = letterBank.charAt(Math.floor(Math.random()*26));
	document.getElementById("letter33button").style.color = "black";
	gameScoreTemp++;
	letter33.tobeexploded = false;
}
	 if (gameScoreTemp > 3)
		 gameScoreTemp = gameScoreTemp +3
	 gameScore = gameScore + gameScoreTemp
	 document.getElementById("scoretext").innerHTML = "SCORE: " + gameScore;
	 document.getElementById("roundscoretext").innerHTML = "Plus " + gameScoreTemp + " points!";
	 document.getElementById("roundwordstext").innerHTML = "Last round's words: " + roundWords;
	 roundWords = [];
	 gameScoreTemp = 0
	 updateGrid()
});



document.getElementById("swapCancelButton").addEventListener("click", function () {
	swapBucket1 = 0;
	swapBucket2 = 0;
	document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
});
	
document.getElementById("letter11button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter11;
		swapBucket2 = letter11.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter11.name + " with...";
	} else if (swapBucket1 == letter11) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter11.name;
	} else {
		swapBucket1.name = letter11.name;
		letter11.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter12button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter12;
		swapBucket2 = letter12.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter12.name + " with...";
	} else if (swapBucket1 == letter12) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter12.name;
	} else {
		swapBucket1.name = letter12.name;
		letter12.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter13button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter13;
		swapBucket2 = letter13.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter13.name + " with...";
	} else if (swapBucket1 == letter13) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter13.name;
	} else {
		swapBucket1.name = letter13.name;
		letter13.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter21button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter21;
		swapBucket2 = letter21.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter21.name + " with...";
	} else if (swapBucket1 == letter21) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter21.name;
	} else {
		swapBucket1.name = letter21.name;
		letter21.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});	
document.getElementById("letter22button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter22;
		swapBucket2 = letter22.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter22.name + " with...";
	} else if (swapBucket1 == letter22) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter22.name;
	} else {
		swapBucket1.name = letter22.name;
		letter22.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});		
document.getElementById("letter23button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter23;
		swapBucket2 = letter23.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter23.name + " with...";
	} else if (swapBucket1 == letter23) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter23.name;
	} else {
		swapBucket1.name = letter23.name;
		letter23.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter31button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter31;
		swapBucket2 = letter31.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter31.name + " with...";
	} else if (swapBucket1 == letter31) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter31.name;
	} else {
		swapBucket1.name = letter31.name;
		letter31.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter32button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter32;
		swapBucket2 = letter32.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter32.name + " with...";
	} else if (swapBucket1 == letter32) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter32.name;
	} else {
		swapBucket1.name = letter32.name;
		letter32.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});
document.getElementById("letter33button").addEventListener("click", function () {
	if (swapBucket1 == 0) {
		swapBucket1 = letter33;
		swapBucket2 = letter33.name;
		document.getElementById("swappingtext").innerHTML = "Swapping " + letter33.name + " with...";
	} else if (swapBucket1 == letter33) {
		document.getElementById("versionnumber").innerHTML = "ERROR: Double swapped "+ letter33.name;
	} else {
		swapBucket1.name = letter33.name;
		letter33.name = swapBucket2;
		swapBucket1 = 0;
		swapBucket2 = 0;
		document.getElementById("swappingtext").innerHTML = "Click on letters to swap them";
	}
	updateGrid();
});



document.getElementById("bluealien").addEventListener("click", function () {
if (document.body.style.backgroundColor == "blue") {
	document.body.style.backgroundColor = "";
} else {
document.body.style.backgroundColor = "blue";
}
});	



function updateGrid() {
	 document.getElementById("letter11button").innerHTML = letter11.name;
	 document.getElementById("letter12button").innerHTML = letter12.name;
	 document.getElementById("letter13button").innerHTML = letter13.name;
	 document.getElementById("letter21button").innerHTML = letter21.name;
	 document.getElementById("letter22button").innerHTML = letter22.name;
	 document.getElementById("letter23button").innerHTML = letter23.name;
	 document.getElementById("letter31button").innerHTML = letter31.name;
	 document.getElementById("letter32button").innerHTML = letter32.name;
	 document.getElementById("letter33button").innerHTML = letter33.name;
	 row1Barcode = letter11.name + letter12.name + letter13.name;
	 row2Barcode = letter21.name + letter22.name + letter23.name;
	 row3Barcode = letter31.name + letter32.name + letter33.name;
	 column1Barcode = letter11.name + letter21.name + letter31.name;
	 column2Barcode = letter12.name + letter22.name + letter32.name;
	 column3Barcode = letter13.name + letter23.name + letter33.name;
}
	
var gameScoreTemp
var gameScore;
var swapBucket1;
var swapBucket2;
let myButton = document.getElementById("resetButton");
let myTestingSpace = document.getElementById("testingSpace");
const roundWords = []
const wordlist = ["AAA", "AAH", "AAS", "ABA", "ABC", "ABE", "ABS", "ABU", "ACA", "ACC", "ACE", "ACH", "ACK", "ACL", "ACS", "ACT", "ADA", "ADD", "ADE", "ADJ", "ADO", "ADS", "AED", "AER", "AFL", "AFT", "AGE", "AGO", "AGT", "AHA", "AHH", "AHI", "AHS", "AID", "AIL", "AIM", "AIR", "AJA", "AJI", "AKA", "AKC", "ALA", "ALE", "ALF", "ALI", "ALL", "ALO", "ALP", "ALS", "ALT", "ALY", "AMA", "AMC", "AME", "AMI", "AMO", "AMP", "AMS", "AMT", "AMY", "ANA", "AND", "ANG", "ANI", "ANN", "ANO", "ANT", "ANY", "AOC", "AOK", "AOL", "APA", "APB", "APE", "APP", "APR", "APS", "APT", "APU", "ARC", "ARE", "ARF", "ARG", "ARI", "ARK", "ARM", "ARO", "ARP", "ARR", "ARS", "ART", "ASA", "ASH", "ASI", "ASK", "ASL", "ASP", "ASS", "ASU", "ATA", "ATE", "ATF", "ATL", "ATM", "ATO", "ATP", "ATS", "ATT", "ATV", "AUG", "AUS", "AVA", "AVE", "AVI", "AWE", "AWL", "AWW", "AXE", "AYE", "AYN", "AYO", "BAA", "BAD", "BAE", "BAG", "BAH", "BAM", "BAN", "BAO", "BAR", "BAS", "BAT", "BAY", "BBC", "BBQ", "BBS", "BCC", "BCE", "BEA", "BED", "BEE", "BEG", "BEL", "BEN", "BET", "BEY", "BFA", "BFF", "BIB", "BIC", "BID", "BIG", "BIN", "BIO", "BIS", "BIT", "BIZ", "BLM", "BLT", "BLU", "BMI", "BMW", "BMX", "BOA", "BOB", "BOD", "BOG", "BOI", "BOK", "BON", "BOO", "BOP", "BOS", "BOT", "BOW", "BOX", "BOY", "BPA", "BRA", "BRB", "BRO", "BRR", "BSA", "BTS", "BTU", "BTW", "BUB", "BUC", "BUD", "BUG", "BUN", "BUS", "BUT", "BUY", "BYE", "CAB", "CAD", "CAF", "CAL", "CAM", "CAN", "CAP", "CAR", "CAT", "CAV", "CAW", "CBD", "CBS", "CBT", "CCR", "CCS", "CDC", "CDR", "CDS", "CDT", "CEE", "CEL", "CEO", "CFO", "CGI", "CHA", "CHE", "CHI", "CHO", "CHU", "CIA", "CIG", "CIO", "CIS", "CLE", "CMA", "CNN", "COB", "COD", "COE", "COG", "COM", "CON", "COO", "COP", "COS", "COT", "COW", "COX", "COY", "CPA", "CPR", "CPU", "CRO", "CRY", "CSA", "CSI", "CST", "CSU", "CTO", "CTR", "CUB", "CUD", "CUE", "CUL", "CUP", "CUR", "CUT", "CUZ", "CVS", "CYA", "DAB", "DAD", "DAE", "DAH", "DAL", "DAM", "DAN", "DAP", "DAS", "DAT", "DAY", "DDR", "DDS", "DDT", "DEA", "DEB", "DEC", "DEE", "DEF", "DEI", "DEL", "DEM", "DEN", "DER", "DES", "DEV", "DEW", "DEY", "DHL", "DHS", "DIA", "DID", "DIE", "DIF", "DIG", "DIM", "DIN", "DIP", "DIS", "DIY", "DJS", "DMC", "DMS", "DMT", "DMV", "DMZ", "DNA", "DND", "DOC", "DOE", "DOG", "DOH", "DOI", "DOJ", "DOM", "DON", "DOO", "DOS", "DOT", "DOW", "DRE", "DRJ", "DRS", "DRY", "DSL", "DST", "DSW", "DUA", "DUB", "DUD", "DUE", "DUG", "DUH", "DUO", "DVD", "DVR", "DYE", "EAR", "EAT", "EAU", "EBB", "EBT", "ECG", "ECO", "EDM", "EDS", "EDT", "EDU", "EDY", "EEG", "EEK", "EEL", "EEO", "EER", "EGG", "EGO", "EID", "EIN", "EIR", "EKE", "EKG", "ELF", "ELI", "ELK", "ELL", "ELM", "ELO", "ELS", "EMI", "EMO", "EMS", "EMT", "EMU", "END", "ENE", "ENG", "ENO", "ENS", "ENT", "EOE", "EON", "EOS", "EPA", "EPI", "EPS", "ERA", "ERE", "ERG", "ERM", "ERN", "ERR", "ERS", "ESA", "ESC", "ESE", "ESI", "ESL", "ESO", "ESP", "ESQ", "ESS", "EST", "ETA", "ETC", "ETD", "ETE", "ETS", "EUR", "EVA", "EVE", "EVS", "EWE", "EWW", "EXE", "EXO", "EXT", "EYE", "FAA", "FAB", "FAD", "FAM", "FAN", "FAQ", "FAR", "FAT", "FAV", "FAX", "FAY", "FBI", "FCC", "FDA", "FDR", "FEB", "FED", "FEE", "FEN", "FEW", "FEY", "FEZ", "FIB", "FIE", "FIG", "FIN", "FIR", "FIT", "FIX", "FLA", "FLO", "FLU", "FLY", "FOB", "FOE", "FOG", "FOO", "FOP", "FOR", "FOX", "FRI", "FRO", "FRY", "FSU", "FTC", "FTW", "FUN", "FUR", "FWD", "FYI", "GAB", "GAD", "GAG", "GAH", "GAI", "GAL", "GAP", "GAR", "GAS", "GAY", "GDP", "GED", "GEE", "GEL", "GEM", "GEN", "GEO", "GET", "GIA", "GIF", "GIG", "GIL", "GIN", "GIS", "GIT", "GLO", "GMA", "GMC", "GMO", "GMS", "GMT", "GNC", "GNU", "GOA", "GOB", "GOD", "GOL", "GOO", "GOP", "GOT", "GOV", "GPA", "GPS", "GRE", "GRO", "GRR", "GRU", "GSA", "GSN", "GTO", "GUM", "GUN", "GUS", "GUT", "GUY", "GYM", "GYN", "HAD", "HAH", "HAI", "HAL", "HAM", "HAN", "HAR", "HAS", "HAT", "HAW", "HAY", "HBO", "HED", "HEE", "HEH", "HEM", "HEN", "HEP", "HER", "HES", "HEW", "HEX", "HEY", "HIC", "HID", "HIM", "HIP", "HIS", "HIT", "HMM", "HMO", "HMU", "HOC", "HOE", "HOG", "HON", "HOO", "HOP", "HOT", "HOU", "HOV", "HOW", "HQS", "HRS", "HRT", "HSN", "HSU", "HUB", "HUE", "HUG", "HUH", "HUM", "HUN", "HUR", "HUT", "HWY", "IAM", "IAN", "IBM", "IBN", "ICE", "ICH", "ICI", "ICK", "ICU", "ICY", "IDA", "IDK", "IDO", "IDS", "IFS", "IGA", "III", "IKE", "ILE", "ILK", "ILL", "ILY", "IMA", "IMF", "IMO", "IMP", "IMS", "INA", "INC", "IND", "ING", "INK", "INN", "INS", "INT", "INU", "IOC", "ION", "IOS", "IOU", "IPA", "IPO", "IQS", "IRA", "IRE", "IRK", "IRL", "IRS", "ISA", "ISH", "ISM", "ISO", "ISP", "ISR", "IST", "ITA", "ITD", "ITO", "ITS", "ITT", "IUD", "IVE", "IVS", "IVY", "IWO", "JAB", "JAG", "JAH", "JAM", "JAN", "JAR", "JAW", "JAY", "JEN", "JET", "JEW", "JFK", "JIF", "JIG", "JIM", "JLO", "JOB", "JOE", "JOG", "JON", "JOT", "JOY", "JUG", "JUS", "JUT", "KAI", "KAL", "KAT", "KAW", "KAY", "KEA", "KEG", "KEN", "KEV", "KEY", "KFC", "KGB", "KGS", "KIA", "KID", "KIM", "KIN", "KIR", "KIT", "KIX", "KOA", "KOI", "KOS", "KPH", "KSU", "LAB", "LAC", "LAD", "LAG", "LAH", "LAM", "LAN", "LAO", "LAP", "LAS", "LAT", "LAV", "LAW", "LAX", "LAY", "LBJ", "LBS", "LCD", "LEA", "LED", "LEE", "LEG", "LEI", "LEN", "LEO", "LES", "LET", "LEX", "LGA", "LGS", "LIA", "LIB", "LID", "LIE", "LIL", "LIM", "LIN", "LIP", "LIT", "LIU", "LIV", "LIZ", "LLC", "LOA", "LOB", "LOG", "LOL", "LON", "LOO", "LOP", "LOS", "LOT", "LOU", "LOW", "LOX", "LPS", "LSD", "LSU", "LTD", "LTE", "LTR", "LUC", "LUG", "LUV", "LUX", "LYE", "MAA", "MAC", "MAD", "MAE", "MAG", "MAI", "MAL", "MAN", "MAO", "MAP", "MAR", "MAS", "MAT", "MAV", "MAW", "MAX", "MAY", "MBA", "MCS", "MCU", "MDS", "MDT", "MEA", "MED", "MEG", "MEH", "MEI", "MEL", "MEN", "MES", "MET", "MEW", "MEX", "MFA", "MGM", "MGR", "MGS", "MIA", "MIB", "MIC", "MID", "MII", "MIL", "MIN", "MIO", "MIS", "MIT", "MIX", "MLA", "MLB", "MLK", "MLS", "MMA", "MME", "MOB", "MOC", "MOD", "MOE", "MOI", "MOM", "MON", "MOO", "MOP", "MOS", "MOT", "MOW", "MPG", "MPH", "MPS", "MRI", "MRS", "MRT", "MSG", "MSN", "MST", "MSU", "MTA", "MTN", "MTS", "MTV", "MUD", "MUG", "MUM", "MUY", "MVP", "MYA", "NAB", "NAE", "NAG", "NAH", "NAM", "NAN", "NAP", "NAS", "NAT", "NAV", "NAW", "NAY", "NBA", "NBC", "NBD", "NCO", "NDA", "NEA", "NEB", "NED", "NEE", "NEF", "NEO", "NES", "NET", "NEW", "NFC", "NFL", "NFT", "NGO", "NHL", "NIA", "NIB", "NIH", "NIL", "NIN", "NIT", "NIX", "NNE", "NOB", "NOD", "NOG", "NOH", "NOM", "NON", "NOR", "NOS", "NOT", "NOV", "NOW", "NPR", "NSA", "NSC", "NTH", "NUB", "NUI", "NUN", "NUT", "NYC", "NYE", "NYT", "NYU", "NYY", "OAF", "OAK", "OAR", "OAS", "OAT", "OBI", "OBS", "OCD", "OCT", "ODA", "ODD", "ODE", "OED", "OER", "OFA", "OFF", "OFT", "OGS", "OHH", "OHM", "OHO", "OHS", "OIL", "OJS", "OKC", "OKS", "OLA", "OLD", "OLE", "OMG", "OMS", "OMW", "ONA", "ONE", "ONI", "ONO", "ONS", "ONT", "OOF", "OOH", "OOO", "OOP", "OPI", "OPS", "OPT", "ORA", "ORB", "ORC", "ORD", "ORE", "ORG", "ORI", "ORL", "ORO", "ORR", "ORS", "OSS", "OSU", "OTC", "OTS", "OUI", "OUR", "OUT", "OVA", "OVO", "OWE", "OWL", "OWN", "OXO", "OYE", "OYS", "OZS", "PAC", "PAD", "PAL", "PAM", "PAN", "PAO", "PAP", "PAR", "PAS", "PAT", "PAW", "PAX", "PAY", "PAZ", "PBJ", "PBR", "PBS", "PCP", "PCS", "PDA", "PDF", "PDT", "PEA", "PEC", "PED", "PEG", "PEI", "PEN", "PEP", "PER", "PET", "PEW", "PEZ", "PGA", "PGS", "PHD", "PHI", "PHO", "PIC", "PIE", "PIG", "PIN", "PIP", "PIT", "PJS", "PLO", "PLS", "PLY", "PMS", "PNC", "POD", "POE", "POG", "POI", "POL", "POM", "POP", "POR", "POS", "POT", "POV", "POW", "POX", "PPE", "PPS", "PRE", "PRO", "PRY", "PSA", "PSI", "PSP", "PST", "PSY", "PTA", "PTO", "PTS", "PUB", "PUG", "PUN", "PUP", "PUR", "PUT", "PVC", "PWN", "QBS", "QED", "QTS", "QUE", "QUO", "RAD", "RAE", "RAF", "RAG", "RAH", "RAI", "RAJ", "RAM", "RAN", "RAO", "RAP", "RAS", "RAT", "RAW", "RAY", "RBG", "RBI", "RBS", "RCA", "RDA", "RDS", "REA", "REC", "RED", "REE", "REF", "REG", "REI", "REM", "REN", "REO", "REP", "RES", "REV", "REX", "REY", "RHO", "RIA", "RIB", "RIC", "RID", "RIG", "RIH", "RIM", "RIO", "RIP", "RLY", "RMS", "RNA", "RNS", "ROB", "ROC", "ROD", "ROE", "ROI", "ROM", "RON", "ROO", "ROT", "ROW", "ROY", "RPG", "RPI", "RPM", "RRR", "RRS", "RSS", "RTE", "RTS", "RUB", "RUE", "RUG", "RUH", "RUM", "RUN", "RUT", "RVS", "RXS", "RYE", "SAC", "SAD", "SAG", "SAL", "SAM", "SAN", "SAO", "SAP", "SAT", "SAW", "SAX", "SAY", "SBA", "SCH", "SCI", "SEA", "SEC", "SEE", "SEL", "SEN", "SEO", "SEP", "SER", "SET", "SEW", "SEX", "SEZ", "SFO", "SGT", "SHA", "SHE", "SHH", "SHO", "SHU", "SHY", "SIA", "SIB", "SIC", "SID", "SIM", "SIN", "SIP", "SIR", "SIS", "SIT", "SIX", "SKA", "SKI", "SKY", "SLC", "SLO", "SLR", "SLY", "SMH", "SMS", "SMU", "SNL", "SNO", "SOB", "SOD", "SOL", "SON", "SOO", "SOP", "SOS", "SOW", "SOX", "SOY", "SPA", "SPF", "SPY", "SRA", "SRI", "SRO", "SRS", "SRY", "SSA", "SSE", "SSN", "SST", "SSW", "STA", "STD", "STE", "STL", "STP", "STS", "STU", "STY", "SUB", "SUE", "SUI", "SUM", "SUN", "SUP", "SUR", "SUS", "SUV", "SVU", "SYD", "SYN", "SYS", "SZA", "TAB", "TAC", "TAD", "TAE", "TAG", "TAI", "TAJ", "TAL", "TAM", "TAN", "TAO", "TAP", "TAR", "TAS", "TAT", "TAU", "TAX", "TAY", "TAZ", "TBA", "TBD", "TBH", "TBS", "TBT", "TCM", "TDS", "TEA", "TED", "TEE", "TEL", "TEM", "TEN", "TET", "TEX", "TGI", "THA", "THC", "THE", "THO", "THU", "THX", "THY", "TIA", "TIC", "TIE", "TIG", "TIK", "TIL", "TIM", "TIN", "TIO", "TIP", "TIS", "TKO", "TLC", "TMC", "TMI", "TMS", "TMZ", "TNG", "TNT", "TOE", "TOK", "TOM", "TON", "TOO", "TOP", "TOR", "TOS", "TOT", "TOV", "TOW", "TOY", "TPS", "TRA", "TRE", "TRI", "TRU", "TRY", "TSA", "TSE", "TSK", "TSO", "TSP", "TTY", "TUB", "TUE", "TUG", "TUT", "TUX", "TVG", "TVS", "TWA", "TWO", "UAE", "UBE", "UFC", "UFO", "UGA", "UGG", "UGH", "UHS", "UKE", "UMA", "UMP", "UMS", "UNA", "UNC", "UNE", "UNH", "UNI", "UNO", "UPC", "UPI", "UPS", "URI", "URL", "URN", "USA", "USB", "USC", "USD", "USE", "USO", "USS", "UTE", "UVA", "UZO", "VAC", "VAL", "VAN", "VAT", "VAX", "VCR", "VEE", "VEG", "VET", "VEX", "VEY", "VHS", "VIA", "VIC", "VID", "VIE", "VII", "VIM", "VIN", "VIP", "VIV", "VOL", "VON", "VOW", "VOX", "VPS", "VWS", "WAD", "WAG", "WAH", "WAN", "WAP", "WAR", "WAS", "WAT", "WAX", "WAY", "WEB", "WED", "WEE", "WEK", "WES", "WET", "WFH", "WHO", "WHY", "WIE", "WIG", "WII", "WIN", "WIT", "WIZ", "WOE", "WOK", "WON", "WOO", "WOW", "WRY", "WTA", "WWE", "WWI", "WWW", "XED", "XEM", "XER", "XES", "XII", "XIN", "XIS", "XYZ", "YAK", "YAM", "YAO", "YAP", "YAS", "YAY", "YDS", "YEA", "YEE", "YEN", "YEP", "YER", "YES", "YET", "YEW", "YIN", "YIP", "YOM", "YON", "YOO", "YOU", "YOW", "YRS", "YSL", "YTD", "YTU", "YUK", "YUM", "YUP", "ZAG", "ZAP", "ZED", "ZEE", "ZEN", "ZIG", "ZIN", "ZIP", "ZIT", "ZOE", "ZOO",];
var row1Barcode;
var row2Barcode;
var row3Barcode;
var column1Barcode;
var column2Barcode;
var column3Barcode;
var onOffState = "OFF";
document.getElementById("versionnumber").innerHTML = "version: 59";
