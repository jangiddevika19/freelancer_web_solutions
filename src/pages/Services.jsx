import {
  Code2,
  Server,
  PenTool,
  Gauge,
  Sparkles,
  Check,
  Image as ImageIcon,
  LayoutTemplate,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";


const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, modern and responsive websites built with clean code.",
    features: [
      "React websites",
      "Responsive design",
      "Modern UI",
    ],
  },

  {
    icon: Server,
    title: "Full Stack Development",
    description:
      "Complete web applications with scalable backend solutions.",
    features: [
      "Java",
      "Spring Boot",
      "Database solutions",
    ],
  },

  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Clean interfaces designed for better user experience.",
    features: [
      "Clean interfaces",
      "User-focused designs",
      "Modern layouts",
    ],
  },

  {
    icon: Gauge,
    title: "Website Optimization",
    description:
      "Improve speed, performance and search visibility.",
    features: [
      "Performance",
      "SEO friendly websites",
      "Better UX",
    ],
  },
];


const SOCIAL_ITEMS = [
  {
    icon: FaInstagram,
    label: "Instagram Post Designs",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn Creatives",
  },
  {
    icon: FaYoutube,
    label: "YouTube Thumbnail Design",
  },
  {
    icon: LayoutTemplate,
    label: "YouTube Channel Banners",
  },
  {
    icon: ImageIcon,
    label: "Brand Templates",
  },
];


function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}) {

  return (
    <div
      className="
      group rounded-3xl border border-slate-200
      bg-white p-7
      shadow-sm
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      <div
        className="
        flex h-12 w-12 items-center justify-center
        rounded-2xl bg-sky-50
        text-sky-600
        "
      >
        <Icon size={22}/>
      </div>


      <h3
        className="
        mt-6 text-lg font-semibold
        text-slate-900
        "
      >
        {title}
      </h3>


      <p
        className="
        mt-3 text-sm leading-relaxed
        text-slate-500
        "
      >
        {description}
      </p>


      <ul
        className="
        mt-6 space-y-3
        border-t border-slate-100
        pt-5
        "
      >

        {features.map((item)=>(
          <li
            key={item}
            className="
            flex items-center gap-2
            text-sm text-slate-600
            "
          >

            <Check
              size={15}
              className="text-sky-500"
            />

            {item}

          </li>
        ))}

      </ul>


    </div>
  );
}



export default function Services(){


return (

<section
className="
relative bg-slate-50
py-24
overflow-hidden
"
>


<div
className="
absolute top-0 left-1/2
h-96 w-96
-translate-x-1/2
rounded-full
bg-sky-100
blur-3xl
opacity-60
"
/>


<div
className="
relative mx-auto
max-w-6xl
px-6
"
>


<div className="text-center">


<div
className="
inline-flex items-center gap-2
rounded-full
border border-slate-200
bg-white
px-4 py-2
text-sm text-slate-500
shadow-sm
"
>

<Sparkles
size={15}
className="text-sky-500"
/>

Services

</div>



<h2
className="
mt-6
text-4xl
font-bold
text-slate-900
"
>

Services I{" "}

<span
className="
bg-gradient-to-r
from-sky-500
to-blue-600
bg-clip-text
text-transparent
"
>
Offer
</span>

</h2>



<p
className="
mt-4
text-slate-500
"
>

I help businesses build fast,
modern and scalable digital solutions.

</p>


</div>



<div
className="
mt-14
grid
grid-cols-1
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>

{
SERVICES.map((service)=>(
<ServiceCard
key={service.title}
{...service}
/>
))
}

</div>



<div
className="
mt-8
rounded-3xl
border border-slate-200
bg-white
p-8
shadow-sm
"
>


<h3
className="
text-xl
font-semibold
text-slate-900
"
>

Social Media & YouTube Design

</h3>


<p
className="
mt-2 text-slate-500
"
>

Creative designs to grow your online presence.

</p>



<div
className="
mt-6 grid gap-4
sm:grid-cols-2
lg:grid-cols-5
"
>


{
SOCIAL_ITEMS.map(({icon:Icon,label})=>(
<div
key={label}
className="
flex items-center gap-3
rounded-xl
border border-slate-200
p-4
hover:bg-sky-50
transition
"
>

<Icon
size={22}
className="text-sky-600"
/>


<span
className="
text-sm
text-slate-600
"
>
{label}
</span>


</div>
))
}


</div>


</div>



</div>

</section>

)

}