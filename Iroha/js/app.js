﻿/** This class holds and compares data related to a writer's stats when blossoming them.
 * @version 1.0.1
 * @since July 3, 2019
 */
class writerBlossoming {
    /** An array holding all pseudo-stats of a writer */
    pseudoStats = [0, 0, 0, 0, 0];

    constructor(id, atk, def, evade, tech, tal, aes, thm, rl) {
        this.id = id;
        this.atk = atk;
        this.def = def;
        this.evade = evade;
        this.pseudoStats[0] = tech;
        this.pseudoStats[1] = tal;
        this.pseudoStats[2] = aes;
        this.pseudoStats[3] = thm;
        this.pseudoStats[4] = rl;
    }

    updateMainStats(newAtk, newDef, newEvade) {
        this.atk = newAtk;
        this.def = newDef;
        this.evade = newEvade;
    }

    comparePStats(newPStat, pStatNumber) {
        return (newPStat - this.pseudoStats[pStatNumber]);
    }
}

/* ---------------------------------- CONSTANTS --------------------------------- */

/** Default in-delve VC count for writers with no ring */
const DELVE_DEFAULT_VC_COUNT = 23;

/** Default hidden in-delve VC IDs */
const DELVE_HIDDEN_VC_ID_1 = 53;

/** Default hidden in-delve VC IDs */
const DELVE_HIDDEN_VC_ID_2 = 54;

/** Number of pseudo-stats */
const PSEUDO_STAT_COUNT = 5;

/** In-game ID for normal sprite */
const NORMAL_SPRITE_ID = 1;

/** In-game ID for weakened weaponless sprite */
const WEAKENED_WEAPONLESS_SPRITE_ID = 8;

/** In-game ID for blossoming outfit */
const BLOSSOMING_SPRITE_ID = 2;

/** In-game ID for strolls outfit */
const STROLLS_SPRITE_ID = 3;

/** In-game ID for first event outfit */
const EVENT_SPRITE_ID_1 = 4;

/** In-game ID for second event outfit */
const EVENT_SPRITE_ID_2 = 5;

/** Memoria type in the Exchange section */
const MEMORIA_EXCTYPE = 1;

/** Memoria rarity in the Exchange section */
const MEMORIA_EXCRARITY = 3;

/** Days of a week */
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Months of a year */
const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Event names, 3 per line, ordered by ID from the Recollection Register ft. estimations for writer campaigns */
const eventNames = ["", "Purify &quot;The Five-Storied Pagoda&quot;", "An Encouragement on Learning",
    "Research on Sakaguchi Ango", "Co-Research with Chief Librarian", "An Encouragement of Learning ~Cherry Blossom~",
    "Research on Arishima Takeo", "Purify &quot;The Sunless Street&quot;", "Research on Ibuse Masuji",
    "Co-Research with Chief Librarian ~Part Two~", "Cafe Royale Bloodbath", "Research on Kawabata Yasunari",
    "Spooky Summer Nights", "Research on Masamune Hakuchou", "Purify &quot;Portrait of a Contemporary Student&quot;",
    "Co-Research with Chief Librarian ~Part Three~", "", "Mad Tea Party",
    "Purify &quot;The Setting Sun&quot;", "", "Co-Research with Chief Librarian ~Part Four~",
    "", "Purify &quot;Notes of a Student Examinee&quot;", "Three-Way Snowball Fight",
    "", "Aka and Ao&apos;s Research on Alchemy", "Research on Yumeno Kyuusaku",
    "Co-Research with Chief Librarian ~Part Five~", "The Mad Banquet on All Saint%apos;s Day", "",
    "Purify &quot;Snow Country&quot;", "", "",
    "Aka and Ao&apos;s Research on Alchemy 2", "Research on Ogawa Bimei", "An Encouragement of Learning ~Flutter~",
    "", "", "The Mad Banquet ~Deathday Celebration~",
    "", "Co-Research with Chief Librarian ~Part Six~", "",
    "Research on Naoki Sanjuugo", "Purify &quot;Towards the Truth&quot;", "",
    "Summer Daydream", "", "Aka and Ao&apos;s Research on Alchemy 3",
    "Research on Itou Sachio", "", "Co-Research with Chief Librarian ~Part Seven~",
    "", "Repair the Grimoire of Fate", "Writers and Alchemists",
    "Purify &quot;Cuckoo&quot;", "", "Research on Iwano Houmei",
    "Co-Research with Chief Librarian ~Part Eight~", "Aka and Ao&apos;s Research on Alchemy 4", "Research on Yoshii Isamu",
    "Three-Way Snowball Fight ~Holy Night Campaign~", "Purify &quot;One Hundred People, One Poem Each&quot;", "Co-Research with Chief Librarian ~Part Nine~",
    "", "Research on Tokutomi Roka", " Aka and Ao&apos;s Study on Alchemy ~First Years~",
    "Daily Life at Cafe Noir", "", "",
    "", "Co-Research with Chief Librarian ~Part Ten~", "Research on Nakazato Kaizan",
    "The Green Messenger from Outer Space", "", "Aka and Ao&apos;s Study on Alchemy ~Second Years~",
    "Spring Cleaning Mad Banquet", "", "Co-Research with Chief Librarian ~Part Eleven~",
    "Research on Miki Rofuu", "Purify &quot;The Moon Over the Mountain&quot;", "",
    "", "Blood Oath Mad Banquet", "",
    "Co-Research with Chief Librarian ~Part Twelve~", "Research on Kusano Shinpei", "",
    "Chronicles of Galactic Railroad", "Aka and Ao&apos;s Study on Alchemy ~Third Years~", "",
    "", "Co-Research with Chief Librarian ~Part Thirteen~", "Purify &quot;The Final Problem&quot;",
    "", "Research on Hirotsu Kazuo", "Writers and Sengoku War Generals",
    "Purify &quot;The Fourth Generation of Neo-Thought&quot;", "Co-Research with Chief Librarian ~Part Fourteen~", "",
    "Ensouled Book Research - Satomi Ton", "Chronicles of Galactic Railroad II", "Accomplish the Special Directive",
    "", "Co-Research with Chief Librarian ~Part Fifteen~", "Purify &quot;The Fall of the House of Usher&quot;",
    "Research on Edgar Allan Poe", "", "Accomplish the Special Directives 2",
    "Aka and Ao&apos;s Study on Alchemy ~Fourth Years~", "", "",
    "Explore the Underground Maze", "", "Co-Research with Chief Librarian ~Part Sixteen~",
    "Purify &quot;Run, Melos&quot;", "Purify &quot;Under the Blossoming Cherry Trees&quot;"
];

/** Count of known events */
const EVENT_COUNT = eventNames.length - 1;

/* ----------------------------- GLOBAL DATA MEMBERS ---------------------------- */

/** HTML output */
var out = document.getElementById("out");

/** Output placeholder to the panel */
var o = "";

/** Writers' deck placeholder for in-delve checks */
var writers = ["", "", "", ""];

/** Writers' stats placeholder for blossoming checks */
var writerKaika = new writerBlossoming(0, 0, 0, 0, 0, 0, 0, 0, 0);

/** Subjugation delve hint per turn */
var hintedCard = false;

/* ----------------------- UI IMPLEMENTATION AND DISPLAYS -----------------------
 * 
 * + Listener to the browser's activities
 * + Manage how to display content grabbed from different locations
 * + Essential features:
 *      - Login VC: login()
 *      - Office data: myRoom()
 *      - Other VCs from assistant: assistant(), voiceImmediate()
 *      - Tainted Book Delve: start(), battle(), battlePhase(), cardBattleInit(), cardBattle(), result(), cardBattleResult()
 *      - Ensouled Book Delve: ensouledDelveVoice(), ensouledTransmigratedVoice()
 *      - Blossoming: skillTree()
 *      - Dining Hall: supply()
 *      - Recollections: limitedRecos(), delveRecos(), mainRecos(), registerRecos(), recollection()
 *      - Writers' Register: album()
 * 
 * + Newer features (added post-release):
 *      - Letters: letters()
 *      - Strolls: strollsVoice(), strollsReply()
 *      - Memorias: memoria(), reportMemorias()
 *      - Payday: salary()
 *      - Rings: ringMemoria(), ringRegister()
 */

/* Listener implementation */
chrome.devtools.network.onRequestFinished.addListener(
function (request) {
    /** A placeholder to get the request's specific section */
    var endpt;
    endpt = request.request.url.match(/https:\/\/game\.bungo\.dmmgames\.com\/v1\/(.*)/);
    if (endpt !== null) {
        switch (endpt[1]) {
            /* Immediate VC requests for Dining Hall and assistant change */
            case "assistant_change":
                request.getContent(voiceImmediate);
                break;

            /* Request for each battle node */
            case "stages/battle":
                request.getContent(battle);
                break;

            /* Request for the result panel */
            case "stages/result":
                request.getContent(result);
                break;

            /* Request for opening letters */
            case "letters/open":
                request.getContent(letters);
                break;

            /* Monthly payday */
            case "mypage/salary":
                request.getContent(salary);
                break;

            /* Other requests with inconsistent URLs */
            default:
                if (endpt[1].includes("login")) {                       /* Login VC */
                    request.getContent(login);
                }
                else if (endpt[1].includes("page/mypage")               /* Library */
                    || endpt[1].includes("page/mission")) {             /* Reserach */
                    request.getContent(assistant);
                }
                else if (endpt[1].includes("page/shop")) {              /* Shop */
                    request.getContent(shop);
                }
                else if (endpt[1].includes("callback")) {               /* Shop recos */
                    request.getContent(giftRecos);
                }
                else if (endpt[1].includes("items")) {                  /* Inventory item */
                    request.getContent(inventoryItem);
                }
                else if (endpt[1].includes("page/myroom")) {            /* Office */
                    request.getContent(myRoom);
                }
                else if (endpt[1].includes("costumes/")) {              /* Outfit lists */
                    request.getContent(costume);
                }
                else if (endpt[1].includes("stages/start/")
                    || endpt[1].includes("battle/start/")) {            /* Tainted Book Delve start */
                    request.getContent(start);
                }
                else if (endpt[1].includes("event/select_card_battle/")) {
                    if (endpt[1].includes("init"))
                        request.getContent(cardBattleInit);             /* Subjugation delve initialising */                    
                    else if (endpt[1].includes("result"))
                        request.getContent(cardBattleResult);           /* Subjugation delve result */
                    else
                        request.getContent(cardBattle);                 /* Subjugation delve turn */
                }
                else if (endpt[1].includes("workspaces")) {
                    if (endpt[1].includes("page/"))
                        request.getContent(assistant);                  /* Ensouled Book Delve completed */
                    else
                        request.getContent(ensouledDelveVoice);         /* Ensouled Book Delve start & summoned */
                }
                else if (endpt[1].includes("skill_tree")) {             /* Blossoming */
                    if (endpt[1].includes("page/skill_tree"))
                        writerKaika = new writerBlossoming(0, 0, 0, 0, 0, 0, 0, 0, 0);

                    request.getContent(skillTree);
                }
                else if (endpt[1].includes("list")) {                   /* Memoria from other reports */
                    request.getContent(reportMemorias);
                }
                else if (endpt[1].includes("repair_docks/")             /* Repairs */
                        ||endpt[1].includes("change")) {                /* Formation */
                    request.getContent(voiceImmediate);
                }
                else if (endpt[1].includes("supply")                    /* Dining Hall menu and recos */
                    || endpt[1].includes("skits/dining")
                    || endpt[1].includes("skits/birthday")) {
                    request.getContent(supply);
                }
                else if (endpt[1].includes("mypage/playSkit")) {        /* Limited-time recos at Library */
                    request.getContent(limitedRecos);
                }
                else if (endpt[1].includes("page/event/")) {            /* Event recos played from the event page */
                    request.getContent(delveRecos);
                }
                else if (endpt[1].includes("foreign/stages/")) {        /* Event recos played from foreign shelves */
                    request.getContent(foreignRecos);
                }
                else if (endpt[1].includes("skits/main/")) {            /* In-delve recos (old?) */
                    request.getContent(mainRecos);
                }
                else if (endpt[1].includes("skits/")) {                 /* Recos from the Recollections Register */
                    request.getContent(registerRecos);
                }
                else if (endpt[1].includes("page/albums/units/")) {     /* Writers' Register */
                    request.getContent(album);
                }
                else if (endpt[1].includes("walking/select_room")) {    /* Strolls */
                    request.getContent(strollsVoice);
                }
                else if (endpt[1].includes("walking/send")) {           /* Strolls - Gift reply */
                    request.getContent(strollsReply);
                }
                else if (endpt[1].includes("cards/")) {                 /* Memoria info */
                    request.getContent(memoria)
                }
                else if (endpt[1].includes("page/trade")) {             /* Memoria info in SE Exchange */
                    request.getContent(tradeMemorias)
                }
                else if (endpt[1].includes("rings/")                    /* Ring in Memoria Index */
                        && !(endpt[1].includes("page/"))) {
                    request.getContent(ringMemoria);
                }
                else if (endpt[1].includes("ring_album/")) {            /* Ring in Ring Register */
                    request.getContent(ringRegister);
                }
        }
    }
});

/** This function grabs voice clip found upon login to the game.
  * + Return immediately if an empty duplicate request encountered
  * @version 1.0.2
  * @since July 2, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function login(content) {
    json = JSON.parse(content);

    if (json.voice == null)
        return;

    /* Grab the login VC */
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.voice, "Login voice"));
    out.innerHTML = o;
}

