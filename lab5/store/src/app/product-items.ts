export class ProductItem {
    id: number;
    name: string;
    description: string;
    rating: string;
    kaspi: string;
    likes: number;

    constructor(id: number, name: string, description: string, rating: string, kaspi: string, likes: number) {
        this.id=id;
        this.name=name;
        this.description=description;
        this.rating=rating;
        this.kaspi=kaspi;
        this.likes=likes;
    }
}

export const products : ProductItem[] = [
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
    }
  ];