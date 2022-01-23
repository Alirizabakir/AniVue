import { createStore } from 'vuex'

export default createStore({
	state: {
		changelist:
			[
				{
					name: 'Year',
					info:
						[
							'2000',
							'2001',
							'2002',
							'2003',
							'2004',
							'2005',
							'2006',
							'2007',
							'2008',
							'2009',
							'2010',
							'2011',
							'2012',
							'2013',
							'2014',
							'2015',
							'2016',
							'2017',
							'2018',
							'2019',
							'2020',
							'2021',
						]
				},
				{
					name: 'Type',
					info:
						[
							'Action',
							'Demons',
							'Supernatural',
							'School',
							'Shounen',
							'Military',
							'Mystery',
							'Super Power',
							'Drama',
							'Fantasy',
							'Historical',
							'Music',
							'Sci-Fi',
							'Thriller',
							'Slice of Life',
							'Comedy',
							'Romance',
							'Shoujo',
							'Adventure',
							'Sports',
							'Magic'
						]
				}
			],
		animeview: null,
		animelist:
			[
				{
					id: 1,
					name: 'Jujutsu Kaisen',
					type: 'TV',
					episodes: '24',
					aired: 'Oct 3, 2020 to Mar 27, 2021',
					year: { start: 2020, finish: 2021 },
					producers: 'Shueisha, TOHO animation, dugout',
					duration: '23 min.',
					studios: 'MAPPA',
					genres: ['Action', 'Demons', 'Supernatural', 'School', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4619.jpg',
					videoUrl: 'https://youtu.be/4A_X-Dvl0ws',
					score: 8.78,
					synopsis: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses. Yuuji experiences first- hand the threat these Curses pose to society as he discovers his own newfound powers.Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.'
				},
				{
					id: 2,
					name: 'Atack On Titan',
					type: 'TV',
					episodes: '31 / 25+',
					aired: 'Apr 7, 2013 to Sep 29, 2013',
					year: { start: 2013, finish: 2013 },
					producers: 'Dentsu, Kodansha, Mad Box, Mainichi Broadcasting System, Pony Canyon Enterprise, Pony Canyon, Production I.G',
					duration: '24 min.',
					studios: 'Wit Studio',
					genres: ['Action', 'Military', 'Mystery', 'Super Power', 'Drama', 'Fantasy', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/1649.jpg',
					videoUrl: 'https://youtu.be/LHtdKWJdif4',
					score: 8.51,
					synopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached."
				},
				{
					id: 3,
					name: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
					type: 'Movie',
					episodes: '1 / 1',
					aired: 'Oct 16, 2020',
					year: { start: 2020, finish: 2020 },
					producers: 'Aniplex, Shueisha',
					duration: '23 min.',
					studios: 'ufotable',
					genres: ['Action', 'Historical', 'Demons', 'Supernatural', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4835.jpg',
					videoUrl: 'https://youtu.be/PrZ0O8Qp18s',
					score: 8.77,
					synopsis: "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the flame pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand. Unbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. Kimetsu no Yaiba Movie: Mugen Ressha-hen delves into the deepest corners of Tanjirou's mind, putting his resolve and commitment to duty to the test."
				},
				{
					id: 4,
					name: 'Shingeki no Kyojin: The Final Season',
					type: 'TV',
					episodes: '16 / 16',
					aired: 'Dec 7, 2020 to Mar 29, 2021',
					year: { start: 2020, finish: 2021 },
					producers: 'Dentsu, Kodansha, Mainichi Broadcasting System, Pony Canyon Enterprise, Pony Canyon, Production I.G, Techno Sound',
					duration: '23 min.',
					studios: 'MAPPA',
					genres: ['Action', 'Military', 'Mystery', 'Super Power', 'Drama', 'Fantasy', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4710.jpg',
					videoUrl: 'https://youtu.be/SlNpRThS9t8',
					score: 9.00,
					synopsis: "Gabii Braun and Falco Grice have been training their entire lives to inherit one of the seven titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps. Having finally reached the Yeager family basement and learned about the dark history surrounding the titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls. In Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom."
				},
				{
					id: 5,
					name: "Vivy: Fluorite Eye's Song",
					type: '10 / 13',
					episodes: '24',
					aired: 'Apr 3, 2021 to ?',
					year: { start: 2021, finish: '?' },
					producers: 'Aniplex',
					duration: '24 min.',
					studios: 'Wit Studio',
					genres: ['Action', 'Music', 'Sci-Fi', 'Thriller'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1637/115052.jpg',
					videoUrl: 'https://youtu.be/t3IHpQZHPFY',
					score: 8.51,
					synopsis: "When highly evolved AIs set out to eradicate mankind, the carnage that ensues fills the air with the stench of fresh blood and burning bodies. In a desperate bid to prevent the calamity from ever occurring, a scientist bets everything on a remnant from the past. Turning the clock back a hundred years, AIs are already an integral part of human society, programmed with specific missions meant to be carried out for their entire course of operation. Vivy, the first ever autonomous AI, is a songstress tasked with spreading happiness through her voice. In a theme park where she hardly ever gets a proper audience, she strives to pour her heart out into her performances, bound to repeat it day after day—that is, until an advanced AI from the future appears before her and enlists her help in stopping a devastating war a hundred years in the making. With no time to process the revelation that flips her world upside down, Vivy is catapulted into a century-long journey to avert the violent history yet to come."
				},
				{
					id: 6,
					name: 'Fruits Basket: The Final',
					type: 'TV',
					episodes: '9 / 13',
					aired: 'Apr 6, 2021 to Jun 29, 2021',
					year: { start: 2021, finish: 2021 },
					producers: 'TMS Music',
					duration: '23 min.',
					studios: 'TMS Entertainment',
					genres: ['Slice of Life', 'Comedy', 'Supernatural', 'Drama', 'Romance', 'Shoujo'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4885.jpg',
					videoUrl: 'https://youtu.be/Ip8Btv2t_6c',
					score: 8.95,
					synopsis: "Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.	Tooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion."
				},
				{
					id: 7,
					name: '86',
					type: 'TV',
					episodes: '8 / 11',
					aired: 'Apr 11, 2021 to ?',
					year: { start: 2020, finish: '?' },
					producers: 'Aniplex, Bandai Spirits, Kadokawa',
					duration: '23 min.',
					studios: 'A-1 Pictures',
					genres: ['Action', 'Drama', 'Sci-Fi', 'Military'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4859.jpg',
					videoUrl: 'https://youtu.be/WVegRUOgkPM',
					score: 7.97,
					synopsis: "According to the Republic of San Magnolia, their ongoing war against the Giadian Empire has no casualties—however, that is mere propaganda. While the silver-haired Alba of the Republic's eighty-five sectors live safely behind protective walls, those of different appearances are interned in a secret eighty-sixth faction. Known within the military as the Eighty-Six, they are forced to fight against the Empire's autonomous Legion under the command of the Republican 'Handlers'. Vladilena Milizé is assigned to the Spearhead squadron to replace their previous Handler. Shunned by her peers for being a fellow Eighty-Six supporter, she continues to fight against their inhumane discrimination. Shinei Nouzen is the captain of the Spearhead squadron. Infamous for being the sole survivor of every squadron he's been in, he insists on shouldering the names and wishes of his fallen comrades. When the fates of these young souls from two different worlds collide, will it ignite the spark that lights their path to salvation, or will they burn themselves in the flames of despair?"
				},
				{
					id: 8,
					name: 'Kimetsu no Yaiba',
					type: 'TV',
					episodes: '26 / 26',
					aired: 'Apr 6, 2019 to Sep 28, 2019',
					year: { start: 2019, finish: 2019 },
					producers: 'Aniplex, Shueisha',
					duration: '23 min.',
					studios: 'ufotable',
					genres: ['Action', 'Demons', 'Historical', 'Shounen', 'Supernatural'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4055.jpg',
					videoUrl: 'https://youtu.be/6vMuWuWlW4I',
					score: 8.59,
					synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity."
				},
				{
					id: 9,
					name: 'Black Clover',
					type: 'TV',
					episodes: '170 / 170',
					aired: 'Oct 3, 2017 to Mar 30, 2021',
					year: {
						start: 2017, finish: 2021
					},
					producers: 'Avex Pictures, Shueisha, TV Tokyo',
					duration: '23 min.',
					studios: 'Studio Pierrot',
					genres: ['Action', 'Comedy', 'Magic', 'Fantasy', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/3475.jpg',
					videoUrl: 'https://youtu.be/vUjAxk1qYzQ',
					score: 8.00,
					synopsis: "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the 'Wizard King'—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically. When they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a 'Black Clover' giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!"
				},
				{
					id: 10,
					name: 'Boku no Hero Academia 5th Season',
					type: 'TV',
					episodes: '24',
					aired: 'Mar 27, 2021 to ?',
					year: {
						start: 2021, finish: '?'
					},
					producers: 'Shueisha, TOHO animation, dugout',
					duration: '23 min.',
					studios: 'MAPPA',
					genres: ['Action', 'Demons', 'Supernatural', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1911/113611.jpg',
					videoUrl: 'https://youtu.be/hlyxL6ay4Yw',
					score: 7.55,
					synopsis: "UA Academy's Class 1-A has been the focus of a substantial amount of public attention due to the multiple villain attacks they have faced over the past school year. This attention has left Class 1-A's rivals, Class 1-B, feeling quite bitter. Desiring to prove their skills, they look forward to the opportunity that has been given to them: a set of mock battles between the students of each class. The classes are split into squads of four, each of which is tasked with capturing the other group members. The winner is the group who first secures all of the opposing team. While this sounds simple, a curveball is thrown into the mix with the inclusion of General Course Student Hitoshi Shinsou, who wishes to transfer into the Hero Course. Despite using his training with Class 1-A's homeroom teacher Shouta 'Eraserhead' Aizawa to prove that he's capable of being a real hero, he is still far behind the others due to his lack of experience. However, Shinsou is determined to overcome this challenge.Thus begins the fiery competition between Class 1-A and 1-B as each tries to prove that they are superior to the other."
				},
				{
					id: 11,
					name: 'Yowamushi Pedal: Glory Line',
					type: 'TV',
					episodes: '24',
					aired: 'Jan 9, 2018 to Jun 26, 2018',
					year: {
						start: 2018, finish: 2018
					},
					producers: 'None Found',
					duration: '23 min.',
					studios: 'TMS Entertainment',
					genres: ['Comedy', 'Drama', 'Shounen', 'Sports'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/3614.jpg',
					videoUrl: 'https://youtu.be/FAP1DMqnPsc',
					score: 7.58,
					synopsis: 'Fourth season of the Yowamushi Pedal series.'
				},
				{
					id: 12,
					name: 'Bungou Stray Dogs Wan!',
					type: 'TV',
					episodes: '24',
					aired: 'Oct 3, 2020 to Mar 27, 2021',
					year: {
						start: 2020, finish: 2021
					},
					producers: 'None Found',
					duration: '11 min.',
					studios: 'Bones, Nomad',
					genres: ['Slice of Life', 'Comedy', 'Supernatural'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4778.jpg',
					videoUrl: 'https://youtu.be/FQMZKk5DqEs',
					score: 7.83,
					synopsis: "Atsushi Nakajima has finally grown accustomed to the crazy lifestyle that comes with being part of the Armed Detective Agency. But even during peaceful periods of time, there is bound to be chaos! As Atsushi, his friends, and the agency's rival group—the Port Mafia—go about their days roaming the streets of Yokohama, there are no limits to the strange situations they are unwillingly thrown into. A new take on its original work, Bungou Stray Dogs Wan! shows the more mundane yet hilarious aspects of the characters' lives."
				},
				{
					id: 13,
					name: 'Koi to Producer: EVOL×LOVE',
					type: 'TV',
					episodes: '24',
					aired: 'Jul 16, 2020 to Oct 1, 2020',
					year: {
						start: 2020, finish: 2020
					},
					producers: 'Shueisha, TOHO animation, dugout',
					duration: '24 min.',
					studios: 'MAPPA',
					genres: ['Sci-Fi', 'Mystery', 'Super Power', 'Romance'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4558.jpg',
					videoUrl: 'https://youtu.be/qLQ7RsJy62o',
					score: 6.14,
					synopsis: 'After her father passed away, a young woman inherited his production company, Miracle Entertainment, along with its most successful program, "Miracle Finder." In recent years, however, the show has fallen off the radar and it is now mostly forgotten. In an attempt to save the show from being canceled, this young woman desperately tries to look for a unique topic to use as inspiration. She finds it in the form of "Evol," a mysterious gene that has granted certain people special powers and is considered the next step in human evolution. But, as marvelous as this gene seems, its existence may lead to an unstoppable battle between humans for survival. However, as she becomes more entangled with the strange world of the "Evolvers," her life is suddenly disturbed by the arrival of four men: the cheerful idol Kira; the neuroscientist and Loveland University professor, Simon; the stoic CEO of Loveland Financial Group and Miracle Entertainments benefactor, Zen; and her high school upperclassman Haku, a former delinquent now working as a police officer.As strange incidents begin to plague the city, will she be able to find out the truth about the "Evol" or "Black Swan," the organization behind numerous attacks from "Evolvers" and possibly connected to her fathers death? What is her part to play in its plan, and how are the men around her connected to it all?'
				},
				{
					id: 14,
					name: 'Tate no Yuusha no Nariagari',
					type: 'TV',
					episodes: '24',
					aired: 'Jan 9, 2019 to Jun 26, 2019',
					year: {
						start: 2019, finish: 2019
					},
					producers: 'Crunchyroll SC Anime Fund, Glovision, Kadokawa',
					duration: '24 min.',
					studios: 'Kinema Citrus',
					genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/3848.jpg',
					videoUrl: 'https://youtu.be/h3n-chI028E',
					score: 8.00,
					synopsis: "The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the 'Shield Hero'. Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality. When the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels. As the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future"
				},
				{
					id: 15,
					name: 'Wotaku ni Koi wa Muzukashii: Youth',
					type: 'TV',
					episodes: '24',
					aired: 'Apr 13, 2018 to Jun 22, 2018',
					year: {
						start: 2018, finish: 2018
					},
					producers: 'Aniplex, Half H.P Studio, Fujipacific Music',
					duration: '22 min.',
					studios: 'A-1 Pictures',
					genres: ['Slice of Life', 'Comedy', 'Romance'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4166.jpg',
					videoUrl: 'https://youtu.be/MpZiUDVciKc',
					score: 7.95,
					synopsis: "Having slept through all four of her alarms, the energetic Narumi Momose finds herself running late for her first day of work at a new office. As she races to catch her train, she makes a promise to herself that none of her coworkers will find out about her dark secret: that she is an otaku and a fujoshi. Her plan goes instantly awry, though, when she runs into Hirotaka Nifuji, an old friend from middle school. Although she tries to keep her secret by inviting him out for drinks after work, her cover is blown when he casually asks her whether or not she will be attending the upcoming Summer Comiket. Luckily for her, the only witnesses—Hanako Koyanagi and Tarou Kabakura—are otaku as well. Later that night, the pair go out for drinks so that they can catch up after all the years apart. After Narumi complains about her previous boyfriend breaking up with her because he refused to date a fujoshi, Hirotaka suggests that she try dating a fellow otaku, specifically himself. He makes a solemn promise to always be there for her, to support her, and to help her farm for rare drops in Monster Hunter. Blown away by the proposal, Narumi agrees immediately. Thus the two otaku start dating, and their adorably awkward romance begins."
				},
				{
					id: 16,
					name: 'Tensura Nikki: Tensei shitara Slime Datta Ken',
					type: 'TV',
					episodes: '24',
					aired: 'Apr 6, 2021 to ?',
					year: {
						start: 2021, finish: '?'
					},
					producers: 'Lantis, Kodansha, BS11, Bandai Namco Arts, Micro Magazine Publishing, Bandai Spirits, Sony Music Solutions, ADK Marketing Solutions',
					duration: '23 min.',
					studios: '8bit',
					genres: ['Slice of Life', 'Comedy', 'Fantasy', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4886.jpg',
					videoUrl: 'https://youtu.be/JyCSGTKcNPA',
					score: 7.55,
					synopsis: '"Dear diary... I got reincarnated as a slime." Even in another world, lives arent always on the line. Theres plenty of work to be done, from feeding the community and forging the items the community needs; as well as plenty of play ...and hijinks throughout! Join Rimuru and friends as they kick back and enjoy their daily lives.'
				}, {
					id: 17,
					name: 'Sentouin, Hakenshimasu!',
					type: 'TV',
					episodes: '24',
					aired: 'Apr 4, 2021 to ?',
					year: {
						start: 2021, finish: '?'
					},
					producers: 'Kadokawa, Nippon Columbia',
					duration: '23 min.',
					studios: 'J.C.Staff',
					genres: ['Action', 'Comedy', 'Fantasy'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4883.jpg',
					videoUrl: 'https://youtu.be/3DHctZTqsFo',
					score: 7.14,
					synopsis: 'As a chief operative of the villainous Kisaragi Corporation, Sentouin Roku-gou receives orders to help the organization conquer the entire known universe. Tasked with infiltrating the kingdom of Grace—a mission that could change the fate of the world—Roku-gou mistakenly believes that his skills as a combatant are superb, fuelling his arrogant attitude. To ensure the success of the mission, Alice Kisaragi, an exceptional android with a youthful appearance named after the company itself, is assigned to be Roku-gou s travel companion.Upon their arrival at the outskirts of the kingdom, Alice and Roku-gou encounter Snow, the commander of the countrys royal guard. Snow leads the pair to a broken legendary artifact, and Roku-gou seizes the opportunity for a long-awaited promotion at his company and changes the recitation for the sacred ritual to an embarrassing phrase. As punishment, the princess of the kingdom forces Roku-gou to become an honorary knight, fulfilling part of his mission. Having infiltrated the kingdoms inner circle, Roku-gou must now help his new employer fight against the Demon Lords Army, all while perpetuating evil deeds as a combatant of the Kisaragi Corporation.'
				},
				{
					id: 18,
					name: 'Dr. Stone: Stone Wars',
					type: 'TV',
					episodes: '11 / 11',
					aired: 'Jan 14, 2021 to Mar 25, 2021',
					year: {
						start: 2021, finish: 2021
					},
					producers: 'Shueisha, TOHO animation',
					duration: '23 min.',
					studios: 'TMS Entertainment',
					genres: ['Sci-Fi', 'Adventure', 'Comedy', 'Shounen'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4730.jpg',
					videoUrl: 'https://youtu.be/esjDq0JQ_1s',
					score: 8.21,
					synopsis: "Senkuu has made it his goal to bring back two million years of human achievement and revive the entirety of those turned to statues. However, one man stands in his way: Tsukasa Shishiou, who believes that only the fittest of those petrified should be revived. As the snow melts and spring approaches, Senkuu and his allies in Ishigami Village finish the preparations for their attack on the Tsukasa Empire. With a reinvented cell phone model now at their disposal, the Kingdom of Science is ready to launch its newest scheme to recruit the sizable numbers of Tsukasa's army to their side. However, it is a race against time; for every day the Kingdom of Science spends perfecting their inventions, the empire rapidly grows in number. Reuniting with old friends and gaining new allies, Senkuu and the Kingdom of Science must stop Tsukasa's forces in order to fulfill their goal of restoring humanity and all its creations. With the two sides each in pursuit of their ideal world, the Stone Wars have now begun!"
				},
				{
					id: 19,
					name: 'SK8 the Infinity',
					type: 'TV',
					episodes: '13 / 12+',
					aired: 'Jan 10, 2021 to Apr 4, 2021',
					year: {
						start: 2021, finish: 2021
					},
					producers: 'ABC Animation, Aniplex, Movic',
					duration: '23 min.',
					studios: 'Bones',
					genres: ['Comedy', 'Sports'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/4769.jpg',
					videoUrl: 'https://youtu.be/PcS3QIc6ma8',
					score: 8.04,
					synopsis: "High school student Reki Kyan is passionate about one thing: skateboarding. When night falls, he heads to 'S', an illegal underground race inside a mine where skaters compete in highly dangerous situations. After a loss that results in his skateboard being destroyed and his arm being broken, Reki is now incapable of practicing at all. While working, Reki runs into his new classmate, Langa Hasegawa, a half-Canadian and half-Japanese boy with no skateboarding experience whatsoever. Langa is in desperate need of money. After they both visit 'S' when tasked by Reki's boss, they get into trouble and are forced into a bet that requires Langa to skate in a race. However, the mysterious transfer student holds a trump card that Reki is unaware of, one which might help him win the race in the most unexpected way."
				},
				{
					id: 21,
					name: 'One Punch Man',
					type: 'TV',
					episodes: '19 / 12+',
					aired: 'Oct 5, 2015 to Dec 21, 2015',
					year: {
						start: 2015, finish: 2015
					},
					producers: 'Asatsu DK, Bandai Visual, Banpresto, East Japan Marketing & Communications, Good Smile Company, Lantis, Shueisha, TV Tokyo',
					duration: '23 min.',
					studios: 'Madhouse',
					genres: ['Action', 'Sci-Fi', 'Comedy', 'Parody', 'Super Power', 'Supernatural'],
					imageUrl: 'https://www.turkanime.net/imajlar/serilerb/2563.jpg',
					videoUrl: 'https://youtu.be/ExUMiF1L0HA',
					score: 8.54,
					synopsis: "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored. This all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process."
				},
				{
					id: 22,
					name: 'Kakegurui',
					type: 'TV',
					episodes: '12',
					aired: 'Jul 1, 2017 to Sep 23, 2017',
					year: {
						start: 2017, finish: 2017
					},
					producers: 'Dentsu, Square Enix, Mainichi Broadcasting System, Movic, KlockWorx, DIVE II Entertainment, 81 Produce, Avex Pictures, FuRyu',
					duration: '24 min.',
					studios: 'MAPPA',
					genres: ['Game', 'Mystery', 'Psychological', 'Drama', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/3/86578.jpg',
					videoUrl: 'https://youtu.be/v2xJDuM9ZDM',
					score: 7.34,
					synopsis: "Unlike many schools, attending Hyakkaou Private Academy prepares students for their time in the real world. Since many of the students are the children of the richest people in the world, the academy has its quirks that separate it from all the others. By day, it is a normal school, educating its pupils in history, languages, and the like. But at night, it turns into a gambling den, educating them in the art of dealing with money and manipulating people. Money is power; those who come out on top in the games stand at the top of the school. Yumeko Jabami, a seemingly naive and beautiful transfer student, is ready to try her hand at Hyakkaou's special curriculum. Unlike the rest, she doesn't play to win, but for the thrill of the gamble, and her borderline insane way of gambling might just bring too many new cards to the table."
				},
				{
					id: 24,
					name: 'Yuukoku no Moriarty',
					type: 'TV',
					episodes: '11',
					aired: 'Oct 11, 2020 to Dec 20, 2020',
					year: {
						start: 2020, finish: 2020
					},
					producers: 'Mainichi Broadcasting System, Shueisha, Yomiuri TV Enterprise, Bandai Namco Arts, Bandai Spirits',
					duration: '23 min.',
					studios: 'Production I.G',
					genres: ['Action', 'Drama', 'Sci-Fi', 'Military'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1464/108330.jpg',
					videoUrl: 'https://youtu.be/YA_zLUnLaQM',
					score: 8.06,
					synopsis: "During the late 19th century, Great Britain has become the greatest empire the world has ever known. Hidden within its success, the nation's rigid economic hierarchy dictates the value of one's life solely on status and wealth. To no surprise, the system favors the aristocracy at the top and renders it impossible for the working class to ascend the ranks. William James Moriarty, the second son of the Moriarty household, lives as a regular noble while also being a consultant for the common folk to give them a hand and solve their problems. However, deep inside him lies a desire to destroy the current structure that dominates British society and those who benefit from it. Alongside his brothers Albert and Louis, the trio will do anything it takes to change the filthy world they live in—even if blood must be spilled."
				},
				{
					id: 25,
					name: 'Shingeki no Kyojin Season 2',
					type: 'TV',
					episodes: '8 / 11',
					aired: 'Apr 1, 2017 to Jun 17, 2017',
					year: {
						start: 2017, finish: 2017
					},
					producers: 'Production I.G, Dentsu, Mainichi Broadcasting System, Pony Canyon, Kodansha, Techno Sound, Pony Canyon Enterprise',
					duration: '23 min.',
					studios: 'Wit Studio',
					genres: ['Mystery', 'Historical', 'Psychological', 'Thriller', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/4/84177.jpg',
					videoUrl: 'https://youtu.be/zLaVP8IhIuc',
					score: 8.48,
					synopsis: "For centuries, humanity has been hunted by giant, mysterious predators known as the Titans. Three mighty walls—Wall Maria, Rose, and Sheena—provided peace and protection for humanity for over a hundred years. That peace, however, was shattered when the Colossus Titan and Armored Titan appeared and destroyed the outermost wall, Wall Maria. Forced to retreat behind Wall Rose, humanity waited with bated breath for the Titans to reappear and destroy their safe haven once more. In Shingeki no Kyojin Season 2, Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members."
				},
				{
					id: 26,
					name: 'Kuroko no Basket 3rd Season',
					type: 'TV',
					episodes: '25',
					aired: 'Jan 11, 2015 to Jun 30, 2015',
					year: {
						start: 2015, finish: 2015
					},
					producers: 'Bandai Visual, Lantis, Nihon Ad Systems, Banpresto, Shueisha, BS11',
					duration: '23 min.',
					studios: 'Production I.G',
					genres: ['Comedy', 'Sports', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/4/68299.jpg',
					videoUrl: 'https://youtu.be/H1TvpW04Oxs',
					score: 8.32,
					synopsis: "Following their triumph against Yousen High, Seirin's basketball team has reached the semifinals of the Winter Cup along with Kaijou, Rakuzan, and Shuutoku. Each of these teams possesses a member of the Generation of Miracles, and Seirin prepares to face the largest obstacles on their path to winning the Winter Cup. In the final season of Kuroko no Basket, Kuroko goes head-to-head with his old teammates once more as he attempts to show them that individual skill is not the only way to play basketball. His firm belief that his form of basketball, team play, is the right way to play the sport will clash with the talents of a perfect copy and an absolute authority. While Kuroko tries to prove that his basketball is 'right' he and the rest of Seirin High ultimately have one goal: to win the Winter Cup and overcome the strength of the Generation of Miracles, who have long dominated the scene of middle and high school basketball."
				},
				{
					id: 27,
					name: 'Katsugeki/Touken Ranbu',
					type: 'TV',
					episodes: '13',
					aired: 'Jul 2, 2017 to Sep 24, 2017',
					year: {
						start: 2017, finish: 2017
					},
					producers: 'Aniplex, Nitroplus, Good Smile Company, DMM.com',
					duration: '23 min.',
					studios: 'ufotable',
					genres: ['Action', 'Historical', 'Samurai', 'Fantasy'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/12/87984.jpg',
					videoUrl: 'https://youtu.be/SdrkJG9fI74',
					score: 6.73,
					synopsis: "In 1863, Izuminokami Kanesada and his partner, Horikawa Kunihiro, arrive in the streets of Edo from the future to investigate their master's reports of an upcoming enemy invasion. As humanoid manifestations of the famous Toshizou Hijikata's swords, they have been tasked with protecting history from the Retrograde Army that seeks to alter it. Soon enlisting the help of other sword warriors, they continuously battle the mysterious army throughout the Bakumatsu period. However, their journey will not be an easy one. Fraught with blood and betrayal in the chaotic era closest to their hearts, the duo will be forced to make difficult decisions with everything they care about on the line."
				},
				{
					id: 28,
					name: 'Shokugeki no Souma: Gou no Sara',
					type: 'TV',
					episodes: '13',
					aired: 'Apr 11, 2020 to Sep 26, 2020',
					year: {
						start: 2020, finish: 2020
					},
					producers: 'None Found',
					duration: '23 min.',
					studios: 'J.C.Staff',
					genres: ['Ecchi', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1756/108000.jpg',
					videoUrl: 'https://youtu.be/AS61_hprRVg',
					score: 7.33,
					synopsis: "Thanks to Souma Yukihira, Erina Nakiri, and the rebel forces overthrowing the regime of Azami Nakiri—the previous school director—and the former Elite Ten, Tootsuki Culinary Academy is back in order. However, its students have one more great battle ahead of them: the BLUE, a competition where young chefs seeking world-class fame compete. Faced with new trials and rivals, Souma and his friends will fight to conquer the BLUE and to defeat Asahi Saiba, the leader of an underworld organization of chefs known as Noir, who once defeated Souma and his father in a Shokugeki."
				},
				{
					id: 29,
					name: 'Boku no Hero Academia 2nd Season',
					type: 'TV',
					episodes: '25',
					aired: 'Apr 1, 2017 to Sep 30, 2017',
					year: {
						start: 2017, finish: 2017
					},
					producers: 'Dentsu, Yomiuri Telecasting, Movic, Sony Music Entertainment, TOHO animation, Shueisha',
					duration: '23 min.',
					studios: 'Bones',
					genres: ['Action', 'Comedy', 'Super Power', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/12/85221.jpg',
					videoUrl: 'https://youtu.be/ayeDDe8eN1E',
					score: 8.26,
					synopsis: "At UA Academy, not even a violent attack can disrupt their most prestigious event: the school sports festival. Renowned across Japan, this festival is an opportunity for aspiring heroes to showcase their abilities, both to the public and potential recruiters. However, the path to glory is never easy, especially for Izuku Midoriya—whose quirk possesses great raw power but is also cripplingly inefficient. Pitted against his talented classmates, such as the fire and ice wielding Shouto Todoroki, Izuku must utilize his sharp wits and master his surroundings to achieve victory and prove to the world his worth."
				},
				{
					id: 30,
					name: 'Shingeki no Kyojin Season 3 Part 2',
					type: 'TV',
					episodes: '10',
					aired: 'Apr 29, 2019 to Jul 1, 2019',
					year: {
						start: 2019, finish: 2019
					},
					producers: 'Production I.G, Dentsu, Mainichi Broadcasting System, Pony Canyon, Kodansha, Techno Sound, Pony Canyon Enterprise',
					duration: '23 min.',
					studios: 'Wit Studio',
					genres: ['Action', 'Drama', 'Fantasy', 'Military', 'Mystery', 'Shounen', 'Super Power'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
					videoUrl: 'https://youtu.be/hKHepjfj5Tw',
					score: 9.11,
					synopsis: "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless 'Titans' takes the stage once again. Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. Shingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement."
				},
				{
					id: 31,
					name: 'One Punch Man 2nd Season',
					type: 'TV',
					episodes: '12',
					aired: 'Apr 10, 2019 to Jul 3, 2019',
					year: {
						start: 2019, finish: 2019
					},
					producers: 'TV Tokyo, Good Smile Company, Shueisha, JR East Marketing & Communications, Bandai Namco Arts, Bandai Spirits',
					duration: '23 min.',
					studios: 'J.C.Staff',
					genres: ['Action', 'Sci-Fi', 'Comedy', 'Parody', 'Super Power', 'Supernatural'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1805/99571.jpg',
					videoUrl: 'https://youtu.be/NezvLw2gRAY',
					score: 7.41,
					synopsis: "In the wake of defeating Boros and his mighty army, Saitama has returned to his unremarkable everyday life in Z-City. However, unbeknownst to him, the number of monsters appearing is still continuously on the rise, putting a strain on the Hero Association’s resources. Their top executives decide on the bold move of recruiting hoodlums in order to help in their battle. But during the first meeting with these potential newcomers, a mysterious man calling himself Garou makes his appearance. Claiming to be a monster, he starts mercilessly attacking the crowd. The mysterious Garou continues his rampage against the Hero Association, crushing every hero he encounters. He turns out to be the legendary martial artist Silverfang’s best former disciple and seems driven by unknown motives. Regardless, this beast of a man seems unstoppable. Intrigued by this puzzling new foe and with an insatiable thirst for money, Saitama decides to seize the opportunity and joins the interesting martial arts competition. As the tournament commences and Garou continues his rampage, a new great menace reveals itself, threatening the entire human world. Could this finally be the earth-shattering catastrophe predicted by the great seer Madame Shibabawa?"
				},
				{
					id: 32,
					name: 'Bungou Stray Dogs 3rd Season',
					type: 'TV',
					episodes: '12',
					aired: 'Apr 12, 2019 to Jun 28, 2019',
					year: {
						start: 2019, finish: 2019
					},
					producers: 'WOWOW, Lantis, Movic, Bandai Namco Live Creative, Sony Music Entertainment, Glovision, Kadokawa Media House, Kadokawa, Bandai Namco Arts',
					duration: '23 min.',
					studios: 'Bones',
					genres: ['Action', 'Mystery', 'Seinen', 'Super Power', 'Supernatural'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1037/100463.jpg',
					videoUrl: 'https://youtu.be/Bro64355Kws',
					score: 8.19,
					synopsis: "Following the conclusion of the three-way organizational war, government bureaucrat Ango Sakaguchi recalls an event that transpired years ago, after the death of the former Port Mafia boss. Osamu Dazai, still a new recruit at the time, was tasked with investigating rumors related to a mysterious explosion that decimated part of the city years ago—and its connection to the alleged reappearance of the former boss. Due to circumstances out of his control, he is partnered with Chuuya Nakahara, the gifted yet impulsive leader of a rival clan known as the ''Sheep,'' to uncover the truth behind the case and shine a light on the myth of Arahabaki—the god of fire who might just lead Dazai to the case's solution. Meanwhile, in the present day, it is business as usual once again for the Armed Detective Agency. Their peaceful break will not last for long, however, as enemies old and new gather their strength and prepare for another face-off."
				},
				{
					id: 33,
					name: 'Dr. Stone',
					type: 'TV',
					episodes: '24',
					aired: 'Jul 5, 2019 to Dec 13, 2019',
					year: {
						start: 2019, finish: 2019
					},
					producers: 'TOHO animation, Shueisha',
					duration: '23 min.',
					studios: 'TMS Entertainment',
					genres: ['Sci-Fi', 'Adventure', 'Comedy', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1613/102576.jpg',
					videoUrl: 'https://youtu.be/2ei4KpfCOAI',
					score: 8.32,
					synopsis: "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone. Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified. However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown."
				},
				{
					id: 34,
					name: 'Shingeki no Kyojin Season 3',
					type: 'TV',
					episodes: '12',
					aired: 'Jul 23, 2018 to Oct 15, 2018',
					year: {
						start: 2018, finish: 2018
					},
					producers: 'Production I.G, Dentsu, Mainichi Broadcasting System, Pony Canyon, Kodansha, Techno Sound, Pony Canyon Enterprise',
					duration: '23 min.',
					studios: 'Wit Studio',
					genres: ['Action', 'Military', 'Mystery', 'Super Power', 'Drama', 'Fantasy', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/1173/92110.jpg',
					videoUrl: 'https://youtu.be/wNj2xeD8g0A',
					score: 8.63,
					synopsis: "Still threatened by the 'Titans' that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well. After being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe. In Shingeki no Kyojin Season 3, Eren and his fellow soldiers are not only fighting for their survival against the terrifying Titans, but also against the terror of a far more conniving foe: humans."
				},
				{
					id: 35,
					name: 'Kuroko no Basket',
					type: 'TV',
					episodes: '25',
					aired: 'Apr 8, 2012 to Sep 22, 2012',
					year: {
						start: 2012, finish: 2012
					},
					producers: 'Bandai Visual, Lantis, Nihon Ad Systems, Banpresto, Shueisha, BS11',
					duration: '23 min.',
					studios: 'Production I.G',
					genres: ['Comedy', 'Sports', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/11/50453.jpg',
					videoUrl: 'https://youtu.be/FTUIs_SuQfw',
					score: 8.12,
					synopsis: "Teikou Junior High School's basketball team is crowned champion three years in a row thanks to five outstanding players who, with their breathtaking and unique skills, leave opponents in despair and fans in admiration. However, after graduating, these teammates, known as 'The Generation of Miracles', go their separate ways and now consider each other as rivals. At Seirin High School, two newly recruited freshmen prove that they are not ordinary basketball players: Taiga Kagami, a promising player returning from the US, and Tetsuya Kuroko, a seemingly ordinary student whose lack of presence allows him to move around unnoticed. Although Kuroko is neither athletic nor able to score any points, he was a member of Teikou's basketball team, where he played as the 'Phantom Sixth Man,' who easily passed the ball and assisted his teammates. Kuroko no Basket follows the journey of Seirin's players as they attempt to become the best Japanese high school team by winning the Interhigh Championship. To reach their goal, they have to cross pathways with several powerful teams, some of which have one of the five players with godlike abilities, whom Kuroko and Taiga make a pact to defeat."
				},
				{
					id: 36,
					name: 'Kuroko no Basket 2nd Season',
					type: 'TV',
					episodes: '25',
					aired: 'Oct 6, 2013 to Mar 30, 2014',
					year: {
						start: 2013, finish: 2014
					},
					producers: 'Bandai Visual, Lantis, Nihon Ad Systems, Banpresto, Shueisha, BS11',
					duration: '23 min.',
					studios: 'Production I.G',
					genres: ['Comedy', 'Sports', 'School', 'Shounen'],
					imageUrl: 'https://cdn.myanimelist.net/images/anime/9/56155.jpg',
					videoUrl: 'https://youtu.be/11ROABkyews',
					score: 8.26,
					synopsis: "With the Interhigh Championship finally over, Seirin's basketball team refocuses their efforts, training harder than ever to get the chance to participate in the Winter Cup. Both Kuroko and Kagami see old friends walk back into their lives, providing a challenge both on and off the court. As new skills are developed and new alliances created, enemies from various teams—giants of high school basketball such as Yousen, Shuutoku and Touou—stand in the way of Seirin's steadfast attempts to get to the top. All of these schools prove to be formidable foes whose abilities progress exponentially, while Kuroko struggles to find a balance between his resolve to play as part of a team and his desire to win. With old wounds reopening, new challenges to face on the court, and a new set of foes—the 'Uncrowned Kings'—vowing to defeat the new hopefuls, will Seirin ever be able to achieve their dream of beating the Generation of Miracles?"
				},
			]
	},
	mutations: {
		animeviewyear(state, value) {
			const filterYearList = state.animelist.filter(ani => ani.year.start == value);
			state.animeview = filterYearList
		},
		animeviewtype(state, value) {
			const filterTypeList = state.animelist.filter(anime => anime.genres.find(x => x == value));
			state.animeview = filterTypeList
		},
		animeviewdefault(state){
			if(state.animeview == null){
				state.animeview = state.animelist 
			}
		}
	},
	actions: {
	},
	modules: {
	}
})