/** This function prints content grabbed from the assistant, including VCs,
  * recollections, pop-ups and banners playing upon login.
  * + Return immediately if an empty duplicate request encountered
  * + Display the autoplaying recollection if detected
  * + Display the assistant's info and all VCs found
  * 
  * @version 2.1.1
  * @since January 22, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function assistant(content) {
    json = JSON.parse(content);

    if (json == null)
        return;

    /* Check for autoplaying recollections */
    if (json.adv != null && json.adv.length !== 0)
        o += recollection(json.adv[0]);

    /* Get all VCs from the assistant */
    o += headerVoice(json.header);

    /* Check for announcement pop-ups */
    if (json.advertisements != null && json.advertisements.length != 0) {
        var popupCounter = 0;
        o += b("<i>Pop-up banners:</i>");

        for (var popup of json.advertisements)
            o += br(llink("http://cdn.bungo.dmmgames.com" + popup.image, "#" + ++popupCounter));
    }

    /* Check for current banners */
    if (json.banner != null && json.banner.length != 0) {
        var bannerEventCounter = 0;
        var bannerMemoriaCounter = 0;
        var bannerPaidMemoriaCounter = 0;
        var bannerCampaignCounter = 0;
        var bannerName;
        o += b("<i>Current banners:</i>")

        for (var banner of json.banner) {
            bannerName = "";

            switch (banner.url) {
                case "yukonsho":
                    bannerName = "Summoning campaign #" + ++bannerCampaignCounter;
                    break;
                case "shousouChoice":
                    bannerName = "Memoria feature #" + ++bannerMemoriaCounter;
                    break;
                case "shousouStepup":
                    bannerName = "Paid memoria feature #" + ++bannerPaidMemoriaCounter;
                    break;
                case "kenkyu":
                    bannerName = "Research event";
                    break;
            }

            if (banner.url.includes("event"))
                bannerName = "Event #" + ++bannerEventCounter;

            o += br(llink("http://cdn.bungo.dmmgames.com" + banner.list_image_path, bannerName));
        }
    }

    out.innerHTML = o;
}

/** This function prints content grabbed from the Office, including VCs and available
  * sprites.
  * + Return immediately if an empty duplicate request encountered
  * + Display the assistant's info and all VCs found
  * + Parse available sprites and match their outfit numberings
  * @version 1.3
  * @since July 26, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function myRoom(content) {
    json = JSON.parse(content);

    if (json.header == null)
        return;

    o += headerVoice(json.header);

    /* Grab available altfits and sprites */
    o += b("<i>Available sprites:</i>");

    /* Parse the assistant name for image names as displayed on Wikia */
    var assistant_name = nameTranslate(json.header.leader_unit.master.name);
    assistant_name = assistant_name.replace(/ /g, "_");

    for (var image of json.header.leader_unit.images) {
        switch (image.asset_no) {
            case NORMAL_SPRITE_ID:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_normal"));
                break;
            case BLOSSOMING_SPRITE_ID:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_alt1 (Blossoming)"));
                break;
            case STROLLS_SPRITE_ID:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_alt2 (Strolls)"));
                break;
            case WEAKENED_WEAPONLESS_SPRITE_ID:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_weakened_weaponless"));
                break;
            case EVENT_SPRITE_ID_1:
            case EVENT_SPRITE_ID_2:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_alt" + (image.asset_no - 1)));
                break;
            default:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_alt" + (image.asset_no - 4)));
        }
    }

    o += "<br/>";
    out.innerHTML = o;
}

/** This function displays links to all altfit sprites and previews from selected authors.
  * + Grab info of the selected author
  * + Collect list of altfit sprites found
  * + Display links to their previews with matching numberings
  * @version 1.0
  * @since August 26, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function costume(content) {
    json = JSON.parse(content);

    for (var image of json.unit.images) {
        switch (image.asset_no) {
            case NORMAL_SPRITE_ID:
                continue;
                break;
            case EVENT_SPRITE_ID_1:
            case EVENT_SPRITE_ID_2:
                o += br(llink("http://cdn.bungo.dmmgames.com" + image.path, assistant_name + "_weakened_weaponless"));
                break;
        }
    }

    out.innerHTML = o;
}

/** This function displays links to birthday gift sets' icons & assistant's shop VC.
  * + Displays link to assistant's shop VC
  * + Display links to all birthday gift sets' icons available in Shop
  * @version 1.0
  * @since January 21, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function shop(content) {
    json = JSON.parse(content);

    if (json.header == null)
        return;

    o += headerVoice(json.header);

    var giftSetCount = 0;

    for (var item of json.shop.sale) {
        if (item.name == "贈り物セット") {
            o += b("<i>Birthday Gift Set #" + ++giftSetCount + ":</i> ") + llink("http://cdn.bungo.dmmgames.com" + item.image, "icon");
        }
    }

    out.innerHTML = o;
}

/** This function displays letters stored in the librarian's inventory.
  * @version 1.0
  * @since January 21, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function inventoryItem(content) {
    json = JSON.parse(content);

    if (json.letter == null)
        return;

    o += b("<i>Thank-You Letter from " + nameTranslate(json.letter.mst_unit_from.name) + ":</i></br/>");
    o += letter(json.letter, true);
    
    out.innerHTML = o;
}

/** This function grabs voice clips from the assistant
  * + Return immediately if an empty duplicate request encountered
  * + Parse the name and ID of the assistant
  * + Loop through and display all VCs found
  * @version 2.0.2
  * @since January 21, 2020
  * @param {*} assistant The current assistant in the Library
  * @returns {string} The assistant's name and link to their VCs
  */
function headerVoice(assistant) {
    /** Placeholder for the assistant VCs */
    var assistant_voice = "";

    if (assistant.leader_unit.voices != null && assistant.leader_unit.voices.length != 0) {
        /* Parse the name and ID of the assistant */
        assistant_voice += b("<hr/>Leader: " + nameTranslate(assistant.leader_unit.master.name) + "<br/>ID: " + assistant.leader_unit.mst_unit_id);

        /* Display all VCs found */
        for (var item of assistant.leader_unit.voices)
            assistant_voice += br(llink("http://cdn.bungo.dmmgames.com" + item.path, nameTranslate(assistant.leader_unit.master.name).replace(" ", "_") + "_" + convertVoiceNum(item.asset_no)));
    }

    return assistant_voice;
}

/** This function prints immediate voice clips found while playing.
  * + Return immediately if an empty duplicate request encountered
  * @version 1.0.1
  * @since N/A
  * @param {*} content The content found in the requesting URL
  * @returns N/A
 */
function voiceImmediate(content) {
    json = JSON.parse(content);

    if (json.voices == null || json.voices.length == 0)
        return;

    o += b("Voice: ");
    for (var voices of json.voices) {
        o += br(llink("http://cdn.bungo.dmmgames.com" + voices.path, convertVoiceNum(voices.asset_no)));
    }

    out.innerHTML = o;
}

/** This function displays voice paths and recollections at the delve's start
  * (if found) and all available materials from the delving writers.
  * + Return immediately if an empty duplicate request encountered
  * + Print the Tainted Book's name
  * + Check for voice paths for recollections at the start of the delve
  * + Store the delving writers to a global array
  * + Display VCs from writers, all sprites and new materials from ring-equipped writers
  * @version 1.3.2
  * @since April 20, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function start(content) {
    json = JSON.parse(content);

    if (json.stage == null)
        return;

    /* Tainted Book's name */
    o += "<hr/><b>Tainted Book:<br/><i>" + ((json.stage.event_id == null) ? bookTranslate(json.stage.name) : json.stage.name) + "</i></b><br/><br/>";

    /* Grab the goddamn recollection if found */
    o += (json.adv == null || json.adv.length == 0) ? "" : (recollection(json.adv[0]) + "<br/><br/>");

    if (json.stage.event_id == null) {
        /** A placeholder for parsing the writer's name to the images */
        var writer_name = "";

        /** An order counter to store the writers' names to other functions (thanks devs) */
        var writer_order = 1;

        /* A variable checking if each writer is equipped with ring */
        var ring_writer;

        /* Counter variable for each writer's VCs */
        var vc_counter = 0;

        for (var unit of json.deck.units) {
            /* Check if the slot is empty */
            if (unit == null)
                continue;

            writer_name = nameTranslate(unit.master.name);

            /* Display all VCs from new writers & only ring & hidden VCs from known writers */
            //      if (unit.master.name !== writer_name) {
            //          /* Ring writers have one extra VC */
            //          if (unit.voices.length > DELVE_DEFAULT_VC_COUNT) {
            //              o += p(unit.mst_unit_id + " " + writer_name + " (" + weaponTranslate(unit.category) + ")");
            //              writer_name = writer_name.replace(/ /g, "_");
            //
            //              o += b("Writer sprites: ");
            //              o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[1].path, writer_name + "_bookdelve_(ring).png"));
            //              o += br(llink("http://cdn.bungo.dmmgames.com" + unit.icons[3].path, writer_name + "_bookdelve_(ring)_prev.png"));
            //
            //              o += b("Battle VCs: ");
            //              o += br(llink("http://cdn.bungo.dmmgames.com" + unit.voices[DELVE_DEFAULT_VC_COUNT].path, writer_name + "_tainted_attackring"));
            //
            //          } else { /* Default heading for known writers with default weapon */
            //              o += p(unit.mst_unit_id + " " + writer_name);
            //              writer_name = writer_name.replace(/ /g, "_");
            //          }
            //
            //          /* Grabs hidden VCs for all known writers */
            //          o += b("Hidden VCs: ");
            //          for (var item of unit.voices)
            //              if (item.asset_no === DELVE_HIDDEN_VC_ID_1 || item.asset_no === DELVE_HIDDEN_VC_ID_2)
            //                  o += br(llink("http://cdn.bungo.dmmgames.com" + item.path, convertVoiceNum(item.asset_no)));
            //
            //      } else {
            //          o += p(unit.mst_unit_id + " " + writer_name);
            //          writer_name = writer_name.replace(/ /g, "_");
            //
            //          o += b("Writer sprites: ");
            //          o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[0].path, writer_name + "_normal.png"));
            //          o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[1].path, writer_name + "_bookdelve.png"));
            //          o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[2].path, writer_name + "_weakened.png"));
            //          o += b("Battle VCs: ");
            //          for (var item of unit.voices)
            //              o += br(llink("http://cdn.bungo.dmmgames.com" + item.path, convertVoiceNum(item.asset_no)));
            //      }

            /* Display all VCs (delve, ring if possible, hidden) from all writers */
            ring_writer = unit.voices.length > DELVE_DEFAULT_VC_COUNT;

            o += p(unit.mst_unit_id + " " + writer_name + ((ring_writer) ? " (" + weaponTranslate(unit.category) + ")" : ""));
            writer_name = writer_name.replace(/ /g, "_");

            o += b("Writer sprites: ");
            o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[0].path, writer_name + "_normal.png"));
            o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[1].path, writer_name + ((ring_writer) ? "_bookdelve_(ring).png" : "_bookdelve.png")));
            o += br(llink("http://cdn.bungo.dmmgames.com" + unit.images[2].path, writer_name + "_weakened.png"));
            if (ring_writer)
                o += br(llink("http://cdn.bungo.dmmgames.com" + unit.icons[3].path, writer_name + "_bookdelve_(ring)_prev.png"));

            /* Reset the VC counter */
            vc_counter = 0;

            o += b("Battle VCs: ");

            for (vc_counter = 0; vc_counter <= DELVE_DEFAULT_VC_COUNT; vc_counter++) {
                if (vc_counter == DELVE_DEFAULT_VC_COUNT)
                    o += (ring_writer) ? br(llink("http://cdn.bungo.dmmgames.com" + unit.voices[vc_counter].path, writer_name + "_tainted_attackring")) : "";
                else {
                    if (unit.voices[vc_counter].asset_no === DELVE_HIDDEN_VC_ID_1 || unit.voices[vc_counter].asset_no === DELVE_HIDDEN_VC_ID_2)
                        continue;

                    o += br(llink("http://cdn.bungo.dmmgames.com" + unit.voices[vc_counter].path, writer_name + "_" + convertVoiceNum(unit.voices[vc_counter].asset_no)));
                }
            }

            /* Grabs hidden VCs for all known writers */
            o += b("Hidden VCs: ");
            for (var item of unit.voices)
                if (item.asset_no === DELVE_HIDDEN_VC_ID_1 || item.asset_no === DELVE_HIDDEN_VC_ID_2)
                    o += br(llink("http://cdn.bungo.dmmgames.com" + item.path, convertVoiceNum(item.asset_no)));

            /* Store their ID to other book delve functions */
            writers[writer_order++] = unit.mst_unit_id;

            o += "<hr style='width:50%; margin:15px auto 15px auto;'>";
        }
    }

    out.innerHTML = o;
}

/** This function displays the enemies and item drops encountered in a delve node.
  * + Return immediately if an empty duplicate request encountered
  * + Print the Taints' information (with translated names) if encountered
  * + Search and print special dual attack quotes and final words if found
  * + Print the items collected (with translated names)
  * + Display the recollection if it plays after purification
  * @version 2.1.1
  * @since January 23, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see battlePhase
  */
function battle(content) {
    json = JSON.parse(content);

    /* Check for Taint encounters */
    if (json.result != null) {
        /* Display Taints */
        o += b("Enemies: ");
        var item, taintName;

        for (var i in json.result.enemies) {
            item = json.result.enemies[i];

            taintName = nonNumberTaint(item);
            if (taintName == "")
                taintName = taintTranslate(item.name);

            o += br(llink("http://cdn.bungo.dmmgames.com" + item.img_path, taintName) + ", exp: " + item.exp + ", id: " + item.id);
        }

        /* Look for dual attack lines and final words lines */
        if (json.result.battles.phase1 != null && json.result.battles.phase1.length != 0)
            o += battlePhase(json.result.battles.phase1);

        if (json.result.battles.phase2 != null && json.result.battles.phase2.length != 0)
            o += battlePhase(json.result.battles.phase2);

        if (json.result.battles.phase3 != null && json.result.battles.phase3.length != 0)
            o += battlePhase(json.result.battles.phase3);

        if (json.result.battles.phase4 != null && json.result.battles.phase4.length != 0)
            o += battlePhase(json.result.battles.phase4);
    }

    /* Check for drop items collected */
    if (json.countMaterial != null) {
        o += b("Drop: ");
        o += br(llink("http://cdn.bungo.dmmgames.com" + json.mstMaterial.img_path, dropItemTranslate(json.mstMaterial.name) + " x" + json.countMaterial));
    }

    /* Grab the goddamn recollection if found */
    o += (json.adv == null || json.adv.length == 0) ? "" : recollection(json.adv[0]);

    out.innerHTML = o;
}

