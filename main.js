/*
 * Nikolay Bondar's Dribble shot
 * https://dribbble.com/shots/11746571-Jack-Daniels
 */

const initialItems = [
    {
      id: 0,
      bottleImage: "https://assets.codepen.io/3685267/jack-daniels-b1.png",
      name: ["Old No. 7"],
      title: ["charcoal mellowed.", "drop by drop"],
      description: `Mellowed drop by drop through 10-feet of sugar maple charcol, then matured in handcrafted barrels of our own making, And our Tennesse Whiskey doesn't follow a calendar. It's only ready when our tasters say it is`,
      video: "https://assets.codepen.io/3685267/jack-daniels-v1.jpg"
    },
    {
      id: 1,
      bottleImage: "https://assets.codepen.io/3685267/jack-daniels-b2.png",
      name: ["tennessee", "rye"],
      title: ["rye whiskey.", "jack's way."],
      description: `Introducing rye whiskey made Jack's way. Crafted with ouur 70-precent rye grain bill, natural spring water from our own Cave Spring Hollow, and Jack's time-honored charcoal mellowing process, Jack Daniel's Tennessee Rye is a whiskey that could only come from Lynchburg, Tennessee.`,
      video: "https://assets.codepen.io/3685267/jack-daniels-v2.jpg"
    },
    {
      id: 2,
      bottleImage: "https://assets.codepen.io/3685267/jack-daniels-b3.png",
      name: ["tennessee", "fire"],
      title: ["warm cinnamon.", "exceptionally smooth."],
      description: `Sometimes, mixing fire and whiskey is a good thing. Our Tennessee Fire blends warm cinnamon liqueur with the bold character of Jack Daniel's Old No. 7 for a classic spirit with a surprisingly smooth finish`,
      video: "https://assets.codepen.io/3685267/jack-daniels-v3.jpg"
    }
  ];
  
  var app = new Vue({
    el: "#app",
    data: {
      clsStatic: ["a", "b"],
      clsArray: ["a", "b"],
      bucket: initialItems,
      items: {
        a: initialItems[initialItems.length - 2],
        b: initialItems[initialItems.length - 1]
      }
    },
    methods: {
      tick: function () {
        const [a, b] = this.clsArray;
        const tl = gsap.timeline({
          onComplete: () => {
            const [first, ...rest] = this.bucket;
            this.items[a] = first;
            this.bucket = [...rest, first];
            this.clsArray = [b, a];
            this.tick();
          }
        });
        tl.to(`.bottle-name-${a}`, { x: "-100vw", duration: 2 });
        tl.to(`.bottle-name-${a}`, { x: "100vw", duration: 0 });
        tl.to(`.bottle-name-${b}`, { x: "0vw", duration: 2 }, 0);
  
        tl.to(
          `.description-container-${a}`,
          { x: "-10vw", duration: 1, opacity: 0 },
          0
        );
        tl.to(`.description-container-${a}`, { x: "10vw", duration: 0 });
        tl.to(
          `.description-container-${b}`,
          { x: "0vw", duration: 1, opacity: 1 },
          1
        );
  
        tl.to(`.back-text-actual-${a}`, { y: "200vh", duration: 2 }, 0);
        tl.to(`.back-text-actual-${a}`, { y: "-200vh", duration: 0 });
        tl.to(`.back-text-actual-${b}`, { y: "0vh", duration: 2 }, 0);
  
        tl.to(
          `.bottle-${a}`,
          { rotation: "-=180", duration: 2, transformOrigin: "50% bottom" },
          0
        );
        tl.to(
          `.bottle-${b}`,
          { rotation: "-=180", duration: 2, transformOrigin: "50% bottom" },
          0
        );
        tl.set({}, {}, "+=1");
      }
    },
    mounted: function () {
      gsap.to(".bottle-name-b", { x: "100vw", duration: 0 });
      gsap.to(".description-container-b", { x: "10vw", duration: 0, opacity: 0 });
      gsap.to(".back-text-actual-b", { y: "-200vh", duration: 0 });
      gsap.to(".bottle-b", {
        rotation: 195,
        duration: 0,
        transformOrigin: "50% bottom"
      });
      gsap.to(".bottle-a", {
        rotation: 15,
        duration: 0,
        transformOrigin: "50% bottom"
      });
  
      gsap.to({}, { duration: 1.5, onComplete: this.tick });
    }
  });
  