import PropTypes from "prop-types";

const iuAlbum = [
  {
    id : 1,
    name : "CHAT-SHIRE",
    pic :
    "https://w.namu.la/s/ba74394dd925f6796946150182126155870c0fb44df3dd305fe6a501ae3990e3b341b09f5a1943c9144feaeaea6e8653624dbe1b182b394abe7bb13c7c7063649a3904e9d1867242e034364b0b71805c68699f664a4444b39d976fe9f9ef0dde0daf98574578ef9985c2466aba88a2ca",
    rating : 5.0
  },
  {
    id : 2,
    name : "Palette",
    pic : 
    "https://w.namu.la/s/3491cf016c587cd072a70d541efa1af357aaaaf5335816ffdd3cceeca584fb00ff91dee3b3b991c280f4394e8dd0caa0e1e889f6160b3a710eea7c6233e06924faf57b1675a93ea830802ddc2ba7c5f8ab5bde05034caf1da28ee40426243cff0667a031427f450cf7cdec31c2594c41",
    rating : 4.9
  },
  {
    id : 3,
    name : "Love poem",
    pic : 
    "https://w.namu.la/s/62e7e3618337637710cbed6afe10bfac3089de1948d589777bdfbcccc54e9ab65faee0ebf2c34fe1bfd1195956c26da36919ec560c6bf52e9de51f744345bff18c592fe6e387360b7aca960ef782bafc7b46f9919fd9a91755cfc4e98ec4e94294759a282a6de0768b4c73a1ec51c532",
    rating : 5.0
  },
  {
    id : 4,
    name : "LILAC",
    pic : 
      "https://w.namu.la/s/401e9027b2358a2cdb2eaf9f7ddc8186704741fcb5a0c3c065b48b450cb2bbbb8c92b48df677febaab0befd0fa9ec6f6720173834b6bf4727c677a9f4a9775eb5bc5c86ccdfac837df3ff8ad6d3d6c3f693adcc3ad0407f760924945d23d758873da777d36c3c8a8a0fa6281b77d8bd6",
    rating : 4.8
  }
];

function IU({name, picture, rating}){
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  ) ;
}

IU.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {iuAlbum.map(iu => (
          <IU key={iu.id} name={iu.name} picture={iu.pic} rating={iu.rating}/>
        ))}
    </div>
  );
}

export default App;