/** This function displays dual attack quotes and final words if found
  * @version 1.0.2
  * @since June 19, 2019
  * @param {*} phaseContent The extracted content of a battle phase
  * @returns {string} Parsed and linked VCs of any dual attack quotes and final words found
  * @see battle
  */
function battlePhase(phaseContent) {
    /** Container for any dual quotes or final words found */
    var phase_data = "";

    for (var turn of phaseContent) {
        /* Parse dual attack quotes if dual attack happens and both lines are found */
        if (turn.shinzui != null && turn.shinzui
            && turn.units[0].voice != null && turn.units[1].voice != null) {
            phase_data += b("Special Dual Attack Quotes: ");

            /* First dual VC */
            phase_data += br(llink("http://cdn.bungo.dmmgames.com" + turn.units[0].voice,
                nameTranslate(writers[turn.units[0].number]).replace(/ /g, "_") + "_" + nameTranslate(writers[turn.units[1].number]).replace(/ /g, "_") + "_dual1"));

            /* Second dual VC */
            phase_data += br(llink("http://cdn.bungo.dmmgames.com"+ turn.units[1].voice,
                nameTranslate(writers[turn.units[0].number]).replace(/ /g, "_") + "_" + nameTranslate(writers[turn.units[1].number]).replace(/ /g, "_") + "_dual2"));
        }

        /* Look for final words */
        if (turn.defences != null)
            for (var writer of turn.defences)
                if (writer.lostVoice != null) {
                    phase_data += b("Final words: ");

                    phase_data += br(llink("http://cdn.bungo.dmmgames.com"+ writer.lostVoice, nameTranslate(writers[writer.number]) + "_tainted_finalwords"));
                }
    }

    return phase_data;
}

/** This function display delve boss, recollection (if found) and tainted card ID
  * (if hinted) when a subjugation delve starts.
  * @version 1.0
  * @since April 20, 2020
  * @param {any} content The content found in the requesting URL
  */
function cardBattleInit(content) {
    json = JSON.parse(content);

    /* Reser card hinting */
    hintedCard = false;

    /* Parse in any reco that plays at battle start */
    o += (json.adv == null || json.adv.length == 0) ? "" : recollection(json.adv[0]);

    /* Grab boss Taint's info */
    o += "<b>Boss Taint:</b><br/>";
    o += llink("http://cdn.bungo.dmmgames.com" + json.result.result.enemies[0].img_path, taintTranslate(json.result.result.enemies[0].name)) + " (" + weaponTranslate(json.result.result.enemies[0].category) + "), hp: " + json.result.result.enemies[0].select_card_battle_hp + ", id: " + json.result.result.enemies[0].id + "<br/><br/>";

    /* Display tainted card # if found */
    if (json.next.card_effect.enemy.length != 0 && !hintedCard) {
        hintedCard = true;
        o += "<b>Tainted card ID:</b>" + (++json.next.card_effect.enemy[0]) + "<br/>";
    }

    out.innerHTML = o;
}

/** This function display recollection (if found), tainted card ID (if hinted)
  * and tainted card image (if picked) from a subjugation delve.
  * @version 1.0
  * @since April 20, 2020
  * @param {any} content The content found in the requesting URL
  */
function cardBattle(content) {
    json = JSON.parse(content);

    /* Parse in any reco that plays after battle */
    o += (json.adv == null || json.adv.length == 0) ? "" : recollection(json.adv[0]);

    /* Display tainted card # if found */
    if (json.next.card_effect.enemy.length != 0 && !hintedCard) {
        hintedCard = true; // Prevent repetition in next turns
        o += b("<i>Tainted card ID: </i>") + (++json.next.card_effect.enemy[0]);
    }

    /* Grab taint's memoria image if picked (i.e. failed run) */
    if (json.result.result_grade !== null && json.result.result_grade !== 1)
        o += (json.result.card_image) ? (b("<i>Taint's card image:</i>") + llink("http://cdn.bungo.dmmgames.com" + json.result.card_image, "link")) + "<br/>" : "";

    out.innerHTML = o;
}

/** This function displays the item drops as a reward from the delve.
  * + Print the hints if available
  * + Print the drop/reward list with translated items' names (if available) and images (if from new events)
  * @version 1.3
  * @since August 19, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function result(content) {
    json = JSON.parse(content);

    /* Check for hints shown in the result panel */
    if (json.hint !== null) {
        o += b("Hint:");
        o += "\n<dt>" + json.stage.name + "</dt>";
        o += "\n<dd>" + json.hint + "</dd>";
    }

    /* Check for drop items collected as a reward */
    if (json.dropItems != null && json.dropItems.length != 0) {
        o += b("Drops:");
        for (var item of json.dropItems)
            o += br(llink("http://cdn.bungo.dmmgames.com" + item.img_path, dropItemTranslate(item.name) + " x" + item.number));
    }

    /* Check for event points */
    if (json.event != null) {
        /* A placeholder for the event point's translated name */
        var event_item_name = json.event.point.name.split("-");
        event_item_tl_name = eventItemTranslate(event_item_name[0]);

        o += b("<i>Event point:</i> ");
        o += json.event.point.point + " " + event_item_tl_name;

        /* Check for bonus event points */
        if (json.event.point.bonus != null && json.event.point.bonus != 0) {
            o += "<br/><b><i>Memoria bonus:</i></b> ";
            o += json.event.point.bonus + " " + event_item_tl_name;
        }

        /* Check for first clear bonus */
        if (json.event.point.first_cleared_point != null && json.event.point.first_cleared_point != 0) {
            o += "<br/><b><i>First cleared bonus:</i></b> ";
            o += json.event.point.first_cleared_point + " " + event_item_tl_name;
        }

        /* Display event item images if it is new event or rerun (to be improved later) */
        if (json.stage.event_id > EVENT_COUNT && event_item_tl_name == event_item_name[0]) {
            var defaultItemLink = "http://cdn.bungo.dmmgames.com" + json.event.point.path;
            o += "<br/>" + llink(defaultItemLink.replace("03", "01"), "Item image");
            o += "<br/>" + llink(defaultItemLink.replace("03", "02"), "Item shop icon");
            o += "<br/>" + llink(defaultItemLink, "Item icon");
        }
    }

    o += "<hr/>";
    out.innerHTML = o;
}

/** This function displays the item drops as a reward from subjugation delves.
  * @version 1.0
  * @since April 20, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function cardBattleResult(content) {
    json = JSON.parse(content);

    /* Check for event points */
    if (json.event != null) {
        /* A placeholder for the event point's translated name */
        var event_item_name = json.event.point.name.split("-");
        event_item_tl_name = eventItemTranslate(event_item_name[0]);

        o += b("<i>Event point:</i> ");
        o += json.event.point.sum_point + " " + event_item_tl_name;

        /* Display event item images if it is new event or rerun (to be improved later) */
        if (json.stage.event_id > EVENT_COUNT && event_item_tl_name == event_item_name[0]) {
            var defaultItemLink = "http://cdn.bungo.dmmgames.com" + json.event.point.path;
            o += "<br/>" + llink(defaultItemLink.replace("03", "01"), "Item image");
            o += "<br/>" + llink(defaultItemLink.replace("03", "02"), "Item shop icon");
            o += "<br/>" + llink(defaultItemLink, "Item icon");
        }
    }

    o += "<hr/>";
    out.innerHTML = o;
}

/** This function grabs information regarding an Ensouled Book Delve.
  * + Display the transcription for the delver's ensouled_start line if found
  * + Display the summoned writer's info if found
  * @version 1.1
  * @since June 19, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see ensouledTransmigratedVoice
  * @todo Parse normal & special summoning lines during transmigration campaigns
  */
function ensouledDelveVoice(content) {
    json = JSON.parse(content);

    /* Parse the delver if ound */
    if (json.worker_unit != null && json.worker_unit.length != 0) {
        o += b("Ensouled Book Delve: ");

        /** A placeholder for writer's name for parsing purposes */
        var delver_name = nameTranslate(json.worker_unit[0].contents[1].talker_name);

        o += "<br/><b><i>" + delver_name + ":</i></b> " + json.worker_unit[0].contents[1].serif;

        /* Grab the delver's VC and display it with correct name */
        delver_name = delver_name.replace(/ /g, "_") + "_";
        o += br(llink("http://cdn.bungo.dmmgames.com" + json.voices[0].path, delver_name + convertVoiceNum(json.voices[0].asset_no)));
    }

    /* Parse the summoned writer if found */
    if (json.unit != null)
        o += ensouledTransmigratedVoice(json.unit, (json.materials != null));

    out.innerHTML = o;
}

/** This function grabs information about the summoned writer.
  * @version 1.0
  * @since June 19, 2019
  * @param {*} unitContent The content regarding a summoned writer
  * @param {boolean} hasMaterial Whether the summoned writer has already been transmigrated
  * @returns {string} The summoned writer's name and link to their VC
  */
function ensouledTransmigratedVoice(unitContent, hasMaterial) {
    /** Container for any summoned writer found */
    var summoned_writer_info = b("Summoned Writer: ");

    /* Writer's name to be modified for parsing purpose */
    var summoned_writer = nameTranslate(unitContent.master.name);

    summoned_writer_info += "<br/><b><i>" + summoned_writer + ":</i></b> " + unitContent.unit_adv.contents[0].serif;

    /* Check for reimbursing materials to determine which line it is */
    hasMaterial = hasMaterial || (unitContent.materials != null);

    /* Grab the writer's VC and display it with correct name */
    summoned_writer = summoned_writer.replace(/ /g, "_");
    summoned_writer_info += br(llink("http://cdn.bungo.dmmgames.com" + unitContent.unit_adv.voice_paths[0], summoned_writer + "_transmigration_" + (!(hasMaterial)? "1" : "2")));

    return summoned_writer_info;
}

/** This function grabs the data of the blossoming writer.
  * + Return immediately if an empty duplicate request encountered
  * + If the blossoming page was newly opened, grab the writer's blossoming VCs
  * + If the request was made while unlocking a node, show the stat change from said node
  * @version 2.0
  * @since July 3, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function skillTree(content) {
    json = JSON.parse(content);

    if (json.unit == null)
        return;

    if (writerKaika.id == 0) {
        /* Get the writer's ID and stats */
        writerKaika = new writerBlossoming(json.unit.master.id, json.unit.atk, json.unit.def, json.unit.avd, json.unit.base_tech, json.unit.base_genius, json.unit.base_beauty, json.unit.base_theme, json.unit.base_truth);

        o += b("Blossoming VCs:");

        /* Parse the blossoming writer's name */
        var writer_name = nameTranslate(json.unit.master.name);
        writer_name = writer_name.replace(/ /g, "_");

        /* Grab VCs found in the writer's blossoming page */
        for (var voices of json.unit.voices)
            o += br(llink("http://cdn.bungo.dmmgames.com" + voices.path, writer_name + "_" + convertVoiceNum(voices.asset_no)));
    } else {
        /** Placeholder for pseudo-stat increasing nodes */
        var statChange = 0;

        /** Placeholder for new pseudo-stat */
        var newPStats = [json.unit.base_tech, json.unit.base_genius, json.unit.base_beauty, json.unit.base_theme, json.unit.base_truth];

        /** Look for the correct stat change */
        for (i = 0; i < PSEUDO_STAT_COUNT; i++) {
            statChange = writerKaika.comparePStats(newPStats[i], i);

            /** Only show stat change if the unlocked node is a stat node */
            if (statChange != 0) {
                o += b("Stats change:");

                switch (i) {
                    case 0:
                        o += "<br/><b><i>TECH + ";
                        break;
                    case 1:
                        o += "<br/><b><i>TAL + ";
                        break;
                    case 2:
                        o += "<br/><b><i>AES + ";
                        break;
                    case 3:
                        o += "<br/><b><i>THM + ";
                        break;
                    case 4:
                        o += "<br/><b><i>RL + ";
                        break;
                }

                o += statChange + "</i></b>";
                o += "<br/><code>| " + (((json.unit.atk - writerKaika.atk) == 0) ? "" : (json.unit.atk - writerKaika.atk)) + " || " + (((json.unit.def - writerKaika.def) == 0) ? "" : (json.unit.def - writerKaika.def)) + " || " + (((json.unit.avd - writerKaika.evade) == 0) ? "" : (json.unit.avd - writerKaika.evade)) + "</code>";

                break;
            }
        }

        /* Update the writer's kaika before processing a new blossoming */
        writerKaika = new writerBlossoming(json.unit.atk, json.unit.def, json.unit.avd, json.unit.base_tech, json.unit.base_genius, json.unit.base_beauty, json.unit.base_theme, json.unit.base_truth);
    }

    out.innerHTML = o;
}

/** This function displays all available content in the Dining Hall.
  * + Check for any playing recollection and display accordingly
  * + Grab the VC played while feeding the authors
  * + Otherwise, loop through each item of the menu
  * + Display their day and time of the meal
  * + Parse their icons, images then display their formatted descriptions
  * @version 2.1
  * @since July 22, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see diningRecos
  * @todo Parse the translated meal's name
  */
