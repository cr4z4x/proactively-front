import BlueHeart from '../assets/blue-heart.svg';
import RedHeart from '../assets/red-heart.svg';
import Moon from '../assets/moon.svg';
import Clock from '../assets/clock.svg';

export const pillarList = [
    'Nutrition',
    'Physical activity',
    'Restorative sleep',
    'Stress management',
    'Social connection',
    'Substance abuse'
];

export const pillarData = [
    {
        title: 'Nutrition',
        description: 'Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic diseases.',
        tagIcon: BlueHeart,
        image: '/assets/h1.png',
        tag: 'mmhg',
        tagHighlight:'121/80'
    },
    {
        title: 'Physical activity',
        description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
        image: '/assets/h2.png',
        tagIcon: RedHeart,
        tag: 'minutes',
        tagHighlight: '32'
    },
    {
        title: 'Restorative sleep',
        description: 'Consistent, quality sleep is crucial for cognitive function and physical health.',
        image: '/assets/h3.png',
        tagIcon: Moon,
        tag: 'hours',
        tagHighlight: '8'
    },
    {
        title: 'Stress management',
        description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
        image: '/assets/h4.png',
        tagIcon: BlueHeart,
        tagHighlight: '60',
        tag: 'bpm'
    },
    {
        title: 'Social connection',
        description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
        image: '/assets/h5.png',
        tagIcon: RedHeart,
        tagHighlight: 'Feeling',
        tag: 'better'
    },
    {
        title: 'Substance abuse',
        description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
        image: '/assets/h6.png',
        tagIcon: Clock,
        tagHighlight: '62',
        tag: 'days'
    }
];
