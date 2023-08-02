import React from "react";

const Creations = () => {


    const data=[

        {
            name:'deep earth',
            laptoppath:'./images/desktop/image-deep-earth.jpg',
            mobilepath:'./images/mobile/image-deep-earth.jpg',
        },

        {
            name:'night arcade',
            laptoppath:'./images/desktop/image-night-arcade.jpg',
            mobilepath:'./images/mobile/image-night-arcade.jpg',
        },

        {
            name:'soccer team vr',
            laptoppath:'./images/desktop/image-soccer-team.jpg',
            mobilepath:'./images/mobile/image-soccer-team.jpg',
        },

        {
            name:'the grid',
            laptoppath:'./images/desktop/image-grid.jpg',
            mobilepath:'./images/mobile/image-grid.jpg',
        },


        {
            name:'from up above vr',
            laptoppath:'./images/desktop/image-from-above.jpg',
            mobilepath:'./images/mobile/image-from-above.jpg',
        },


        {
            name:'pocket borealias',
            laptoppath:'./images/desktop/image-pocket-borealis.jpg',
            mobilepath:'./images/mobile/image-pocket-borealis.jpg',
        },


        {
            name:'the curiosity',
            laptoppath:'./images/desktop/image-curiosity.jpg',
            mobilepath:'./images/mobile/image-curiosity.jpg',
        },


        {
            name:'make it fisheye',
            laptoppath:'./images/desktop/image-fisheye.jpg',
            mobilepath:'./images/mobile/image-fisheye.jpg',
        },



    ]




  return (
    <div className="mt-20 container mx-auto px-6 md:px-0 ">


      <div className="flex uppercase text-center justify-center items-center text-4xl font-alata py-5 md:px-6 md:justify-between">
        <div>our creations</div>

        <div className="hidden uppercase md:block  ">
          <button className="uppercase px-10 py-2 font-alata border-2 border-gray-800 text-lg hover:bg-black hover:text-white">
            see all
          </button>
        </div>
      </div>

{/* items */}

<div className=" container mx-auto flex flex-col  mb-32 space-y-5 mt-10 md:flex-row md:space-y-0   md:flex-wrap ">


{/* items1 */}
{
    data.map((values)=>{

        return (

            <div className="group relative container flex flex-col justify-center items-center md:w-1/4 md:my-3 md:space-x-3 xl:space-x-0">

            <div className=" md:hidden"> 
    
            <img src={values.mobilepath} className="w-full" alt="earth" />
    
            </div>
    
            <div className="hidden md:block max-w-full bg-red-900"> 
    
    <img src={values.laptoppath}   alt="earth" />
    
          </div>

         
    
            <div className=" absolute uppercase max-w-xs text-white text-xl text-start left-4 bottom-8 md:left-8 w-[100px] md:text-xl" >
                {values.name}
            </div>
    
        </div>
        )
    })
}

  

    
{/* items 2 */}








</div>


    </div>
  );
};

export default Creations;
