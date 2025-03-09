<script lang="ts">
    import Quote from "./Quote.svelte";

    const NEAL_STEPHENSON = "Neal Stephenson";
    const BECKY_CHAMBERS = "Becky Chambers";
    const ADRIAN_TCHAIKOVSKY = "Adrian Tchaikovsky";
    const CIXIN_LIU = "Cixin Liu";
    const GENE_KIM = "Gene Kim";
    const WILLIAM_GIBSON = "William Gibson";
    const MICHAIAH_JOHNSON = "Micaiah Johnson";
    const ROBERT_O_BRIEN = "Robert C. O'Brien";
    const FRANCOIS_MAURIAC = "Francois Mauriac";
    const DAN_SIMMONS = "Dan Simmons";
    const ANN_LECKIE = "Ann Leckie";
    const EMILY_TESH = "Emily Tesh";
    const JOHN_SCALZI = "John Scalzi";
    const SUSANNA_CLARKE = "Susanna Clarke";
    const ROBERT_JACKSON_BENNETT = "Robert Jackson Bennett";
    const N_K_JEMISIN = "N.K. Jemisin";

    interface IQuote {
        quote: string;
        citation: string;
    }

    function quote(quote: string, citation: string): IQuote {
        return {quote, citation};
    }

    const quotes: IQuote[] = [
        quote("If I have seen further, it is by standing on the shoulders of giants.", "Sir Isaac Newton"),
        quote("If John Carmack can't perfectly track alloc and free, what hope do you have?",
                "u/Carone in regards to the benefits of a memory safe language"), 
        quote("The best way to predict the future is to invent it.", "Alan Kay"),
        quote("The only way to learn a new programming language is by writing programs in it.", "Dennis Ritchie"),
        quote("Sometimes, a person reaches a point in their life when it becomes absolutely essential to get the fuck out of the city.", BECKY_CHAMBERS),
        quote("Dex realized with a stomach-souring thud that they were standing on the wrong side of the vast gulf between having read about doing a thing and doing the thing.", BECKY_CHAMBERS),
        quote("So, the paradox is that the ecosystem as a whole needs its participants to act with restraint in order to avoid collapse" + 
            "but the participants themselves have no inbuilt mechanism to encourage such behavior.", BECKY_CHAMBERS),
        quote("Without money, the secrets of the universe are worth shit.", CIXIN_LIU),
        quote("By the time you’re my age, you’ll realize that everything you once thought mattered so much turns out to mean very little.", CIXIN_LIU),
        quote("These are the rules of the game of civilization: The first priority is to guarantee the existence of the human race and their comfortable life. Everything else is secondary.",
            CIXIN_LIU),
        quote("In the universe, an important mark of a civilization’s technological advancement is its ability to control and make use of micro dimensions.", CIXIN_LIU),
        quote("On the shoulders of others, she had said, but she had not stopped to think about those beneath her in that pyramid of achievement." + 
            " Even the lowliest of them had to agree to bear her weight, or all of it would come falling down.", ADRIAN_TCHAIKOVSKY),
        quote("She was a working woman in the last days of her strength, staring down time’s inevitable slope which would rob her of her abilities piecemeal with every step.", ADRIAN_TCHAIKOVSKY),
        quote("Everything is only information, if you have sufficient capacity to encompass it.", ADRIAN_TCHAIKOVSKY),
        quote("He looked towards the orange sun as it sank towards the mountains in what had just been another direction once but, now humans were here, would forever be west.", ADRIAN_TCHAIKOVSKY),
        quote("Always better to be the explorer than the explored.", ADRIAN_TCHAIKOVSKY),
        quote("The high-water mark of their scientific development has crept up over the generations, but the tide goes out as well as in.", ADRIAN_TCHAIKOVSKY),
        quote("Some problems are resistant to even incremental solutions, and that leads to a kind of feedback, a kind of madness.", ADRIAN_TCHAIKOVSKY),
        quote("This is America. People do whatever the fuck they feel like doing, you got a problem with that? Because they have a right to."+ 
            " And because they have guns and no one can fucking stop them.", NEAL_STEPHENSON),
        quote("There’s only four things we do better than anyone else music movies microcode (software) high-speed pizza delivery", NEAL_STEPHENSON),
        quote("When you are wrestling for possession of a sword, the man with the handle always wins.", NEAL_STEPHENSON),
        quote("That’s why Hiro has a nice big house in the Metaverse but has to share a 20-by-30 in Reality. Real estate acumen does not always extend across universes.", NEAL_STEPHENSON),
        quote("Software development, like professional sports, has a way of making thirty-year-old men feel decrepit.", NEAL_STEPHENSON),
        quote("To condense fact from the vapor of nuance.", NEAL_STEPHENSON),
        quote("Well, all information looks like noise until you break the code.", NEAL_STEPHENSON),
        quote("Besides, interesting things happen along borders—transitions — not in the middle where everything is the same.", NEAL_STEPHENSON),
        quote("All philosophies are either monist or dualist. Monists believe that the material world is the only world—hence, materialists." +
            " Dualists believe in a binary universe, that there is a spiritual world in addition to the material world.”", NEAL_STEPHENSON),
        quote("We have a huge workforce that is illiterate or alliterate and relies on TV—which is sort of an oral tradition. And we have a small, extremely literate power elite—the people" + 
            " who go into the Metaverse, basically—who understand that information is power, and who control society because they have this semimystical ability to speak magic computer languages.", GENE_KIM),
        quote("We need to establish an accurate timeline of relevant events. And so far, we’re basing everything on hearsay." + 
            " That doesn’t work for solving crimes, and it definitely doesn’t work for solving outages.", GENE_KIM),
        quote("Unplanned work kills your ability to do planned work, so you must always do whatever it takes to eradicate it.", GENE_KIM),
        quote("A great team doesn’t mean that they had the smartest people. What made those teams great is that everyone trusted one another. It can be a powerful thing when that magic dynamic exists.", GENE_KIM),
        quote("Improving daily work is even more important than doing daily work.", GENE_KIM),
        quote("People think that just because it doesn’t use motor oil and carry physical packages that it doesn’t need preventive maintenance", GENE_KIM),
        quote("And, for an instant, she stared directly into those soft blue eyes and knew, with an instinctive mammalian certainty, that the exceedingly rich were no longer even remotely human.", WILLIAM_GIBSON),
        quote("Silicon doesn’t wear out; microchips were effectively immortal. The Wig took notice of the fact. Like every other child of his age, however, he knew that silicon became obsolete," + 
            " which was worse than wearing out; this fact was a grim and accepted constant for the Wig, like death or taxes", WILLIAM_GIBSON),
        quote("He grinned, exposing sculpted teeth, streamlined teeth, an avant-garde dentist’s fantasy of what teeth might be like in a faster, more elegant species.", WILLIAM_GIBSON),
        quote("In the hard wind of images, Angie watches the evolution of machine intelligence: stone circles, clocks, steam-driven looms, a clicking brass forest of pawls and escapements," +
            " vacuum caught in blown glass, electronic hearthglow through hairfine filaments, vast arrays of tubes and switches, decoding messages encrypted by other machines.… The fragile," + 
            " short-lived tubes compact themselves, become transistors; circuits integrate, compact themselves into silicon.… Silicon approaches certain functional limits", WILLIAM_GIBSON),
        quote("Even worthless things can become valuable once they become rare. This is the grand lesson of my life.", MICHAIAH_JOHNSON),
        quote("It’s one of those truths too true to ever be said out loud.", MICHAIAH_JOHNSON),
        quote("The size of the brain is no measure of its capacity.", ROBERT_O_BRIEN),
        quote("All doors are hard to unlock until you have the key.", ROBERT_O_BRIEN),
        quote("It was as simple as that—when you could read.", ROBERT_O_BRIEN),
        quote("We did not have enough work to do because a thief’s life is always based on somebody else’s work.", ROBERT_O_BRIEN),
        quote("When you’ve lived in a cage, you can’t bear not to run, even if what you’re running toward is an illusion.", ROBERT_O_BRIEN),
        quote("Envy of those whom one despises is a degrading passion and may well poison a whole life.", FRANCOIS_MAURIAC),
        quote("Besides, you had that particular arrogance that takes the form of never looking at other people and is tantamount to denying their existence.", FRANCOIS_MAURIAC),
        quote("After all, there is no shadow without a reality that projects it.", FRANCOIS_MAURIAC),
        quote("I received the gift of it merely because I happened to be there.", FRANCOIS_MAURIAC),
        quote("But the horror of growing old consists in this, that one’s age is the sum total of one’s life, and not one figure of it can we change.", FRANCOIS_MAURIAC),
        quote("Besides, history viewed from the inside is always a dark, digestive mess, far different from the easily recognizable cow viewed from afar by historians.", DAN_SIMMONS),
        quote("The difference between the right word and the almost right word is the difference between lightning and the lightning bug.", "Mark Twain"),
        quote("There is something about raising a child that helps to sharpen one’s sense of what is real.", DAN_SIMMONS),
        quote("And you don’t like my saying that, but here’s the truth: luxury always comes at someone else’s expense. One of the many advantages" + 
            " of civilization is that one doesn’t generally have to see that, if one doesn’t wish.", ANN_LECKIE),    
        quote("Information is power. Information is security. Plans made with imperfect information are fatally flawed, will fail or succeed on the toss of a coin.", ANN_LECKIE),
        quote("Unity, I thought, implies the possibility of disunity. Beginnings imply and require endings.", ANN_LECKIE),
        quote("Power requires neither permission nor forgiveness.", ANN_LECKIE),
        quote("A peace brought about with the threat of violence is only a war in waiting.", EMILY_TESH),
        quote("You don’t win by getting through all your life not having done anything.", JOHN_SCALZI),
        quote("It was easy to appear optimistic when the path was always smooth.", "Jen Williams"),
        quote("The Waters covered me and for a moment I was surrounded by the strange silence that comes when the Sea sweeps over you and drowns its own sounds.", SUSANNA_CLARKE),
        quote("For a memory is just a sketch a mind makes of one’s experiences, imperfect and interpretive.", ROBERT_JACKSON_BENNETT),
        quote("What a tool cynicism is to the corrupt, claiming the whole of the creation is broken and fraudulent, and thus we are all excused" + 
            " to indulge in whatever sins we wish—for what’s a little more unfairness, in this unfair world?", ROBERT_JACKSON_BENNETT),
        quote("The whole is greater than the sum of its parts", "Aristotle"),
        quote("It’s easy to give up authority in crisis. Easy to do what you’re told. Easy to follow orders and let somebody else take responsibility." + 
            " Easy to pretend you didn’t know what was going on.", "Metatropolis"),
        quote("“Who lives anywhere, anymore? We’re digital nomads.” When he patted the omni on his belt, his tags jingled." + 
            " “Where my data is, that’s my home. Stuff is just stuff. Almost anything can be replaced, or rented.”", "Metatropolis"),
        quote("It sounded ridiculous, but sometimes it took losing something important to you for you to shake yourself" + 
            " out of your old habits and seek out something new. Something different. Sometimes, something better.", "Metatropolis"),
        quote("But for a society built on exploitation, there is no greater threat than having no one left to oppress.", N_K_JEMISIN),


    ];

    $: shuffled = shuffle(quotes);

    function shuffle(a: IQuote[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
</script>

<div>
    {#each shuffled as q}
        <Quote quote={q.quote} citation={q.citation}/>
    {/each}
</div>