function supply(content) {
    json = JSON.parse(content);

    /* Check if the request contains a menu */    
    if (json.dinner_menu == null || json.dinner_menu == 0) {
        /* Check if the request is to feed the authors */
        if (json.dinner) {
            /* If there is no dining reco, display the dining VC */
            if (json.dinner.dining_skits == null || json.dinner.dining_skits == 0) {
                voiceImmediate(content);
                return;
            } else /* Otherwise, display the reco */
                o += diningRecos(json.dinner.dining_skits[0]);
        } else /* At this point, the request was played from the Recollection Register */
            o += diningRecos(json);
    } else {
        /** A placeholder for a meal's information */
        var meal = "";

        /* Loop through the menu */
        for (var item of json.dinner_menu)
            if (item != null) {
                switch (item.week) {
                    case 0:
                        meal += "Sunday ";
                        break;
                    case 1:
                        meal += "Monday ";
                        break;
                    case 2:
                        meal += "Tuesday ";
                        break;
                    case 3:
                        meal += "Wednesday ";
                        break;
                    case 4:
                        meal += "Thursday ";
                        break;
                    case 5:
                        meal += "Friday ";
                        break;
                    case 6:
                        meal += "Saturday ";
                        break;
                }
                switch (item.type) {
                    case 1:
                        meal += "Lunch";
                        o += b("<i>" + meal + "</i><br/>");
                        o += "<code>|lunch_jp = " + item.name + "<br/></code>";
                        o += "<code>|lunch_en = <br/></code>";
                        o += "<code>|lunch_desc_jp = " + item.description.replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                        o += "<code>|lunch_desc_en = <br/></code>";
                        o += "<code>|lunch_reco = </code>";
                        break;

                    case 2:
                        meal += "Dinner";
                        o += b("<i>" + meal + "</i><br/>");
                        o += "<code>|dinner_jp = " + item.name + "<br/></code>";
                        o += "<code>|dinner_en = <br/></code>";
                        o += "<code>|dinner_desc_jp = " + item.description.replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                        o += "<code>|dinner_desc_en = <br/></code>";
                        o += "<code>|dinner_reco = </code>";
                        break;

                    case 3:
                        meal += "Special";
                        o += b("<i>" + meal + "</i><br/>");
                        o += "<code>|special_jp = " + item.name + "<br/></code>";
                        o += "<code>|special_en = <br/></code>";
                        o += "<code>|special_desc_jp = " + item.description.replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                        o += "<code>|special_desc_en = <br/></code>";
                        o += "<code>|special_reco =</code>";
                        break;
                }

                meal = "";
                o += br(llink("http://cdn.bungo.dmmgames.com" + item.icon, "Meal icon"));
                o += br(llink("http://cdn.bungo.dmmgames.com" + item.image, "Meal image"));
            }

        o += "<hr/>";
    }
    out.innerHTML = o;
}

/** This function displays a writer's data as found in the Writers' Register.
  * + Return immediately if empty duplicated request encountered
  * + Display the writer's name and parse their profiles as Wikia codes
  * + List all VCs if their voice list has been unlocked
  * + List all available sprites with correct name (or estimated names for outfits)
  * + List all letters the writer has received
  * @version 1.1
  * @since June 19, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see letters
  */
function album(content) {
    json = JSON.parse(content);

    if (json.album_unit == null)
        return;

    /* Display writer's ID and name */
    o += "<hr>\n" + p(json.album_unit.id + " " + nameTranslate(json.album_unit.name));

    /* Parse the profile */
    o += b("Profile:<br/>");
    o +="<code>{{Profilebox</code><br/>";
    o +="<code>|jp = &lt;p class = 'jp center'&gt;&lt;&sol;p&gt;<br/></code><code>" + json.album_unit.comment.replace(/\\n/g, "") + "</code><br/>";
    o += "<code>|en = &lt;p class = 'jp center'&gt;'' ''&lt;&sol;p&gt;</code><br/>";  
    o += "<code>}}</code>";

    /* List all possible recollections in Tainted Book Delves */
    if (json.skits.quest_skits != null && json.skits.quest_skits.length != 0) {
        o += b("Recollections in Tainted Book Delves: ");
        o += "<ul>";
        for (var delve_reco of json.skits.quest_skits) {
            if (delve_reco.event_id !== null)
                o += "<li><b><i>Event:</i></b> " + eventNames[delve_reco.event_id] + " ";
            else
                o += "<li>" + bookTranslate(delve_reco.sub_title) + " ";

            o += "<i>(" + ((delve_reco.is_get) ? "claimed" : "unclaimed") + ")</i>";
            o += "</li>";
        }

        o += "</ul>";
    }

    /* List all possible recollections in Tainted Book Delves */
    if (json.skits.event_skits !== null && json.skits.event_skits.length !== 0) {
        o += b("Event Reward Recollections");
        o += "<ul>";
        for (var event_reco of json.skits.event_skits) {
            o += "<li><b><i>Event:</i></b> " + eventNames[event_reco.event_id] + " ";
            o += "<i>(" + ((event_reco.is_get) ? "claimed" : "unclaimed") + ")</i>";
            o += "</li>";
        }

        o += "</ul>";
    }

    /* List all VCs stored if the Voice Register has been unlocked */
    if (json.voice_paths != null) {
        o += b("Voices: ");
        for (var item of json.voice_paths) {
            o += br(llink("http://cdn.bungo.dmmgames.com" + item.voice_path, convertVoiceNum(item.voice_name)));
        }
    }

    /* Grab all unlocked sprites */

    o += b("Sprites: ");

    /** A counter to determine which sprites are found in the register */
    var sprite_counter = 0;

    /** A placeholder to determine the name for the sprite
     *  Is parsed with "alt?" for altfits due to lack of specific data stored here */
    var sprite_name = "";

    for (var item of json.image_paths) {
        sprite_name = nameTranslate(json.album_unit.name).replace(/ /g, "_") + "_";

        switch (sprite_counter) {
            /* Normal/Default sprite */
            case 0:
                sprite_name += "normal";
                break;
            /* Book delve sprite */
            case 1:
                sprite_name += "bookdelve";
                break;
            /* Weakened / ring or altfit sprites (depending on what was unlocked) */
            case 2:
            case 3:
            case 4:
                switch (item.image_type) {
                    /* Altfit sprite */
                    case 1:
                        sprite_name += "alt?";
                        break;
                    /* Weakened sprite */
                    case 3:
                        sprite_name += "weakened";
                        break;
                    /* Ring delve sprite */
                    default:
                        sprite_name += "bookdelve (ring)";
                }

                break;

            /* At this point, all sprites are altfits */
            default:
                sprite_name += "alt?";
        }
    
        o += br(llink("http://cdn.bungo.dmmgames.com" + item.image_path, sprite_name));
        sprite_counter++;
    }

    /* Parse any receive letters */
    if (json.letters != null && json.letters.length != 0) {
        o += b("Letters:");

        /** A letter order counter bc devs count in a circle of 1-2-3 instead of
         *  acting like normal humans */
        var letter_counter = 1;

        for (var item of json.letters) {
            if (item != null) {
                /* Parse the receiver's name if it's the assistant */
                o += b("<i>Letter #" + letter_counter + ":</i><br/>");

                /* Parse the letter's content to Wikia code depending on the sender's information */
                o += "<code>{{Letter<br/></code><code>|fr = " + nameTranslate(item.mst_unit_from.name) + "</code><br/><code>|jp = " + item.text.replace(/\\n/g, "&lt;br&sol;&gt;</code><br/><code>").replace(/(\s)*/g, "") + "</code><br/><code>|en = </code><br/><code>}}</code>";
            }

            letter_counter++;
        }
    }

    out.innerHTML = o;
}

/** This function prints a letter's content, including JP letter, sender & receiver
  * (assistant) and assistant's letter voice clip.
  * + Check for the supposed receiver, display their name if it's a specific writer
  * + Parse the letter's content
  * + Display a link to the assistant's letter VC
  * @version 1.1.17
  * @since January 21, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function letters(content) {
    json = JSON.parse(content);

    /* Parse the receiver's name if it's the assistant */
    o += (json.letter.mst_unit_to != null)? b("Letter to " + nameTranslate(json.letter.mst_unit_to.name) + ":<br/>") : b("Letter:<br/>");

    o += letter(json.letter, false);

    /* Grab the assistant's letter VC */
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.voice, "Assistant's letter voice clip"));
    out.innerHTML = o;
}

/** This function prints a letter's content in Wikia codes.
  * + Check for the sender information and parse the content accordingly
  * @version 1.0
  * @since January 21, 2020
  * @param {JSON} letter The letter's content, parsed as JSON
  * @param {boolean} spoiler An indicator whether the letter's content should be hidden as spoilers
  * @return {string} The letter content parsed as Wikia codes 
  */
function letter(letter, spoiler) {
    var letterText = "";

    if (letter.mst_unit_from != null)
        letterText += "<code>{{Letter<br/></code><code>|fr = " + nameTranslate(letter.mst_unit_from.name) + "</code><br/><code>|jp = " + ((spoiler) ? "&lt;span class=&quot;spoiler&quot;&gt;" : "") + letter.text.replace(/\\n/g, "&lt;br&sol;&gt;</code><br/><code>").replace(/(\s)*/g, "") + ((spoiler) ? "&lt;&sol;span&gt;" : "") + "</code><br/><code>|en = " + ((spoiler) ? "&lt;span class&equals;&quot;spoiler&quot;&gt;&lt;&sol;span&gt;" : "") + "</code><br/><code>}}</code>";

    if (letter.npc != null)
        letterText += "<code>{{Letter<br/></code><code>|fr = " + nameTranslate(letter.npc.name) + "</code><br/><code>|jp = " + ((spoiler) ? "&lt;span class=&quot;spoiler&quot;&gt;" : "") + letter.text.replace(/\\n/g, "&lt;br&sol;&gt;</code><br/><code>").replace(/(\s)*/g, "") + ((spoiler) ? "&lt;&sol;span&gt;" : "") + "</code><br/><code>|en = " + ((spoiler) ? "&lt;span class&equals;&quot;spoiler&quot;&gt;&lt;&sol;span&gt;" : "") + "</code><br/><code>}}</code>";

    return letterText;
}

/** This function displays stroll VCs from encountered writers.
  * + Parse the location's name
  * + Display the writer's stroll line 
  * + Parse the link to their VCs if found
  * @version 1.1.6
  * @since June 18, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function strollsVoice(content) {
    json = JSON.parse(content);

    /** A placeholder for the location's translated name */
    var location_name = nameTranslate(json.stage.name);

    o += br("<br/><b>" + location_name + ":</b>");

    /* Parse the stroll lines as Wikia codes */

    /* Check for any writers' present at the location */
    if (json.units != null && json.units.length != 0) {
        for (var unit of json.units) {
            if (unit != null) {
                /* Parse the writer's name and link to their strolling outfit */
                o += b("<i>"+ llink("http://cdn.bungo.dmmgames.com" + unit.adv.unit_image_paths[0].image_path, nameTranslate(unit.name)) + ":</i><br/>");

                /* Codes for a stroll Speech bubble card */
                o += "<code>{{Speech</code><br/>";

                /* JP stroll line */
                o += "<code>|jp = " + unit.adv.contents[1].serif.replace(/(\s)*\\n/g, "&lt;br&sol;&gt;") + "</code><br/>";

                /* Blank EN line for translation */
                o += "<code>|en = </code><br/>";

                /* Link to their VC */
                o += "<code>|vo = " + llink("http://cdn.bungo.dmmgames.com" + unit.adv.voice_paths[0], nameTranslate(unit.name) + " Strolls " + location_name) + "</code><br/>";
                o += "<code>}}</code>";
            }
        }

        o += "<br/>";
    }

    out.innerHTML = o;
}

/** This function displays stroll gift reply from the writer.
  * + Return immediately if an empty duplicate request encountered
  * + Parse the writer's name and trust
  * + Display the writer's gift reply line as Wikia codes
  * @version 1.0.1
  * @since June 19, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function strollsReply(content) {
    json = JSON.parse(content);

    if (json.unit == null)
        return;

    o += br("<br/><b>Gift Reply:</b>");

    /* Parse the writer's name and link to their strolling outfit */
    o += b("<i>"+ llink("http://cdn.bungo.dmmgames.com" + json.adv.unit_image_paths[0].image_path, nameTranslate(json.unit.name)) + "</i><br/>");

    /* Parse the writer's trust */
    
    /** A placeholder to check the writer's trust range */
    var writer_trust = json.unit.trust;

    if (writer_trust < 50)
        o += "<code>|-| Trust 0-49 =</code><br/>";
    else if (writer_trust >= 100)
        o += "<code>|-| Trust 100 =</code><br/>";
    else
        o += "<code>|-| Trust 50-99 =</code><br/>";

    /* Codes for a stroll Speech bubble card */
    o += "<code>{{Speech</code><br/>";

    /* JP stroll line */
    o += "<code>|jp = " + json.adv.contents[1].serif.replace(/(\s)*\\n/g, "&lt;br&sol;&gt;") + "</code><br/>";

    /* Blank EN line for translation */
    o += "<code>|en = </code><br/>";

    o += "<code>}}</code><br/>";

    out.innerHTML = o;
}

/** This function displays data of a memoria, including its info and links to available
  * images & next lvl images (if the memoria is Lvl2)
  * @version 2.0
  * @since July 15, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see memoriaInfo
  */
function memoria(content) {
    json = JSON.parse(content);

	o += b("Memoria:<br/>");

    o += memoriaInfo(json.card.master);

    /* Parse the memoria's stats */
    o += "<code>|stats = " + memoriaStats(json.card.status_description) + "</code><br/>";

    /* Lastly, the memoria's level */
    o += "<code>|lvl = " + json.card.level + "</code><br/>";
    o += "<code>}}</code><br/>";

    /* Image links */
    o += "<br/><b><i>Available images:</i></b>";
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.card.master.img_path, "Card image"));
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.card.master.small_img_path, "Preview image"));
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.card.master.icon_path, "Icon image"));

    /* Check for link to max art and max description */
    if (json.card.level == 2) {
        o += br(llink("http://cdn.bungo.dmmgames.com" + json.next_level_card_image, "Lv3 Card Image"));
        o += br("Lv3 Description: " + json.next_level_status_description);
    }

    out.innerHTML = o;
}

