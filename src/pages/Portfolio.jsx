import {
ExternalLink,
Coffee,
UtensilsCrossed,
Cookie,
Plane,
GraduationCap,
Shirt,
NotebookPen,
Sparkles,
} from "lucide-react";


const PROJECTS = [

{
icon: Shirt,
image: "/projects/clothing.png",
title: "Luxury Clothing Website",
description:
"A premium fashion e-commerce website with product showcase, shopping cart experience and modern responsive UI.",
tech:[
"React.js",
"Tailwind CSS",
"JavaScript"
],
demo:
"https://luxury-clothing-website-virid.vercel.app/",
},


{
icon: GraduationCap,
image: "/projects/school.png",
title: "EduVista School Website",
description:
"A complete school website featuring admissions, faculty section, campus tour, notices, testimonials and modern responsive design.",
tech:[
"React.js",
"Tailwind CSS",
"Framer Motion"
],
demo:
"https://edu-vista-school-website.vercel.app/",
},




// {
// icon: Sparkles,
// image: "/projects/sareeaura.png",
// title: "SareeAura Luxury Saree E-Commerce",
// description:
// "A premium luxury saree e-commerce website featuring handcrafted collections, elegant product showcases, wishlist, cart experience and modern shopping interface inspired by Indian fashion.",
// tech:[
// "React.js",
// "Tailwind CSS",
// "Framer Motion",
// "React Router"
// ],
// demo:
// "https://sareeaura-ecommerce-website.vercel.app/",
// },


{
icon: Cookie,
image: "/projects/bakery.png",
title:"Bakery Website",
description:
"A creative bakery website with attractive visuals, product sections and modern responsive design.",
tech:[
"React.js",
"Tailwind CSS"
],
demo:
"https://sweet-crumbs-ashen.vercel.app/",
},


{
icon: Plane,
image:"/projects/travel.png",
title:"Travel Website",
description:
"A modern travel website with destination sections, engaging layouts and responsive user experience.",
tech:[
"React.js",
"Tailwind CSS"
],
demo:
"https://nomad-horizon-seven.vercel.app/",
},


{
icon: UtensilsCrossed,
image:"/projects/restaurant.png",
title:"Restaurant Website",
description:
"A premium restaurant website featuring beautiful sections, menu presentation and responsive design.",
tech:[
"React.js",
"Tailwind CSS"
],
demo:
"https://aurelia-restaurant-psi.vercel.app/",
},


{
icon: Coffee,
image:"/projects/coffee.png",
title:"Coffee Shop Website",
description:
"A modern coffee shop website with elegant UI, product showcase and smooth user experience.",
tech:[
"React.js",
"Tailwind CSS",
"JavaScript"
],
demo:
"https://ember-coffee-delta.vercel.app/",
},


{
icon: NotebookPen,
image:"/projects/stationery.png",
title:"PaperNest Stationery Website",
description:
"A premium stationery e-commerce website featuring notebooks, planners, office supplies and modern shopping experience.",
tech:[
"React.js",
"Tailwind CSS",
"Framer Motion"
],
demo:
"https://papernest-stationery-website.vercel.app/",
},

{
icon: Sparkles,
image: "/projects/sareeaura.png",
title: "SareeAura Luxury Saree E-Commerce",
description:
"A premium luxury saree e-commerce website featuring handcrafted collections, elegant product showcases, wishlist, cart experience and modern shopping interface inspired by Indian fashion.",
tech:[
"React.js",
"Tailwind CSS",
"Framer Motion",
"React Router"
],
demo:
"https://sareeaura-ecommerce-website.vercel.app/",
},

];


function ProjectCard({
  image,
  title,
  description,
  tech,
  demo
}) {


return (

<div
className="
group
flex
h-full
flex-col
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
shadow-[0_2px_10px_rgba(15,23,42,0.04)]
transition-all
duration-300
hover:-translate-y-1.5
hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]
"
>


{/* Image */}

<div
className="
relative
w-full
aspect-[16/9]
overflow-hidden
bg-slate-100
"
>

<img
src={image}
alt={title}
loading="lazy"
className="
h-full
w-full
object-cover
transition-transform
duration-500
group-hover:scale-105
"
/>

</div>
      {/* Content */}

      <div
        className="
        flex
        flex-1
        flex-col
        p-6
        "
      >


        <h3
          className="
          text-base
          font-semibold
          tracking-tight
          text-slate-900
          "
        >
          {title}
        </h3>



        <p
          className="
          mt-2
          text-sm
          leading-relaxed
          text-slate-500
          "
        >
          {description}
        </p>



        {/* Tech */}

        <div
          className="
          mt-4
          flex
          flex-wrap
          gap-2
          "
        >

          {tech.map((item)=>(

            <span
              key={item}
              className="
              rounded-full
              bg-sky-50
              px-3
              py-1
              text-[11px]
              font-medium
              text-sky-700
              ring-1
              ring-sky-100
              "
            >

              {item}

            </span>

          ))}

        </div>




        {/* Button */}

        <div
          className="
          mt-6
          border-t
          border-slate-100
          pt-5
          "
        >

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-slate-900
            px-4
            py-2.5
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-slate-800
            "
          >

            View Live Website


            <ExternalLink
              className="
              h-3.5
              w-3.5
              "
            />


          </a>


        </div>


      </div>


    </div>

  );

}







export default function Portfolio(){

return (

<section

className="
relative
w-full
overflow-hidden
bg-white
py-24
sm:py-28
"

>


<div

className="
mx-auto
w-full
max-w-6xl
px-6
"

>


{/* Heading */}


<div

className="
mx-auto
max-w-2xl
text-center
"

>


<span

className="
inline-flex
rounded-full
border
border-slate-200
bg-white
px-4
py-1.5
text-xs
font-medium
text-slate-500
shadow-sm
"

>

Portfolio

</span>




<h2

className="
mt-5
text-3xl
font-semibold
text-slate-900
sm:text-4xl
"

>

Featured{" "}

<span

className="
bg-gradient-to-r
from-sky-500
to-sky-700
bg-clip-text
text-transparent
"

>

Projects

</span>


</h2>




<p

className="
mt-4
text-base
text-slate-500
"

>

A collection of modern websites and digital experiences designed and developed with clean code.

</p>



</div>







{/* Cards */}


<div

className="
mt-16
grid
grid-cols-1
gap-6
sm:grid-cols-2
"

>


{

PROJECTS.map((project)=>(


<ProjectCard

key={project.title}

{...project}

/>


))

}


</div>



</div>


</section>


)

}