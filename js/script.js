const thirukkural = [
    { verse: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு" },
    { verse: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்" },
    { verse: "அன்பே ஒரு நோயே, அன்பிற்கே போதுமானது" },
    { verse: "பழியினின்று பிறந்தால் காதல் ஆளும்" },
    { verse: "எண்ணம் கற்றல் தெய்வம் என்பான் அன்பா" },
    { verse: "அவனைப் போற்றுவர் என்பவன் அறிவுக்கு ஈறு" },
    { verse: "பெருவேலின் கடவுள் யார், பேசும் எல்லாம்" },
    { verse: "கண்மணியே வல்வேர் துணைவனை கொண்டால்" },
    { verse: "அந்தியுறவே எழிலியான் ஆதியுள்" },
    { verse: "பொருளினும் உயர் செயல் ஏனையர் வாழ்ந்தாலும்" },
    { verse: "இனிய உளவாக இன்னாத கூறல் கனியிருப்பக் காய்கவர்ந் தற்று" },
    { verse: "தீயினால் சுட்ட புண் உள்ளாறும் ஆறாதே நாவினால் சுட்ட வடு" },
    { verse: "ஒன்றா துலகத்து உய்தியெல்லாம் தன்கை யறிவின் தலைப்படுதல் நன்று" },
    { verse: "அன்பிற்கும் உண்டோ அடைக்குந்தாழ் ஆர்வலர் புண்கண்ணீர் பூசல் தரும்" },
    { verse: "நிலையாமை யால்திரிந்து தான்நிறைவு குன்றும் புலவியலார் முன்னு" },
    { verse: "அறவினை யிலாதார்க்கு ஆற்றுவாய்நூல் எப்படிக் கேட்கும் செவி" },
    { verse: "நல்கலார் எல்லார்க்கும் நாணுடைமை யேனும் புல்லாத செய்கலா தாற்று" },
    { verse: "கொல்லாமை சூழும் உயர்வுஉலகம் ஆருயிர்க்கு அல்லலும் செய்தொழிலால்" },
    { verse: "செய்வினை செய்யும் குறைதீர்ந்தார் கண்ணும் இயைவினை இல்லாத தோள்" },
    { verse: "அரிதுஇயல் தானாய்த் தாங்கும் அடங்கிய கோடியின் கூம்பல் தலை" },
    { verse: "தொட்டனைத் தூறும் மணிக்கொடி காடமைச் செம்பொருள் கண்டார் விழுப்பு" },
    { verse: "ஒன்றிய தூஉம் முயற்சிதன்மேல் மன்றமொழி செம்மை மிகுத்து செயின்" },
    { verse: "விண்நின்று விண்ணதனால் ஊழுஉரை யாமை யின்றி நிலம்பிறர்கொண் டது" },
    { verse: "அன்புடன் ஆய்ந்தது வாழ்வின் பெருவழி தாம்முன் தொழுகுவார் மேலா வரு" }
];


        // Get the current day of the year (1 to 365)
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Display the corresponding Thirukkural (use modulus to loop every 1330 days)
        const kuralIndex = dayOfYear % thirukkural.length;

        // Get the current Thirukkural verse
        const currentVerse = thirukkural[kuralIndex].verse;

        // Split the verse into words
        const words = currentVerse.split(" ");
        const firstLine = words.slice(0, 4).join(" "); // First 4 words
        const secondLine = words.slice(4).join(" "); // Remaining words

        // Get the element to display the Thirukkural
        document.getElementById('kural-verse').innerHTML = `
            <div>${firstLine}</div>
            <div>${secondLine}</div>
        `;
