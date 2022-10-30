import YazilimImage from './CategoryImages/yazilim.png'
import RobotikImage from './CategoryImages/robotik.png'
import GamingImage from './CategoryImages/gaming.png'
import HavadanSudanImage from './CategoryImages/havadansudan.png'
import MusicImage from './CategoryImages/music.png'



export function CategoriesData() {


    var categories = [
        {
            id: 1,
            name: "Yazılım",
            image: YazilimImage,
            description: "Bu kategori altında yazılım ile ilgili bloglar bulunacaktır.",
            subCategories: [
                {
                    id: 1,
                    Name: "C#",
                    image: ""
                },
                {
                    id: 2,
                    Name: "React",
                    image: ""
                },
                {
                    id: 3,
                    Name: "Node",
                    image: ""
                },
                {
                    id: 4,
                    Name: "Java",
                    image: ""
                },
            ]
        },
        {
            id: 2,
            name: "Robotik",
            image: RobotikImage,
            description: "Bu kategori altında robotik ile ilgili bloglar bulunacaktır.",
            subCategories: [
                {
                    id: 1,
                    Name: "Arduino",
                    image: ""
                },
                {
                    id: 2,
                    Name: "Robotino",
                    image: ""
                },
                {
                    id: 3,
                    Name: "Parts",
                    image: ""
                }
            ]
        },
        {
            id: 3,
            name: "Müzik",
            image: MusicImage,
            description: "Bu kategori altında müzik ile ilgili bloglar bulunacaktır.",
            subCategories: [
                {
                    id: 1,
                    Name: "Benim müziğim",
                    image: ""
                },
                {
                    id: 2,
                    Name: "Spotify listelerim",
                    image: ""
                },
                {
                    id: 3,
                    Name: "Youtube music listelerim",
                    image: ""
                }
            ]
        },
        {
            id: 4,
            name: "Gaming",
            image: GamingImage,
            description: "Bu kategori altında gaming hakkında bloglar bulunacaktır.",
            subCategories: [
                {
                    id: 1,
                    Name: "Instagram",
                    image: ""
                },
                {
                    id: 2,
                    Name: "Twitter",
                    image: ""
                },
                {
                    id: 3,
                    Name: "Twitch",
                    image: ""
                },
                {
                    id: 4,
                    Name: "Youtube",
                    image: ""
                },
                {
                    id: 5,
                    Name: "LinkedIn",
                    image: ""
                }
            ]
        },
        {
            id: 5,
            name: "Havadan Sudan",
            image: HavadanSudanImage,
            description: "Maksat muhabbet alanı.",
            subCategories: [
                {
                    id: 1,
                    Name: "Gezi",
                    image: ""
                },
                {
                    id: 2,
                    Name: "Sohbet",
                    image: ""
                },
                {
                    id: 3,
                    Name: "Fikir",
                    image: ""
                }
            ]
        }
    ];

    return categories;


}