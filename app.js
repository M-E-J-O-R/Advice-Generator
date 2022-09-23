$(function () {

   $(".dice").on('click', adviceGetter);
   advice = async () => {
      res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
         console.log("Kindly bear with us we are going throgh maintainance at the moment");
      } else {
         data = await res.json();

         return data;
      }


   };
   adviceGetter();
   function adviceGetter() {
      advice().then(data => {
         $("#adv-id").text(`#${data.slip.id}`);
         $(".advicee-text").text(`${data.slip.advice}`);
         console.log(data.slip.advice)
        

      }).catch(rejected => {
         console.log("This action was rejected ", rejected);
      });

   }

});