/** This function displays info of all memorias found in the Exchange section.
  * + Loop through all exchangeable items
  * + Only display cards with their info stored in this section
  * @version 1.0
  * @since July 31, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function tradeMemorias(content) {
    json = JSON.parse(content);

    /** Item counter */
    var count = 1;

    for (var item of json.trades) {
        if (item.master.type === MEMORIA_EXCTYPE || item.master.content_master === MEMORIA_EXCRARITY) {
            o += ((count === 1)? b("Spark Essence Exchange:") : "") + b("<i>Memoria #" + count++ + ":</i><br/>");

            /* Codes for a memoria card */
            o += "<code>{{Cardbox</code><br/>";

            /* Parse the kanji name */

            /** A placeholder for kanji names as displayed on Wikia */
            var mem_kanji_name = item.master.content_master.name.split("-");

            o += "<code>|kanji = " + mem_kanji_name[0] + "</code><br/>";

            /** Memoria in the Exchange section does not have its furigana included */
            o += "<code>|furigana = </code><br/>";
            o += "<code>|rarity = " + item.master.content_master.rare + "</code><br/>";

            /* Parse the writer's name if available */
            o += "<code>|wr = ";

            if (mem_kanji_name.length > 1) {
                /** A placeholder for featured writer for verifying purpose */
                var wr_name = nameTranslate(mem_kanji_name[1]);

                if (wr_name !== mem_kanji_name[1])
                    o += wr_name;
            }

            o += "</code><br/>";

            /** Memoria in the Exchange section does not have its description included */
            o += "<code>|desc = </code><br/>";

            /* Lastly, its stats and level */
            o += "<code>|stats = " + memoriaStats(item.master.content_master.status_description) + "</code><br/>";
            o += "<code>|lvl = " + item.master.content_master.level + "</code><br/>";
            o += "<code>}}</code><br/>";

            o += br(llink("http://cdn.bungo.dmmgames.com" + item.master.content_master.img_path, "Card image"));
        }
    }

    out.innerHTML = o;
}

/** This function displays info of all memorias found in other librarians' Reports.
  * @version 2.0
  * @since July 15, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  * @see memoriaInfo
  */
function reportMemorias(content) {
    json = JSON.parse(content);

    /** Report counter */
    var count = 1;

    for (var report of json.profiles) {
        if (report.card != null) {
            o += b("Report #" + count + " memoria:<br/>");

            o += memoriaInfo(report.card);

            /* Memoria from reports don't have specific codes for stats & level */
            o += "<code>|stats = </code><br/>";
            o += "<code>|lvl = </code><br/>";
            o += "<code>}}</code><br/>";

            /* Image links */
            o += "<br/><b><i>Available images:</i></b>";
            o += br(llink("http://cdn.bungo.dmmgames.com" + report.card.img_path, "Card image"));
            o += br(llink("http://cdn.bungo.dmmgames.com" + report.card.small_img_path, "Preview image"));
            o += br(llink("http://cdn.bungo.dmmgames.com" + report.card.icon_path, "Icon image"));
        }

        count++;
    }

    out.innerHTML = o;
}

/** This function collects all basic info of a memoria:
  * + Memoria's name in kanji and hiragana
  * + Featured writer
  * + Description
  * @version 1.0.1
  * @since August 1, 2019
  * @param {*} info The content containing a memoria's basic info
  * @return {string} The code consisting of the memoria's name, writer and description
  */
function memoriaInfo(info) {
    /** Placeholder containing all info collected */
    var memoria_data = "";

    /* Codes for a memoria card */
    memoria_data += "<code>{{Cardbox</code><br/>";

    /* Parse the kanji name */

    /** A placeholder for kanji names as displayed on Wikia */
    var mem_kanji_name = info.name.split("-");

    memoria_data += "<code>|kanji = " + mem_kanji_name[0] + "</code><br/>";

    /* Parse the correct furigana name
     * Note: All memoria with ID < 109 (before Shouyou's "Cherry Blossoms Dancing in the Wind") with the exception of 1* memorias have an excess letter at the end
     */
    memoria_data += "<code>|furigana = " + ((info.id < 50 || (info.id > 66 && info.id < 109) && mem_kanji_name.length > 1) ? info.name_kn.substr(0, info.name_kn.length - 1) : info.name_kn) + "</code><br/>";
    memoria_data += "<code>|rarity = " + info.rare + "</code><br/>";

    /* Parse the writer's name if available */
    memoria_data += "<code>|wr = ";

    if (mem_kanji_name.length > 1) {
        /** A placeholder for featured writer for verifying purpose */
        var wr_name = nameTranslate(mem_kanji_name[1]);

        if (wr_name !== mem_kanji_name[1])
            memoria_data += wr_name;
    }

    memoria_data += "</code><br/>";

    /* Parse the memoria's description */
    memoria_data += "<code>|desc = &lt;&excl;--" + info.description.replace(/↵/g, "&lt;br&sol;&gt;").replace(/\\n/g, "&lt;br&sol;&gt;") + "--&gt;" + "</code><br/>";

    return memoria_data;
}

/** This function translates the status description of a memoria to English.
  * @version 1.0
  * @since August 1, 2019
  * @param {*} jpStat The memoria's status description
  * @return {string} The translated status
  */
function memoriaStats(jpStat) {
    /** A placeholder for memoria stats as displayed on Wikia */
    var mem_stats = jpStat;

    mem_stats = mem_stats.replace(/技術 /g, "TECH").replace(/天才 /g, "TAL").replace(/美 /g, "AES").replace(/主題 /g, "THM").replace(/真実 /g, "RL");
    mem_stats = mem_stats.replace(/\s\\n/g, "&lt;br&sol;&gt;");
    mem_stats = mem_stats.replace(/\s/g, "&lt;br&sol;&gt;");
    mem_stats = mem_stats.replace(/急所への攻撃率が上がる&lt;br&sol;&gt;/g, "CRIT RATE").replace(/命中率が上がる&lt;br&sol;&gt;/g, "ACCURACY").replace(/降臨の上昇率が上がる&lt;br&sol;&gt;/g, "EP GAUGE FILL RATE");

    return mem_stats;
}

/** This function grabs the Chief's VC in paydays.
  * + Parse the month and display a link to the VC
  * @version 1.0.1
  * @since July 31, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function salary(content) {
    json = JSON.parse(content);

    if (json.popup == null)
        return;

    /* Parse the month */
    o += b(months[json.month] + " Payday:");

    /* Grab the login VC */
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.voice_path, "Chief Librarian's VC"));
    out.innerHTML = o;

}

/** This function displays data of a ring as found in the Memoria Index.
  * + Return immediately if duplicated request encountered
  * + Otherwise, continue grabbing the ring owner's name and ID
  * + Parse the ring's info as Wikia codes
  * @version 1.0.2
  * @since June 18, 2019
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
function ringMemoria(content) {
    json = JSON.parse(content);

    if (json.ring == null)
        return;

    /** The writer's translated name */
    var writer_name = nameTranslate(json.ring.master.mst_unit.name);

    /** The writer's ID */
    var writer_id = json.ring.master.mst_unit_id;

	o += b(writer_name + "'s Ring:<br/>");

    /* Codes for a ring infobox */    
    o += "<code>{{Ringbox</code><br/>";

    /* Parse the kanji name */

    /** A placeholder for kanji name for later parsing */
    var ring_kanji_name = json.ring.master.name;

    o += "<code>|kanji = " + ring_kanji_name + "</code><br/>";
    o += "<code>|wr_id = " + writer_id + "</code><br/>";
    o += "<code>|wr_class = " + weaponTranslate(json.ring.master.mst_unit.category) + "</code><br/>";
    o += "<code>|ring_class = " + weaponTranslate(ring_kanji_name.substr(ring_kanji_name.length - 2, 1)) + "</code><br/>";

    /* No ring description found in the display in Memoria Index */
    o += (json.ring.master.description == null)? "<code>|ring_desc = </code><br/>" : "<code>|ring_desc = &lt;&excl;--" + json.ring.master.description + "--&gt;</code><br/>";
    o += "<code>}}</code><br/>";

    /* Image links */
    o += "<br/><b><i>Available images:</i></b>";
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.ring.master.img_path, "Ring image"));
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.ring.master.small_img_path, "Preview image"));
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.ring.master.icon_path, "Icon image"));
    o += br(llink("http://cdn.bungo.dmmgames.com" + json.ring.master.list_img_path, "Display image"));

    out.innerHTML = o;
}

/** This function displays data of a ring as found in the Ring Register.
  * + Return immediately if empty duplicated request encountered
  * + Otherwise, continue grabbing the ring's basic info as Wikia codes
  * + Parse the ring's memories and letters as Wikia codes
  * @version 1.0.2
  * @since January 21, 2020
  * @param {*} content The content found in the requesting URL
  * @returns N/A
  */
 function ringRegister(content) {
    json = JSON.parse(content);

    if (json.ring == null)
        return;

    ringMemoria(content);

    /* Parse the ring's unlocked memories */

    o += b("<i>Memories:</i><br/>");

    /* Codes for a ring's memories */    
    o += "<code>{{Memories</code><br/>";

    for (var memory of json.ring_flavor_texts) {
        switch (memory.order_no) {
            /* Level 1 memory - opened by default */
            case 1:
                o += "<code>|lvl1_memory_jp = " + memory.text + "</code><br/>";
                o += "<code>|lvl1_memory_en = </code><br/>";
                break;
            /* Level 5 memory */
            case 2:
                o += (memory.is_open)? "<code>|lvl5_memory_jp = " + memory.text + "</code><br/>" : "<code>|lvl5_memory_jp = </code><br/>";
                o += "<code>|lvl5_memory_en = </code><br/>";
                break;
            /* Level 10 memory */
            case 3:
                o += (memory.is_open)? "<code>|lvl10_memory_jp = " + memory.text + "</code><br/>" : "<code>|lvl10_memory_jp = </code><br/>";
                o += "<code>|lvl10_memory_en = </code><br/>";
                break;
            /* Level 20 memory */
            case 4:
                o += (memory.is_open)? "<code>|lvl20_memory_jp = " + memory.text + "</code><br/>" : "<code>|lvl20_memory_jp = </code><br/>";
                o += "<code>|lvl20_memory_en = </code><br/>";
                break;
            /* Level 30 memory */
            case 5:
                o += (memory.is_open)? "<code>|lvl30_memory_jp = " + memory.text + "</code><br/>" : "<code>|lvl30_memory_jp = </code><br/>";
                o += "<code>|lvl30_memory_en = </code><br/>";
                break;
            /* Level 40 memory */
            case 6:
                o += (memory.is_open)? "<code>|lvl40_memory_jp = " + memory.text + "</code><br/>" : "<code>|lvl40_memory_jp = </code><br/>";
                o += "<code>|lvl40_memory_en = </code><br/>";
                break;
        }
    }

    o += "<code>}}</code>";

    /* Parse the letters if unlocked */
    if (json.ring_letters != null && json.ring_letters.length != 0) {
        for (var ring_letter of json.ring_letters) {
            o += b("<i>Letter #" + ring_letter.order_no + ":</i><br/>");
            o += letter(ring_letter, true);
        }
    }
    out.innerHTML = o;
}

/** This function collects and displays limited-time recollections playable from the Library.
  * (Most of these are anniversary but devs decide to laugh at me so they are stored completely differently from most recollections.)
  * @version 1.0
  * @since July 17, 2019
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function limitedRecos(content) {
    json = JSON.parse(content);

    o += recollection(json.adv);
    out.innerHTML = o;
}

/** This function collects and displays recollections playable from the event page.
  * (Another example of why I hate devs)
  * @version 1.0
  * @since July 17, 2019
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function delveRecos(content) {
    json = JSON.parse(content);

    /* Check for voice paths and prints recollection lines if found */
    o += (json.adv == null || json.adv == 0) ? "" : recollection(json.adv[0]);

    out.innerHTML = o;
}

/** This function collects and displays recollections playable from foreign shelves.
  * @version 1.0
  * @since Janurary 22, 2020
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function foreignRecos(content) {
    json = JSON.parse(content);

    /* Check for voice paths and prints recollection lines if found */
    o += (json.skit == null || json.skit == 0) ? "" : recollection(json.skit);

    out.innerHTML = o;
}

/** This function collects and displays recollections purchased from the Shop.
  * @version 1.0
  * @since Janurary 22, 2020
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function giftRecos(content) {
    json = JSON.parse(content);

    /* Check for voice paths and prints recollection lines if found */
    o += (json.skit_data == null || json.skit_data == 0) ? "" : recollection(json.skit_data.skit[0]);

    out.innerHTML = o;
}

/** This function collects and displays most recollections played from the Recollections Register.
  * (Yet another example of why I hate devs.)
  * @version 1.1
  * @since July 17, 2019
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function registerRecos(content) {
    json = JSON.parse(content);

    o += recollection(json);
    out.innerHTML = o;
}

/** This function collects and displays recollections from the main story.
  * (Note: The displaying algorithm is similar to that of recollection(), but devs decides to
  * play around and stuff in unnecessary VCs for extra, while main story is not voiced at all.)
  * @version 1.0.3
  * @since July 18, 2019
  * @param {any} content The content found in the requesting URL
  * @return N/A
  * @see recollection
  */
