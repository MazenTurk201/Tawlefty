const resources = {
  en: {
    translation: {
      tawlefty: "Tawlefty",
      welcome: "Welcome!!",
      about: "Welcome to Tawlefty, the ultimate coffee blend calculator! Here, you can explore and create your own unique coffee blends by adjusting the proportions of different coffee types. Whether you're a coffee enthusiast or just looking to experiment with flavors, Tawlefty provides an intuitive interface to help you craft the perfect cup of coffee. Enjoy the journey of discovering new tastes and aromas as you mix and match Arabica, Robusta, Ethiopian, Colombian, Brazilian, and Yemeni beans to suit your personal preference. Start blending and savor the art of coffee making!",
      okay: "Ok",
      arabica: "Arabica",
      robusta: "Robusta",
      ethiopian: "Ethiopian",
      colombian: "Colombian",
      brazilian: "Brazilian",
      yemeni: "Yemeni",
      arabicaDesc: "Quick froth, heavy body, and a stable crema.",
      robustaDesc: "Sweet aroma, smooth taste, and bitterness breaker.",
      ethiopianDesc: "Aromatic, fruity, and fresh taste.",
      colombianDesc: "Chocolatey taste, gentle on the stomach, and well-balanced.",
      brazilianDesc: "Heavy, cohesive body, and a light cocoa taste.",
      yemeniDesc: "Rare, heavy, and aromatic.",
      arabicaInfo: "Function: This is the \"perfume\" of the blend. It provides the sweet aromas and gives you a smooth and palatable taste without being harsh on your throat.\nTaste: Rich, with a higher natural sugar content, and a distinctive mild acidity.\nWhy? To break the bitterness of Robusta and give the coffee a unique taste and aroma.",
      robustaInfo: "Function: This is the \"concrete\" of the blend. It provides a heavy body and a stable crema, and it increases the caffeine content.\nTaste: It leans towards a roasted wood or bitter nut flavor, with a sharpness.\nWhy? It's added to the blend to prevent the coffee from being \"light\" (watery) and to provide quick froth.",
      ethiopianInfo: "Function: This is a \"fruity and aromatic\" coffee of the highest quality. Ethiopia is the original home of Arabica.\nTaste: It has very distinctive notes, such as hints of rose, jasmine, dried fruits, or lemon (clear acidity).\nWhy? When added to the blend, it makes the coffee aroma fill the room and gives a very fresh and unique taste in the first sip.",
      colombianInfo: "Function: This is the \"balance\" or joker. It's one of the finest Arabica types in the world and very well-balanced.\nTaste: It has flavors of chocolate, caramel, and nuts, with a balanced acidity that isn't as pronounced as Ethiopian.\nWhy? It ties the blend together; it provides a classic, beloved taste that's gentle on the stomach and universally accepted.",
      brazilianInfo: "Function: Brazil is the largest coffee producer. Brazilian coffee is heavy, with almost no acidity, and its taste leans towards chocolate and nuts.\nWhy? It serves as the \"base\" or clean foundation for any Turkish coffee blend in Egypt, providing body and a light cocoa taste.",
      yemeniInfo: "Yemeni coffee - \"The luxurious bulldozer\"\nYemen was the first country in history to commercially export coffee to the world through the \"Mocha port\" (hence the name of the drink \"Mocha\"). Yemeni coffee is grown on very high mountain terraces under harsh conditions, which gives it characteristics not found in any other coffee:\nFunction in the blend: It provides \"depth\" and a very complex and heavy taste. While Ethiopian gives a floral and fruity aroma, Yemeni gives a dark chocolate taste, wild spices, and warm smoky wine-like hints.\nBody: Unlike most Arabica types that are light, Yemeni coffee has a very heavy body (Body) that rivals Robusta in weight, but without the sharp bitterness of Robusta.\nWhy? It's the most expensive and cleanest type of coffee you can add to a royal blend. When combined with Brazilian or Colombian, it takes the cup to another level and creates the best \"crema\" you can see for pure Arabica."
    }
  },
  ar: {
    translation: {
      tawlefty: "توليفتي",
      welcome: "مرحبًا بك!!",
      about: "مرحبًا بك في توليفتي، أداة حساب توليفات القهوة المثالية! هنا، يمكنك استكشاف وإنشاء توليفات القهوة الفريدة الخاصة بك عن طريق ضبط نسب أنواع القهوة المختلفة. سواء كنت من عشاق القهوة أو تبحث فقط عن تجربة النكهات، توفر لك توليفتي واجهة سهلة الاستخدام لمساعدتك في إعداد فنجان القهوة المثالي. استمتع برحلة اكتشاف النكهات والروائح الجديدة أثناء مزج وتوفيق حبوب الأرابيكا، الروبوستا، الحبشي، الكولومبي، البرازيلي، واليمني لتناسب تفضيلاتك الشخصية. ابدأ المزج واستمتع بفن إعداد القهوة!",
      okay: "طيب",
      arabica: "أرابيكا",
      robusta: "روبوستا",
      ethiopian: "حبشي",
      colombian: "كولومبي",
      brazilian: "برازيلي",
      yemeni: "يمني",
      arabicaDesc: "ريحة زكية، طعم ناعم، حمضية خفيفة.",
      robustaDesc: "كافيين أعلى، قوام تقيل، وش ثابت.",
      ethiopianDesc: "ريحة، عطري، طعم فريش.",
      colombianDesc: "طعم الشوكولاتة، مريح للمعدة، متوازن.",
      brazilianDesc: "تقيل، قوام متماسك، طعم ككاو خفيف.",
      yemeniDesc: "نادر، تقيل، فواح.",
      arabicaInfo: "وظيفتها: دي \"البرفان\" بتاع التوليفة. بتشم منها الروائح الحلوة، وبتديك طعم ناعم ومستساغ من غير ما يضايق زورك.\nطعمها: غني، وفيه سكر طبيعي أعلى، وحمضية خفيفة مميزة.\nعشان إيه؟ عشان تكسر مرارة الروبوستا وتخلي للقهوة طعم وريحة مميزين.",
      robustaInfo: "وظيفتها: دي \"الخرسانة\" بتاعة التوليفة. بتديك القوام الثقيل (Body) والوش اللي بيفضل ثابت، وبتعلي نسبة الكافيين للسما.\nطعمها: بيميل لطعم الخشب المحمص، أو المكسرات المرّة، وفيها حدة.\nعشان إيه؟ بتتحط في التوليفة عشان القهوة متكونش \"صايعة\" (خفيفة ومية مية) وعشان تديك فوقان سريع.",
      ethiopianInfo: "وظيفتها: ده بن \"فاكهي وعطري\" من الدرجة الأولى. إثيوبيا هي موطن الأرابيكا الأصلي.\nطعمها: مميز جداً، بتلاقي فيه إيحاءات زي الورد، الياسمين، الفواكه المجففة، أو الليمون (حمضية واضحة).\nعشان إيه؟ لما تحطه في التوليفة، بيخلي ريحة القهوة تقلب المكان، وبيديك طعم \"فريش\" ومميز جداً في أول رشفة.",
      colombianInfo: "وظيفتها: ده بن \"الميزان\" أو الجوكر. من أجود أنواع الأرابيكا في العالم ومتوازن جداً.\nطعمها: بتلاقي فيه طعم الشوكولاتة، الكراميل， والمكسرات， والحمضية بتاعته متوازنة ومش فاقعة زي الحبشي.\nعشان إيه؟ ده اللي بيربط التوليفة ببعضها؛ بيدي طعم كلاسيكي محبوب ومريح للمعدة ومبيختلفش عليه اتنين.",
      brazilianInfo: "وظيفتها: البرازيل هي أكبر منتج للبن. البن البرازيلي تقيل، حمضيته تكاد تكون منعدمة، وطعمه بيميل للشوكولاتة والمكسرات.\nعشان إيه؟ ده بيكون \"القاعدة\" أو الأساس الرخيص والنضيف لأي توليفة قهوة تركي في مصر عشان يمسك القوام ويدي طعم كاكاو خفيف.",
      yemeniInfo: "البن اليمني - \"البلدوزر الفاخر\"\nاليمن هي أول بلد في التاريخ تصدر القهوة للعالم تجارياً عن طريق \"ميناء المخا\" (ومن هنا جه اسم مشروب \"الموكا\"). البن اليمني بيتزرع على مدرجات جبلية عالية جداً وفي ظروف قاسية، وده بيدي له صفات مش موجودة في أي بن تاني:\nوظيفته في التوليفة: بيدي \"عُمق\" وطعم معقد جداً وثقيل. لو الحبشي بيدي ريحة ورد وفاكهة فاقعة， فاليمني بيدي طعم شوكولاتة دارك， وتوابل برية， وإيحاءات خمرية مدخنة دافية.\nالقوام بتاعه: على عكس معظم أنواع الأرابيكا اللي بتكون خفيفة， البن اليمني قوامه ثقيل جداً (Body) لدرجة إنه بنافس الروبوستا في التقل， بس من غير المرارة الحادة بتاعة الروبوستا.\nعشان إيه؟ ده أغلى وأنظف نوع بن ممكن تحطه في التوليفة الملوكي. لما بيتحط مع البرازيلي أو الكولومبي， بياخد الكوباية في حتة تانية خالص， وبيعمل أحلى \"وش\" ممكن تشوفه لأرابيكا صافي.",
    }
  }
};

export default resources;