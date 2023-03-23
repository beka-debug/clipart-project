class HTMLWorker {
  static getSliderHtml(item,index,count) {
    return `
        <swiper-slide>
            <div class="slides" style="background-image:url('${item.imageSrc}');">
              <div class=" rounded overflow-hidden shadow-lg slider-card bg-white">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2"><span class="slider-title">${item.title}</span> <span class="slider-date">${item.date}</span></div>
                    <h2 class="slider-description">
                        ${item.description}
                    </h2>
                    <div class=" pt-4 pb-2">
                        <div class="rounded index-count">${index}/${count}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>`;
  }

  static getSideCard(item){
    return `
    <div class=" w-full overflow-hidden shadow-lg side-card">
    <img
      class="w-full news-card-img"
      src="${item.imageSrc}"
      alt="Sunset in the mountains"
    />
    <div class="px-3 pt-4">
      <p class="news-card-text">
        ${item.type} ${item.date}
      </p>
    </div>
    <div class="px-3">
      <h3 class="news-card-description">${item.description}</h3>
    </div>
  </div>
    `;
  }

  static getMiddleCard(){
    return `
    <div class="w-full rounded overflow-hidden shadow-lg middle-news-card">
    <img
      class="w-full"
      src="./Sliders/Photo1.png"
      alt="Sunset in the mountains"
    />
    <div class="py-8 px-4 ">
      <h2 class="font-bold text-xl mb-2 middle-news-text" >ჩრდილოეთ კორეამ აშშ-სა და სამხრეთ კორეის წინააღმდეგ იმიტირებული ბირთვული კონტრშეტევა დაიწყო</h2>
    </div>
    <div class="flex justify-between px-4">
       <h3 class="middle-news-h3">ახალი ამბები</h3>
       <p class="middle-news-p">18.04.2023</p>
    </div>
  </div>
    `;
  }
}

class SliderItem{
    title;
    date;
    description;
    imageSrc;

    constructor(title,date, description, imageSrc){
        this.title = title;
        this.date = date;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

class CardItem {
    type;
    date;
    description;
    imageSrc;

    constructor(type,date, description, imageSrc){
        this.type = type;
        this.date = date;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

class ViewWorker {
  constructor() {
    this.renderSliderItems();
    this.renderCardItems()
  }

  renderSliderItems() {
    var sliderImages = [
      new SliderItem('პოლიტიკა','18.04.2022', "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების სამელიორაციო ინფრასტრუქტურული პროექტები დაიწყება", "./sliders/Photo1.png"),
      new SliderItem('პოლიტიკა','18.04.2022', "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების სამელიორაციო ინფრასტრუქტურული პროექტები დაიწყება", "./sliders/Photo2.png"),
      new SliderItem('პოლიტიკა','18.04.2022', "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების სამელიორაციო ინფრასტრუქტურული პროექტები დაიწყება", "./sliders/Photo3.png"),
      new SliderItem('პოლიტიკა','18.04.2022', "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების სამელიორაციო ინფრასტრუქტურული პროექტები დაიწყება", "./sliders/Photo4.png"),
    ];
    var slider = document.querySelector(".swiper-wrapper");
    sliderImages.forEach((item,index) => {
      slider.innerHTML += HTMLWorker.getSliderHtml(item,index+1,sliderImages.length);
    });
  }

  renderCardItems(){
    var newsItemsLeft = [
      new CardItem("პოლიტიკა","18.04.2023","კიმ ჩენ ინი აშშ-სა და სამხრეთ კორეას ბირთვული იარაღით ემუქრება","./News/Photo1.png"),
      new CardItem("პოლიტიკა","18.04.2023","კიმ ჩენ ინი აშშ-სა და სამხრეთ კორეას ბირთვული იარაღით ემუქრება","./News/Photo2.png")
    ]
    var newsItemsRight = [
      new CardItem("პოლიტიკა","18.04.2023","კიმ ჩენ ინი აშშ-სა და სამხრეთ კორეას ბირთვული იარაღით ემუქრება","./News/Photo3.png"),
      new CardItem("პოლიტიკა","18.04.2023","კიმ ჩენ ინი აშშ-სა და სამხრეთ კორეას ბირთვული იარაღით ემუქრება","./News/Photo4.png")
    ]
    var midItem = new CardItem("პოლიტიკა","18.04.2023","კიმ ჩენ ინი აშშ-სა და სამხრეთ კორეას ბირთვული იარაღით ემუქრება","./News/Photo5.png")
    
    var newsLeft = document.querySelector(".left")
    var newsRight = document.querySelector(".right")
    var mid = document.querySelector(".middle")
    newsItemsLeft.forEach(item=>{
      newsLeft.innerHTML += HTMLWorker.getSideCard(item)
      console.log(item)
    })
    newsItemsRight.forEach(item=>{
      newsRight.innerHTML += HTMLWorker.getSideCard(item)
      console.log(item)
    })
    mid.innerHTML += HTMLWorker.getMiddleCard(midItem)
  }
}



var viewWorker = new ViewWorker();
