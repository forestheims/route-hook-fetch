import useFetchWithParams from '../../hooks/useFetchWithParams';
import './CharacterDetail.css';

export default function CharacterDetail() {
  // const { _id } = useParams();
  const [loading, individual] = useFetchWithParams();
  // const [individual, setIndividual] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`
  //     );
  //     const data = await response.json();
  //     setIndividual(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [_id]);

  const { name, photoUrl, affiliation } = individual;

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h2>{name}</h2>
      <img src={photoUrl} alt={`image of ${name}`} />
      <h3>{affiliation}</h3>
    </div>
  );
}
