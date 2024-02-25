export class ProductItem {
    id: number;
    name: string;
    description: string;
    rating: string;
    kaspi: string;
    likes: number;

    constructor(id: number, name: string, description: string, rating: string, kaspi: string, likes: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.kaspi = kaspi;
        this.likes = likes;
    }
}

export const products: ProductItem[] = [
    {
        id: 1,
        name: 'LEGO Flower Bouquet 10280',
        description: 'The LEGO Flower Bouquet (Set 10280) is a captivating and intricate building kit that allows enthusiasts to create a stunning array of customizable flowers. With a vibrant assortment of LEGO botanical elements, including roses, daisies, and snapdragons, the set provides a creative and aesthetically pleasing experience. Perfect for home decor or as a unique gift, the LEGO Flower Bouquet combines the joy of building with the timeless beauty of flowers, offering a delightful and lasting expression of creativity.',
        rating: '5.0',
        kaspi: 'https://kaspi.kz/shop/p/lego-buket-tsvetov-10280-detalei-756-sht-101204989/?c=750000000',
        likes: 0
    },
    {
        id: 2,
        name: 'LEGO Lotus Flowers 40647',
        description: 'The LEGO Lotus Flowers (Set 40647) is a captivating building kit that lets you craft a beautiful array of customizable lotus blossoms. Featuring a variety of vibrant LEGO botanical elements, including delicate petals and intricate stems, this set provides a creative and visually stunning experience. Whether used as a decorative piece or a unique gift, the LEGO Lotus Flowers combine the joy of building with the timeless elegance of lotus blooms, offering a delightful and enduring expression of imaginative construction.',
        rating: '5.0',
        kaspi: 'https://kaspi.kz/shop/p/lego-tsvety-lotosa-iconic-40647-detalei-220-sht-115790606/?c=750000000',
        likes: 2
    },
    {
        id: 3,
        name: 'LEGO Daffodil Flowers 40747',
        description: 'The LEGO Daffodil Flowers (Set 40747) is a delightful building kit that allows you to construct a charming collection of customizable daffodil blooms. With an array of vibrant LEGO botanical elements, including intricate petals and detailed stems, this set provides a creative and visually appealing building experience. Whether used as a decorative piece or a unique gift, the LEGO Daffodil Flowers combine the joy of construction with the timeless beauty of daffodils, offering a delightful and enduring expression of imaginative play.',
        rating: '4.0',
        kaspi: 'https://kaspi.kz/shop/p/lego-icons-lego-40747-tsvety-nartsissy-detalei-216-sht-115807124/?c=750000000',
        likes: 3
    },
    {
        id: 4,
        name: 'LEGO Wildflowers 10313',
        description: 'The LEGO Wildflowers (Set 10313) is a captivating building kit that allows you to bring the beauty of the outdoors indoors. With an assortment of vibrant LEGO botanical elements, including daisies, sunflowers, and other charming wildflowers, this set offers a creative and visually stunning building experience. Whether used as a decorative piece or a unique gift, the LEGO Wildflowers combine the joy of construction with the timeless beauty of nature, providing a delightful and enduring expression of imaginative play.',
        rating: '3.5',
        kaspi: 'https://kaspi.kz/shop/p/lego-buket-polevyh-tsvetov-10313-detalei-939-sht-108653342/?c=750000000',
        likes: 2
    },
    {
        id: 5,
        name: 'LEGO Cherry Blossom 40725',
        description: 'The LEGO Cherry Blossom (Set 40725) is a picturesque building kit that invites you to create an enchanting display of customizable cherry blossoms. Featuring an array of delicate LEGO botanical elements, including intricate blossoms and elegant branches, this set offers a creative and visually captivating building experience. Whether used as a charming decorative piece or a unique gift, the LEGO Cherry Blossom set combines the joy of construction with the timeless beauty of cherry blossoms, providing a delightful and enduring expression of imaginative play.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-tsvetuschaja-vishnja-iconic-40725-detalei-438-sht-115790579/?c=750000000',
        likes: 2
    },
    {
        id: 6,
        name: 'LEGO Speed-Champions-IP3-2022 76908',
        description: 'The LEGO Speed Champions IP3 2022 set, designated as 76908, is an exhilarating addition to the Speed Champions series. This set likely features intricately designed LEGO models depicting high-performance racing cars inspired by the IP3 2022 theme, offering a thrilling building experience for fans of both LEGO and motorsports. Get ready to immerse yourself in the world of speed and precision with this exciting LEGO Speed Champions set.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-speed-champions-ip3-2022-76908-detalei-262-sht-104015417/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 7,
        name: 'LEGO Speed-Champions-IP2-2022 76907',
        description: 'The LEGO Speed Champions IP2 2022 set, identified as 76907, promises a dynamic building experience for enthusiasts. This set likely showcases meticulously crafted LEGO replicas of high-speed racing cars inspired by the IP2 2022 theme, providing fans with an opportunity to engage in the excitement of motorsports through intricate and detailed construction. Embrace the thrill of speed and innovation with this captivating addition to the LEGO Speed Champions series.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-speed-champions-ip2-2022-76907-detalei-247-sht-103999297/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 8,
        name: 'LEGO Pagani Utopia 76915',
        description: 'Introducing the LEGO Pagani Utopia 76915, a masterpiece of precision engineering in the world of brick-built automotive excellence. This set is likely to feature a stunning and detailed LEGO rendition of the iconic Pagani Utopia, capturing the essence of luxury and high-performance. Enthusiasts can expect a gratifying building experience as they construct this miniature marvel, combining the elegance of Pagani design with the creativity of LEGO craftsmanship.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-pagani-utopia-76915-detalei-249-sht-108979551/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 9,
        name: 'LEGO Chevrolet Camaro ZL1 of the new generation NASCAR 42153',
        description: 'The LEGO Chevrolet Camaro ZL1 of the new generation NASCAR 42153 is a thrilling addition to the LEGO Speed Champions series. This set likely features a meticulously designed LEGO model that captures the essence of the high-performance Chevrolet Camaro ZL1 from the latest generation in NASCAR racing. Enthusiasts can anticipate an exciting building experience as they assemble this iconic racing car in miniature form, showcasing the fusion of LEGO creativity and the adrenaline of NASCAR.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-shevrole-kamaro-zl1-novogo-pokolenija-nascar-42153-detalei-672-sht-109047651/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 10,
        name: ' LEGO Bugatti Bolide 42151',
        description: 'The LEGO Bugatti Bolide 42151 is an exhilarating addition to the LEGO Technic series, capturing the essence of the high-performance Bugatti Bolide hypercar. This set likely features a detailed and intricate LEGO model, allowing enthusiasts to experience the thrill of building a miniature version of the cutting-edge Bugatti Bolide. With Technic elements, builders can expect a rewarding and challenging construction process that reflects the precision and innovation synonymous with both Bugatti and LEGO Technic.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-bugatti-bolid-42151-detalei-905-sht-108312877/?c=750000000&sr=23&qid=ebb95a7d0ab192b672171ee176acee21&ref=shared_link',
        likes: 2
    },
    {
        id: 11,
        name: 'LEGO Safari with Animals Creator 31150',
        description: 'The LEGO Speed Champions IP3 2022 set, designated as 76908, is an exhilarating addition to the Speed Champions series. This set likely features intricately designed LEGO models depicting high-performance racing cars inspired by the IP3 2022 theme, offering a thrilling building experience for fans of both LEGO and motorsports. Get ready to immerse yourself in the world of speed and precision with this exciting LEGO Speed Champions set.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-safari-s-zhivotnymi-creator-31150-detalei-780-sht-115790604/?c=750000000&m=MHomeVideo&sr=12&qid=70f737ec9e43b00b88a146e0e4d5117c&ref=shared_link',
        likes: 2
    },
    {
        id: 12,
        name: 'LEGO Magical Unicorn 31140',
        description: 'The LEGO Magical Unicorn 31140 is a enchanting creation within the LEGO Creator 3-in-1 series. This set likely includes the pieces and instructions to build a majestic brick-built unicorn, allowing builders to also explore alternative builds to create different magical creatures. With its whimsical design and versatile building options, this LEGO Creator set promises a delightful and imaginative building experience for those who love mythical creatures and fantasy worlds.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-volshebnyi-edinorog-31140-detalei-145-sht-109047656/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 13,
        name: 'LEGO White Rabbit 31133',
        description: 'The LEGO White Rabbit 31133 is a charming addition to the LEGO BrickHeadz collection. This set likely features a delightful and whimsical brick-built rendition of the iconic White Rabbit character, known for its role in various tales. With its characteristic ears, pocket watch, and distinctive attire, this LEGO BrickHeadz set offers a fun and creative building experience for fans of classic literature and imaginative storytelling.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-belyi-krolik-31133-detalei-258-sht-108312869/?c=750000000&sr=23&qid=70f737ec9e43b00b88a146e0e4d5117c&ref=shared_link',
        likes: 2
    },
    {
        id: 14,
        name: 'LEGO Charming Dogs 31137',
        description: 'The LEGO Charming Dogs 31137 is a delightful addition to the LEGO Creator 3-in-1 series. This set likely includes the elements and instructions to build charming brick-built dogs with various breeds and personalities. With multiple building options, builders can create different adorable canine companions, offering a heartwarming and imaginative building experience for dog lovers and LEGO enthusiasts alike.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-ocharovatel-nye-sobaki-31137-detalei-475-sht-109047642/?c=750000000&m=MHomeVideo&ref=shared_link',
        likes: 2
    },
    {
        id: 15,
        name: 'LEGO Exotic Parrot 31136',
        description: 'The LEGO Exotic Parrot 31136 is a vibrant and imaginative set within the LEGO Creator 3-in-1 series. This creation likely features the pieces and instructions to construct a colorful brick-built parrot with exotic details. In keeping with the 3-in-1 theme, builders can also explore alternative builds to craft different exotic birds, ensuring a versatile and engaging building experience. This LEGO set is designed to captivate the creativity of bird enthusiasts and fans of vibrant, tropical creatures.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-ekzoticheskii-popugai-31136-detalei-253-sht-109047616/?c=750000000&sr=22&qid=70f737ec9e43b00b88a146e0e4d5117c&ref=shared_link',
        likes: 2
    },
    {
        id: 16,
        name: 'LEGO DUPLO Farmer\'s Tractor and Animals set 10950',
        description: 'The LEGO DUPLO Farmer\'s Tractor and Animals set (10950) is a charming addition to the DUPLO series. This set likely includes a buildable DUPLO tractor and various farm animals, providing young builders with an engaging and educational experience. With its large, easy-to-handle DUPLO bricks, this set is designed to promote fine motor skills and creativity in toddlers and preschoolers, making it an ideal introduction to the world of LEGO building for the little ones.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-10950-duplo-fermerskii-traktor-i-zhivotnye-101436342/?c=750000000',
        likes: 2
    },
    {
        id: 17,
        name: 'LEGO Duplo Police Motorcycle set 10900',
        description: 'The LEGO Duplo Police Motorcycle set (10900), designed specifically for little ones to enjoy hands-on play and creative building. This DUPLO set likely features a sturdy and colorful police motorcycle, complete with a DUPLO figure of a police officer. With its large, easy-to-handle bricks, this set provides a perfect introduction to the world of LEGO for toddlers, fostering fine motor skills and sparking imaginative adventures in law enforcement.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-duplo-10900-politseiskii-mototsikl-7203413/?c=750000000',
        likes: 2
    },
    {
        id: 18,
        name: 'LEGO Speed-Champions-IP3-2022 76908',
        description: 'The LEGO Duplo Spider-Man and His Friends set (10963), a thrilling adventure for young builders. This DUPLO set likely includes easy-to-handle bricks featuring Spider-Man and his friendly allies, allowing toddlers to create their own superhero stories. With colorful and chunky pieces, this set provides a perfect introduction to LEGO for preschoolers, combining the excitement of Spider-Man with the creative joy of DUPLO building.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/konstruktor-lego-duplo-chelovek-pauk-i-ego-druz-ja-10963-detalei-41-sht-mul-tikolor-107643343/?c=750000000',
        likes: 2
    },
    {
        id: 19,
        name: 'LEGO Duplo Airplane and Airport set 10961',
        description: 'The LEGO Duplo Airplane and Airport set (10961) is a fantastic addition to the Duplo series, offering young builders an engaging aviation experience. This set likely includes a DUPLO-style airplane, an airport structure, and DUPLO figures such as pilots and passengers. With its large and easy-to-handle bricks, this set provides a perfect introduction to the world of LEGO for toddlers, fostering creativity and fine motor skills through imaginative play at the airport.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-duplo-samolet-i-aeroport-10961-101618092/?c=750000000',
        likes: 2
    },
    {
        id: 20,
        name: 'LEGO Duplo Dinosaur Escape: Tyrannosaurus Rex and Triceratops set 10939',
        description: 'Introducing the LEGO Duplo Dinosaur Escape: Tyrannosaurus Rex and Triceratops set (10939), a prehistoric adventure for budding paleontologists. This DUPLO set likely features friendly dinosaur figures, the mighty Tyrannosaurus Rex and the horned Triceratops, along with elements for creating an imaginative dino-themed escape scenario. With large, easy-to-handle bricks, this set provides a perfect introduction to LEGO for toddlers, combining the excitement of dinosaurs with the creative joy of DUPLO building. Let the young ones embark on a Jurassic journey of discovery and play.',
        rating: '3.7',
        kaspi: 'https://kaspi.kz/shop/p/lego-duplo-pobeg-dinozavrov-tirannozavr-i-tritseratops-10939-101617801/?c=750000000',
        likes: 2
    }

];