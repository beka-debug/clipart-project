class HTMLWorker {
  static getSliderHtml(item,index,count) {
    return `
        <swiper-slide>
            <div class="slides" style="background-image:url('${item.imageSrc}');">
              <div class="max-w-sm rounded overflow-hidden shadow-lg card bg-white">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">${item.title}</div>
                    <h2>
                        ${item.description}
                    </h2>
                    <div class="px-6 pt-4 pb-2">
                        <div class="rounded ">${index}/${count}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>`;
  }

  static getSideCard(item){
    return `
    <div class="w-full rounded w-full overflow-hidden shadow-lg newscard">
    <img
      class="w-full"
      src="${item.imageSrc}"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        ${item.type} ${item.date}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <h3>${item.description}</h3>
    </div>
  </div>
    `;
  }

  static getMiddleCard(){
    return ``;
  }
}

class SliderItem{
    title;
    description;
    imageSrc;

    constructor(title, description, imageSrc){
        this.title = title;
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
      new SliderItem('slider 1','description 1',"./sliders/Photo1.png"),
      new SliderItem('slider 2','description 2',"./sliders/Photo2.png"),
      new SliderItem('slider 3','description 3',"./sliders/Photo3.png"),
      new SliderItem('slider 4','description 4',"./sliders/Photo4.png")
    ];
    var slider = document.querySelector("swiper-container");
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
    var newsLeft = document.querySelector(".left")
    var newsRight = document.querySelector(".right")
    newsItemsLeft.forEach(item=>{
      newsLeft.innerHTML += HTMLWorker.getSideCard(item)
      console.log(item)
    })
    newsItemsRight.forEach(item=>{
      newsRight.innerHTML += HTMLWorker.getSideCard(item)
      console.log(item)
    })
  }
}



var viewWorker = new ViewWorker();