function mainRecos(content) {
    json = JSON.parse(content);

    /** Parse reco name */
    o += b("Main Story Recollection: ") + json.chapter_title + " " + json.title;

    /* Link to the reco file if it is of newer type */
    if (json.contents == null || json.contents == 0)
        o += br(llink("http://cdn.bungo.dmmgames.com" + json.novelPath, "Recollection text file (save as .zip then extract to .txt)"));
    else { /* Older type of recollection */
        for (var item of json.contents) {
            if (item.serif) {
                o += br("<code>{{Speech<br/></code>");

                /* Parse the correct speaker name (writer, character or taint) */
                if (item.talker_name === "侵蝕者")
                    o += "<code>|taint = <br/></code>";
                else
                    o += (item.talker_name === "" || item.talker_name == null) ? "" : ("<code>|wr = " + nameTranslate(item.talker_name) + "<br/></code>");

                o += "<code>|jp = " + item.serif.replace(/\s/g, "").replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                o += "<code>|en = <br/></code>";
                o += "<code>}}</code>";

                /* Check for choice dialogues */
                if (item.select_1) {
                    o += br("<code>&lt;div class=&#34;shelf-header&#34;&gt;&#39;&#39;&#39;Choice 1&#39;&#39;&#39;&lt;/div&gt;<br/></code>");
                    o += "<code>{{Speech<br/></code>";
                    o += "<code>|jp = " + item.select_1 + "<br/></code>";
                    o += "<code>|en = <br/></code>";
                    o += "<code>}}</code>";

                    if (item.select_2) {
                        o += br("<code>&lt;div class=&#34;shelf-header&#34;&gt;&#39;&#39;&#39;Choice 2&#39;&#39;&#39;&lt;/div&gt;<br/></code>");
                        o += "<code>{{Speech<br/></code>";
                        o += "<code>|jp = " + item.select_2 + "<br/></code>";
                        o += "<code>|en = <br/></code>";
                        o += "<code>}}<br/></code>";
                    }

                    o += "<code>&lt;br&sol;&gt;</code>";
                }
            }
        }

        o += "<hr/>";
    }
    out.innerHTML = o;
}

/** This function collects and displays recollections played in the Dining Hall.
  * + Check if it is a birthday recollection and display accordingly
  * + Otherwise, parse the reco's name and display the content as Wikia codes with link to the VCs
  * @version 1.0
  * @since July 17, 2019
  * @param {any} recoContent The JS section pertaining to the triggered recollection
  * @return {string} The recollection's available content
  * @todo Parse the meals from the menu
  */
function diningRecos(recoContent) {
    /** Placeholder containing codes for the recollection */
    var reco_data = "";

    /* Display if it is a birthday reco or conversation reco */
    if (recoContent.is_birthday) {
        reco_data += b("Birthday Recollection:<br/>");

        var wr_name = "";
        var bday_quote = "";

        reco_data += "<code>{{Speech<br/></code>";

        for (var action of recoContent.adv.contents)
            if (action.talker_mst_unit_id != null) {
                wr_name += nameTranslate(action.talker_mst_unit_id).replace(/ /g, "_");
                bday_quote += action.serif.replace(/\s/g, "").replace(/\\n/g, "&lt;br&sol;&gt;");
                break;
            }

        reco_data += "<code>|wr = " + wr_name + "</code><br/>";
        reco_data += "<code>|jp = " + bday_quote + "</code><br/>";

        /* Check birthday cake image name to determine birthday line number */
        reco_data += "<code>|vo = " + llink("http://cdn.bungo.dmmgames.com" + recoContent.adv.voice_paths[0], wr_name + (recoContent.food_path.includes("0001_01.png") ? "_dininghall_birthday" : "_dininghall_birthday2")) + "</code><br/><code>}}</code>";
    } else {
        /** Placeholder for splitting the meal name from reco's number */
        var reco_name = recoContent.title.split(/[０-９]/g);

        /** Placeholder for any numbering in the reco's name */
        var reco_number = recoContent.title.substr(reco_name[0].length, recoContent.title.length - reco_name[0].length);

        reco_data += b("Dining Hall Recollection: ") + mealTranslate(reco_name[0]) + ((reco_number) ? (" " + reco_number) : "");

        /** Placeholder for all links to the reco's VCs */
        var reco_voices = [""];

        for (var item of recoContent.adv.voice_paths)
            reco_voices.push("http://cdn.bungo.dmmgames.com" + item);

        /** A counter for linking VC */
        var vc_order = 1;

        /* Display the dialogue */
        for (var item of recoContent.adv.contents)
            if (item.serif) {
                reco_data += br("<code>{{Speech<br/></code>");
                reco_data += "<code>|wr = " + nameTranslate(item.talker_name) + "<br/></code>";
                reco_data += "<code>|jp = " + item.serif.replace(/\s/g, "").replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                reco_data += "<code>|en = <br/></code>";
                reco_data += "<code>|vo = "+ llink(reco_voices[vc_order++], "Link") + "<br/></code>";
                reco_data += "<code>}}</code>";
            }

        reco_data += "<hr/>";
    }

    return reco_data;
}

/** This function collects the playing recollection's data and either display the content in Wikia codes (if of the older type)
  * or display the link to its .zip file (if of newer type implemented on November 2018).
  * @version 2.2
  * @since April 20, 2020
  * @param {any} recoContent The JS section pertaining to the triggered recollection
  * @return {string} The recollection's available content
  */
function recollection(recoContent) {
    /** Placeholder containing codes for the recollection */
    var reco_data = "";

    /* Parse reco name */
    reco_data += b("Recollection Name: ") + ((recoContent.chapter_title) ? (recoContent.chapter_title + " ") : "") + recoContent.title;

    /* Newer recollection */
    if ((recoContent.contents == null || recoContent.contents == 0) && (recoContent.adv.contents == null || recoContent.adv.contents == 0))
        /* Link to the reco file */
        reco_data += br(llink("http://cdn.bungo.dmmgames.com" + recoContent.novelPath, "Recollection text file (save as .zip then extract to .txt)"));
    else { /* Older recollection */

        /* Devs stuffed some reco in one extra JSON layer, git gud devs */
        if (recoContent.contents == null)
            recoContent = recoContent.adv;

        /* Check for called VCs */

        /** Placeholder for all reco's VC links */
        var reco_voices = [""];

        /** A counter for linking VC */
        var vc_order = 1;

        /* Store all VC links if the reco is voiced */
        if (recoContent.voice_paths != null && recoContent.voice_paths != 0)
            for (var item of recoContent.voice_paths)
                reco_voices.push("http://cdn.bungo.dmmgames.com" + item);

        /* Display the reco's content as Wikia code */
        for (var item of recoContent.contents) {
            if (item.serif) {
                reco_data += br("<code>{{Speech<br/></code>");

                /* Parse the correct speaker name (writer, character or taint) */
                if (item.talker_name === "侵蝕者")
                    reco_data += "<code>|taint = <br/></code>";
                else
                    reco_data += (item.talker_name === "" || item.talker_name == null) ? "" : ("<code>|wr = " + nameTranslate(item.talker_name) + "<br/></code>");

                reco_data += "<code>|jp = " + item.serif.replace(/\s/g, "").replace(/\\n/g, "&lt;br&sol;&gt;") + "<br/></code>";
                reco_data += "<code>|en = <br/></code>";

                /* Link to the VC if the reco is voiced */
                if (recoContent.voice_paths != null && recoContent.voice_paths != 0)
                    reco_data += "<code>|vo = " + llink(reco_voices[vc_order++], "Link") + "<br/></code>";

                reco_data += "<code>}}</code>";

                /* Check for choice dialogues */
                if (item.select_1) {
                    reco_data += br("<code>&lt;div class=&#34;shelf-header&#34;&gt;&#39;&#39;&#39;Choice 1&#39;&#39;&#39;&lt;/div&gt;<br/></code>");
                    reco_data += "<code>{{Speech<br/></code>";
                    reco_data += "<code>|jp = " + item.select_1 + "<br/></code>";
                    reco_data += "<code>|en = <br/></code>";
                    reco_data += "<code>}}</code>";

                    if (item.select_2) {
                        reco_data += br("<code>&lt;div class=&#34;shelf-header&#34;&gt;&#39;&#39;&#39;Choice 2&#39;&#39;&#39;&lt;/div&gt;<br/></code>");
                        reco_data += "<code>{{Speech<br/></code>";
                        reco_data += "<code>|jp = " + item.select_2 + "<br/></code>";
                        reco_data += "<code>|en = <br/></code>";
                        reco_data += "<code>}}<br/></code>";
                    }

                    reco_data += "<code>&lt;br&sol;&gt;</code>";
                }
            }
        }

        reco_data += "<hr/>";
    }

    return reco_data;
}

/* -------------- WRITERS, TAINTS & OTHER DATA CONVERSION ----------------
 * 
 * + Names, IDs and locations: nameTranslate()
 * + Writers' voice IDs: convertVoiceNum()
 * + Taints' names and types: taintTranslate(), isBoss(), taintType()
 * + Drop items' names: dropItemTranslate(), isGear(), eventItemTranslate()
 * + Weapons' translation: weaponTranslate()
 * + Books' name translation: bookTranslate()
 */

/** This function converts the name & ID of writers, library personnel and locations
  * into English.
  * + Check if they are writers' name/ID, library personnel or stroll location
  * and translate accordingly
  * + Otherwise, return the untranslated name
  * @version 1.4.2.2
  * @since March 8, 2020
  * @param {string} name A Japanese name or ID
  * @return {string} The parameter's English translation (if available), or the parameter unchanged
  */
function nameTranslate(name) {
    switch (name) {
        /* Writers' names and IDs */
        case "芥川龍之介":
        case 1:
            return "Akutagawa Ryuunosuke";
            break;
        case "太宰治":
        case 2:
            return "Dazai Osamu";
            break;
        case "萩原朔太郎":
        case 3:
            return "Hagiwara Sakutarou";
            break;
        case "中原中也":
        case 4:
            return "Nakahara Chuuya";
            break;
        case "泉鏡花":
        case 5:
            return "Izumi Kyouka";
            break;
        case "夏目漱石":
        case 6:
            return "Natsume Souseki";
            break;
        case "宮沢賢治":
        case 7:
            return "Miyazawa Kenji";
            break;
        case "谷崎潤一郎":
        case 8:
            return "Tanizaki Junichirou";
            break;
        case "永井荷風":
        case 9:
            return "Nagai Kafuu";
            break;
        case "島崎藤村":
        case 10:
            return "Shimazaki Touson";
            break;
        case "田山花袋":
        case 11:
            return "Tayama Katai";
            break;
        case "志賀直哉":
        case 12:
            return "Shiga Naoya";
            break;
        case "森鷗外": /* Original spelling used in-game */
        case "森鴎外": /* Modern spelling */
        case 13:
            return "Mori Ougai";
            break;
        case "川端康成":
        case 14:
            return "Kawabata Yasunari";
            break;
        case "北原白秋":
        case 15:
            return "Kitahara Hakushuu";
            break;
        case "室生犀星":
        case 16:
            return "Muroo Saisei";
            break;
        case "梶井基次郎":
        case 17:
            return "Kajii Motojirou";
            break;
        case "広津和郎":
        case 18:
            return "Hirotsu Kazuo";
        case "武者小路実篤":
        case 19:
            return "Mushanokouji Saneatsu";
            break;
        case "尾崎紅葉":
        case 20:
            return "Ozaki Kouyou";
            break;
        case "坂口安吾":
        case 21:
            return "Sakaguchi Ango";
            break;
        case "江戸川乱歩":
        case 22:
            return "Edogawa Ranpo";
            break;
        case "坪内逍遥":
        case 23:
            return "Tsubouchi Shouyou";
            break;
        case "二葉亭四迷":
        case 24:
            return "Futabatei Shimei";
            break;
        case "有島武郎":
        case 25:
            return "Arishima Takeo";
            break;
        case "佐藤春夫":
        case 26:
            return "Satou Haruo";
            break;
        case "小林多喜二":
        case 27:
            return "Kobayashi Takiji";
            break;
        case "井伏鱒二":
        case 28:
            return "Ibuse Masuji";
            break;
        case "横光利一":
        case 29:
            return "Yokomitsu Riichi";
            break;
        case "織田作之助":
        case 30:
            return "Oda Sakunosuke";
            break;
        case "堀辰雄":
        case 31:
            return "Hori Tatsuo";
            break;
        case "中島敦":
        case 32:
            return "Nakajima Atsushi";
            break;
        case "小泉八雲":
        case 33:
            return "Koizumi Yakumo";
            break;
        case "正岡子規":
        case 34:
            return "Masaoka Shiki";
            break;
        case "若山牧水":
        case 35:
            return "Wakayama Bokusui";
            break;
        case "高村光太郎":
        case 36:
            return "Takamura Koutarou";
            break;
        case "石川啄木":
        case 37:
            return "Ishikawa Takuboku";
            break;
        case "国木田独歩":
        case 38:
            return "Kunikida Doppo";
            break;
        case "幸田露伴":
        case 39:
            return "Kouda Rohan";
            break;
        case "松岡譲":
        case 40:
            return "Matsuoka Yuzuru";
            break;
        case "吉川英治":
        case 41:
            return "Yoshikawa Eiji";
            break;
        case "山本有三":
        case 42:
            return "Yamamoto Yuuzou";
            break;
        case "久米正雄":
        case 43:
            return "Kume Masao";
            break;
        case "徳永直":
        case 44:
            return "Tokunaga Sunao";
            break;
        case "中野重治":
        case 45:
            return "Nakano Shigeharu";
            break;
        case "岩野泡鳴":
        case 46:
            return "Iwano Houmei";
            break;
        case "正宗白鳥":
        case 47:
            return "Masamune Hakuchou";
            break;
        case "徳富蘆花": /** Spelling used in-game #1 */
        case "徳冨蘆花": /** Spelling used in-game #2 */
        case 48:
            return "Tokutomi Roka";
            break;
        case "直木三十五":
        case 49:
            return "Naoki Sanjuugo";
            break;
        case "夢野久作":
        case 50:
            return "Yumeno Kyuusaku";
            break;
        case "中里介山":
        case 51:
            return "Nakazato Kaizan";
            break;
        case "菊池寛":
        case 52:
            return "Kikuchi Kan";
            break;
        case "伊藤左千夫":
        case 53:
            return "Itou Sachio";
            break;
        case "三木露風":
        case 54:
            return "Miki Rofuu";
            break;
        case "三好達治":
        case 55:
            return "Miyoshi Tatsuji";
            break;
        case "新美南吉":
        case 56:
            return "Niimi Nankichi";
            break;
        case "小川未明":
        case 57:
            return "Ogawa Bimei";
            break;
        case "吉井勇":
        case 58:
            return "Yoshii Isamu";
            break;
        case "山田美妙":
        case 61:
            return "Yamada Bimyou";
            break;
        case "斎藤茂吉":
        case 65:
            return "Saitou Mokichi";
            break;    
        case "草野心平":
        case 66:
            return "Kusano Shinpei";
            break;
        case "里見弴":
        case 68:
            return "Satomi Ton";
            break;
        case "高浜虚子":
        case 74:
            return "Takahama Kyoshi";
            break;
        case "河東碧梧桐":
        case 75:
            return "Kawahigashi Hekigotou";
            break;
        case "徳田秋声":
        case 78:
            return "Tokuda Shuusei";
            break;
        case "エドガー・アラン・ポー":
        case "ポー":
        case 87:
            return "Edgar Allan Poe";
            break;
        case "H・P・ラヴクラフト":
        case "ラヴクラフト":
        case "ハワード":
        case 88:
            return "H. P. Lovecraft";
            break;
        case "コナン・ドイル":
        case "ドイル":
        case 89:
            return "Conan Doyle";
            break;
        case "ルイス・キャロル":
        case 90:
            return "Lewis Carroll";
            break;

        /* Devs when */
        case "有島生馬":
            return "Arishima Ikuma";
            break;
        case "三島由紀夫":
            return "Mishima Yukio";
            break;
        case "徳富蘇峰":
            return "Tokutomi Sohou";
            break;
        case "与謝野鉄幹":
        case "與謝野鐵幹":
            return "Yosano Tekkan";
            break;

        /* Collab characters */
        case "エド":
        case "エドワード・エルリック":
            return "Edward Elric";
            break;
        case "アル":
        case "アルフォンス・エルリック":
            return "Alphone Elric";
            break;
        case 3002:
        case "伊達政宗":
            return "Date Masamune";
            break;
        case 3003:
        case "真田幸村":
            return "Sanada Yukimura";
            break;

        /* Library personnels */
        case "館長":
            return "Chief Librarian";
            break;
        case "ネコ":
            return "Cat";
            break;
        case "アオ":
            return "Ao";
            break;
        case "アカ":
            return "Aka";
            break;

        /* Stroll locations */
        case "中庭":
            return "Courtyard";
            break;
        case "エントランス":
            return "Entrance";
            break;
        case "談話室":
            return "Lounge";
            break;
        case "バー":
            return "Bar";
            break;
        default:
            return name;
    }
}

