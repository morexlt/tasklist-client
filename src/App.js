import Task from './components/task';

function App() {
  const tasks = [
    {
        "_id": "604930de0a01ed13baf2623a",
        "title": "Tumeric gentrify godard, waistcoat man braid fanny pack williamsburg tattooed wolf raclette palo santo gochujang typewriter cronut",
        "done": false,
        "uuid": "8e320c3f-0d31-4f28-832d-9a2c5c7444af"
    },
    {
        "_id": "604930de0a01ed13baf2623b",
        "title": "Neutra hot chicken meggings tbh, viral tumeric raw denim",
        "done": false,
        "uuid": "f27c5cc0-8842-4365-8725-6d9b29eae3f3"
    },
    {
        "_id": "604930de0a01ed13baf2623c",
        "title": "Gochujang gastropub stumptown, craft beer direct trade affogato yuccie mumblecore lomo mustache readymade hammock vinyl.",
        "done": false,
        "uuid": "4ceef05d-601a-4cab-abb7-c4dc5aac968d"
    },
    {
        "title": "Fanny pack schlitz pabst ugh try-hard swag pok pok artisan four loko williamsburg",
        "done": false,
        "uuid": "28948c07-cead-4963-9429-c9911b7517fe",
        "_id": "60494b081eae7e1870ab9ee6"
    },
    {
        "title": "Semiotics kogi mlkshk activated charcoal 3 wolf moon, cloud bread squid blog mixtape bicycle rights chillwave whatever",
        "done": false,
        "uuid": "6bf09d5a-c940-449d-b110-beb1ac98bead",
        "_id": "60494b081eae7e1870ab9ee7"
    },
    {
        "title": "Affogato listicle truffaut, gentrify migas roof party subway tile keffiyeh pour-over snackwave microdosing",
        "done": false,
        "uuid": "53aea56e-7e97-4141-8b01-6424ab97db97",
        "_id": "60494b081eae7e1870ab9ee8"
    },
    {
        "title": "Kinfolk locavore offal, synth bicycle rights echo park typewriter street art tumblr",
        "done": false,
        "uuid": "48ef84fb-8290-4ef6-9948-1bfedb98028c",
        "_id": "60494b081eae7e1870ab9ee9"
    },
    {
        "title": "Master cleanse austin bitters trust fund hell of",
        "done": false,
        "uuid": "bb8d0cf5-739f-4a54-87f6-afe5d6098c2e",
        "_id": "60494b081eae7e1870ab9eea"
    },
    {
        "title": "Vexillologist shabby chic direct trade, vinyl green juice bitters hashtag street art chia PBR&B lyft",
        "done": false,
        "uuid": "d5dfed58-b90c-4cc3-8b7d-19b6434221f0",
        "_id": "60494b081eae7e1870ab9eeb"
    },
    {
        "title": "Brooklyn crucifix cardigan, edison bulb tattooed gluten-free offal street art fashion axe chartreuse microdosing asymmetrical fam poutine.",
        "done": false,
        "uuid": "d385ad60-d6a6-465a-a2bc-935d0445de99",
        "_id": "60494b081eae7e1870ab9eec"
    }
]
  return (
    <div className="App">
      <div className="lg:container lg:mx-auto bg-white p-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          {tasks.map((task) => (
            <Task
              key={task.uuid}
              task={task}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
