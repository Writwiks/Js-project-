let countdownDate = new Date("Oct 30, 2024 23:59:59").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the countdown date
  let distance = countdownDate - now;

  // Calculate total hours, minutes, and seconds
  let hours = Math.floor(distance / (1000 * 60 * 60)); // Total hours
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Trending Collection section

const Data = {
  sections: {
    trendingCollections: {
      container: ".collection",
      items: [
        {
          img: "/images/Trending-2/trending2.svg",
          thumbnails: [
            "/images/Trending-2/thumb-mush1.svg",
            "/images/Trending-2/thumb-mush2.svg",
          ],
          count: "1025+",
          title: "Magic Mushrooms",
          author: { name: "Shroomie", img: "/images/Trending-2/shroomie.svg" },
        },
        {
          img: "/images/Trending-3/trending3.svg",
          thumbnails: [
            "/images/Trending-3/disco-1.svg",
            "/images/Trending-3/disco2.svg",
          ],
          count: "1025+",
          title: "Disco Machines",
          author: { name: "BeKind2Robots", img: "/images/Trending-3/robo.svg" },
        },
      ],
    },
    topCreators: {
      container: ".creators",
      items: [
        {name: "ArtHouse",img: "/images/top-creators/c2.svg",sales: "28.50 ETH",},
        {name: "NFTKing",img: "/images/top-creators/c3.svg",sales: "26.10 ETH",},
        {name: "DigitalDreams",img: "/images/top-creators/c4.svg",sales: "22.45 ETH",},
        {name: "FutureWave",img: "/images/top-creators/c5.svg",sales: "20.33 ETH",},
        {name: "CryptoArt",img: "/images/top-creators/c6.svg",sales: "19.75 ETH",},
        {name: "PixelPerfect",img: "/images/top-creators/c7.svg",sales: "17.65 ETH",},
        {name: "MindBender",img: "/images/top-creators/c8.svg",sales: "16.80 ETH",},
        {name: "NeoVision",img: "/images/top-creators/c9.svg",sales: "15.95 ETH",},
        {name: "TechArtist",img: "/images/top-creators/c10.svg",sales: "14.30 ETH",},
        {name: "VisualBlend",img: "/images/top-creators/c11.svg",sales: "13.90 ETH",},
        {name: "Artify",img: "/images/top-creators/c12.svg",sales: "13.00 ETH",}
      ],
    },
    moreNFTs: {
      container: ".nft-cards",
      items: [
        {
          img: "/images/nfts/nft-2.svg",
          title: "Ocean Breeze",
          creator: { name: "SeaLover", img: "/images/nfts/nft-22.svg" },
          price: "2.10 ETH",
          highestBid: "0.50 wETH",
        },
        {
          img: "/images/nfts/nft-3.svg",
          title: "Mystic Forest",
          creator: { name: "TreeWhisperer", img: "/images/nfts/nft33.svg" },
          price: "3.25 ETH",
          highestBid: "1.10 wETH",
        },
      ],
    },
    howItWorks: {
      container: ".cards-how",
      items: [
        {
          img: "https://storage.googleapis.com/a1aa/image/ONzlUUVoMTodKNPpErMvjBfmHXIk6O8Gcu7eEnDubK1pClqTA.jpg",
          alt: "Illustration of a collection of images and music",
          title: "Create Collection",
          description:
            "Upload your work and setup your collection. Add a description, social links and floor price.",
        },
        {
          img: "https://storage.googleapis.com/a1aa/image/LQR6zvj3FGo5JBzSDNYKoHSDyvoE2OP9qByaLfLSOZZWhS1JA.jpg",
          alt: "Illustration of a wallet with cards",
          title: "Start Earning",
          description:
            "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
        },
      ],
    },
    browseCategories: {
      container: ".grid",
      items: [
        {img: "/images/browse-categories.svg/two.svg",iconOverlay: "/images/browse-categories.svg/two-2.svg",text: "Collectibles",alt: "Abstract Collectibles background",iconAlt: "Collectibles icon",},
        {img: "/images/browse-categories.svg/three.svg",iconOverlay: "/images/browse-categories.svg/three-3.svg",text: "Music",alt: "Abstract Music background",iconAlt: "Music icon",},
        {img: "/images/browse-categories.svg/four.svg",iconOverlay: "/images/browse-categories.svg/four-4.svg",text: "Photography",alt: "Abstract Photography background",iconAlt: "Photography icon",},
        {img: "/images/browse-categories.svg/five.svg",iconOverlay: "/images/browse-categories.svg/five-5.svg",text: "Video",alt: "Abstract Video background",iconAlt: "Video icon",},
        {img: "/images/browse-categories.svg/six.svg",iconOverlay: "/images/browse-categories.svg/six-6.svg",text: "Utility",alt: "Abstract Utility background",iconAlt: "Utility icon",},
        {img: "/images/browse-categories.svg/seven.svg",iconOverlay: "/images/browse-categories.svg/seven-7.svg",text: "Sport",alt: "Abstract Sport background",iconAlt: "Sport icon",},
        {img: "/images/browse-categories.svg/eight.svg",iconOverlay: "/images/browse-categories.svg/eight-8.svg",text: "Virtual Worlds",alt: "Abstract Virtual Worlds background",iconAlt: "Virtual Worlds icon",}
      ],
    },
  },
};