/** This function converts the name & ID of a writer's VC into English.
  * + Check for known voice clips' names and IDs and translate accordingly
  * + Otherwise, return the VC as "No label"
  * @version 1.2.1
  * @since March 8, 2020
  * @param {string} name A Japanese name or ID
  * @return {string} The parameter's English translation (if available), otherwise marked as "No label"
  */
function convertVoiceNum(voice_id) {
    switch (voice_id) {
        case 4:
        case "有魂書三":
            return "ensouled_complete";
            break;
        case 5:
        case "図書館一":
            return "library_1";
            break;
        case 6:
        case "図書館二":
            return "library_2";
            break;
        case 7:
            return "library_unlock";
            break;
        case 8:
            return "library_spring";
            break;
        case 9:
            return "library_summer";
            break;
        case 10:
            return "library_autumn";
            break;
        case 11:
            return "library_winter";
            break;
        case 12:
            return "library_newyear";
            break;
        case 13:
        case "図書館三":
            return "library_idle";
            break;
        case 14:
        case "図書館四":
            return "library_return";
            break;
        case 15:
        case "結成一":
            return "formation";
            break;
        case 16:
        case "研究一":
            return "research";
            break;
        case 18:
        case "購買一":
            return "shop";
            break;
        case 19:
        case "食堂一":
            return "dininghall";
            break;
        case 20:
        case "司書室一":
            return "office_1";
            break;
        case 21:
        case "司書室二":
            return "office_2";
            break;
        case 24:
        case "司書室三":
            return "office_assistant";
            break;
        case 25:
        case "司書室四":
            return "office_change";
            break;
        case 26:
        case "有碍書一":
            return "tainted_entrance";
            break;
        case 27:
        case "有魂書四":
            return "ensouled_start";
            break;
        case 28:
        case "補修一":
            return "repairs";
            break;
        case 29:
        case "開花一":
            return "blossoming";
            break;
        case 30:
        case "開花二":
            return "blossoming_unlock";
        case 31:
        case "有碍書二":
            return "tainted_item";
            break;
        case 32:
        case "有碍書三":
            return "tainted_final";
            break;
        case 33:
        case "有碍書四":
            return "tainted_battlestart";
            break;
        case 34:
            return "tainted_attack1";
            break;
        case 35:
            return "tainted_attack2";
            break;
        case 36:
        case "有碍書五":
            return "tainted_critical";
            break;
        case 37:
            return "tainted_damaged1";
            break;
        case 38:
            return "tainted_damaged2";
            break;
        case 39:
        case "有碍書六":
            return "tainted_weakened";
            break;
        case 40:
        case "有碍書七":
            return "tainted_breakdown";
            break;
        case 41:
        case "有碍書八":
            return "tainted_battlewin";
            break;
        case 42:
        case "有碍書九":
            return "tainted_mvp";
            break;
        case 43:
        case "有碍書十":
            return "tainted_dual";
            break;
        case 48:
            return "library_weakened1";
            break;
        case 49:
            return "library_weakened2";
            break;
        case 50:
            return "office_weakened1";
            break;
        case 51:
            return "office_weakened2";
            break;
        case 52:
            return "repairs_breakdown";
            break;
        case DELVE_HIDDEN_VC_ID_1:  /* 53 */
        case DELVE_HIDDEN_VC_ID_2:  /* 54 */
            return "N/A";
            break;
        case 55:
            return "tainted_damagedweakened";
            break;
        case 56:
            return "tainted_desperation";
            break;
        case 57:
            return "tainted_attackweakened";
            break;
        case 58:
            return "tainted_dualweakened";
            break;
        case 60:
            return "weakened_1";
            break;
        case 61:
            return "weakened_2";
            break;
        case "有魂書一":
            return "transmigration_1";
            break;
        case "有魂書二":
            return "transmigration_2";
            break;
        case "一周年":
            return "1st_anniversary_login";
            break;
        case "二周年":
            return "2nd_anniversary_login";
            break;
        case "三周年":
            return "3rd_anniversary_login";
            break;

        /* Note: attack_ring voice clip does not have a consistent ID. */
        default:
            return "No label";
    }
}

/** This function converts the name of a Taint into English.
  * + Check if the Taint is a "failed" counterpart and parse accordingly
  * + Check if the Taint is a boss and return the parsed name immediately if so
  * + At this point, the Taint is a common enemy. Parse their name and type.
  * @version 1.4.1
  * @since January 22, 2020 (C-series taints)
  * @param {string} jpName The Taint's Japanese name
  * @returns {string} The Taint's translated name (if found) or unchanged name in JP
  */
function taintTranslate(jpName) {
    /* A placeholder for the Taint's translated name */
    var name = "";

    /* A placeholder for Failed Taints' name correction */
    isFailed = false;

    /* Check if the Taint is a Failed counterpart */
    if (jpName.substr(0, 3) == "缺いた") {
        name += "Failed ";
        isFailed = true;

        /* Cut the first 3 letters in the Taint's name standing for "Failed" */
        jpName = jpName.substr(3);
    }

    /* Check if the Taint is a boss */
    boss = isBoss(jpName);
    if (boss != "") {
        /* Concatenate the boss' name if the Taint is a Failed counterpart */
        if (name != "")
            return name + " " + ((boss.includes("The ")) ? boss.substr(4, boss.length - 4) : boss);

        return boss;
    }

    /* At this point, the Taint is a common enemy */
    onlyName = jpName.substr(0, jpName.length - 3);
    switch (onlyName) {
        case "不調の獣":
            name += "Writer's Block";
            break;
        case "伝わらぬ洋墨":
            name += "Ineffective Ink";
            break;
        case "炎上する嫉妬心":
            name += "Burning Jealousy";
            break;
        case "排除する嫉妬心":
            name += "Isolating Jealousy";
            break;
        case "纏まらぬ洋墨":
            name += "Compromised Ink";
            break;
        case "尊敬のかげ":
            name += "Shadow of Reverence";
            break;
        case "嗜癖の刃":
            name += "Blade of Addiction";
            break;
        case "歩まされぬ獣使い":
            name += "Crippling Beast Master";
            break;

        /* Collab & Foreign events */
        case "隠匿の守護者":
            name += "Concealed Guardian";
            break;

        default:
            name += onlyName;
            break;
    }

    return (name == onlyName)? (jpName) : (name + taintType(jpName));
}

/** This function converts the name of a boss Taint into English.
  * + Translate the Taint's name into English if it is one of the boss listed in the function.
  * @version 1.2
  * @since October 31, 2019
  * @param {string} jpName The Taint's Japanese name
  * @returns {string} The Taint's translated name if it is a boss, or an empty string (implying "false"). 
  */
function isBoss(jpName) {
    switch (jpName) {
        /* RO-4 boss */
        case "模倣の者":
            return "The Plagiarist";
            break;

        /* HA-4 boss */
        case "自責の刃":
            return "Blade of Guilt";
            break;

        /* NI-4 boss */
        case "絶不調の獣使い":
            return "Herder of Writer's Block (Omega)";
            break;

        /* HO-4 boss */
        case "聡慧の刃":
            return "Blade of Wisdom";
            break;

        /* HE-4 boss */
        case "渾淆装の少年":
            return "Boy of Chaotic Attire";
            break;

        /* TO-4 boss */
        case "渾淆装の少年　無窮":
            return "Boy of Chaotic Attire - Immortal";
            break;

        /* SPECIAL-4 boss */
        case "死の渇望":
            return "Longing for Death";
            break;
 
        /* "Alice's Adventures in Wonderland" bosses */
        case "封印の護":
            return "Protector of the Seal";
            break;

        case "ミメシス=アリス":
            return "Mimesis Alice";
            break;

        case "ミメシス=ホームズ":
            return "Mimesis Holmes";
            break;

        /* "The Final Problem" bosses */
        case "ミメシス=ドイル":
            return "Mimesis Doyle";
            break;

        /* "Coup de Main" events' special bosses */
        case "苦悶の虎":
            return "Tiger of Anguish";
            break;

        /* FMA collab boss */
        case "彷徨いし者":
            return "Wandering One";
            break;

        /* Sengoku Basara collab boss */
        case "狂乱ノ将":
            return "General of Madness";
            break;

        /* Anime event bosses */
        case "邪智暴虐ノ王":
            return "King of Cunning Tyranny";
            break;

        case "花片ノ魑魅":
            return "Mountain Demon of Flower Petals";
            break;

        default:
            return "";
    }
}

/** This function converts the number/color of a Taint into English.
  * + Extract the letter denoting the Taint's type
  * + Translate the letter into English if it is a valid type (number/color)
  * @version 1.1.2
  * @since August 19, 2019
  * @param {string} jpName The Taint's Japanese name
  * @returns {string} The Taint's translated number/color (if found), or its extracted type in JP.
  */
function taintType(jpName) {
    /** A placeholder for the letter denoting the Taint's number/color */
    var onlyNo = jpName.substr(jpName.length - 2, 1);

    switch (onlyNo) {
        /* Numbering */
        case "零":
            return " No. 0";
            break;
        case "壹":
        case "壱":
            return " No. 1";
            break;
        case "貳":
        case "弐":
            return " No. 2";
            break;
        case "參":
        case "参":
            return " No. 3";
            break;
        case "肆":
        case "四":
            return " No. 4";
            break;
        case "伍":
        case "五":
            return " No. 5";
            break;

        /* Colors */
        case "紅":
            return " (Red)";
            break;
        case "蒼":
            return " (Blue)";
            break;
        case "黄":
            return " (Yellow)";
            break;
        default:
            return onlyNo;
    }
}

/** This function converts a non-numbered Taint into English.
 * + Translate the Taint's name into English if it is a non-numbered type.
 * + Add Taint's numbering according to its ID
 * @version 1.0
 * @since January 23, 2020
 * @param {any} taint The checked Taint
 * @return {string} The Taint's translated name with proper numbering, or an empty string if not a non-numbered Taint.
 */
function nonNumberTaint(taint) {
    var name = "";

    switch (taint.name) {
        case "侵蝕サレタ足軽":
            name += "Foot Soldier";

//          I forgot to keep track of SenBasa so IDs were not documented pls forgive me
//
//          switch (taint.id) {
//              case 97:
//                  name += " No. 0";
//                  break;
//
//              case 109:
//                  name += " No. 1";
//                  break;
//
//              case 110:
//                  name += " No. 2";
//                  break;
//
//              case 112:
//                  name += " No. 3";
//                  break;
//          }

            break;

        case "忍び寄るモノ":
            name += "Sneaking Being";

            switch (taint.id) {
                case 119:
                    name += " No. 0";
                    break;

                case 120:
                    name += " No. 1";
                    break;

                case 121:
                    name += " No. 2";
                    break;

                case 122:
                    name += " No. 3";
                    break;
            }

            break;

        case "繰り返すモノ":
            name += "Reiterating Being";

            switch (taint.id) {
                case 123:
                    name += " No. 0";
                    break;

                case 124:
                    name += " No. 1";
                    break;

                case 125:
                    name += " No. 2";
                    break;

                case 126:
                    name += " No. 3";
                    break;
            }

            break;

        case "蘇るモノ":
            name += "Resurrected Being";

            switch (taint.id) {
                case 127:
                    name += " No. 0";
                    break;

                case 128:
                    name += " No. 1";
                    break;

                case 129:
                    name += " No. 2";
                    break;

                case 130:
                    name += " No. 3";
                    break;
            }

            break;
    }

    return name;
}

