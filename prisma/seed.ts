import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.authorizedPointOfSale.createMany({
        data: [
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الرازي',
                description: 'صيدلية الرازي تقدم مجموعة متنوعة من الأدوية والمستلزمات الطبية.',
                location: 'Amman, Jordan',
                branches: 3,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الحكمة',
                description: 'صالون الحكمة يقدم خدمات العناية بالشعر والبشرة.',
                location: 'Irbid, Jordan',
                branches: 2,
                category: 'Salon'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر الشفاء',
                description: 'متجر الشفاء يوفر مستحضرات التجميل بأسعار منافسة.',
                location: 'Zarqa, Jordan',
                branches: 4,
                category: 'Beauty Shop'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صيدلية الحياة',
                description: 'صيدلية الحياة لديها فريق من الخبراء لخدمتك.',
                location: 'Aqaba, Jordan',
                branches: 1,
                category: 'Pharmacy'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'متجر المستقبل الإلكتروني',
                description: 'متجر المستقبل الإلكتروني يقدم أحدث مستحضرات التجميل.',
                location: 'Madaba, Jordan',
                branches: 2,
                category: 'Online Store'
            },
            {
                logo: 'assets/poslogo/testauth.png',
                name: 'صالون الفاروق',
                description: 'صالون الفاروق معروفة بخدماتها المتميزة في التجميل.',
                location: 'Jerash, Jordan',
                branches: 5,
                category: 'Salon'
            }
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
