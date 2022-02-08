import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useFetchWithParams() {
  const { _id } = useParams();
  const [individual, setIndividual] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`
      );
      const data = await response.json();
      setIndividual(data);
      setLoading(false);
    };
    fetchData();
  }, [_id]);

  return [loading, individual];
}
