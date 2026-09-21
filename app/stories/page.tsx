const stories=[
  {title:"Historical visits",place:"Bethlehem",image:"/assets/histo.jpg"},
  {title:"Tech conferences",place:"CyberX Africa Ghana 2022 · WorldWaysOne delegates",image:"/assets/tech.jpg"},
  {title:"Academic trips & tours",place:"Daystar University · Malaysia",image:"/assets/del2.jpg"},
  {title:"Cultural exchange",place:"Daystar University · Singapore",image:"/assets/del3.jpg"},
  {title:"Professional training",place:"Bomet County Assembly team · Jewel Changi Airport",image:"/assets/Bomet.jpg"},
  {title:"Project delegations",place:"Ghana",image:"/assets/conf1.jpg"},
  {title:"International workshops",place:"Tel Aviv",image:"/assets/isra.jpg"},
  {title:"Seminars & training",place:"Learning across borders",image:"/assets/conf2.jpg"},
];
export const metadata={title:"Activities & stories"};
export default function Stories(){return <main><section className="page-heading"><p className="kicker">ACTIVITIES & STORIES</p><h1>Experience measured<br/><em>in real moments.</em></h1><p>A selection of the people, places and programs that have shaped WorldWaysOne’s work across travel, training, exchange and international collaboration.</p></section><section className="stories-grid section-pad">{stories.map((story,i)=><article key={story.title}><div><img src={story.image} alt=""/><span>0{i+1}</span></div><p>{story.title}</p><h2>{story.place}</h2></article>)}</section></main>}
