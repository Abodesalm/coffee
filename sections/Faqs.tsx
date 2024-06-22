import Collapse from "@/components/Collapse";


export default function Faqs() {
  return (
    <div className="pad min-h-[500px] flex flex-col items-center gap-6 lg:mt-12" id="faqs">
      <h2 className="lg:text-[34px]">Common Customer Questions</h2>
      <Collapse title={'how do i set up an office coffee station ?'} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum reprehenderit fugit quidem. Ratione explicabo harum magni fuga earum mollitia quo. Illo distinctio esse eveniet expedita officiis est ab corrupti temporibus molestias vel? Facere asperiores, accusamus reiciendis, nulla natus iure dignissimos impedit quis, delectus nemo quia explicabo in modi voluptatibus?"}/>
      <Collapse title={'what flavors should i get ?'} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum reprehenderit fugit quidem. Ratione explicabo harum magni fuga earum mollitia quo. Illo distinctio esse eveniet expedita officiis est ab corrupti temporibus molestias vel? Facere asperiores, accusamus reiciendis, nulla natus iure dignissimos impedit quis, delectus nemo quia explicabo in modi voluptatibus?"}/>
      <Collapse title={'how can i improve office coffee ?'} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum reprehenderit fugit quidem. Ratione explicabo harum magni fuga earum mollitia quo. Illo distinctio esse eveniet expedita officiis est ab corrupti temporibus molestias vel? Facere asperiores, accusamus reiciendis, nulla natus iure dignissimos impedit quis, delectus nemo quia explicabo in modi voluptatibus?"}/>
      <Collapse title={'how do coffee machines work in an office ?'} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum reprehenderit fugit quidem. Ratione explicabo harum magni fuga earum mollitia quo. Illo distinctio esse eveniet expedita officiis est ab corrupti temporibus molestias vel? Facere asperiores, accusamus reiciendis, nulla natus iure dignissimos impedit quis, delectus nemo quia explicabo in modi voluptatibus?"}/>
      <Collapse title={'how much does an office coffee machine cost ?'} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum reprehenderit fugit quidem. Ratione explicabo harum magni fuga earum mollitia quo. Illo distinctio esse eveniet expedita officiis est ab corrupti temporibus molestias vel? Facere asperiores, accusamus reiciendis, nulla natus iure dignissimos impedit quis, delectus nemo quia explicabo in modi voluptatibus?"}/>
    </div>
  )
}