$(document).ready(function () {
  const sections = Data.sections;

  Object.keys(sections).forEach((sectionKey) => {
    const section = sections[sectionKey];
    const $container = $(section.container);

    section.items.forEach((item, index) => {
      let htmlContent = "";

      if (sectionKey === "trendingCollections") {
        htmlContent = `
                  <div class="item">
                      <img alt="${item.title}" src="${item.img}" />
                      <div class="thumbnails">
                          <img alt="Thumbnail of ${item.title}" src="${item.thumbnails[0]}" />
                          <img alt="Thumbnail of ${item.title}" src="${item.thumbnails[1]}" />
                          <div class="count">${item.count}</div>
                      </div>
                      <div class="title">${item.title}</div>
                      <div class="author">
                          <img alt="Author avatar" src="${item.author.img}" />
                          ${item.author.name}
                      </div>
                  </div>
              `;
      } else if (sectionKey === "topCreators") {
        htmlContent = `
                    <div class="creator-container">
                        <div class="creator">
                            <div class="rank">${index + 2}</div>
                            <img alt="Avatar of ${item.name}" src="${
          item.img
        }" />
                            <h3>${item.name}</h3>
                            <p>Total Sales: ${item.sales}</p>
                        </div>
                    </div>
              `;
      } else if (sectionKey === "moreNFTs") {
        htmlContent = `
                  <div class="nft-card">
                      <img alt="${item.title}" src="${item.img}" />
                      <div class="details">
                          <h3>${item.title}</h3>
                          <div class="creator-1">
                              <img alt="Profile picture of ${item.creator.name}" src="${item.creator.img}" />
                              <span>${item.creator.name}</span>
                          </div>
                          <div class="price-bid">
                              <div>
                                  <p>Price</p>
                                  <p>${item.price}</p>
                              </div>
                              <div>
                                  <p>Highest Bid</p>
                                  <p>${item.highestBid}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
      } else if (sectionKey === "howItWorks") {
        htmlContent = `
                  <div class="card-how">
                      <img alt="${item.alt}" src="${item.img}" />
                      <div class="card-title">${item.title}</div>
                      <div class="card-description">${item.description}</div>
                  </div>
              `;
      } else if (sectionKey === "browseCategories") {
        htmlContent = `
                <div class="grid-item">
                    <img src="${item.img}" alt="${item.alt}" />
                    <div class="icon-overlay">
                        <img src="${item.iconOverlay}" alt="${item.iconAlt}" />
                    </div>
                    <div class="browse-text">
                        <p>${item.text}</p>
                    </div>
                </div>
            `;
      }

      $container.append(htmlContent);
    });
  });
});