/** This function converts the name of a drop item into English.
  * + Check if the item is a normal gear (dropped at HA-4 and TO-4), return immediately
  * if so
  * + Check if the item's first letter are soul-typed, parse their color, type and
  * size if so
  * + Otherwise (default case), check if they are ring materials and parse accordingly
  * if so
  * + Return the translated item name if it is parsed, otherwise return the original
  * parameter
  * @version 1.0
  * @since June 17, 2019
  * @param {string} jpName The item's Japanese name
  * @returns {string} The item's translated name (if found), or its Japanese name unchanged. 
  */
function dropItemTranslate(jpName) {
    /* A placeholder for the item's translated name */
    var item_name = "";

    /* Check, parse and return the item's name if it is a gear-typed one. */
    item_name = isGear(jpName); 
    if (item_name != "") {
        return item_name;
    }

    /* A placeholder that denotes possible type/size/color of the item */
    var item_type = jpName.substr(0, 1);

    /* Check if the item is a soul-typed one and parse their color if so. */
    switch(item_type) {
        case "文":
            item_name += "Literature ";
            break;
        case "語":
            item_name += "Words ";
            break;
        case "想":
            item_name += "Thoughts ";
            break;
    }

    /* If a color was parsed into the item's name, it's soul-typed. */
    if (item_name != "") {
        /* Parse the item type (soul or splendor) */ 
        item_type = jpName.substr(1, 2);
        switch (item_type) {
            case "魂(":
                item_name += "Soul ";
                
                /* Parse the item size if it's a soul */ 
                item_type = jpName.substr(3, 1);
                switch (item_type) {
                    case "小":
                        item_name += "(Small)";
                        break;
                    case "中":
                        item_name += "(Medium)";
                        break;
                    case "大":
                        item_name += "(Large)";
                        break;
                    default:
                        item_name += "(" + item_type + ")";
                }

                break;

            case "ノ華":
                item_name += "Splendor";
                break;
            default:
                item_name += item_type;
                break;
        }
    }
    /* At this point, the item is a ring material */
    else {
        item_name += "Unusual ";

        /* Check and parse which type of material it is */
        item_type = jpName.substr(3, 2);

        /* Return immediately if it's Crystal (it's not gonna happen easily, but just in case) */
        if (item_type == "結晶") {
            item_name += "Crystal";
            return item_name;
        }

        /* Check and parse the item's medicine types */
        switch (item_type) {
            case "薬液":
                item_name += "Medicine ";
                break;
            case "秘薬":
                item_name += "Secret Medicine ";
                break;
            default:
                item_name += item_type + " ";
        }

        /* Check and parse the item's targeted weapon type */
        item_type = jpName.substr(6, 1);
        item_name += "(" + weaponTranslate(item_type) + ")";
    }

    return (item_name == "")? jpName : item_name;
 }

/** This function converts the name of a gear-typed item into English.
  * + Translate the item's name into English if it is a gear listed in the function.
  * @version 1.1
  * @since June 17, 2019
  * @param {string} jpName The item's Japanese name
  * @returns {string} The gear's translated name (if it's a gear), or an empty string (implying "false")
  */
function isGear(jpName) {
    switch (jpName) {
        case "魂ノ歯車":
            return "Soul Gear";
            break;
        case "記憶ノ歯車":
            return "Memory Gear";
            break;            
    }

    /* At this point, the item is not recognized as a gear.
     * Hence, return an empty string denoting "false".
     */
    return "";
}

/** This function converts the weapon's name/category into English.
  * + Note: I really hope devs won't do ":3c" at the writers' weapon category, since the rings'
  * weapon category is a big "???????" to me at the moment.
  * @version 1.1
  * @since June 18, 2019
  * @param {string} jpName The weapon's Japanese name or category number
  * @returns {string} The weapon's translated name (if found), or its JP name/number unchanged
  */
function weaponTranslate(jpName) {
    switch (jpName) {
        case "刃":
        case 1:
            return "Blade";
            break;
        case "弓":
        case 2:
            return "Bow";
            break;
        case "銃":
        case 3:
            return "Gun";
            break;
        case "鞭":
        case 4:
            return "Whip";
            break;
    }

    /* At this point, the item's name was not recognized.
     * Hence, return the original JP name.
     */
    return jpName;
}

/** This function converts the name of an event item point into English.
  * + Translate the item's name into English if it is one of the event points listed
  * in the function.
  * @version 1.1.4
  * @since January 22, 2020 (100 People rerun)
  * @param {string} jpName The item's Japanese name
  * @returns {string} The item's translated name (if found), or its Japanese name unchanged
  * @todo Compile a list of all event points
  */
function eventItemTranslate(jpName) {
    switch (jpName) {
        /* Aka and Ao series */
        case "フラスコ":
            return "Flasks";
            break;

        /* Cafe series */
        case "コーヒー":
            return "Coffee";
            break;

        /* Co-Research series */
        case "金貨":
            return "Coins";
            break;

        /* Collab - Sengoku Basara */
        case "兵力":
            return "Military Force";
            break;

        /* Coup de Main events */
        case "歪な歯車":
            return "Distorted Gears";
            break;

        /* Coup de Main events - Foreign books */
        case "封じの歯車":
            return "Sealed Gears";
            break;

        /* "Chronicles of Galactic Railroad" series */
        case "切符":
            return "Tickets";
            break;

        /* Mad Banquet series */
        case "アミュレット":
            return "Amulets";
            break;

        /* One Hundred People, One Poem Each */
        case "歌のかけら":
            return "Poem Fragments";
            break;

        /* Repair the Grimoire of Fate */
        case "術書のかけら":
            return "Grimoire Tatters";
            break;

        /* Subjugation events */
        case "言の葉":
            return "Words";
            break;

        /* Summer Daydream */
        case "貝殻":
            return "Shells";
            break;
    }

    /* At this point, the item's name was not recognized.
     * Hence, return the original JP name.
     */
    return jpName;
 }

/** This function converts the name of a book into English.
  * + Translate the item's name into English if it is one of the books listed
  * in the function.
  * @version 1.0.2
  * @since January 22, 2020
  * @param {string} jpName The item's Japanese name
  * @returns {string} The item's translated name (if found), or its Japanese name unchanged
  * @todo Figure out how to translate books from Sealed Library and get to display it
  */
function bookTranslate(jpName) {
    switch (jpName) {
        /* SPECIAL-series (Thoughts) */
        case "墨汁一滴":
            return "SPECIAL-1 (Thoughts) - A Drop of Ink";
            break;
        case "抒情小曲集":
            return "SPECIAL-2 (Thoughts) - Lyric Pieces";
            break;
        case "月に吠える":
            return "SPECIAL-3 (Thoughts) - Howling at the Moon";
            break;
        case "ほととぎす":
            return "SPECIAL-4 (Thoughts) - Cuckoo";
            break;

        /* SPECIAL-series (Literature) */
        case "別離":
            return "SPECIAL-1 (Literature) - Parting";
            break;
        case "一握の砂":
            return "SPECIAL-2 (Literature) - A Handful of Sand";
            break;
        case "桐の花":
            return "SPECIAL-3 (Literature) - Paulownia Flower";
            break;
        case "明星":
            return "SPECIAL-4 (Literature) - Morning Star";
            break;

        /* SPECIAL-series (Words) */
        case "測量船":
            return "SPECIAL-1 (Words) - The Surveying Ship";
            break;
        case "智恵子抄":
            return "SPECIAL-2 (Words) - Chieko's Sky";
            break;
        case "山羊の歌":
            return "SPECIAL-3 (Words) - Poems of the Goat";
            break;
        case "四季":
            return "SPECIAL-4 (Words) - Seasons"; /* by Antonio Vivaldi */
            break;

        /* SPECIAL-series (EXP) */
        case "三國志":
            return "SPECIAL-1 (EXP) - Romance of the Three Kingdoms";
            break;
        case "蟹工船":
            return "SPECIAL-2 (EXP) - The Factory Ship";
            break;
        case "運命":
            return "SPECIAL-3 (EXP) - Fate";
            break;
        case "桜の森の満開の下":
            return "SPECIAL-4 (EXP) - Under the Blossoming Cherry Trees";
            break;

        /* I-series */
        case "歌のわかれ":
            return "I-1 - Farewell to Poetry";
            break;
        case "夫婦善哉":
            return "I-2 - Hurray for Marriage";
            break;
        case "田園の憂鬱":
            return "I-3 Melancholy in the Country";
            break;
        case "聖家族":
            return "I-4 - The Holy Family";
            break;

        /* RO-series */
        case "恩讐の彼方に":
            return "RO-1 - Beyond Love and Hate";
            break;
        case "手袋を買いに":
            return "RO-2 - Buying Mittens";
            break;
        case "蝿":
            return "RO-3 - A Fly";
            break;
        case "金色夜叉":
            return "RO-4 - Golden Demon";
            break;

        /* HA-series */
        case "武蔵野":
            return "HA-1 - The Musashi Plains";
            break;
        case "お目出たき人":
            return "HA-2 - Good-Natured Person";
            break;
        case "山月記":
            return "HA-3 - The Moon Over the Mountain";
            break;
        case "あらくれ":
            return "HA-4 - Rough Living";
            break;

        /* NI-series */
        case "蒲団":
            return "NI-1 - The Quilt";
            break;
        case "濹東綺譚":
            return "NI-2 - Something Strange Across the River";
            break;
        case "舞姫":
            return "NI-3 - Dancing Girl";
            break;
        case "破戒":
            return "NI-4 - The Broken Commandment";
            break;

        /* HO-series */
        case "暗夜行路":
            return "HO-1 - Dark Night's Passing";
            break;
        case "痴人の愛":
            return "HO-2 - Naomi";
            break;
        case "D坂の殺人事件":
            return "HO-3 - The Case of Murder on D Hill";
            break;
        case "坊っちゃん":
            return "HO-4 - Botchan";
            break;

        /* HE-series */
        case "注文の多い料理店":
            return "HE-1 - The Restaurant of Many Orders";
            break;
        case "走れメロス":
            return "HE-2 - Run, Melos!"
            break;
        case "高野聖":
            return "HE-3 - The Holy Man of Mount Kouya"
            break;
        case "歯車":
            return "HE-4 - Cogwheels";
            break;

        /* TO-series */
        case "怪談":
            return "TO-1 - Kwaidan: Stories and Studies of Strange Things";
            break;
        case "或る女":
            return "TO-2 - A Certain Woman"
            break;
        case "山椒魚":
            return "TO-3 - The Salamander"
            break;
        case "伊豆の踊子":
            return "TO-4 - The Dancing Girl of Izu"
            break;

        /* CHI-series */
        case "ドグラ・マグラ":
            return "CHI-1 - Dogra Magra";
            break;
        case "檸檬":
            return "CHI-2 - Lemon";
            break;
        case "浮雲":
            return "CHI-3 - The Drifting Cloud";
            break;

        /* Sealed Library */
        case "不思議の国のアリス":
            return "A-series - Alice's Adventures in Wonderland";
            break;
        case "ホームズ最後の事件":
            return "B-series - Holmes' Final Problem";
            break;
        case "アッシャー家の崩壊":
            return "C-series - The Fall of the House of Usher";
            break;
    }

    /* At this point, the book's name was not recognized.
     * Hence, return the original JP name.
     */
    return jpName;
}

/** This function converts the name of a meal into English.
  * + Translate the item's name into English if it is one of the meals listed
  * in the function.
  * @version 1.0
  * @since July 22, 2019
  * @param {string} jpName The meal's Japanese name
  * @returns {string} The item's translated name (if found), or its Japanese name unchanged
  */
function mealTranslate(jpName) { 
    switch (jpName) {
        /*---------- REGULAR ----------*/

        /* Monday */
        case "オムレツ":
            return "Omelette";
            break;
        case "ビフテキ":
            return "Beef Steak";
            break;
        case "汁粉":
            return "Red Bean Soup";
            break;

        /* Tuesday */
        case "天ぷらそば":
            return "Tempura Soba";
            break;
        case "若鶏の唐揚げ":
            return "Chicken Karaage";
            break;
        case "牛タンの塩ゆで":
            return "Boiled Beef Tongue";
            break;

        /* Wednesday */
        case "牛めし":
            return "Beef Bowl";
            break;
        case "カレイの煮付け":
            return "Stewed Flounder";
            break;
        case "饅頭":
            return "Manjuu";
            break;

        /* Thursday */
        case "カツ丼":
            return "Cutlet Bowl";
            break;
        case "ライスカレー":
            return "Curry Rice";
            break;
        case "カニのコロッケ":
            return "Crab Croquette";
            break;

        /* Friday */
        case "きつねうどん":
            return "Kitsune Udon";
            break;
        case "鯖の照焼":
            return "Mackerel Teriyaki";
            break;
        case "あんぱん":
            return "Anpan";
            break;

        /* Saturday */
        case "焼き鮭定食":
            return "Grilled Salmon Meal";
            break;
        case "うな重":
            return "Broiled Eel Box";
            break;
        case "カツサンド":
            return "Cutlet Sandwich";
            break;

        /* Sunday */
        case "ハムサラダ":
            return "Ham Salad";
            break;
        case "牛鍋":
            return "Beef Hotpot";
            break;
        case "あんこう鍋":
            return "Monkfish Hotpot";
            break;

        /*---------- SUMMER ----------*/

        /* Tuesday special */
        case "かき氷":
            return "Shaved Ice";
            break;

        /* Wednesday special */
        case "カステラ":
            return "Castella";
            break;

        /* Friday dinner */
        case "鰤の照焼":
            return "Amberjack Teriyaki";
            break;

        /* Saturday special */
        case "アイスクリーム ":
            return "Ice Cream";
            break;

        /* Sunday dinner */
        case "檸檬ゼリー":
            return "Lemon Jelly";
            break;

        /* Sunday special */
        case "水羊羹":
            return "Red Bean Jelly";
            break;

        default:
            return jpName;
    }
}