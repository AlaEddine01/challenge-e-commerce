const InitialState = {
  input: "",
  ListItems: [
    {
      id: 1,
      image:
        "https://rolex.bucherer.com/img/products/listing/sky-dweller-m326935-0007-680x760.jpg",
      name: "watch",
      description:
        "La Rolex Oyster Perpetual Submariner est une montre à mouvement automatique fabriquée par Rolex",
      price: 400,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://images.sportsdirect.com/images/products/37716021_l.jpg",
      name: "teeShirt-Barça",
      description:
        "Maillot Match Nike Barça Third Griezmann 2019/20, coloris Bleu,Tissu respirant Confort maximisé Mouvements naturels,Flocage officiel.",
      price: 250,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://cdn1.jolicloset.com/img4/detail4b/2019/05/126405-1/sacs-a-main-gucci.jpg",
      name: "sac gucci",
      description: "Sac à épaule Gucci 1955 avec détail Mors",
      price: 1500,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://images.frandroid.com/wp-content/uploads/2019/04/iphone-8-plus-1.png",
      name: "phone",
      description: "iphone 8 2018 noir 128GB modèle 2018/2019",
      price: 800,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 5,
      image:
        "https://psmedia.playstation.com/is/image/psmedia/ps4-overview-screen-02-eu-06sep16?$MediaCarousel_Original$",
      name: "playstation",
      description: "Console playstation 4 noir avec 2 manettes ",
      price: 350,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 6,
      image:
        "https://contents.mediadecathlon.com/p1683148/k$f9501129707a537c5ac177bd5d4f973d/sq/BALLON+DE+BASKETBALL+NBA+ALL+STAR+SPALDING+TAILLE+7.jpg",
      name: "basketball",
      description:
        " ballon de sport de forme sphérique utilisé au basket-ball. Originellement constitué de huit pièces de cuir cousues autour d'une chambre à air,",
      price: 300,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 7,
      isInCart: false,
      image:
        "https://prodimage.images-bn.com/pimages/9780345535528_p0_v2_s1200x630.jpg",
      name: "Books",
      description: "paquet de livres de la série Game of thrones",
      price: 420,
      quantity: 1,
    },
    {
      id: 8,
      isInCart: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/615xdmxefEL._AC_SX425_.jpg",
      name: "Vélo",
      description: "Vélo classique Orbita classic H26 1 ",
      price: 250,
      quantity: 1,
    },
    {
      id: 9,
      isInCart: false,
      image:
        "https://contents.mediadecathlon.com/p1282840/k$86ed63066c1359912d847f3d0648375a/sq/Gants+de+boxe+KPOWER+100+confirm+s+noirs.jpg",
      name: "Gants de box",
      description: "paire de Gant de box anglaise Adidas",
      price: 100,
      quantity: 1,
    },
    {
      id: 10,
      isInCart: false,
      image:
        "https://image.darty.com/gros_electromenager/micro_ondes-micro_ondes/micro_ondes_compact/brandt_se2612b_noir_s0207133212858_1271145000646.jpg",
      name: "Micro Onde",
      description: "Micro ondes Brandt SE261B noir",
      price: 80,
      quantity: 1,
    },
    {
      id: 11,
      isInCart: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61%2BrPTuipLL._AC_SY450_.jpg",
      name: "Aspirateur",
      description: "Deik Aspirateur, 800W Aspirateur sans Sacs Cyclonique",
      price: 60,
      quantity: 1,
    },
    {
      id: 12,
      isInCart: false,
      image:
        "https://www.sportsystem.fr/35652-large_default/pure-drive-lite-2018.jpg",
      name: "Raquette Tennis",
      description: "raquette Babolat drive Lite 265ep",
      price: 45,
      quantity: 1,
    },
    {
      id: 13,
      isInCart: false,
      image:
        "https://www.technopro-online.com/40005/jeux-ps4-sony-fifa-20-fifa-2020.jpg",
      name: "fifa 20",
      description: "jeux de console ps4 fifa 2020",
      price: 96,
      quantity: 1,
    },
    {
      id: 14,
      isInCart: false,
      image:
        "https://vendo.ma/images/caisse-a-outils-et-rengement-vide-boite-a-outils-16-pour-ranger-vos-materiel-de-bricolage-prix-maroc-jumia-no965hl0pqnjxnafamz",
      name: "Matériel de bricolage ",
      description: "Matériel de bricolage + boite a outils",
      price: 180,
      quantity: 1,
    },
    {
      id: 15,
      isInCart: false,
      image:
        "https://www.tunisiatech.tn/3827-large_default/pc-gamer-msi-gf63-thin-9sc-897xfr.jpg",
      name: "pc Gamer",
      description: "PC Gamer MSI GF63 THIN 9SC-897XFR",
      price: 977,
      quantity: 1,
    },
    {
      id: 16,
      isInCart: false,
      image: "https://static.mytek.tn/img/p/6/6/0/4/7/66047-large_default.jpg",
      name: "Rasoire électrique",
      description: "Rasoir électrique PHILIPS AquaTouch s5420-06 Bleu",
      price: 57,
      quantity: 1,
    },
  ],
  isOpenModal: false,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        input: payload.target.value,
      };
    case "OPEN_CART_MODAL":
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        ListItems: state.ListItems.map((el) =>
          el.id === payload ? { ...el, isInCart: !el.isInCart } : el
        ),
      };
    case "INCREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity + 1,
              }
            : element
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity - 1,
              }
            : element
        ),
      };
    default:
      return state;
  }
};

export default reducer;
