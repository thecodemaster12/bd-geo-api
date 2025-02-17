const divisions = [
    {
        id: 1,
        name: "Barisal",
        bengaliName: "বরিশাল",
        districts: [
            { id: 1, name: "Barguna", bengaliName: "বরগুনা" },
            { id: 2, name: "Barishal", bengaliName: "বরিশাল" },
            { id: 3, name: "Bhola", bengaliName: "ভোলা" },
            { id: 4, name: "Jhalokati", bengaliName: "ঝালকাঠি" },
            { id: 5, name: "Patuakhali", bengaliName: "পটুয়াখালী" },
            { id: 6, name: "Pirojpur", bengaliName: "পিরোজপুর" }
        ]
    },
    {
        id: 2,
        name: "Chittagong",
        bengaliName: "চট্টগ্রাম",
        districts: [
            { id: 7, name: "Bandarban", bengaliName: "বান্দরবান" },
            { id: 8, name: "Brahmanbaria", bengaliName: "ব্রাহ্মণবাড়িয়া" },
            { id: 9, name: "Chandpur", bengaliName: "চাঁদপুর" },
            { id: 10, name: "Chittagong", bengaliName: "চট্টগ্রাম" },
            { id: 11, name: "Comilla", bengaliName: "কুমিল্লা" },
            { id: 12, name: "Cox's Bazar", bengaliName: "কক্সবাজার" },
            { id: 13, name: "Feni", bengaliName: "ফেনী" },
            { id: 14, name: "Khagrachhari", bengaliName: "খাগড়াছড়ি" },
            { id: 15, name: "Lakshmipur", bengaliName: "লক্ষ্মীপুর" },
            { id: 16, name: "Noakhali", bengaliName: "নোয়াখালী" },
            { id: 17, name: "Rangamati", bengaliName: "রাঙ্গামাটি" }
        ]
    },
    {
        id: 3,
        name: "Dhaka",
        bengaliName: "ঢাকা",
        districts: [
            { id: 18, name: "Dhaka", bengaliName: "ঢাকা" },
            { id: 19, name: "Faridpur", bengaliName: "ফরিদপুর" },
            { id: 20, name: "Gazipur", bengaliName: "গাজীপুর" },
            { id: 21, name: "Gopalganj", bengaliName: "গোপালগঞ্জ" },
            { id: 22, name: "Kishoreganj", bengaliName: "কিশোরগঞ্জ" },
            { id: 23, name: "Madaripur", bengaliName: "মাদারীপুর" },
            { id: 24, name: "Manikganj", bengaliName: "মানিকগঞ্জ" },
            { id: 25, name: "Munshiganj", bengaliName: "মুন্সিগঞ্জ" },
            { id: 26, name: "Narayanganj", bengaliName: "নারায়ণগঞ্জ" },
            { id: 27, name: "Narsingdi", bengaliName: "নরসিংদী" },
            { id: 28, name: "Rajbari", bengaliName: "রাজবাড়ী" },
            { id: 29, name: "Shariatpur", bengaliName: "শরীয়তপুর" },
            { id: 30, name: "Tangail", bengaliName: "টাঙ্গাইল" }
        ]
    },
    {
        id: 4,
        name: "Khulna",
        bengaliName: "খুলনা",
        districts: [
            { id: 31, name: "Bagerhat", bengaliName: "বাগেরহাট" },
            { id: 32, name: "Chuadanga", bengaliName: "চুয়াডাঙ্গা" },
            { id: 33, name: "Jashore", bengaliName: "যশোর" },
            { id: 34, name: "Jhenaidah", bengaliName: "ঝিনাইদহ" },
            { id: 35, name: "Khulna", bengaliName: "খুলনা" },
            { id: 36, name: "Kushtia", bengaliName: "কুষ্টিয়া" },
            { id: 37, name: "Magura", bengaliName: "মাগুরা" },
            { id: 38, name: "Meherpur", bengaliName: "মেহেরপুর" },
            { id: 39, name: "Narail", bengaliName: "নড়াইল" },
            { id: 40, name: "Satkhira", bengaliName: "সাতক্ষীরা" }
        ]
    },
    {
        id: 5,
        name: "Mymensingh",
        bengaliName: "ময়মনসিংহ",
        districts: [
            { id: 41, name: "Jamalpur", bengaliName: "জামালপুর" },
            { id: 42, name: "Mymensingh", bengaliName: "ময়মনসিংহ" },
            { id: 43, name: "Netrokona", bengaliName: "নেত্রকোণা" },
            { id: 44, name: "Sherpur", bengaliName: "শেরপুর" }
        ]
    },
    {
        id: 6,
        name: "Rajshahi",
        bengaliName: "রাজশাহী",
        districts: [
            { id: 45, name: "Bogura", bengaliName: "বগুড়া" },
            { id: 46, name: "Joypurhat", bengaliName: "জয়পুরহাট" },
            { id: 47, name: "Naogaon", bengaliName: "নওগাঁ" },
            { id: 48, name: "Natore", bengaliName: "নাটোর" },
            { id: 49, name: "Chapai Nawabganj", bengaliName: "চাঁপাইনবাবগঞ্জ" },
            { id: 50, name: "Pabna", bengaliName: "পাবনা" },
            { id: 51, name: "Rajshahi", bengaliName: "রাজশাহী" },
            { id: 52, name: "Sirajganj", bengaliName: "সিরাজগঞ্জ" }
        ]
    },
    {
        id: 7,
        name: "Rangpur",
        bengaliName: "রংপুর",
        districts: [
            { id: 53, name: "Dinajpur", bengaliName: "দিনাজপুর" },
            { id: 54, name: "Gaibandha", bengaliName: "গাইবান্ধা" },
            { id: 55, name: "Kurigram", bengaliName: "কুড়িগ্রাম" },
            { id: 56, name: "Lalmonirhat", bengaliName: "লালমনিরহাট" },
            { id: 57, name: "Nilphamari", bengaliName: "নীলফামারী" },
            { id: 58, name: "Panchagarh", bengaliName: "পঞ্চগড়" },
            { id: 59, name: "Rangpur", bengaliName: "রংপুর" },
            { id: 60, name: "Thakurgaon", bengaliName: "ঠাকুরগাঁও" }
        ]
    },
    {
        id: 8,
        name: "Sylhet",
        bengaliName: "সিলেট",
        districts: [
            { id: 61, name: "Habiganj", bengaliName: "হবিগঞ্জ" },
            { id: 62, name: "Moulvibazar", bengaliName: "মৌলভীবাজার" },
            { id: 63, name: "Sunamganj", bengaliName: "সুনামগঞ্জ" },
            { id: 64, name: "Sylhet", bengaliName: "সিলেট" }
        ]
    }
];

export default divisions